import AWS from 'aws-sdk';

class DynamoDBClient {
  constructor() {
    this.dynamoDB = new AWS.DynamoDB.DocumentClient({
      region: process.env.AWS_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
  }

  async get(params) {
    try {
      return await this.dynamoDB.get(params).promise();
    } catch (error) {
      throw new Error(`DynamoDB Get Error: ${error.message}`);
    }
  }

  async put(params) {
    try {
      return await this.dynamoDB.put(params).promise();
    } catch (error) {
      throw new Error(`DynamoDB Put Error: ${error.message}`);
    }
  }

  async update(params) {
    try {
      return await this.dynamoDB.update(params).promise();
    } catch (error) {
      throw new Error(`DynamoDB Update Error: ${error.message}`);
    }
  }
}

export default new DynamoDBClient();
