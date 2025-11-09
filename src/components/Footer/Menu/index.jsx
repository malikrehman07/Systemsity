import React from 'react'
import { Col, Flex, Row, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const { Title, Paragraph } = Typography
const Menu = () => {
    return (
        <div className='container py-5'>
            <Row gutter={[18, 18]} >
                <Col xs={12} sm={12} md={8} lg={8} >
                    <Title level={2} className='text-primary' >SystemSity</Title>
                    <Paragraph style={{ fontSize: '17px' }} >Crafting digital experiences where every line of code is a masterpiece.</Paragraph>
                </Col>
                <Col xs={12} sm={12} md={8} lg={8} >
                    <Title level={4} >Useful Links</Title>
                    <Link to='/' className="nav-link py-1" >Home</Link>
                    <Link to='/about' className="nav-link py-1" >About Us</Link>
                    <Link to='/contact' className="nav-link py-1" >Contact Us</Link>
                    <Link to='/careers' className="nav-link py-1" >Careers</Link>
                </Col>
                <Col xs={12} sm={12} md={8} lg={8} >
                    <Title level={4} >Contact Us</Title>
                    <Paragraph>support@systemsity.tech</Paragraph>
                    <Paragraph>+92 304 8666323</Paragraph>
                    <Paragraph><Flex gap="middle" align="center">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF size={20} color="#1877F2" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={20} color="#1DA1F2" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={20} color="#E1306C" />
                        </a>
                    </Flex></Paragraph>
                </Col>
            </Row>
        </div>
    )
}

export default Menu
