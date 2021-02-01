import React, { FC } from 'react'
import { PageProps } from 'gatsby';
import { Elements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardInfoForm from '../components/CardInfoForm';


const stripePromise = loadStripe(process.env.STRIPE_PUBLISH_KEY!)

const Index: FC<PageProps> = ({ }) => {



    return (
        <div>
            hello stripe
            <Elements stripe={stripePromise}>
                <CardInfoForm />
            </Elements>
        </div>
    )
}

export default Index;