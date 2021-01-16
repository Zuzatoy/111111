# aws-lambda-todo

service: audio-process
```
provider:
  name: aws
  runtime: nodejs12.x
  region: ap-southeast-2
  stage: dev

  environment:
    S3_INPUT_BUCKET_NAME: lctestbucket
    S3_OUTPUT_BUCKET_NAME: lctestbucket

    S3_INPUT_BUCKET_NAME_PROD: lctestbucketprod
    S3_OUTPUT_BUCKET_NAME_PROD: lctestbucketprod

  iamRoleStatements:
    - Effect: Allow
      Action:
        - s3:ListBucket
      Resource: arn:aws:s3:::lctestbucket
    - Effect: Allow
      Action:
        - s3:GetObject
        - s3:PutObject
      Resource: arn:aws:s3:::lctestbucket/*

  package:
    exclude:
      - ./*
    include:
      - layers

functions:
  transcodeToMp3:
    handler: src/handler.transcodeToMp3
    timeout: 180
    memorySize: 2048
    description: Trigger Lambda with ID
    events:
      - http:
          path: combineAudio
          method: post
          cors: true
    layers:
      arn:aws:lambda:ap-southeast-2:211927277291:layer:ffmpeg:3
```
