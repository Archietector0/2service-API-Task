# 2service-API-Task

2service-API-Task is a project that implements two services: a user service and an activity history service with users. The user service provides endpoints for creating a user, changing user information, and retrieving a list of users. User creation events and changes are sent to the User Activity History service. The Activity History Service allows filtering actions by user ID and supports page-by-page navigation. The services communicate in any desired way. One service is implemented in JavaScript, and the other in TypeScript. The project uses PostgreSQL as the database management system.

## Installation

To install the project, run the following commands:
```bash//npm install```
