import { Col, Row } from 'antd'
import { LogoIcon } from 'src/assets/icons'

const Header = () => {
    return (
        <Row>
            <Col flex='200px'>
                <LogoIcon className='w-[200px] h-[99px]' />
            </Col>
            <Col flex='auto'>

            </Col>
        </Row>
    )
}

export default Header