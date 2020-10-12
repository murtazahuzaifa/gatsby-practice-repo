import React, { FC, ReactNode } from 'react'
import Header from './Header';

interface Prop {
    children?: ReactNode
}

const PageLayout:FC<Prop> = ({children}) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default PageLayout;