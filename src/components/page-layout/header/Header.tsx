import { Col, Row, Space } from 'antd'
import React from 'react'
import ThemeSwitch from './theme-switch'
import Search from './search'
import { LogoIcon } from 'src/assets/icons'

interface Props {
    displaySearch?: boolean
}

const Header: React.FC<Props> = ({ displaySearch }) => {
    return (
        <Row justify='space-between'>
            <Col flex='200px'>
                <LogoIcon className='w-[200px] h-[99px]' />
            </Col>
            <Col flex='auto'>
                <Space className='w-full' direction='vertical' align='end'>
                    <Space className='mt-4' size={24}>
                        {displaySearch && <Search />}
                        <ThemeSwitch />
                    </Space>
                </Space>
            </Col>
        </Row>
    )
}

export default Header