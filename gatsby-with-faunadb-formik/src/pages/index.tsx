import React, { FC } from 'react'
import PageLayout from '../components/PageLayout';
import { PageProps } from 'gatsby';
import { Formik, Form, ErrorMessage, Field, FormikHelpers } from 'formik';

interface FormFields {
    name: string;
    code: string;
    price: string
}

const Index: FC<PageProps> = ({ }) => {

    const onSubmit = async (values: FormFields, { setSubmitting }: FormikHelpers<FormFields>) => {
        await fetch('/.netlify/functions/myfunc', {
            method: 'post', body: JSON.stringify(values)
        }).then(async(res) => {const data = await res.json(); console.log(data)} ).catch(err => { console.log(err) })
        setSubmitting(false);
    }
    const onValidation = (values: FormFields) => {
        const error: { [P in keyof FormFields]?: string } = {}
        if (values.code === '') { error.code = 'Code Required' }
        if (values.name === '') { error.name = 'Name Required' }
        if (values.price === '') { error.price = 'Price Required' }

        return error
    }
    const formInitialValues: FormFields = {
        name: '',
        code: '',
        price: ''
    }

    return (
        <PageLayout>
            <div>
                <h2>Add New Product</h2>
                <Formik initialValues={formInitialValues} onSubmit={onSubmit} validate={onValidation}  >
                    {(formik) => (
                        <Form>
                            <label htmlFor="prod-code">
                                <Field id="prod-code" name='code' type='number' placeholder='Product Code' /><br />
                                <ErrorMessage name='code' render={(msg) => <span style={{ color: 'red' }}>{msg}</span>} />
                            </label> <br />
                            <label htmlFor="prod-name">
                                <Field id="prod-name" name='name' type='text' placeholder='Product Name' /><br />
                                <ErrorMessage name='name' render={(msg) => <span style={{ color: 'red' }}>{msg}</span>} />
                            </label><br />
                            <label htmlFor="prod-price">
                                <Field id="prod-price" name='price' type='number' placeholder='Price PKR' /><br />
                                <ErrorMessage name='price' render={(msg) => <span style={{ color: 'red' }}>{msg}</span>} />
                            </label><br />
                            <button type='submit' disabled={!formik.dirty || !formik.isValid}>SUBMIT</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </PageLayout>
    )
}

export default Index;