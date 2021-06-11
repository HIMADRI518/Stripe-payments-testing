# Stripe: Solutions Architect Take Home - Christian Sendler

Prompt: This is a simple e-commerce application that a customer can use to purchase a book, but it's missing the payments functionality — your goal is to integrate Stripe to get this application running!

## Requirements Provided

1. Select a book to purchase.
2. Checkout and purchase the item using Stripe Elements.
3. Display a confirmation of purchase to the user with the total amount of the charge and Stripe charge ID (beginning with ch\_).

## Running the Project

The backend is written in Javascript (Node.js) with the [Express framework](https://expressjs.com/). The frontend uses [React 17](https://reactjs.org/docs/getting-started.html). Styling for the frontend utilizes pre-provided styles from Stripe Elements, [React-Bootstrap](https://react-bootstrap.github.io/), and some inline styling. General styling from the boilerplate was preserved. This project does not use a database, all required values have been hard-coded where needed.

To run the project locally, start by cloning the repository. You will need to `cd` into both the `backend` and `client` directories and run `npm install`. Both the backend and frontend can be run with `npm start` in each directory respectively.

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

Navigate to [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Solution Overview

## Solution Approach

For this application I chose to use React for the frontend - based on the framework's popularity and my past experience implementing Stripe's API this way, I felt it would be a good showcase of my skills. The backend uses Javascript and the Express framework in a similar manner as the provided boilerplate. Having utilized the Payments API and Stripe.js SDK in the past, I was familiar with the flow of online payments and integrating Stripe. In order to meet the requirements of the assignment, I determined that a custom payment flow that primarily relies on the Payment Intents API and Stripe.js SDK would be required. The complete set Stripe tooling required to achieve the basic payments flow in this application includes:

- [Stripe.js & React Stripe.js browser-side library](https://stripe.com/docs/js)
- [Stripe Node.js server-side library](https://www.npmjs.com/package/stripe)
- [Stripe Elements](https://stripe.com/docs/stripe-js#elements)
- [Payment Intents API](https://stripe.com/docs/api/payment_intents)

## Future Improvements

To achieve a more robust solution for this project there are a handful of improvements and refinements that could be made given additional time. These improvements are detailed below and divided into two categories: Functional Improvements and Technical Improvements:

### Functional Improvements (these relate to user experience and improving the quality and integrity of the payments flow)

- Add a shopping cart to the site to enable users to purchase multiple books in one transaction
- Integrate the payments flow with [Stripe Tax](https://stripe.com/docs/tax) to calculate and charge any required Sales Tax
- The user's email address is currently being sent in the `receipt_email` and `billing_details` fields. However, emails receipts are not being send as my developer account is still in `Test`.
- Collect additional user, shipping, and billing information to setup a [Customer](https://stripe.com/docs/payments/save-during-payment?platform=web#web-create-a-customer) record, store payment information for [future transactions](https://stripe.com/docs/payments/save-during-payment?platform=web#web-create-payment-intent-off-session), and to [protect against disputes](https://stripe.com/docs/disputes/prevention#collect-information)
- Implementing additional payment methods such as [Buy-now-pay-later](https://stripe.com/docs/payments/buy-now-pay-later) and [Wallets](https://stripe.com/docs/payments/wallets); the Payment Request Button Element would have come in handy for this
- Implementing post-payment functionality like [Declines](https://stripe.com/docs/declines) and [Email Receipts](https://stripe.com/docs/receipts) - Decline handling would be implemented by using webhooks to monitor the PaymentIntent status for updates
- Setup a [custom webhook](https://stripe.com/docs/payments/handling-payment-events#build-your-own-webhook) to stay informed of payment events and handle downstream processes such as email confirmations, sales order logging, and order fulfillment
- Separate authorization and capture to create a hold at the time of checkout and capture the funds once the order has been fulfilled or dispatched ([See docs](https://stripe.com/docs/payments/capture-later))
- Implement more advanced fraud protection methods like such as [preventing card testing](https://stripe.com/docs/card-testing#mitigations)
- Improve input validation for non-Element components by using a validation library such as Formik
- Implement more robust charge failure error handling with additional information provided to the user
- Ensure that all components are fully responsive and test across browsers to ensure compatibility

### Technical Improvements (these relate to improving the developer experience and application integrity)

- Improve usage of React-Bootstrap and adopt a more consistent approach to styling customizations: I am currently mixing Elements, React-Bootstrap, and one-off inline styling
- Secure the app's Express API using TLS/SSL, Helmet, CORS, Rate Limiting, etc.
- Add testing using a framework like [Mocha](https://mochajs.org/)
- Implement a basic start-up script or Makefile to handle common tasks like application start-up, installs, builds, and deployments
- Add hosting and deploy the application
