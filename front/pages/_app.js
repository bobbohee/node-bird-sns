import React from 'react';
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';

// 공통적인 레이아웃 정의

// Component -> Next에서 넣어주는 Props (index, join, profile) ...
const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
            </Head>
            <AppLayout>
                <Component/>
            </AppLayout>
        </>
    );
};

NodeBird.propTypes = {
    Component: PropTypes.elementType, // 렌더링 될 수 있는 것
};

export default NodeBird;