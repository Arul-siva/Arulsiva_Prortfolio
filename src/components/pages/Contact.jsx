import { Input, Row, Col, message } from "antd";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { Button, Form, InputNumber } from "antd";
import contact from "../image/contact.png";
import { useState } from "react";
import emailjs from 'emailjs-com';
import { useForm } from "antd/es/form/Form";
const { TextArea } = Input;
const Contact = () => {

  const [form] =useForm()
const [formData, setformData] = useState({name:"",phone:"", email:"" ,message:"" });

const handleChange = (e) => {
  const { name, value } = e.target;
  setformData({ ...formData, [name]: value,});

};

const handleSubmit = ()=>{
 
  emailjs.send('service_udtq7b4','template_2vwvkge',formData,'KqkEtNC_CXsHVS6b8')
  .then((responce)=>{
    
    console.log("Email send ", responce.data, responce.text);
  } , (error) =>{
    console.log(error);
    console.log("Error seding mail");
  })
  form.resetFields(); 
  message.success("Form submitted successfully");

}
 
  return (
    <div className="home-section py-4">
      <div className="container home-section">
        <div className="row">
          <p className="text-center fw-700 mt-5 fs-50">Contact with me</p>
        </div>
        <div className="row my-5 align-items-center">
          <div className="col-md-6 col-sm-12 col-12">
            <div className="shadow-box p-4 m-3 w-75 m-auto">
              <div className="d-flex  justify-content-center">
                <img src={contact} className="ing-fluid w-100 pb-4" alt="" />
              </div>{" "}
              <h3>hello</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis voluptates culpa, aliquam necessitatibus o
              </p>
              <p>Phone : 37634 <br /> Email : mfssbdsh
              </p>
              <div className="">
                <p>Find with me</p>
                <FaLinkedinIn className="social-icon mx-2" />
                <IoLogoGithub className="social-icon mx-2" />
                <IoIosMail className="social-icon mx-2" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-12">
            <div className="shadow-box p-3 my-3 ">
              <Form
               form={form}
                onFinish={handleSubmit}
                layout="vertical"
              >

                <Row gutter={16}>
                  {/* Name Field */}
                  <Col span={12}>
                    <Form.Item
                      name="name"
                      label="Name"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please enter your name",
                        },
                        { whitespace: true },
                        { min: 3 },
                      ]}
                    >
                      <Input placeholder="Name" name="name" className="p-2" value={formData.name} onChange={handleChange} />
                    </Form.Item>
                  </Col>

                  {/* Phone Field */}
                  <Col span={12}>
                    <Form.Item
                      name="Phone"
                      label="Phone"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please enter your number",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Number"
                        name="phone"
                        type="tel"
                        style={{
                          width: "100%", padding: "8px"

                        }}
                        className="p-2"
                        onChange={handleChange}
                        value={formData.phone}
                      />
                    </Form.Item>
                  </Col>
                </Row>


                <Form.Item
                  name="email"
                  label="Email"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please enter your mail",
                    },
                    {
                      type: "email",
                      message: "Please nter a valid  mail",
                    },
                  ]}
                >
                  <Input placeholder="Please enter your mail" name="email" className="p-2" value={formData.email} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="Message " name="message">
                  <TextArea
                    name="message"
                    placeholder="Please enter your message"
                    autoSize={{ minRows: 6, maxRows: 7 }}
                    value={formData.message}
                    onChange={handleChange}
                    
                  />
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit" className="w-100">
                    Register
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
