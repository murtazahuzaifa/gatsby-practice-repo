import React, { FC } from 'react'
import PageLayout from '../components/PageLayout';
import {} from 'gatsby';

interface Prop {
    pageContext?: {pageUrl?:string, name?:string }
}

const DynamicPage:FC<Prop> = ({pageContext}) => {
    return (
        <PageLayout>
        <div>
            This is a dynamic page <br/>
            page url is = {pageContext?.pageUrl} <br/>
            author of this page = {pageContext?.name}
        </div>
        </PageLayout>
    )
}


export default DynamicPage;