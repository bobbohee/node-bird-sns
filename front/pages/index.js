import React from 'react';

import {Form, Input, Button, Card, Avatar} from 'antd';
import {RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

const dummy = {
    isLoggedIn: true,
    imagePaths: [],
    mainPosts: [{
        User: {
            id: 1,
            nickname: '밥보희',
        },
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSolWw5AkNI8Qd-QyuAzTXbjLB4wPS5nJ6eaA&usqp=CAU',
        content: '첫 번쨰 게시글',
    }],
};

const Home = () => {
    return (
        <div>
            {dummy.isLoggedIn && <Form encType="multipart/form-data">
                <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?"/>
                <div>
                    <Input type="file" multiple hidden/>
                    <Button>이미지 업로드</Button>
                    <Button type="primary" style={{float: 'right'}} htmlType="submit">짹쨱</Button>
                </div>
                <div>
                    {dummy.imagePaths.map((v, i) => {
                        return (
                            <div key={v} style={{display: 'inline-block'}}>
                                <img src={'http://localhost:3000/' + v} style={{width: '200px'}} alt={v}/>
                                <div>
                                    <Button>제거</Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Form>}
            {dummy.mainPosts.map((c) => {
                {/* + : 날짜 객체를 숫자로 바꾸어주는 형변환 연산자 */
                }
                return (
                    <Card
                        key={+c.createdAt}
                        cover={c.img && <img src={c.img} alt="example"/>}
                        actions={[
                            <RetweetOutlined/>,
                            <HeartOutlined/>,
                            <MessageOutlined/>,
                            <EllipsisOutlined/>,
                        ]}
                        extra={<Button>팔로우</Button>}
                    >
                        <Card.Meta
                            avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
                            title={c.User.nickname}
                            description={c.content}
                        />
                    </Card>
                );
            })}
        </div>
    );
};

export default Home;