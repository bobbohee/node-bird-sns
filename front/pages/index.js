import Head from 'next/head';
import Link from 'next/link';
import AppLayout from "../components/AppLayout";
import "antd/dist/antd.css";

const Home = () => {
    return (
        <>
            <Head>

            </Head>
            <AppLayout>
                <Link href="/about">
                    <a>about</a>
                </Link>
                <div>Hello, Next!</div>
            </AppLayout>
        </>
    );
};

export default Home;
