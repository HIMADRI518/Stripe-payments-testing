# Stripe Solutions Architect Takehome - Christian Sendler

This is a simple e-commerce application that a customer can use to purchase a book, but it's missing the payments functionality — your goal is to integrate Stripe to get this application running!

## Requirements Provided

1. Select a book to purchase.
2. Checkout and purchase the item using Stripe Elements.
3. Display a confirmation of purchase to the user with the total amount of the charge and Stripe charge ID (beginning with ch\_).

## Running the Project

The backend is written in Javascript (Node.js) with the [Express framework](https://expressjs.com/). The frontend uses [React 17](https://reactjs.org/docs/getting-started.html). Styling for the frontend relies on pre-provided styles from Stripe Elements, [React-Bootstrap](https://react-bootstrap.github.io/), and select inline styling. General styling from the demo was preserved. This project does not use a database, all required values have been hardcoded into the frontend as required.

To run the project locally, start by cloning the repository. You will need to `cd` into both the `backend` and `client` directories and run `npm install`. Both the backend and frontend can be run using 'npm start' in each directory.

```
git clone https://github.com/casendler/sa-takehome-project-react && cd sa-takehome-project-react
cd backend && npm install
cd client && npm install
```

Then run the application locally:

```
npm start
```

Navigate to [http://localhost:3000](http://localhost:3000) to view the index page.
