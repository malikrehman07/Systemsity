import { Card, Col, Divider, Image, Row, Typography } from 'antd'
import React, { useEffect } from 'react'
import AOS from 'aos';

const Choose = () => {
    const { Title, Paragraph } = Typography
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    return (
        <div className="container py-5 ">
            <Row data-aos="fade-up" data-aos-delay="200" >
                <Col span={24} >
                    <Title level={1} className='text-center text-primary' >WHY CHOOSE US?</Title>
                </Col>
            </Row>
            <Row gutter={[18, 18]} >
                <Col xs={24} sm={24} md={12} lg={8} data-aos="fade-up" data-aos-delay="100" >
                    <Card hoverable className="rounded-5 shadow text-center" >
                        <Image src='https://img.icons8.com/?size=100&id=bSkHtwQoYywl&format=png&color=01CFFF' alt="Innovation" width={60} height={60} preview={false} style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }} />
                        <Title level={3} className='text-primary' >INNOVATION</Title>
                        <Paragraph style={{ height: '100px' }} className='text-primary' >We are committed to pushing the boundaries of technology and creativity, delivering cutting-edge solutions that set you apart from the competition.</Paragraph>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} data-aos="fade-up" data-aos-delay="200" >
                    <Card hoverable className="rounded-5 shadow text-center" >
                        <Image src='https://img.icons8.com/?size=100&id=pUD0Tyc9ZebI&format=png&color=01CFFF' alt="Quality Focused" width={60} height={60} preview={false} style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }} />
                        <Title level={3} className='text-primary' >QUALITY-FOCUSED</Title>
                        <Paragraph style={{ height: '100px' }} className='text-primary' >Our dedication to excellence ensures that every project meets the highest standards, with a focus on delivering reliable, high-performance results.</Paragraph>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} data-aos="fade-up" data-aos-delay="300" >
                    <Card hoverable className="rounded-5 shadow text-center" >
                        <Image src='https://img.icons8.com/?size=100&id=82621&format=png&color=01CFFF' alt="Value for money" width={60} height={60} preview={false} style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }} />
                        <Title level={3} className='text-primary' >VALUE FOR MONEY</Title>
                        <Paragraph style={{ height: '100px' }} className='text-primary' >We provide exceptional service and results at competitive prices, ensuring you receive the best return on your investment without compromising on quality.</Paragraph>
                    </Card>
                </Col>
            </Row>
        </div >
    )
}

export default Choose