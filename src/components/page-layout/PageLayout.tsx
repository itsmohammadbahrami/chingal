import React from 'react'
import { Layout } from 'antd'

const PageLayout = ({ children }) => {
    return (
        <Layout className='w-screen h-screen' >
            <Layout.Header className='h-[100px] bg-transparent' >
                Header
            </Layout.Header>
            <Layout.Content>
                {children}
            </Layout.Content>
        </Layout>
    )
}

export default PageLayout