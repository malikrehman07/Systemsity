import React, { useEffect } from 'react'
import { Card, Col, Divider, Image, Rate, Row, Typography } from 'antd'
import AOS from 'aos';

const { Title, Paragraph } = Typography
const Reviews = () => {
useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    return (
        <div className='bg-primary' >
            <div className="container py-5">
                <Row data-aos="fade-up" data-aos-delay="200" >
                    <Col span={24} className='text-center'>
                        <Title level={1} className='text-secondary' >Our Happy Customers</Title>
                    </Col>
                </Row >
                <Row gutter={[24, 24]} justify="center" className="mt-5" data-aos="fade-up" data-aos-delay="200" >
                    {[
                        {
                            name: 'Alice K',
                            title: 'Creative Director',
                            rating: 5,
                            image: 'https://randomuser.me/api/portraits/women/44.jpg',
                            review: 'Outstanding experience! The team delivered our website exactly as we imagined — fast, modern, and user-friendly.'
                        },
                        {
                            name: 'King M',
                            title: 'Tech Enthusiast',
                            rating: 5,
                            image: 'https://randomuser.me/api/portraits/men/47.jpg',
                            review: 'Their app development service is top-notch! Smooth communication and on-time delivery. Highly recommended!'
                        },
                        {
                            name: 'Jack R',
                            title: 'Entrepreneur',
                            rating: 5,
                            image: 'https://randomuser.me/api/portraits/men/52.jpg',
                            review: 'We got our custom software built by them, and it has completely streamlined our business operations.'
                        },
                        {
                            name: 'Janny S',
                            title: 'Business Consultant',
                            rating: 5,
                            image: 'https://randomuser.me/api/portraits/women/68.jpg',
                            review: 'Professional, creative, and reliable — they turned our ideas into a stunning digital product. Will definitely work with them again!'
                        },
                        {
                            name: 'Liam K',
                            title: 'Startup Founder',
                            rating: 5,
                            image: 'https://randomuser.me/api/portraits/men/33.jpg',
                            review: 'Their web development service exceeded our expectations! The site looks professional and performs flawlessly on all devices.'
                        },
                        {
                            name: 'Sophia M',
                            title: 'Marketing Manager',
                            rating: 5,
                            image: 'https://randomuser.me/api/portraits/women/45.jpg',
                            review: 'Amazing experience working with this team! They built our mobile app with precision and kept us updated every step of the way.'
                        }

                    ].map((review, index) => (
                        <Col xs={24} sm={24} md={12} lg={8} key={index}>
                            <Card hoverable className="rounded-5 shadow text-center">
                                <Image
                                    src={review.image}
                                    alt={review.name}
                                    width={80}
                                    height={80}
                                    preview={false}
                                    style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }}
                                />
                                <Title level={5} className="mb-1">{review.name}</Title>
                                <Paragraph type="secondary" className="mb-2">{review.title}</Paragraph>
                                <Rate disabled defaultValue={review.rating} />
                                <Paragraph className="mt-2" style={{ fontSize: '14px', height: '50px' }}>{review.review}</Paragraph>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default Reviews
