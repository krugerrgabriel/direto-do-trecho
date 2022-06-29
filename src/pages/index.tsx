import React, { useState } from 'react';

import { GetStaticProps } from 'next';
import Head from 'next/head';

import InfiniteScroll from 'react-infinite-scroll-component';

// refresh 5

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
  let itemsArray = posts.data;

  if (posts.order1 == '0') {
    posts.order1 = itemsArray[0];
    itemsArray.slice();
  }
  if (posts.order2 == '0') {
    posts.order2 = itemsArray[0];
    itemsArray.slice();
  }
  if (posts.order3 == '0') {
    posts.order3 = itemsArray[0];
    itemsArray.slice();
  }
  if (posts.order4 == '0') {
    posts.order4 = itemsArray[0];
    itemsArray.slice();
  }
  if (posts.order5 == '0') {
    posts.order5 = itemsArray[0];
    itemsArray.slice();
  }

  const [count, setCount] = useState({
    prev: 0,
    next: 10
  });
  const [current, setCurrent] = useState(
    itemsArray.slice(count.prev, count.next)
  );
  const [hasMore, setHasMore] = useState(true);

  const getMoreData = () => {
    if (current.length === itemsArray.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(
        current.concat(itemsArray.slice(count.prev + 10, count.next + 10))
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
        <title> Direto do Trecho - O Diário do Caminhoneiro </title>

        <meta
          name="og:site_name"
          content="Direto do Trecho - O Diário do Caminhoneiro"
        />
        <meta name="author" content="Gabriel Sabara Krüger" />
        <link rel="canonical" href="https://diretodotrecho.com.br/" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="locale" content="pt_BR" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width" />
        <meta
          name="description"
          content="Blog desenvolvido para centralizar as principais notícias do Grupo UNUS e do mundo do caminhoneiro"
        />
        <meta
          name="keywords"
          content="caminhoneiros, caminhoneiro, notícias, diário, dia-a-dia"
        />
        <meta
          property="og:title"
          content="Direto do Trecho - O Diário do Caminhoneiro"
        />
        <meta property="og:url" content="https://diretodotrecho.com.br/" />
        <meta
          property="og:description"
          content="Blog desenvolvido para centralizar as principais notícias do Grupo UNUS e do mundo do caminhoneiro"
        />
        <meta
          property="og:image"
          content="https://diretodotrecho.com.br/logo02.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Direto do Trecho - O Diário do Caminhoneiro"
        />
        <meta property="og:type" content="blog" />
        {/* @ts-ignore */}
        <meta name="twitter:card" value="summary" />
        <meta name="twitter:site" content="@krugerrgabriel" />
        <meta
          name="twitter:title"
          content="Direto do Trecho - O Diário do Caminhoneiro"
        />
        <meta
          name="twitter:description"
          content="Blog desenvolvido para centralizar as principais notícias do Grupo UNUS e do mundo do caminhoneiro"
        />
        <meta name="twitter:creator" content="@krugerrgabriel" />

        {
          // @ts-ignore
          banners.vertical.map(banner => {
            <link
              rel="preload"
              as="image" // @ts-ignore
              href={`https://transdesk.com.br/souconsultor/direto-do-trecho/assets/img/banners/${banners.id}.jpg`}
            />;
          })
        }
        {
          // @ts-ignore
          banners.horizontal.map(banner => {
            <link
              rel="preload"
              as="image" // @ts-ignore
              href={`https://transdesk.com.br/souconsultor/direto-do-trecho/assets/img/banners/${banners.id}.jpg`}
            />;
          })
        }
      </Head>

      <Navbar />

      <MoreVisited>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              {/* @ts-ignore */}
              <NewsCard item={posts.order1} type="MoreVisited-ExtraLarge" />
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
                  <NewsCard item={posts.order2} type="MoreVisited-Normal" />
                </Col>
                <Col xs={6}>
                  {/* @ts-ignore */}
                  <NewsCard item={posts.order3} type="MoreVisited-Normal" />
                </Col>
              </Row>
              <div className="margin-24px-768px"></div>
              <Row>
                <Col xs={6}>
                  {/* @ts-ignore */}
                  <NewsCard item={posts.order4} type="MoreVisited-Normal" />
                </Col>
                <Col xs={6}>
                  {/* @ts-ignore */}
                  <NewsCard item={posts.order5} type="MoreVisited-Normal" />
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
                dataLength={posts.data.length - 5} //This is important field to render the next data
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
            <Sidebar color="black" posts={posts.recents} />
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
    // 'http://localhost/souconsultor/backend/direto-do-trecho/news/get.php',
    {
      method: 'POST',
      mode: 'same-origin',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        recents: true,
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
