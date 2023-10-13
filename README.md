# IronNanny

## [See the App!](https://ironnanny.netlify.app/)

![App Logo](./images/IronNanny_logo_3.png)

## Description

There is a real lack of profesionnal structures to welcome young children under 3 years-old.
Move from a place to another and the task would become even more complicated.
Every parents look for the best for their babys so IronNanny has been thought to help families finding the best nanny for them whenever they need and wherever they are.

## User Stories

- **Homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login
- **Nannys list** - As a user I want to see all the nannys available so that I can choose which ones I want to get more information
- **Nanny details** - As a user I want to see all the details about one nanny in particular and reach her or him
- **Register** - As a user I want to create my profile and try to find a family to work with
- **Login** - As a user I want to be able to log in on the webpage so that I can have access to my account, update or delete it
- **Update** - As a user I want to be able to update my profile to show the more accurate details or delete my profile if I decide to not work anymore
- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault

## Backlog Functionalities

- ~~Sort nannys by age, by experience, by rate~~
- ~~Create an availability tab and be able to update the tab~~
- ~~Login page for nannys~~
- ~~Link to the inbox to send an email to a nanny~~
- Login page for families
- Create family profile
- Add more information on nanny details page : how many children they can care of, age of the children, activities, certification...

## Technologies used

In this project we used: HTML, CSS, Javascript, React, VITE, API, Bootstrap

## Routes

- GET /

  - renders the homepage

- GET /babysitters

  - renders list of all the nannys available
  - redirects to /babysitters/:babysitterId

- GET /babysitters/:babysitterId

  - renders details about a specific nanny
  - redirects to /adminPassword/:babysitterId
  - redirects to external inbox

- GET /adminPassword/:babysitterId
  - redirects to /babysitters/:babysitterId/update if user logged in
- POST /adminPassword/:babysitterId

  - body:
    - username
    - password

- GET /babysitters/:babysitterId/update
  - renders form with prepopulated input
  - redirects to /babysitters/:babysitterId if user click on 'Save' button
- PUT /babysitters/:babysitterId/update
  - body:
    - firstname, lastname
    - gender
    - age
    - telephone
    - email
    - address
    - experience
    - hourly rate
    - description
    - availability
- DELETE /babysitters/:babysitterId/update

  - redirects to /babysitters if you click on 'Delete' button

- GET /babysitters/new
  - renders empty form
  - redirects to /adminPassword/:babysitterId if you click on 'Create your account' button
- PUT /babysitters/new
  - body:
    - firstname, lastname
    - gender
    - age
    - telephone
    - email
    - address
    - experience
    - hourly rate
    - description
    - availability

## Models

User model

      gender: String,
      name: {
        first: String,
        last: String
      },
      location:{
        streetNumber: Number,
        streetName: String,
        city: String,
        postcode: String
      },
      email: String,
      age: Number,
      experience: Number,
      cost: Number,
      phone: String,
      id: Id,
      picture: File,
      description: String,
      availability: [
        {
          "day": String,
          "morning": Boolean,
          "afternoon": Boolean
        },
        {... x6 (for each day of the week)
        }
      ]

## Links

## Collaborators

[Rino Ito](https://github.com/Rin-o)

[Alice Pennec](https://github.com/)

### Project

[Backend Repository Link](https://github.com/Rin-o/json-server-backend-M2Project)

[Frontend Repository Link](https://github.com/Rin-o/M2-Project-Frontend)

[Deploy Link](https://ironnanny.netlify.app/)

### Slides

[Slides Link](https://www.canva.com/design/DAFxCGa2v1Q/kZCmogoVs-ddtp9sWTzcbA/view?utm_content=DA[…]mpaign=designshare&utm_medium=link&utm_source=publishsharelink)
