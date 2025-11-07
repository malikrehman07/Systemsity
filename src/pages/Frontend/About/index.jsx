import React, { useEffect } from "react";
import { Typography, Row, Col, Card, Avatar } from "antd";
import AOS from "aos";
import {
  UserOutlined,
  CodeOutlined,
  TeamOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-5">
      {/* About Company */}
      <div data-aos="fade-up" className="text-center mb-16">
        <Title level={2}>About Our Company</Title>
        <Paragraph className="text-gray-600 max-w-3xl mx-auto text-lg">
          We are a creative software house focused on delivering high-quality,
          scalable, and user-friendly digital solutions. From websites to
          complete systems, we help businesses succeed with technology-driven
          innovation.
        </Paragraph>
      </div>

      {/* Our Team */}
      <div data-aos="fade-up" className="text-center mb-10">
        <Title level={2}>Meet Our Team</Title>
        <Paragraph className="text-gray-600 mb-10">
          A passionate group of developers, designers, and strategists who love
          turning ideas into real digital products.
        </Paragraph>

        <Row gutter={[24, 24]} justify="center">
          {[
            { name: "Abdullah bin Shahzad", title: "CEO" },
            { name: "Sara Ahmed", title: "Project Manager" },
            { name: "Abdul Rehman", title: "Full Stack Developer" },
          ].map((member, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <div data-aos="fade-up" data-aos-delay={index * 150}>
                <Card hoverable className="p-5 shadow-md rounded-2xl">
                  <Avatar size={80} icon={<UserOutlined />} className="mb-4" />
                  <Title level={4}>{member.name}</Title>
                  <Paragraph type="secondary">{member.title}</Paragraph>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Our Services & Clients */}
      <div data-aos="fade-up" className="text-center mt-20">
        <Title level={2}>Our Services & Clients</Title>
        <Paragraph className="text-gray-600 mb-10">
          We provide end-to-end digital solutions that empower our clients to
          scale and grow. Our clients trust us to deliver reliable, fast, and
          elegant solutions.
        </Paragraph>

        <Row gutter={[24, 24]} justify="center">
          {[
            {
              icon: <CodeOutlined />,
              title: "Web & App Development",
            },
            {
              icon: <TeamOutlined />,
              title: "UI/UX Design",
            },
            {
              icon: <SmileOutlined />,
              title: "Client Success & Support",
            },
          ].map((service, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <div data-aos="fade-up" data-aos-delay={index * 200}>
                <Card hoverable className="p-5 shadow-lg rounded-5">
                  <div className="text-4xl mb-4 text-blue-500">
                    {service.icon}
                  </div>
                  <Title level={4} style={{height:'50px'}} >{service.title}</Title>
                  <Paragraph type="secondary">
                    We deliver excellence with every project — helping clients
                    transform their vision into impactful digital solutions.
                  </Paragraph>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default About;
