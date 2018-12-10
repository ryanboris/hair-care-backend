# MVP Backend List

## API Structure and Endpoints

### User Roles

Three types of users will interact with this application:

1. *Unregistered* Users and *Unregistered* Stylists
2. *Registered Users* that are NOT stylists (in the real world they are reffered to as clients or customers)
3. *Registered Stylists*

### API Endpoint Organization

Traditionally, API's return data from a database.  Therefore, the organization of the endpoints is based on similarities in what data is being accessed.  Frontend routes and considerations are listed in the frontend documentation for this project.  Authentication, protected routes, and other specifics that come after the endpoint designs will be documented when they are discussed.  With that in mind, the API endpoints listed here are organized by two metrics:

    1.  User Roles
    2.  Request Type (GET, etc.)

Additionally, the specifics on the nature of the request from the frontend CRUD calls and the corresponding *successful* response, and its data structure will be provided.  Note, other responses such as 404's etc do not need to be documented here for the front-end team and will be described when appropriate with detailed commentary as they appear thoughtout the API code base.  The main goal of this document is to establish MVP for the back end architect and provide the frontend React archtitect with the information they need to build and render UI.  Therefore, this is a development level document and if the need arise for production level API documentation, then it will be created.

### Endpoints

* [ ] GET `/api/stylists`
* [ ] GET `/api/stylist:id`
* [ ] POST `/api/stylists` 
* [ ] POST `/api/login` 
* [ ] DELETE `/api/stylist/:id` 
  
## Database & Schema Architecture

## Authentication

* [ ] Authentication is incorporated into the API

* [ ] An authenticated user can log in and the login persists for the session.  

* [ ] An authenticated stylist can log in and the login persists.

* [ ] A user can only access stylist data / read only and is able to post a comment and reply.

* [ ] A stylist is able to gain access to posting their own profiles, modifying their profiles and deleting their own.

## Automated Testing

* [ ] Automated testing is established and covers both endpoints and business logic
  
* [ ] API endpoints are tested using JEST and support the expectations of the endpoints
  
* [ ] Business and Middleware logic is tested and demonstrates expected outcomes
  
* [ ] Testing is automated including end to end testing and integration testing.

## Deployment

* [ ] The API is deployed to the web

* [ ] The project is continuously deployed on commits to Github

* [ ] The API can be accessed from anywhere

## Environmental Vars and dotenv

* [ ] The project is configured to dynamically load the appropriate secrets based on the environment it's running on.