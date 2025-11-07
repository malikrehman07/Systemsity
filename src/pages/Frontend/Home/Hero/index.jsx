import React, { useEffect } from 'react'
import { Button, Col, Image, Row, Typography } from 'antd'
import { MdArrowOutward } from 'react-icons/md'
import AOS from 'aos';

const { Title, Paragraph } = Typography

const Hero = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    return (
        <>
            <div style={{ backgroundColor: '#130D29' }} >
                <div className="container py-5">
                    <Row gutter={[24, 24]} className='justify-content-center text-center' data-aos="fade-up" data-aos-delay="200" >
                        <Col xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }} className=' my-5 d-flex flex-column justify-content-center align-items-start  text-start' >
                            <Title level={3} className='m-0 text-white' > Building <b className='text-secondary' >Dreams</b>,  Empowering <b className='text-secondary' >Futures</b></Title>
                            <Title level={1} className='m-0 pb-3 text-white' style={{ fontSize: '55px', fontWeight: 'bolder', lineHeight: '1.1' }} >Innovating the Future of <span className='text-secondary' >Technology</span></Title>
                            <Paragraph className='text-white' >Systemsity combine strategic consulting, design thinking, and engineering excellence to help our clients build intelligent, human-centered experiences.</Paragraph>
                            <Row gutter={[24,24]} className='my-2'>
                                <Col span={8}>
                                    <Title level={2} className='mb-0 text-white'>20k+</Title>
                                    <Paragraph className='text-white' >Global Delivery Clients </Paragraph>
                                </Col>
                                <Col span={8}>
                                    <Title level={2} className='mb-0 text-white'>8+</Title>
                                    <Paragraph className='text-white' >Years of Excellence</Paragraph>
                                </Col>
                                <Col span={8}>
                                    <Title level={2} className='mb-0 text-white'>20+</Title>
                                    <Paragraph className='text-white' >Skilled Staff</Paragraph>
                                </Col>
                            </Row>
                            <Button type='primary' variant='solid' size='large' shape='round' onClick={() => navigate('/compaigns')} style={{ fontSize: '23px', fontWeight: '600' }} className='py-4' >Our Services <MdArrowOutward /></Button>
                        </Col>
                        <Col xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }} lg={{ span: 12, order: 2 }} className='h-100 my-2 '   >
                            <Image src='https://res.cloudinary.com/djpvxvokp/image/upload/v1762361145/Hero_ol55p3.svg' alt='charity' preview={false} className='img-fluid ' style={{ maxHeight: '700px' }} />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Hero
