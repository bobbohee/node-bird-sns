import React from 'react';

import 'antd/dist/antd.css';

import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const dummy = {
    isLoggedIn: true,
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
            {dummy.isLoggedIn && <PostForm />}
            {dummy.mainPosts.map((c) => <PostCard key={c} post={c}/>)}
        </div>
    );
};

export default Home;