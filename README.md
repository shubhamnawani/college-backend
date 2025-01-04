# College Backend API

This project is a backend application built using NestJS and PostgreSQL to manage and query college-related data. The application demonstrates the ability to design relationships, handle complex queries, and deploy a project in a production-like environment.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- PostgreSQL (v12 or higher)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/shubhamnawani/college-backend.git
cd college-backend

Install Dependencies
bash
npm install
Configure Environment Variables
Create a .env file in the root of the project and add the following environment variables:

env
DATABASE_HOST=your-database-host
DATABASE_PORT=5432
DATABASE_USERNAME=your-database-username
DATABASE_PASSWORD=your-database-password
DATABASE_NAME=your-database-name
Run Database Migrations
Ensure your PostgreSQL database is running and then run the following command to apply database migrations:

bash
npm run typeorm migration:run
Seed the Database
Run the following command to seed the database with initial data:

bash
npm run seed
Start the Application
bash
npm run start:dev
The application will be running at http://localhost:3000.

API Documentation
The API documentation is available at http://localhost:3000/api using Swagger.

Deployment
Deploy to Render
Push Your Code to GitHub:

Ensure your code is pushed to a GitHub repository.

Create a New Web Service on Render:

Go to the Render dashboard.

Click on the "New" button and select "Web Service" under the "Services" section.

Connect your GitHub account and select the repository containing your NestJS application.

Fill in the Required Details:

Service Name: Give your service a name, such as college-backend-service.

Region: Select the region that is closest to your users or application.

Branch: Select the branch you want to deploy (e.g., master).

Build Command:

Set the build command to:

bash
npm install && npm run build
Start Command:

Set the start command to:

bash
npm run start:prod
Add Environment Variables:

Add the following environment variables with the connection details from Render:

DATABASE_HOST: your-database-host

DATABASE_PORT: 5432

DATABASE_USERNAME: your-database-username

DATABASE_PASSWORD: your-database-password

DATABASE_NAME: your-database-name

Create the Web Service:

Click on "Create Web Service" to deploy your application.

Verify the Deployment
Access the Deployed Application:

Once the deployment is complete, you will see the URL for your deployed application in the Render dashboard.

Open the URL in your browser to verify that your application is running.

Access Swagger UI:

You can also access the Swagger documentation at http://your-render-url/api.
