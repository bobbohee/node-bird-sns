import React, { useState, useCallback } from 'react';
import Link from 'next/link';

import {Button, Form, Input} from 'antd';
import 'antd/dist/antd.css';

import { useInput } from '../pages/join';

const LoginForm = () => {
    const [login, onChangeLogin] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onFinish = useCallback((e) => {
        console.log(login, password);
    }, [login, password]);

    return (
        <Form onFinish={onFinish}>
            <Form.Item name="login" label="ID" rules={[{required: true, message: 'Please enter your ID!'}]}>
                <Input value={login} onChange={onChangeLogin}/>
            </Form.Item>
            <Form.Item name="password" label="Password"
                       rules={[{required: true, message: 'Please enter your Password!'}]}>
                <Input.Password value={password} onChange={onChangePassword}/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={false}>Submit</Button>
                <Link href="/join"><a><Button>Signup</Button></a></Link>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;