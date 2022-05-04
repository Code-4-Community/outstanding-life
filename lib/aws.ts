import AWS from 'aws-sdk';


const {AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY} = process.env
const AWS_REGION = 'us-east-2'
const BUCKET_NAME = 'baseBucket'

AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: AWS_REGION
})

export const S3Bucket = new AWS.S3({params: {Bucket: BUCKET_NAME}})