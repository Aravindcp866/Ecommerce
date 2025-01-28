import DynamoDBClient from '@/lib/db/DynamoDBClient';
import PasswordService from '@/lib/auth/PasswordService';
import TokenService from '@/lib/auth/TokenService';

class AuthService {
  async registerUser(email, password) {
    const hashedPassword = await PasswordService.hashPassword(password);

    const params = {
      TableName: 'Users',
      Item: {
        UserId: Date.now().toString(),
        Email: email,
        PasswordHash: hashedPassword,
        RefreshToken: null,
      },
    };

    await DynamoDBClient.put(params);
    return { message: 'User registered successfully' };
  }

  async loginUser(email, password) {
    const params = {
      TableName: 'Users',
      Key: { Email: email },
    };

    const data = await DynamoDBClient.get(params);
    if (!data.Item) throw new Error('User not found');

    const isPasswordValid = await PasswordService.validatePassword(password, data.Item.PasswordHash);
    if (!isPasswordValid) throw new Error('Invalid credentials');

    const accessToken = TokenService.generateAccessToken({ userId: data.Item.UserId, email });
    const refreshToken = TokenService.generateRefreshToken({ userId: data.Item.UserId });

    // Update Refresh Token in DynamoDB
    const updateParams = {
      TableName: 'Users',
      Key: { Email: email },
      UpdateExpression: 'SET RefreshToken = :refreshToken',
      ExpressionAttributeValues: { ':refreshToken': refreshToken },
    };

    await DynamoDBClient.update(updateParams);
    return { accessToken, refreshToken };
  }

  async refreshToken(oldRefreshToken) {
    const payload = TokenService.verifyRefreshToken(oldRefreshToken);

    const params = {
      TableName: 'Users',
      Key: { UserId: payload.userId },
    };

    const data = await DynamoDBClient.get(params);
    if (!data.Item || data.Item.RefreshToken !== oldRefreshToken) {
      throw new Error('Invalid refresh token');
    }

    const newAccessToken = TokenService.generateAccessToken({ userId: payload.userId });
    const newRefreshToken = TokenService.generateRefreshToken({ userId: payload.userId });

    // Update new Refresh Token in DynamoDB
    const updateParams = {
      TableName: 'Users',
      Key: { UserId: payload.userId },
      UpdateExpression: 'SET RefreshToken = :refreshToken',
      ExpressionAttributeValues: { ':refreshToken': newRefreshToken },
    };

    await DynamoDBClient.update(updateParams);
    return { accessToken: newAccessToken, refreshToken: newRefreshToken };
  }
}

export default new AuthService();
