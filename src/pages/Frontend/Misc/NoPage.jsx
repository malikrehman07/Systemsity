import React from "react";
import { Button, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const NoPage = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-center"
      style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}
    >
      <div>
        <Title level={1} style={{ fontSize: "96px", marginBottom: "0" }}>
          404
        </Title>

        <Title level={3}>Page Not Found</Title>

        <Paragraph className="fs-5 text-muted">
          The page you are looking for doesn’t exist or has been moved.
        </Paragraph>

        <Link to="/">
          <Button type="primary" size="large" className="mt-3">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NoPage;
