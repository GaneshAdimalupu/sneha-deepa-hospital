# Sneha Deepa Hospital Website Deployment Guide

This guide explains how to deploy the Sneha Deepa Hospital website to AWS (Amazon Web Services). The deployment process uses AWS Amplify, which provides a simple way to host static websites with continuous deployment.

## Prerequisites

Before you begin, ensure you have:

1. An AWS account
2. The website codebase (Next.js project)
3. A GitHub, GitLab, or Bitbucket repository containing the code
4. Node.js and npm installed on your local machine

## Local Development Setup

Before deploying, set up the project locally:

```bash
# Clone the repository (if you haven't already)
git clone <repository-url>
cd sneha-deepa

# Install dependencies
npm install

# Create placeholder image folders
mkdir -p public/images/doctors
mkdir -p public/images/services
mkdir -p public/images/gallery
mkdir -p public/images/team
mkdir -p public/images/patterns
mkdir -p public/images/about
mkdir -p public/images/icons

# Add placeholder images
# You can use tools like https://placeholder.com/ to generate placeholders
# or add your actual hospital images

# Test the website locally
npm run dev
```

Visit `http://localhost:3000` to ensure the website runs correctly.

## Deployment Option 1: AWS Amplify (Recommended)

AWS Amplify is the easiest way to deploy a Next.js application with continuous deployment from GitHub.

### Step 1: Push Your Code to GitHub

Ensure your code is hosted in a GitHub repository.

### Step 2: Set Up AWS Amplify

1. Log in to your AWS Management Console
2. Navigate to AWS Amplify
3. Click "Create app" → "Host web app"
4. Choose GitHub as your repository provider and authorize AWS Amplify
5. Select your repository and branch (typically `main` or `master`)
6. Configure build settings with the following build specification:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

7. Review and confirm the setup
8. Click "Save and deploy"

Amplify will build and deploy your application automatically. It will also automatically deploy future changes when you push to your repository.

### Step 3: Set Up Custom Domain

To use your domain (snehadeepahospital.org):

1. In the Amplify Console, navigate to your app
2. Go to "Domain Management"
3. Click "Add Domain"
4. Enter your domain name and follow the verification and DNS setup instructions
5. Wait for the SSL certificate to be provisioned (typically takes 24-48 hours)

## Deployment Option 2: AWS S3 + CloudFront

For more control over the hosting configuration, you can use S3 for storage and CloudFront for content delivery.

### Step 1: Build the Next.js Application for Static Export

Update your `next.config.js` to include:

```javascript
module.exports = {
  // Add to existing config
  output: 'export',
}
```

Build the application:

```bash
npm run build
```

This creates a `out` directory with static files.

### Step 2: Create an S3 Bucket

1. Go to the AWS Management Console and open the S3 service
2. Click "Create bucket"
3. Name your bucket (e.g., "sneha-deepa-hospital-website")
4. Choose a region closest to your target audience (e.g., ap-south-1 for India)
5. Uncheck "Block all public access" (since we want the website to be publicly accessible)
6. Acknowledge the warning and create the bucket

### Step 3: Configure the S3 Bucket for Website Hosting

1. Select your bucket and go to the "Properties" tab
2. Scroll down to "Static website hosting" and click "Edit"
3. Select "Enable" and enter "index.html" for the index document
4. Save changes

### Step 4: Set Bucket Policy for Public Access

1. Go to the "Permissions" tab
2. Click "Bucket policy" and add the following policy (replace `YOUR-BUCKET-NAME` with your actual bucket name):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
    }
  ]
}
```

3. Save the policy

### Step 5: Upload Website Files

Upload the contents of the `out` directory to your S3 bucket:

```bash
aws s3 sync out/ s3://YOUR-BUCKET-NAME
```

Or use the AWS Management Console to upload the files.

### Step 6: Set Up CloudFront

1. Open the CloudFront service in the AWS Management Console
2. Click "Create Distribution"
3. For "Origin Domain," select your S3 bucket website endpoint
4. Configure the settings as needed:
   - Set "Default root object" to "index.html"
   - Enable "Compress objects automatically"
   - Choose "Redirect HTTP to HTTPS"
5. Create the distribution

### Step 7: Set Up Custom Domain with CloudFront

1. In the CloudFront console, select your distribution
2. Go to "General" tab and click "Edit"
3. Under "Alternate domain names (CNAMEs)," add your domain (e.g., snehadeepahospital.org)
4. Under "Custom SSL Certificate," request or import a certificate through AWS Certificate Manager
5. Save changes
6. Update your domain's DNS settings to point to the CloudFront distribution

## Deployment Option 3: Vercel (Alternative)

Vercel is the company behind Next.js and offers an excellent hosting platform specifically optimized for Next.js applications.

1. Create an account at [vercel.com](https://vercel.com)
2. Install the Vercel CLI: `npm install -g vercel`
3. Run `vercel login` and follow the instructions
4. In your project directory, run `vercel` to deploy
5. For production deployment, run `vercel --prod`
6. Set up your custom domain in the Vercel dashboard

## Post-Deployment Tasks

After deploying your website, complete these important tasks:

1. **Test the live website** thoroughly on different devices and browsers
2. **Set up monitoring** using AWS CloudWatch or another monitoring service
3. **Configure backups** of your website files and database (if applicable)
4. **Implement analytics** (e.g., Google Analytics) to track website traffic
5. **Set up regular maintenance** schedule for updates and security patches

## Ongoing Maintenance

To keep your website secure and up-to-date:

1. Regularly update Next.js and other dependencies
2. Monitor for security vulnerabilities using tools like npm audit
3. Regularly test your website performance and accessibility
4. Keep content updated with the latest hospital information
5. Regularly backup your website and configuration

## Support and Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [AWS Amplify Documentation](https://docs.aws.amazon.com/amplify/)
- [AWS S3 Documentation](https://docs.aws.amazon.com/s3/)
- [AWS CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)
- [Vercel Documentation](https://vercel.com/docs)