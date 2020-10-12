import React, { FC } from 'react'
import PageLayout from '../components/PageLayout';
import { PageProps } from 'gatsby';

const Index: FC<PageProps> = ({ }) => {
    return (
        <PageLayout>
            <div>
                Hello from gatsby..
            </div>
        </PageLayout>
    )
}

export default Index;