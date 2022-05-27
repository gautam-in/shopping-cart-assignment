import React from 'react';
import InputFormWrapper from './InputForm.style';
import { Button, Form, Input, message } from 'antd';
import { useSelector } from 'react-redux'

 const InputForm = ({ handleAction, title, description, from }) => {

    const Signuploading = useSelector(state => state.SIGNUPREDUCER.loading);

    const onFinish = (values) => {
        console.log('Success:', values);
        //Sending email and password to firebase
        handleAction(values.email, values.password, from);
      };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        //Show an message to the user about validation error
        message.error('Error! check your email, password and try again.', 1);
    };

  return (
    <InputFormWrapper>
        <div className='signup_label'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        {/* FORM ITEM HERE */}
        <Form
            name="basic"
            labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
            className="signup-form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[
                {
                    required: true,
                    type:"email",
                    message: 'Please enter your email!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please enter your password!',
                },
                ]}
            >
                <Input.Password />
            </Form.Item>

            { from == "signup" ? 
            <Form.Item
                label="Confirm Password"
                name="confirmpassword"
                dependencies={['password']}
                hasFeedback
                rules={[
                {
                    required: true,
                    message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
        
                      return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                  }),
                ]}
            >
                <Input.Password />
            </Form.Item>: null}

            <Form.Item
                wrapperCol={{
                offset: 8,
                span: 16,
                }}
            >
                <Button  style={{ background:"#be2757", color:"white"}} htmlType="submit" loading={Signuploading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </InputFormWrapper>
  )
}

export default InputForm;