import Head from "next/head";
import Image from "next/image";
import { Divider, Row, Col, Button, ConfigProvider } from 'antd';
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ theme = {} }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ConfigProvider theme={theme}>
        <main>
          <div>
            <h3>Services</h3>
            <Divider />
            <Row gutter={20}>
              <Col span={6}>
                <Button type="primary" onClick={() => router.push('/about-us')}>Go to About us page</Button>
              </Col>
              <Col span={6}>
                <Button onClick={() => router.push('/')}>Back to Home page</Button>
              </Col>
            </Row>
          </div>
        </main>
      </ConfigProvider>
    </>
  );
}
