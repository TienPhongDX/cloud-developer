require('dotenv').config();

export const config = {
  "dev": {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": "udagramphongdev",
    "host": "udagramphongdev.ci4o15xd5c6o.ap-southeast-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": "s3-udagram-phong"
  },
  "jwt": {
    "secret": "hello"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
