import AWS from 'aws-sdk';

AWS.config.update({
    region:  process.env.AWS_REGION, // Replace with your region
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Add to .env
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY // Add to .env
});

export const dynamoDB = new AWS.DynamoDB.DocumentClient();
