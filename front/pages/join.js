import React, {useState} from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import 'antd/dist/antd.css';

import AppLayout from "../components/AppLayout";

// 파일명이 signup.js일 시, js 파일로 인식 못함

const Join = () => {
    const [login, setLogin] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isCheck, setIsCheck] = useState(false);

    const layout = {
        labelCol: {span: 3},
        wrapperCol: {span: 4},
    };

    const onSubmit = () => {};

    const onChangeId = (e) => {
        setLogin(e.target.value);
    };

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    const onChangeCheckbox = (e) => {
        setIsCheck(e.target.value);
    };

    return (
        <AppLayout>
            <div>회원가입</div>
            <Form {...layout} onSubmit={onSubmit}>
                <Form.Item name="login" label="ID" rules={[{required: true, message: 'Please enter your ID!'}]}>
                    <Input value={login} onChange={onChangeId}/>
                </Form.Item>
                <Form.Item name="name" label="Name" rules={[{required: true, message: 'Please enter your Name!'}]}>
                    <Input value={name} onChange={onChangeName}/>
                </Form.Item>
                <Form.Item name="password" label="Password" rules={[{required: true, message: 'Please enter your Password!'}]}>
                    <Input.Password value={password} onChange={onChangePassword}/>
                </Form.Item>
                <Form.Item name="confirm_password" label="Confirm Password" rules={[{required: true, message: 'Please enter your Password!'}]}>
                    <Input.Password value={confirmPassword} onChange={onChangeConfirmPassword}/>
                </Form.Item>
                <Form.Item wrapperCol={{...layout.wrapperCol, offset: 3}}>
                    <Checkbox name="is_check" value={isCheck} onChange={onChangeCheckbox}>Check!</Checkbox>
                </Form.Item>
                <Form.Item wrapperCol={{...layout.wrapperCol, offset: 3}}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </AppLayout>
    );
};

export default Join;