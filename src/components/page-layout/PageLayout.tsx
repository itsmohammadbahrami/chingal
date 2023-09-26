import React, { ReactElement } from 'react'
import { Layout } from 'antd'
import Header from './header'
import PageBreadcrumb from './page-breadcrumb'

interface Props {
    children: ReactElement;
    displaySearch?: boolean
}

const PageLayout: React.FC<Props> = ({ children, displaySearch }) => {
    return (
        <Layout className='w-screen h-screen' >
            <Layout.Header className='h-[147px] bg-transparent px-12 py-6' >
                <Header displaySearch={displaySearch} />
            </Layout.Header>
            <Layout.Content className='p-12'>
                <PageBreadcrumb />
                {children}
            </Layout.Content>
        </Layout>
    )
}

export default PageLayout