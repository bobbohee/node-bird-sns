import React from 'react';
import Link from 'next/link';
import {Menu, Input, Space, Button} from 'antd';

const {Search} = Input;
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';

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
            <Link href="/join">
                <a>
                    <Button>Signup</Button>
                </a>
            </Link>
            {children}
        </div>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node,
}

export default AppLayout;