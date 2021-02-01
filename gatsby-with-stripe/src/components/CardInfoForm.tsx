import { CardCvcElement, CardElement, CardExpiryElement, CardNumberElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { StripeCardNumberElementOptions, } from "@stripe/stripe-js";
import React from 'react';


const CARD_ELEMENT_OPTIONS: StripeCardNumberElementOptions = {
    style: {
        base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#aab7c4",
            },
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
        },
    },
};


const CardInfoForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    let amount: HTMLInputElement | null = null;


    const checkoutSubmit = async () => {
        if (!stripe || !elements || !amount?.value) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        console.log('amount', amount.value)
        const response = await fetch("/.netlify/functions/checkout", { method: "post", body: JSON.stringify({ amount: amount.value }) });
        const data = await response.json();
        console.log("DAta = ", data);

        const result = await stripe?.confirmCardPayment(data.client_secret, {
            payment_method: {
                card: elements?.getElement(CardNumberElement)!,
                metadata: { "amount": amount?.value },
                billing_details: {
                    name: 'Murtaza Testing',
                    email: "abc@test.com",
                },
            }
        })

        console.log("Result = ", result);


    }


    return (
        <div>
            Checkout Form
            <div>
                {/*<CardElement options={CARD_ELEMENT_OPTIONS} />*/}
                <input ref={ref => amount = ref} type="number" placeholder='£ 00.00' />
                <CardNumberElement options={CARD_ELEMENT_OPTIONS} />
                <CardExpiryElement options={CARD_ELEMENT_OPTIONS} />
                <CardCvcElement options={CARD_ELEMENT_OPTIONS} />

            </div>
            <button onClick={checkoutSubmit}>
                Checkout
      </button>
        </div>
    )
}

export default CardInfoForm;