import React from 'react';
import Link from 'next/link';

import PropTypes from 'prop-types';

import {Menu, Input, Space, Row, Col} from 'antd';
const {Search} = Input;
import 'antd/dist/antd.css';

import LoginForm from './LoginForm';
import MyCard from './MyCard';

const dummy = {
    isLoggedIn: false,
}

const AppLayout = ({children}) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="profile">
                    <Link href="/profile">
                        <a>Profile</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="search">
                    <Space direction="vertical">
                        <Search placeholder="search..." style={{verticalAlign: "middle"}}/>
                    </Space>
                </Menu.Item>
            </Menu>
            <Row>
                <Col xs={24} md={6}>
                    {/* 컴포넌트 분리 */}
                    {dummy.isLoggedIn ? <MyCard/> : <LoginForm/>}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}></Col>
            </Row>
        </div>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node,
}

export default AppLayout;