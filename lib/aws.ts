import AWS, { AWSError } from 'aws-sdk';
import { BadRequestError } from './utils/errors/badRequestError';

const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } = process.env;
const AWS_REGION = 'us-east-2';
export const BUCKET_NAME = 'c4c-outstanding-life';

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: AWS_REGION,
});

export const S3Bucket = new AWS.S3({ params: { Bucket: BUCKET_NAME } });

export async function uploadToS3(
  key: string,
  body: Buffer,
  contentEnconding: string,
  contentType: string,
) {
  const data = {
    Key: key,
    Body: body,
    ContentEncoding: contentEnconding,
    ContentType: contentType,
    Bucket: BUCKET_NAME,
  };
  await S3Bucket.putObject(data, (err: AWSError) => {
    if (err) throw new BadRequestError(err.message);
  });
}
