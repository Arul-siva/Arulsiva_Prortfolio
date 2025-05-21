import { Input, Row, Col, message, Form, Button } from "antd";
import React, { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import contact from "../image/contact.png";
import emailjs from "emailjs-com";
import { useForm } from "antd/es/form/Form";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const { TextArea } = Input;

const Contact = () => {
  const [form] = useForm();
  const [formData, setformData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    emailjs
      .send("service_udtq7b4", "template_2vwvkge", formData, "mGnx_ay-XwUpB3-Zl")
      .then(
        (response) => {
          console.log("Email sent ", response.text);
          message.success("Form submitted successfully");
        },
        (error) => {
          console.log(error);
          message.error("Error sending mail");
        }
      );
    form.resetFields();
  };

  return (
    <div className="home-section contact-container py-5">
      <div className="container">
        <h1 className="contact-title text-center">Contact with me</h1>

        <Row gutter={[32, 32]} align="middle" justify="center">
          <Col xs={24} md={10}>
            <motion.div
              className="contact-card"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="contact-image">
                <img src={contact} className="img-fluid rounded" alt="Contact" />
              </div>
              <h3 className="contact-name">Arul Siva J</h3>
             
              <p className="contact-info">
                Phone : 8098185278 <br /> Email : arulsivajayabal@gmail.com
              </p>
              <div className="social-links">
                <p>Find with me</p>
                <Link to="https://www.linkedin.com/in/arulsiva-jayabal-60b1b531b" target="_blank">
                  <FaLinkedinIn className="social-icon" />
                </Link>
                <Link to="https://github.com/Arul-siva" target="_blank">
                  <IoLogoGithub className="social-icon" />
                </Link>
                <a href="mailto:arulsivajayabal@gmail.com" target="_blank" rel="noopener noreferrer">
                  <IoIosMail className="social-icon" />
                </a>
              </div>
            </motion.div>
          </Col>

          <Col xs={24} md={12}>
            <motion.div
              className="contact-form-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Form form={form} onFinish={handleSubmit} layout="vertical">
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="name"
                      label="Name"
                      rules={[
                        { required: true, message: "Please enter your name" },
                        { whitespace: true },
                        { min: 3 }
                      ]}
                    >
                      <Input
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item
                      name="phone"
                      label="Phone"
                      rules={[
                        { required: true, message: "Please enter your number" }
                      ]}
                    >
                      <Input
                        placeholder="Your Phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email" }
                  ]}
                >
                  <Input
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </Form.Item>

                <Form.Item name="message" label="Message">
                  <TextArea
                    placeholder="Type your message here..."
                    name="message"
                    autoSize={{ minRows: 5 }}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input"
                  />
                </Form.Item>

                <Form.Item>
                  <Button htmlType="submit" className="submit-button">
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
