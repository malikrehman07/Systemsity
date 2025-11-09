import React, { useEffect } from 'react';
import { Row, Col, Card, Button, Typography } from 'antd';
import AOS from 'aos';

const { Title, Paragraph } = Typography;

const jobOpenings = [
  {
    title: 'Frontend Developer (React.js)',
    type: 'Full-Time',
    location: 'Lahore, Pakistan',
    description:
      'We are looking for a skilled React.js developer with experience in building modern and responsive web applications. Familiarity with Ant Design and Firebase is a plus.',
  },
  {
    title: 'Backend Developer (Node.js)',
    type: 'Full-Time',
    location: 'Remote',
    description:
      'Join our backend team to develop robust APIs and scalable systems using Node.js and MongoDB. Knowledge of Express and JWT authentication required.',
  },
  {
    title: 'UI/UX Designer',
    type: 'Internship',
    location: 'On-site',
    description:
      'We need a creative designer passionate about crafting modern, user-friendly interfaces. Proficiency in Figma or Adobe XD preferred.',
  },
];

const Career = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container py-5">
      <Row data-aos="fade-up">
        <Col span={24} className="text-center mb-4">
          <Title level={1}>Join Our Team</Title>
          <Paragraph>
            At <b>Systemsity Software Solutions</b>, we’re not just building technology — we’re shaping the future.
            Be part of a passionate team that turns ideas into innovative digital products.
          </Paragraph>
        </Col>
      </Row>

      <Row gutter={[24, 24]} justify="center">
        {jobOpenings.map((job, index) => (
          <Col xs={24} sm={24} md={12} lg={8} key={index} data-aos="fade-up" data-aos-delay={index * 200}>
            <Card className="shadow-lg rounded-5 " hoverable>
              <Title level={4} style={{ height: '45px' }} >{job.title}</Title>
              <Paragraph><b>Type:</b> {job.type}</Paragraph>
              <Paragraph><b>Location:</b> {job.location}</Paragraph>
              <Paragraph className="desc" style={{ height: '85px' }} >{job.description}</Paragraph>
              <Button type="primary" variant='solid' block >Apply Now</Button>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="text-center py-5" data-aos="fade-up">
        <Col span={24}>
          <Title level={3}>Didn’t find your role?</Title>
          <Paragraph>
            We’re always open to talented individuals!
            Send your resume to <a href="mailto:hr@systemsity.tech">hr@systemsity.tech</a>.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default Career;
