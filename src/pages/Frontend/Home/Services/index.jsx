import { Card, Col, Divider, Row, Typography } from 'antd'
import React, { useEffect } from 'react'
import AOS from 'aos';

const Services = () => {
    const { Title, Paragraph } = Typography
    useEffect(() => {
            AOS.init({ duration: 1000, once: true });
        }, []);
    return (
        <div className="container py-5 " data-aos="fade-up" data-aos-delay="200">
            <Row>
                <Col span={24} >
                    <Title level={1} className='text-center text-primary' >SERVICES</Title>
                </Col>
            </Row>
            <div className="container">
                <Row gutter={[12, 12]} >
                    <Col xs={24} sm={24} md={12} lg={8} >
                        <Card hoverable className="rounded-5 shadow" >
                            <Title level={3} className='text-secondary' >Web Development</Title>
                            <Divider style={{ borderColor: '#222' }} className='my-2' />
                            <Paragraph style={{height:'80px'}} >Tailored websites using HTML, CSS, and JavaScript for high-performance and responsive web solutions.</Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} >
                        <Card hoverable className="rounded-5 shadow ">
                            <Title level={3} className='text-secondary' >App Development</Title>
                            <Divider style={{ borderColor: '#222' }} className='my-2' />
                            <Paragraph style={{height:'80px'}} >We build high-performance mobile apps for iOS and Android, focusing on custom mobile application development and user engagement.</Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} >
                        <Card hoverable className="rounded-5 shadow ">
                            <Title level={3} className='text-secondary' >Custom Software</Title>
                            <Divider style={{ borderColor: '#222' }} className='my-2' />
                            <Paragraph style={{height:'80px'}} >We develop scalable and secure custom software to streamline your operations and meet your unique business needs.</Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} >
                        <Card hoverable className="rounded-5 shadow ">
                            <Title level={3} className='text-secondary' >Digital Marketing</Title>
                            <Divider style={{ borderColor: '#222' }} className='my-2' />
                            <Paragraph style={{height:'80px'}} >Our digital marketing team helps you grow your online presence through SEO, social media management, and paid advertising strategies.</Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} >
                        <Card hoverable className="rounded-5 shadow ">
                            <Title level={3} className='text-secondary' >UI/UX Design</Title>
                            <Divider style={{ borderColor: '#222' }} className='my-2' />
                            <Paragraph style={{height:'80px'}} >We craft intuitive, attractive, and functional interfaces that enhance user satisfaction and boost engagement across all digital products.</Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} >
                        <Card hoverable className="rounded-5 shadow ">
                            <Title level={3} className='text-secondary' >AI & Automation</Title>
                            <Divider style={{ borderColor: '#222' }} className='my-2' />
                            <Paragraph style={{height:'80px'}} >We integrate AI tools and automation systems to enhance efficiency, reduce manual work, and optimize your workflows.</Paragraph>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div >
    )
}

export default Services