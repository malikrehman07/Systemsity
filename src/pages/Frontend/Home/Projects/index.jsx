import { Col, Image, Row, Typography } from 'antd'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';

const Projects = () => {
    const { Title, Paragraph } = Typography
    useEffect(() => {
            AOS.init({ duration: 1000, once: true });
        }, []);
    return (
        <div className='bg-primary' >
            <div className="container py-5" >
                <Row data-aos="fade-up" data-aos-delay="200" >
                    <Col span={24} className='text-center' >
                        <Title className='text-secondary'>PROJECTS</Title>
                    </Col>
                </Row>
                <Row gutter={[24, 24]} >
                    <Col xs={24} sm={24} md={12} lg={8} className='d-flex flex-coulmn justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="100"   >
                        <Image src="https://cdn.dribbble.com/userupload/13511837/file/original-b393bfae4c1eadadf123ca5158739d45.png?resize=752x&vertical=center" alt="ShopdotcoWebsite" style={{ borderRadius: '2%' }} className='object-fit-cover ' width="350px" height='250px' />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} className='d-flex flex-coulmn justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="200" >
                        <Image src="https://cdn.dribbble.com/userupload/35960863/file/original-ff3c481a326ef6c13885c4f6bc831df9.jpg?resize=752x&vertical=center" alt="FoodiWebsite" style={{ borderRadius: '2%' }} className='object-fit-cover ' width="350px" height='250px' />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} className='d-flex flex-coulmn justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="300" >
                        <Image src="https://cdn.dribbble.com/userupload/3514576/file/original-ffd342d329d4fcc7bac54cacbdec3b27.jpg?resize=752x&vertical=center" alt="DonationWebsite" style={{ borderRadius: '2%' }} className='object-fit-cover ' width="350px" height='250px' />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} className='d-flex flex-coulmn justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="400" >
                        <Image src="https://cdn.dribbble.com/userupload/39469822/file/original-f6f50e276c294925a5b61433088a1dba.png?resize=752x&vertical=center" alt="Interior Design" style={{ borderRadius: '2%' }} className='object-fit-cover ' width="350px" height='250px' />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} className='d-flex flex-coulmn justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="500" >
                        <Image src="https://cdn.dribbble.com/userupload/2905694/file/original-12c0b474b9e0570cff7214f6d928140f.png?resize=752x&vertical=center" alt="Agency" style={{ borderRadius: '2%' }} className='object-fit-cover ' width="350px" height='250px' />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} className='d-flex flex-coulmn justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="600" >
                        <Image src="https://cdn.dribbble.com/userupload/17611828/file/original-30dd5974022503bcc90ca0b76a651ae9.png?resize=752x&vertical=center" alt="digital" style={{ borderRadius: '2%' }} className='object-fit-cover ' width="350px" height='250px' />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Projects