import bcrypt from 'bcrypt';

class PasswordService {
  async hashPassword(password) {
    const saltRounds = 10; // Must be a number
    return await bcrypt.hash(password, saltRounds);
  }

  async validatePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
  }
}

export default new PasswordService();
