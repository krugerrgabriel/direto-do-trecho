import React, { useState } from 'react';

import { GetStaticProps } from 'next';
import Head from 'next/head';

import InfiniteScroll from 'react-infinite-scroll-component';

import Navbar from '../components/Navbar';
import NewsCard from '../components/NewsCard';
import NewsItem from '../components/NewsItem';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import VerticalBanner from '../components/VerticalBanner';
import FooterImage from '../components/FooterImage';

import { Container, Row, Col } from 'react-bootstrap';
import { MoreVisited } from '../styles/home';
import { IPostFetch } from '../interfaces/IPost';

const Home: React.FC<IPostFetch> = ({ posts, banners }) => {
  const [count, setCount] = useState({
    prev: 0,
    next: 10
  });
  const [current, setCurrent] = useState(
    posts.data.slice(count.prev, count.next)
  );
  const [hasMore, setHasMore] = useState(true);

  const getMoreData = () => {
    if (current.length === posts.data.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(
        current.concat(posts.data.slice(count.prev + 10, count.next + 10))
      );
    }, 2000);
    setCount(prevState => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10
    }));
  };

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
              <InfiniteScroll
                dataLength={posts.data.length} //This is important field to render the next data
                next={getMoreData}
                hasMore={true}
                loader={''}
              >
                {/* @ts-ignore */}
                {current &&
                  current.map((item, index) => {
                    if ((index + 1) % 4 == 0) {
                      return (
                        <React.Fragment key={index}>
                          <Banner
                            wDivider={true} // @ts-ignore
                            banners={banners.horizontal}
                          />
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
              </InfiniteScroll>
            </Row>
          </Col>

          <Col lg={4} className="hide-992px">
            {/* @ts-ignore */}
            <Sidebar color="black" posts={posts.moreVisited} />
            {/* @ts-ignore */}
            <VerticalBanner banners={banners.vertical} />
          </Col>
        </Row>
      </Container>

      <FooterImage />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const resPosts = await fetch(
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
  const posts = await resPosts.json();

  const resBanners = await fetch(
    'https://transdesk.com.br/souconsultor/backend/direto-do-trecho/banners/get?type=all'
  );
  const banners = await resBanners.json();

  return {
    props: {
      posts,
      banners
    },
    revalidate: 43200
  };
};

export default Home;
