# 2service-API-Task

2service-API-Task is a project that implements two services: a user service and an activity history service with users. The user service provides endpoints for creating a user, changing user information, and retrieving a list of users. User creation events and changes are sent to the User Activity History service. The Activity History Service allows filtering actions by user ID and supports page-by-page navigation. The services communicate in any desired way. One service is implemented in JavaScript, and the other in TypeScript. The project uses PostgreSQL as the database management system.

## Installation

To install the project, run the following commands:
npm install
npm run build
npm run start


## Endpoints

### User Service Endpoints

- **Create User:** `POST /api/user/createUser`
- **Change User:** `PUT /api/user/changeUser`
- **Get Users List:** `GET /api/user/getUsersList`

### Storage Service Endpoints

- **Get Storage:** `GET /api/storage/getStorage`
- **Get Storage by UUID and Page:** `GET /api/storage/getStorage/:uuid/:page`

## Technologies Used

- **Sequelize ORM:** Sequelize is used as the Object-Relational Mapping tool for the PostgreSQL database.
- **TypeScript:** TypeScript is used for the service implemented in TypeScript.
- **Object-Oriented Programming (OOP):** Object-oriented principles are followed in the codebase for better organization and maintainability.
- **Module System:** The project utilizes a module system for a structured codebase.
- **Express:** Express.js is used as the web application framework for handling HTTP requests.

## Contact

For more information or questions, you can reach out to the project owner:

- **Telegram:** [Archie_O](https://t.me/Archie_O)

Feel free to add any additional sections or details as needed for your project's README. Good luck with your project!
