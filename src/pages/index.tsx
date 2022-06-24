import React from 'react';

import { GetStaticProps } from 'next';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import NewsCard from '../components/NewsCard';
import NewsItem from '../components/NewsItem';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

import { Container, Row, Col } from 'react-bootstrap';
import { MoreVisited } from '../styles/home';
import { IPostFetch } from '../interfaces/IPost';

const Home: React.FC<IPostFetch> = ({ posts }) => {
  return (
    <>
      <Head>
        <title> Direto do Trecho </title>

        <meta
          name="description"
          content="Blog desenvolvido para centralizar as notícias do Grupo UNUS"
        />
        <meta property="og:title" content="Direto do Trecho" />
        <meta
          property="og:url"
          content={`https://direto-do-trecho.vercel.app`}
        />
        <meta
          property="og:description"
          content="Blog desenvolvido para centralizar as notícias do Grupo UNUS"
        />
        <meta
          property="og:image"
          content={`https://transdesk.com.br/souconsultor/grupo-unus/assets/img/news/2_thumb.jpg`}
        />
        <meta property="og:type" content="blog" />
        <meta property="og:locale" content="pt_BR" />
      </Head>

      <Navbar />

      <MoreVisited>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              {/* @ts-ignore */}
              <NewsCard item={posts.data[0]} type="MoreVisited-ExtraLarge" />
            </Col>

            <Col
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="d-flex flex-column justify-content-between"
            >
              <div className="margin-24px-768px"></div>
              <Row>
                <Col xs={6}>
                  {/* @ts-ignore */}
                  <NewsCard item={posts.data[1]} type="MoreVisited-Normal" />
                </Col>
                <Col xs={6}>
                  {/* @ts-ignore */}
                  <NewsCard item={posts.data[2]} type="MoreVisited-Normal" />
                </Col>
              </Row>
              <div className="margin-24px-768px"></div>
              <Row>
                <Col xs={6}>
                  {/* @ts-ignore */}
                  <NewsCard item={posts.data[3]} type="MoreVisited-Normal" />
                </Col>
                <Col xs={6}>
                  {/* @ts-ignore */}
                  <NewsCard item={posts.data[4]} type="MoreVisited-Normal" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </MoreVisited>

      <Container>
        <Row className="margin-36px">
          <Col lg={8}>
            <Row>
              {/* @ts-ignore */}
              {posts.data.map((item, index) => {
                if ((index + 1) % 4 == 0) {
                  return (
                    <React.Fragment key={index}>
                      <Banner wDivider={true} />
                      <NewsItem
                        /* @ts-ignore */
                        item={item}
                        type="big"
                      />
                    </React.Fragment>
                  );
                } else {
                  return (
                    <NewsItem
                      /* @ts-ignore */
                      item={item}
                      type="normal"
                      key={index}
                    />
                  );
                }
              })}
            </Row>
          </Col>

          <Col lg={4}>
            {/* @ts-ignore */}
            <Sidebar color="black" posts={posts.moreVisited} />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    'https://transdesk.com.br/souconsultor/backend/direto-do-trecho/news/get.php',
    {
      method: 'POST',
      mode: 'same-origin',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        moreVisited: true,
        new: true,
        allItems: true,
        order: true,
        company: null
      })
    }
  );
  const posts = await res.json();

  return {
    props: {
      posts
    },
    revalidate: 43200
  };
};

export default Home;
