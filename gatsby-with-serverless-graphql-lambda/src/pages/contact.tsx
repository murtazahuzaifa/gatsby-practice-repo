import React, { FC } from 'react'
import PageLayout from '../components/PageLayout';
import {PageProps} from 'gatsby';

const contact:FC<PageProps> = ({}) => {
    return (
        <PageLayout>
            <div>
                Hello form contact page;
            </div>
        </PageLayout>
    )
}

export default contact;