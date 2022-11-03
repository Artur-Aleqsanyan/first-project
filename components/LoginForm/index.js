import { Button, Form, Input } from 'antd';
import React from 'react';
import styles from './styles.module.css'

const LoginForm = ({ onFinish }) => {
    return (
        <Form
            name="basic"
            onFinish={onFinish}
        >
            <Form.Item
                className={styles.loginInput}
                label="Username"
                name="username"
                rules={[{
                    required: true,
                    message: 'Please input your username!'
                }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                className={styles.loginInput}
                label="Password"
                name="password"
                rules={[{
                    required: true,
                    message: 'Please input your password!'
                }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item >
                <Button
                    type="primary"
                    htmlType="submit"
                    className={styles.button}
                >
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;