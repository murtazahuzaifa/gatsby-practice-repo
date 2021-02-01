// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async event => {
  const body = JSON.parse(event.body);
  console.log("body", body)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: body.amount * 100,
    currency: 'gbp',
    // Verify your integration in this guide by including this parameter
    metadata: { customerId: "34343", orderId: "343434" },
  });

  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ client_secret: paymentIntent.client_secret }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}