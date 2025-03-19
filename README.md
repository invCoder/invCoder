# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

CLI setup 
For macOS (Using Homebrew):brew install awscli
For Linux (Using Package Manager):
verify installation - aws --version
configuure aws cli - aws configure
you see the prompt - 
--AWS Access Key ID (Get from AWS IAM)
--AWS Secret Access Key (Get from AWS IAM)
--Default region name (e.g., us-east-1, us-west-2)
--Default output format (json, table, or text → Default: json)

Test aws Cli connection : aws s3 ls
If configured correctly, it should list your S3 buckets.


---------------------

1. setup awscli
2. write commmand after creating bucket and permission to S3
command  :aws s3 cp /path/to/build.zip s3://your-bucket-name/
3. manually we can upload it

aws public url FE
http://new-user-ak.s3-website-us-east-1.amazonaws.com

aws public url BE - 
https://o5e8gb5fah.o5e8gb5fah.execute-api.us-east-1.amazonaws.com/dev

