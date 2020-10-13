import React, { FC, ReactNode } from 'react'
import PageLayout from '../components/PageLayout';
import { PageProps, Link } from 'gatsby';
import { Router } from '@reach/router';

interface Prop { path: string, children?: ReactNode; uri?:string }

const Client1Profile: FC<Prop> = (props) => { console.log(props); return(<div> client-1 profile </div>)}
const Client1Index: FC<Prop> = () => (<div>Client1 Index <br /> <Link to='/app/client1/profile' >Profile</Link></div>)
const Client1: FC<Prop> = ({ children }) => (
    <div>
        This is a client-1 page
        <br />
        {children}
    </div>
)
const Client2: FC<Prop> = ({ }) => <div>This is a client-2 page </div>

const Index: FC<Prop> = ({ }) => (
    <div>
        this is index of App <br />
        <Link to='/app/client1' >Client1</Link> <br />
        <Link to='/app/client2' >Client2</Link>
    </div>
)

const app: FC<PageProps<{}>> = ({ }) => {
    return (
        <PageLayout>
            <Router basepath='/app'>
                <Index path='/' />
                <Client1 path='/client1' >
                    <Client1Profile path='/profile' />
                    <Client1Index path='/' />
                </Client1>
                <Client2 path='client2' />
            </Router>
        </PageLayout>
    )
}

export default app;