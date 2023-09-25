import { Col, Row, Space } from 'antd'
import { LogoIcon } from 'src/assets/icons'
import ThemeSwitch from './theme-switch'
import Search from './search'

const Header = () => {
    return (
        <Row justify='space-between'>
            <Col flex='200px'>
                <LogoIcon className='w-[200px] h-[99px]' />
            </Col>
            <Col flex='auto'>
                <Space className='w-full' direction='vertical' align='end'>
                    <Space size={24}>
                        <Search />
                        <ThemeSwitch />
                    </Space>
                </Space>
            </Col>
        </Row>
    )
}

export default Header