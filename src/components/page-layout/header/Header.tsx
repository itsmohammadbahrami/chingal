import { Col, Row, Space } from 'antd'
import React from 'react'
import ThemeSwitch from './theme-switch'
import Search from './search'
import { LogoIcon } from 'src/assets/icons'

interface Props {
    onSearch?: (text: string) => void
}

const Header: React.FC<Props> = ({ onSearch }) => {
    return (
        <Row justify='space-between'>
            <Col flex='200px'>
                <LogoIcon className='w-[200px] h-[99px]' />
            </Col>
            <Col flex='auto'>
                <Space className='w-full' direction='vertical' align='end'>
                    <Space className='mt-4' size={24}>
                        {onSearch && <Search onChange={onSearch} />}
                        <ThemeSwitch />
                    </Space>
                </Space>
            </Col>
        </Row>
    )
}

export default Header