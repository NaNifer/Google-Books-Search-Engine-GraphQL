# Project Name - Google Books Search Engine in GraphQL

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Functionality](#Functionality)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Built with](#built-with)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
Google Books Search Engine in GraphQL is a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server.

### The challenge

 The app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API. It was already set up to allow users to save book searches to the back end. My challenge was to:

1. Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

2. Modify the existing authentication middleware so that it works in the context of a GraphQL API.

3. Create an Apollo Provider so that requests can communicate with an Apollo Server.

4. Deploy the application to Heroku.

### Functionality

1. A user can type a search term in a search box and the results appear.
2. The user can save books by clicking "Save This Book!" under each search result.
3. A user can view their saved books on a separate page.

![Animation shows "earth" then "mars" typed into a search box and books about those topics appearing as results.](./assets/Google%20Book%20Search.gif)

### Links

- GitHub Repo: [repo](https://github.com/NaNifer/Google-Books-Search-Engine-GraphQL)
- Live Site on Heroku: [Live site URL here](https://google-books-search-graphql.herokuapp.com/)

### User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

### Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book???s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account???s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book???s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book???s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book???s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```

### Built with

- MongoDB
- Express.js
- React
- Node.js
- GraphQL
- Apollo Server
- JSON Web Tokens

## Author

- GitHub - [NaNifer](https://github.com/NaNifer)
- Portfolio - [Nifer Kilakila](https://nanifer.github.io/Nifer-Kilakila-Portfolio-h2/)

## Acknowledgments

Thanks to my TAs for walking me through the homework at the beginning. Also for my tutor, Trinh Ngyuen, who has been a great resource throughout bootcamp.
