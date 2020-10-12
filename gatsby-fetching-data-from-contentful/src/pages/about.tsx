import React, { FC } from 'react'
import PageLayout from '../components/PageLayout';
import { PageProps } from 'gatsby';

const about: FC<PageProps> = ({ }) => {
    return (
        <PageLayout>
            <div>
                Hello form about page
            </div>
        </PageLayout>
    )
}

export default about;