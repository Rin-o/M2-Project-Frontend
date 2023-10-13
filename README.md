# Project Name

## [See the App!](https://ironnanny.netlify.app/)

![App Logo](./images/IronNanny_logo_3.png)

## Description

**NOTE -** There is a real lack of profesionnal structures to welcome young children under 3 years-old.
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

**NOTE -** List here all the routes of your server. Example:

- GET /
  - renders the homepage
- GET /babysitters
  - renders list of all the nannys available
- GET /babysitters/:babysitterId
  -
- GET /auth/signup
  - redirects to / if user logged in
  - renders the signup form (with flash msg)
- POST /auth/signup
  - redirects to / if user logged in
  - body:
    - username
    - email
    - password
- GET /auth/login
  - redirects to / if user logged in
  - renders the login form (with flash msg)
- POST /auth/login

  - redirects to / if user logged in
  - body:
    - username
    - password

- GET /events
  - renders the event list + the create form
- POST /events/create
  - redirects to / if user is anonymous
  - body:
    - name
    - date
    - location
    - description

## Models

**NOTE -** List here all the models & Schemas of your Database Structure. Example:

User model

```
username: String
password: String
```

Event model

```
owner: ObjectId<User>
name: String
description: String
date: Date
```

## Links

## Collaborators

[Developer 1 name](www.github-url.com)

[Developer 2 name](www.github-url.com)

### Project

[Repository Link](www.your-github-url-here.com)

[Deploy Link](www.your-deploy-url-here.com)

### Trello

[Link to your trello board](www.your-trello-url-here.com)

### Slides

[Slides Link](www.your-slides-url-here.com)
\
