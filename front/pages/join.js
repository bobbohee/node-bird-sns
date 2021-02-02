import React, {useState, useCallback, memo} from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';

// 파일명이 signup.js일 시, js 파일로 인식 못함

const TextInput = memo(({value, onChange}) => {
    return (
        <Input value={value} onChange={onChange} />
    );
});

TextInput.propTypes = {
    value: PropTypes.string,
}

// custom hook
// [id, onChangeId] = useInput('');
// import 시, import { useInput } 으로 사용해야함.
export const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback((e) => {
        setter(e.target.value);
    });
    return [value, handler];
};

const Join = () => {
    const [login, setLogin] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isCheck, setIsCheck] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [isCheckError, setIsCheckError] = useState(false);

    const layout = {
        labelCol: {span: 3},
        wrapperCol: {span: 4},
    };

    const onFinish = useCallback((e) => {
        if (password !== confirmPassword)
            return setPasswordError(true);
        if (!isCheck)
            return setIsCheckError(true)
        console.log({
            login, name, password, confirmPassword, isCheck
        });
    }, [password, confirmPassword, isCheck]); // dependency

    const onChangeLogin = useCallback((e) => {
        setLogin(e.target.value);
    }, []);

    const onChangeName = useCallback((e) => {
        setName(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onChangeConfirmPassword = useCallback((e) => {
        setPasswordError(e.target.value !== password);
        setConfirmPassword(e.target.value);
    }, [password]);

    const onChangeCheckbox = useCallback((e) => {
        setIsCheckError(!e.target.checked);
        setIsCheck(e.target.checked);
    }, []);

    return (
        <>
            <div>회원가입</div>
            {/* antd 사용시, onSubmit -> onFinish 로 사용해야 한다. (v4부터) */}
            {/* https://ant.design/components/form/v3#replace-onSubmit-with-onFinish */}
            <Form {...layout} onFinish={onFinish}>
                <Form.Item name="login" label="ID" rules={[{required: true, message: 'Please enter your ID!'}]}>
                    {/*<Input value={login} onChange={onChangeId}/>*/}
                    {/* 리렌더링 방지 */}
                    <TextInput value={login} onChange={onChangeLogin}/>
                </Form.Item>
                <Form.Item name="name" label="Name" rules={[{required: true, message: 'Please enter your Name!'}]}>
                    <Input value={name} onChange={onChangeName}/>
                </Form.Item>
                <Form.Item name="password" label="Password"
                           rules={[{required: true, message: 'Please enter your Password!'}]}>
                    <Input.Password value={password} onChange={onChangePassword}/>
                </Form.Item>
                <Form.Item label="Confirm Password">
                    {/* antd 사용시, Input 엘리먼트에 형제 엘리먼트는 있을 수 없다. Form.Item 태그로 한 번 더 감싼다. */}
                    {/* https://ant.design/components/form/#components-form-demo-complex-form-control */}
                    <Form.Item name="confirm_password"
                               rules={[{required: true, message: 'Please enter your Password!'}]}>
                        <Input.Password value={confirmPassword} onChange={onChangeConfirmPassword}/>
                    </Form.Item>
                    {passwordError && <div style={{color: 'red'}}>Please enter same password!</div>}
                </Form.Item>
                <Form.Item wrapperCol={{...layout.wrapperCol, offset: 3}}>
                    {/* valuePropName="checked" 명시해주어야 한다. */}
                    {/* https://github.com/ant-design/ant-design/issues/20803 */}
                    <Form.Item name="is_check" valuePropName="checked">
                        <Checkbox value={isCheck} onChange={onChangeCheckbox}>Check!</Checkbox>
                    </Form.Item>
                    {isCheckError && <div style={{color: 'red'}}>Please check!</div>}
                </Form.Item>
                <Form.Item wrapperCol={{...layout.wrapperCol, offset: 3}}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default Join;