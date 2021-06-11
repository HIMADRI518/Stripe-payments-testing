# Stripe: Solutions Architect Take Home - Christian Sendler

**Prompt:** This is a simple e-commerce application that a customer can use to purchase a book, but it's missing the payments functionality — your goal is to integrate Stripe to get this application running!

## Requirements Provided

1. Select a book to purchase.
2. Checkout and purchase the item using Stripe Elements.
3. Display a confirmation of purchase to the user with the total amount of the charge and Stripe charge ID (beginning with ch\_).

## Running the Project

The backend is written in Javascript (Node.js) with the [Express framework](https://expressjs.com/). The frontend was bootstrapped with Create-React-App and [React 17](https://reactjs.org/docs/getting-started.html). Styling for the frontend relies on the pre-provided styles from Stripe Elements, [React-Bootstrap](https://react-bootstrap.github.io/), and some inline styling. General styling from the boilerplate was preserved. This application does not use a database, all required values for inventory have been hard-coded where needed.

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

## Usage

Stripe provides [test Credit Card numbers](https://stripe.com/docs/payments/accept-a-payment#web-test-integration) to demonstrate different payment success and failure scenarios. These numbers can be used to complete a payment in this application.

## Solution Overview

For this assignment, I built a simple e-commerce application for a Stripe Press e-book store. Users are presented with a catalog of three available titles for purchase. Upon selecting a title for purchase, users are redirected to a checkout page. URL parameters are used to determine the item a user intends to purchase along with its price. When the checkout route is visited with a valid URL parameter, a request is sent from the client to the server to initiate a payment intent request. The server sends the request to the PaymentIntents API and responds to the client with the `Client Secret` value. The client stores then that value in state for the duration of the checkout flow. I utilized the `CardElement` component from React Stripe.js to securely collect and process a user's credit card information. The user information collected from the web form is passed into the `billing_details` object when confirming the card payment from the client-side.

Upon successful completion of a user's transaction they are then redirected to a Order Confirmation page. The `Payment ID` from the transaction is included as a URL parameter in the redirect to allow for the retrieval of the related charge information. The `Payment ID` is then sent to the server to be used in another request to the Payment Intents API. This time the server retrieves the complete [Payment Object](https://stripe.com/docs/api/payment_intents/retrieve) including the charge information and responds to the client with the relevant charge data for the transaction. The charge ID and final amount are then presented to the user on the Order Confirmation page. A more robust approach to handle both the redirect and confirmation page would be to use a custom webhook to monitor for charge events related to the transaction and only redirect the user once the charge succeeds or provide an alert if the charge fails. The final charge information could then be passed via URL parameters or props to the Order Confirmation component.

## Solution Approach

For this application I chose to use React for the frontend - based on it's ever-increasing popularity in modern web-development and my past experience implementing Stripe's API this way, I felt it would be a good showcase of my familiarity with the framework. The backend uses Javascript and the Express framework to handle requests the Payment Intents API and client. Having utilized Stripe's API and SDK in the past, I was generally familiar with the flow of online payments and integration process. In order to meet the specific requirements of the assignment, I determined that a custom payment flow that relies on the Payment Intents API and Stripe.js SDK would be required. The complete set of Stripe tooling required to achieve the payments flow showcased here includes:

- [Stripe.js & React Stripe.js client-side library](https://stripe.com/docs/js)
- [Stripe Node.js server-side library](https://www.npmjs.com/package/stripe)
- [Stripe Elements](https://stripe.com/docs/stripe-js#elements)
- [Payment Intents API](https://stripe.com/docs/api/payment_intents)

My previous experience with Stripe's API revolved around the Charges API. One minor challenge I faced was reacclimating myself with the latest APIs. I found the migration guide located [here](https://stripe.com/docs/payments/payment-intents/migration) to be particularly helpful in realigning my understanding. Additionally, the Payment Intents based flow offered a number of simplifications and consolidations of processes, all of which were welcome.

## Future Improvements

To achieve a more robust solution for this project there are a handful of improvements and refinements that could be made given additional time. These improvements are detailed below and divided into two categories, Functional Improvements and Technical Improvements:

### Functional Improvements (these relate to user experience and improving the quality and integrity of the payments flow)

- Add a shopping cart to the site to enable users to purchase multiple books with a single charge
- The user's email address is currently being sent in the `receipt_email` fields. However, emails receipts are not being sent as my developer account is still in `Test Mode`.
- Integrate the payments flow with [Stripe Tax](https://stripe.com/docs/tax) to calculate and charge any required Sales Tax

- Collect more complete user, billing, and shipping information to setup a [Customer](https://stripe.com/docs/payments/save-during-payment?platform=web#web-create-a-customer) record, store payment information for [future transactions](https://stripe.com/docs/payments/save-during-payment?platform=web#web-create-payment-intent-off-session), and to [protect against potential disputes](https://stripe.com/docs/disputes/prevention#collect-information)
- Implementing additional payment methods such as [Buy-now-pay-later](https://stripe.com/docs/payments/buy-now-pay-later) and [Wallets](https://stripe.com/docs/payments/wallets); the Payment Request Button Element would have come in handy for this
- Implementing post-payment functionality like [Declines](https://stripe.com/docs/declines) and [Email Receipts](https://stripe.com/docs/receipts) - Decline handling could be implemented by using webhooks to monitor the PaymentIntent status for updates
- Setup a [custom webhook](https://stripe.com/docs/payments/handling-payment-events#build-your-own-webhook) to stay informed of charge events and handle the Order Confirmation
- Separate authorization and capture to create a hold at the time of checkout and capture the funds once the order has been fulfilled or dispatched ([See docs](https://stripe.com/docs/payments/capture-later))
- Improve input validation for non-Element fields by using a validation library such as [Formik](https://formik.org/docs/guides/validation)

### Technical Improvements (these relate to improving the developer experience and overall application integrity)

- Improve usage of React-Bootstrap and adopt a more consistent approach to styling customizations: I am currently mixing standard Elements, React-Bootstrap, and one-off inline styling
- Secure the app's Express API using TLS/SSL, Helmet, CORS, Rate Limiting, etc.
- Add testing via a framework like [Mocha](https://mochajs.org/)
- Implement a basic start-up script or Makefile to handle common tasks like application start-up, installs, builds, and deployments
- Create a production ready built, add hosting, and deploy the application
