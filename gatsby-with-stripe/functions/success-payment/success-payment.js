
// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async event => {
    const data = JSON.parse(event.body).data.object
    console.log("\nData = ", JSON.stringify(data, null, 2));
    console.log("\ncharges = ", JSON.stringify(data.charges, null, 2))
    console.log("\nmetadata = ", JSON.stringify(data.metadata, null, 2))
    console.log("\npayment_method_options = ", JSON.stringify(data.payment_method_options, null, 2))
    console.log("\npayment_method_types = ", JSON.stringify(data.payment_method_types, null, 2))
    try {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: `test payment` }),
            // // more keys you can return:
            // headers: { "headerName": "headerValue", ... },
            // isBase64Encoded: true,
        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}


// on payment intent succeed event 
/*
data: {
    object: {
  "id": "pi_1IG4ZhAweaZjPeHfaIJctJT7",
  "object": "payment_intent",
  "amount": 30,
  "amount_capturable": 0,
  "amount_received": 30,
  "application": null,
  "application_fee_amount": null,
  "canceled_at": null,
  "cancellation_reason": null,
  "capture_method": "automatic",
  "charges": {
    "object": "list",
    "data": [
      {
        "id": "ch_1IG4ZiAweaZjPeHf9vWQZgXo",
        "object": "charge",
        "amount": 30,
        "amount_captured": 30,
        "amount_refunded": 0,
        "application": null,
        "application_fee": null,
        "application_fee_amount": null,
        "balance_transaction": "txn_1IG4ZjAweaZjPeHfbyT0FBqY",
        "billing_details": {
          "address": {
            "city": null,
            "country": null,
            "line1": null,
            "line2": null,
            "postal_code": null,
            "state": null
          },
          "email": "abc@test.com",
          "name": "Murtaza Testing",
          "phone": null
        },
        "calculated_statement_descriptor": "Stripe",
        "captured": true,
        "created": 1612194266,
        "currency": "gbp",
        "customer": null,
        "description": null,
        "destination": null,
        "dispute": null,
        "disputed": false,
        "failure_code": null,
        "failure_message": null,
        "fraud_details": {},
        "invoice": null,
        "livemode": false,
        "metadata": {
          "customerId": "34343",
          "orderId": "343434"
        },
        "on_behalf_of": null,
        "order": null,
        "outcome": {
          "network_status": "approved_by_network",
          "reason": null,
          "risk_level": "normal",
          "risk_score": 55,
          "seller_message": "Payment complete.",
          "type": "authorized"
        },
        "paid": true,
        "payment_intent": "pi_1IG4ZhAweaZjPeHfaIJctJT7",
        "payment_method": "pm_1IG4ZiAweaZjPeHfo4o5k6Oo",
        "payment_method_details": {
          "card": {
            "brand": "visa",
            "checks": {
              "address_line1_check": null,
              "address_postal_code_check": null,
              "cvc_check": "pass"
            },
            "country": "US",
            "exp_month": 7,
            "exp_year": 2057,
            "fingerprint": "owFz6efHSVkGvCCb",
            "funding": "credit",
            "installments": null,
            "last4": "4242",
            "network": "visa",
            "three_d_secure": null,
            "wallet": null
          },
          "type": "card"
        },
        "receipt_email": null,
        "receipt_number": null,
        "receipt_url": "https://pay.stripe.com/receipts/acct_1IFxz1AweaZjPeHf/ch_1IG4ZiAweaZjPeHf9vWQZgXo/rcpt_IroCHOOjCVy7jV40w9TCz7LMtXZIRMk",
        "refunded": false,
        "refunds": {
          "object": "list",
          "data": [],
          "has_more": false,
          "total_count": 0,
          "url": "/v1/charges/ch_1IG4ZiAweaZjPeHf9vWQZgXo/refunds"
        },
        "review": null,
        "shipping": null,
        "source": null,
        "source_transfer": null,
        "statement_descriptor": null,
        "statement_descriptor_suffix": null,
        "status": "succeeded",
        "transfer_data": null,
        "transfer_group": null
      }
    ],
    "has_more": false,
    "total_count": 1,
    "url": "/v1/charges?payment_intent=pi_1IG4ZhAweaZjPeHfaIJctJT7"
  },
  "client_secret": "pi_1IG4ZhAweaZjPeHfaIJctJT7_secret_WS3TSuG2cF0njM80yGTlOefY8",
  "confirmation_method": "automatic",
  "created": 1612194265,
  "currency": "gbp",
  "customer": null,
  "description": null,
  "invoice": null,
  "last_payment_error": null,
  "livemode": false,
  "metadata": {
    "customerId": "34343",
    "orderId": "343434"
  },
  "next_action": null,
  "on_behalf_of": null,
  "payment_method": "pm_1IG4ZiAweaZjPeHfo4o5k6Oo",
  "payment_method_options": {
    "card": {
      "installments": null,
      "network": null,
      "request_three_d_secure": "automatic"
    }
  },
  "payment_method_types": [
    "card"
  ],
  "receipt_email": null,
  "review": null,
  "setup_future_usage": null,
  "shipping": null,
  "source": null,
  "statement_descriptor": null,
  "statement_descriptor_suffix": null,
  "status": "succeeded",
  "transfer_data": null,
  "transfer_group": null
}
*/