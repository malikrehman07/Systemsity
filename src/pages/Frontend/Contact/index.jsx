import React, { useEffect, useState } from "react";
import { Row, Col, Card, Typography, Form, Input, Button, message } from "antd";
import AOS from "aos";
import { EnvironmentOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import axios from "axios";

const { Title, Paragraph } = Typography;

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      await axios.post("https://api.systemsity.tech/contact", values);
      message.success("Message sent successfully!");
    } catch (err) {
      console.error(err);
      message.error("Failed to send message");
    } finally {
      setLoading(false);
      form.resetFields();
    }
  };

  return (
    <div className="container mx-auto px-4 py-5">
      {/* Page Title */}
      <div data-aos="fade-up" className="text-center mb-5">
        <Title level={2}>Contact Us</Title>
        <Paragraph className="text-gray-600 max-w-2xl mx-auto">
          We’d love to hear from you! Whether you have a question, project idea, or want to
          collaborate — reach out to us anytime.
        </Paragraph>
      </div>

      {/* Contact Info Cards */}
      <Row gutter={[24, 24]} justify="center" className="mb-5">
        <Col xs={24} sm={12} md={8}>
          <div data-aos="fade-up" data-aos-delay="100">
            <Card hoverable className="p-6 shadow-lg text-center rounded-5">
              <EnvironmentOutlined className="text-4xl text-blue-500 mb-3" />
              <Title level={4}>Our Address</Title>
              <Paragraph type="secondary" style={{ height: '30px' }} >
                P6 Nashatabad, Near PSO Pump,Faisalabad
              </Paragraph>
            </Card>
          </div>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <div data-aos="fade-up" data-aos-delay="200">
            <Card hoverable className="p-6 shadow-lg text-center rounded-5">
              <PhoneOutlined className="text-4xl text-blue-500 mb-3" />
              <Title level={4}>Call Us</Title>
              <Paragraph type="secondary" style={{ height: '30px' }} >+92 304 8666323</Paragraph>
            </Card>
          </div>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <div data-aos="fade-up" data-aos-delay="300">
            <Card hoverable className="p-6 shadow-lg text-center rounded-5">
              <MailOutlined className="text-4xl text-blue-500 mb-3" />
              <Title level={4}>Email Us</Title>
              <Paragraph type="secondary" style={{ height: '30px' }} >hr@systemsity.tech</Paragraph>
            </Card>
          </div>
        </Col>
      </Row>

      {/* Contact Form */}
      <div data-aos="fade-up" className="max-w-3xl mx-auto mb-5">
        <Title level={3} className="text-center mb-5">
          Send Us a Message
        </Title>
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          className="bg-white p-5 shadow-lg rounded-5"
        >
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="name"
                label="Full Name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="John Doe" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Invalid email address" },
                ]}
              >
                <Input placeholder="john@example.com" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="subject"
            label="Subject"
            rules={[{ required: true, message: "Please enter a subject" }]}
          >
            <Input placeholder="Project Inquiry" />
          </Form.Item>

          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <Input.TextArea rows={5} placeholder="Type your message here..." />
          </Form.Item>

          <div className="text-center">
            <Button type="primary" htmlType="submit" size="large">
              Send Message
            </Button>
          </div>
        </Form>
      </div>

      {/* Map Section */}
      <div data-aos="fade-up" className="mt-5">
        <Title level={3} className="text-center mb-5">
          Find Us On The Map
        </Title>
        <div className="rounded-5 overflow-hidden shadow-lg max-w-5xl mx-auto">
          {/* <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.034081796233!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190f1a5fbeea7d%3A0x4c4d8a4a49fce!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1691424000000!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe> */}
          <iframe title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54455.48459698666!2d73.05584192275998!3d31.456315715772522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392269aeb9cee023%3A0x832a74404d8fb5fb!2sPSO!5e0!3m2!1sen!2s!4v1762719420161!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
