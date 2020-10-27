import React, { FC } from 'react'
import PageLayout from '../components/PageLayout';
import { PageProps } from 'gatsby';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const query = gql`
    {
	allAuthors{
      name
    }
}
`

const about: FC<PageProps> = ({ }) => {

    const { loading, data, error } = useQuery(query);

    if(loading){
        return(<PageLayout><span>Loading....</span></PageLayout>)
    }
    if(error){
        return(<PageLayout><span>Error occur while fetching data</span></PageLayout>)
    }
    const {allAuthors} = data;
    return (
        <PageLayout>
            <h1>The develpers of Netlify</h1>
            <ul>
                {allAuthors.map(({ name }: { name: string }, idx: number) => (
                    <li key={idx} >{name}</li>
                ))}
            </ul>
        </PageLayout>
    )
}

export default about;