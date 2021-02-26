import React from 'react';
import {EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined} from "@ant-design/icons";
import {Avatar, Button, Card} from "antd";

import PropTypes from 'prop-types';

const PostCard = ({post}) => {
    {/* + : 날짜 객체를 숫자로 바꾸어주는 형변환 연산자 */}
    return (
        <Card
            key={+post.createdAt}
            cover={post.img && <img src={post.img} alt="example"/>}
            actions={[
                <RetweetOutlined/>,
                <HeartOutlined/>,
                <MessageOutlined/>,
                <EllipsisOutlined/>,
            ]}
            extra={<Button>팔로우</Button>}
        >
            <Card.Meta
                avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                title={post.User.nickname}
                description={post.content}
            />
        </Card>
    );
};

PostCard.propTypes = {
    // object 대신 shape 쓰면 상세히 정의 가능
    post: PropTypes.shape({
        User: PropTypes.shape({
            id: PropTypes.number,
            nickname: PropTypes.string,
        }),
        content: PropTypes.string,
        img: PropTypes.string,
        createAt: PropTypes.object,
    }),
}

export default PostCard;