import { Button, Form, Input } from 'antd';
import React from 'react';
import styles from './styles.module.css'

const AddNewTodo = ({ onFinish }) => {
    return (
        <Form
            name="basic"
            onFinish={onFinish}
        >
            <Form.Item
                className={styles.newTodo}
                label="New Todo"
                name="todo"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input className={styles.input} />
            </Form.Item>
            <Form.Item >
                <Button
                    className={styles.button}
                    type="primary"
                    htmlType="submit"
                >
                    add
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AddNewTodo;