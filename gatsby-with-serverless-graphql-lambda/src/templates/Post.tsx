import React, { FC, ReactElement } from 'react'
import PageLayout from '../components/PageLayout';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types'
// import { ContentfulRichTextProps } from './ContentfulrichText.models'

interface Prop {
    pageContext?: { title?: string, slug?: string, imgSrc?: string, content?: any }
}

// src = https://www.contentfulcommunity.com/t/no-embedded-images-with-rich-text-but-would-like-to-use-gatsby-image/3499
/* if there is image in the contentful-rich-text-document, then we have to pass the option parameter in the documentToReactComponents method
the link above will use as reference
 */
const options: Options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node, children): ReactElement => {
            return (
                <img
                    key={node.data.target.fields.file['en-US'].url}
                    src={node.data.target.fields.file['en-US'].url}
                    title={node.data.target.fields.title['en-US']}
                    style={{ width: '100%' }}
                />
            )
        },
    }
}

const Post: FC<Prop> = ({ pageContext }) => {
    console.log(pageContext?.content.content)
    return (
        <PageLayout>
            <div>
                <h1>{pageContext?.title}</h1>
                <img src={pageContext?.imgSrc} alt={pageContext?.title} style={{ width: '100%' }} />
                {documentToReactComponents(pageContext?.content, options)}
            </div>
        </PageLayout>
    )
}


export default Post;