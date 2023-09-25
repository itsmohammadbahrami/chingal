import { Layout } from 'antd'
import Header from './header'

const PageLayout = ({ children }) => {
    return (
        <Layout className='w-screen h-screen' >
            <Layout.Header className='h-[147px] bg-transparent px-12 py-6' >
                <Header />
            </Layout.Header>
            <Layout.Content>
                {children}
            </Layout.Content>
        </Layout>
    )
}

export default PageLayout