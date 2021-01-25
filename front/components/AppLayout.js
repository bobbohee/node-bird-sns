import React from 'react';
import { Menu, Input, Space } from 'antd';

const { SubMenu } = Menu;
const { Search } = Input;

const AppLayout = ({ children }) => {
    return (
        <div>
            <Menu mode="horizontal">
                <SubMenu key="bird" title="Bird">
                    <Menu.Item key="profile">Profile</Menu.Item>
                </SubMenu>
                <Menu.Item key="search">
                    <Space direction="vertical">
                        <Search placeholder="search..." style={{ verticalAlign: "middle"}}/>
                    </Space>
                </Menu.Item>
            </Menu>
            { children }
        </div>
    )
};

export default AppLayout;