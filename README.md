# Stripe: Solutions Architect Takehome - Christian Sendler

Prompt: This is a simple e-commerce application that a customer can use to purchase a book, but it's missing the payments functionality — your goal is to integrate Stripe to get this application running!

## Requirements Provided

1. Select a book to purchase.
2. Checkout and purchase the item using Stripe Elements.
3. Display a confirmation of purchase to the user with the total amount of the charge and Stripe charge ID (beginning with ch\_).

## Running the Project

The backend is written in Javascript (Node.js) with the [Express framework](https://expressjs.com/). The frontend uses [React 17](https://reactjs.org/docs/getting-started.html). Styling for the frontend relies on pre-provided styles from Stripe Elements, [React-Bootstrap](https://react-bootstrap.github.io/), and select inline styling. General styling from the demo was preserved. This project does not use a database, all required values have been hard-coded as required.

To run the project locally, start by cloning the repository. You will need to `cd` into both the `backend` and `client` directories and run `npm install`. Both the backend and frontend can be run using `npm start` in each directory respectively.

```
git clone https://github.com/casendler/sa-takehome-project-react && cd sa-takehome-project-react
cd backend && npm install
cd ../client && npm install
```

Then run the application locally:

```
cd backend && npm start
cd ../client && npm start
```

Navigate to [http://localhost:3000](http://localhost:3000) to view the index page.

## Solution Overview

## Solution Approach

## Future Improvements

To achieve a more robust solution for this project there are few additional improvements and changes that could be made. These improvements are listed in detail below and divided into two categories: Functional & User Experience Improvements and Technical Improvements:

### Functional & User Experience Improvements

- The user's email address is currently being sent as the `receipt_email`. However, these emails are not being send as my account is in `Test`.
- Collect additional billing information to facilaite downstream hand-off to a sales tracking and fulfillment provider
- Improve error handling for non-Element form components using a form-validation library like Formik
- Ensure that all components are fully responsive and test x-Browser to ensure compataibility

### Technical Improvements

- Handle the charge success page and subsequent steps like fulfillment or order logging using a [custom webhook](https://stripe.com/docs/payments/handling-payment-events#build-your-own-webhook)
- Utilize a consistent styling library and approach for customizations: currently mixing Elements, React-Bootstrap, and inline styling.
- Secure the Express API using TLS/SSL, Helmet, CORS, Rate Limiting, etc.
- Add testing using a framework like [Mocha](https://mochajs.org/)
- Implement a based start-up script or Makefile to handle common tasks like application start-up, installs, and deployments
- Add hosting
