import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { 
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  UpdateCommand 
} from "@aws-sdk/lib-dynamodb";

class DynamoDBService {  
  constructor() {
    // Create the base DynamoDB client
    const client = new DynamoDBClient({
      region: process.env.AWS_REGION || 'eu-north-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      }
    });

    this.docClient = DynamoDBDocumentClient.from(client);
  }

  async get(params) {
    try {
      const command = new GetCommand(params);
      return await this.docClient.send(command);
    } catch (error) {
      throw new Error(`DynamoDB Get Error: ${error.message}`);
    }
  }

  async put(params) {
    try {
      const command = new PutCommand(params);
      console.log('Params:', params);

      const data = await this.docClient.send(command);
      console.log('DynamoDB Put Response:', data); // Log the response
      return data;
    } catch (error) {
      console.error('DynamoDB Put Error:', error); // Log the full error
      throw new Error(`DynamoDB Put Error: ${error.message}`);
    }
  }
  

  async update(params) {
    try {
      const command = new UpdateCommand(params);
      return await this.docClient.send(command);
    } catch (error) {
      throw new Error(`DynamoDB Update Error: ${error.message}`);
    }
  }
}

export default new DynamoDBService();