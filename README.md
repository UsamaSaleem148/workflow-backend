# Workflow Backend

## Description

Workflow Backend is a Node.js application designed to handle backend operations for workflow management systems. It provides APIs for managing tasks, users, and other workflow-related functionalities.

## Table of Contents

- Steps to Run the App
  - Environment Setup
- Advantages of Configuration
- External Dependencies
- Database Setup
- Folder Structure

## Steps to Run the App

### Environment Setup

To run the app, follow these steps:

1. Clone this repository to your local machine.

```
git clone https://github.com/UsamaSaleem14/workflow-backend.git
```

2. Install the required dependencies using npm:

```
npm install
```

3. Start the server:

```
npm run dev
```

3. Start the app:

The app will be available on a specified port, typically http://localhost:3001

## Advantages of Configuration

Running the app in a production environment offers the following advantages over the development configuration:

- Improved performance: Production builds are optimized for speed and efficiency.
- Better security: Debugging tools and development-specific code are usually disabled in production.
- Scalability: Production-ready setups often include load balancing and scaling capabilities.
- Enhanced error handling: Production setups are typically configured to log and handle errors gracefully

## External Dependencies

The app uses the following external dependencies:

- **cors** (Version 2.8.5): CORS (Cross-Origin Resource Sharing) middleware for handling cross-origin requests.

- **dotenv** (Version 16.3.1): A zero-dependency module for loading environment variables from a `.env` file.

- **express** (Version 4.18.2): A fast, unopinionated, minimalist web framework for Node.js.

- **mysql2** (Version 3.6.1): A MySQL client library for Node.js that provides easy access to MySQL databases.

### Database Setup

Open MySQL Workbench: Launch MySQL Workbench if it's not already open.

Connect to a MySQL Server: Connect to the MySQL server where you want to import the database.

Import the Database:

- In the top menu, click on "Server" and then select "Data Import" from the dropdown menu.

- In the "Data Import/Restore" wizard that appears, select the "Import from Self-Contained File" option. Click the "..." button to browse and select the SQL file that contains your database data and structure. You ca find the sql file in the database directory of this application

- Choose the "Default Target Schema" or select a specific schema from the dropdown where you want to import the data.

- Under the "Import Progress" tab, you can review the import options and configurations. Make sure they match your needs.

- Click the "Start Import" button to begin the database import process.

Monitor the Import Progress: MySQL Workbench will display the progress of the import operation. You can see information about the tables being created and data being inserted.

Completion: Once the import is complete, you should see a success message indicating that the process finished without errors.

Verify the Imported Database: In the "Navigator" panel, expand the schema where you imported the database. You should now see the imported tables and data.

After importing make sure to update the database related configurations in the `.env` file in this project

### Folder Structure

The folder structure follows a common convention and can offer several benefits

- `Modularity and Organization:` This structure allows to organize the codebase in a modular and logical way. Each subfolder (config, controllers, services) has a specific purpose, making it easier to find and manage the code.

- `Separation of Concerns:` By separating the code into distinct folders, a clear separation of concerns is achieved. For example, controllers (handling requests) are kept separate from services (database calls), making it easier to reason about and maintain the code.

- `Scalability:` As the project grows, having a well-structured folder hierarchy can help scale the application more easily. New features, components, or utilities can be added without cluttering the project's root directory

- `Ease of Testing:` With clear module separation, it becomes simpler to write unit tests and integration tests for different parts of the application.

- `Team Collaboration:` When multiple developers work on the same project, having a consistent folder structure makes it easier for them to collaborate. Everyone knows where to find specific code.

- `Code Reusability:` The "utilities" folder can store shared utility functions that can be reused across different parts of the application.
