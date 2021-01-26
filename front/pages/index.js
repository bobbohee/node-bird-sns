import React from 'react';
import Head from 'next/head';

import 'antd/dist/antd.css';
import AppLayout from "../components/AppLayout";

const Home = () => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
            </Head>
            <AppLayout>
                <div>Hello, Next!</div>
            </AppLayout>
        </>
    );
};

export default Home;