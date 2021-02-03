import React from 'react';
import 'antd/dist/antd.css'
import {Form, Input, Button, List, Card} from "antd";
import {StopOutlined} from '@ant-design/icons'

const Profile = () => {
    return (
        <div>
            <Form style={{marginBottom: '20px', border: '1px solid #d9d9d9', padding: '20px'}}>
                <Input addonBefore="닉네임"/>
                <Button type="primary">수정</Button>
            </Form>
            <List
                style={{marginBottom: '20px'}}
                grid={{gutter: 4, xs: 2, md: 3}}
                size="small"
                header={<div>팔로잉 목록</div>}
                loadMore={<Button style={{width: '100%'}}>더 보기</Button>}
                bordered
                dataSource={['밥보희', '밥보', '노드버드오피셜']}
                renderItem={item => (
                    <List.Item style={{marginTop: '20px'}}>
                        {/* 배열 안에 jsx를 사용할 경우, key를 지정해야 한다.*/}
                        <Card actions={[<StopOutlined key="stop"/>]}>
                            <Card.Meta description={item}/>
                        </Card>
                    </List.Item>
                )}
            />
            <List
                style={{marginBottom: '20px'}}
                grid={{gutter: 4, xs: 2, md: 3}}
                size="small"
                header={<div>팔로워 목록</div>}
                loadMore={<Button style={{width: '100%'}}>더 보기</Button>}
                bordered
                dataSource={['밥보희', '밥보', '노드버드오피셜']}
                renderItem={item => (
                    <List.Item style={{marginTop: '20px'}}>
                        <Card actions={[<StopOutlined key="stop"/>]}>
                            <Card.Meta description={item}/>
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default Profile;