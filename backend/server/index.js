const express = require('express');
const app = express();
// This is the text secret_key (for production build should use a secure parameter store)
const stripe = require('stripe')(
  'sk_test_51J07VwFQUNksBCRsoiht6WjDs9jU96PaxA9RfNMQ6OfdXpAHhKC01y5VGooAeUzQE66oX3vcgSneQImp0AMsLGQo00RuRqlKcQ'
);

app.use(express.static('.'));
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  const { item } = req.body;
  // Create a PaymentIntent with the order amount and currency
  if (!item || !item.amount) {
    // Ideally this should send a response back to the client indicating the request for payment intent failed
    return;
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: item.amount,
    currency: 'usd',
    payment_method_types: ['card'],
    description: `Stripe Press: ${item.title}`,
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.post('/retrieve-payment-intent', async (req, res) => {
  const { paymentId } = req.body;

  if (!paymentId) {
    // Ideally this should send a response back to the client indicating an invalid paymentId was provided
    return;
  }

  const paymentIntent = await stripe.paymentIntents.retrieve(paymentId);

  res.send({ chargeObject: paymentIntent.charges.data });
});

app.listen(3001, () => console.log('Node server listening on port 3001!'));
