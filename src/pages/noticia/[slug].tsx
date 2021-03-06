import { useRef, useState, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton
} from 'react-share';

import Navbar from '../../components/Navbar';
import NewsMini from '../../components/NewsMini';
import Breadcrumb from '../../components/Breadcrumb';
import { Divider } from '../../components/NewsItem/styles';
import Sidebar from '../../components/Sidebar';
import Banner from '../../components/Banner';
import ShareButton from '../../components/ShareButton';
import Footer from '../../components/Footer';
import VerticalBanner from '../../components/VerticalBanner';
import SkeletonLoader from '../../components/SkeletonLoader';
import FooterImage from '../../components/FooterImage';

import {
  Title,
  FineLine,
  Author,
  Date,
  BannerWrapper,
  NavbarPadding,
  Box,
  IconBox,
  LegendBox
} from '../../styles/item';
import { Subtitle } from '../../styles/home';

import { IPostFetch } from '../../interfaces/IPost';

import { returnFormattedDate } from '../../functions';

import 'froala-editor/css/froala_style.min.css';
import 'font-awesome/css/font-awesome.css';

const Item: React.FC<IPostFetch> = ({ posts, banners }) => {
  const pageRef = useRef();

  const [height, setHeight] = useState(0);
  const [heightSidebar, setHeightSidebar] = useState(0);

  const [newsImageLoading, setNewsImageLoading] = useState(false);

  useEffect(() => {
    // @ts-ignore
    let newHeight = pageRef.current.clientHeight;
    setHeight(newHeight);

    setHeightSidebar(142 + posts.recents.length * 310);
  }, []);

  var post = posts.data[0];

  return (
    <>
      <Head>
        <title>
          {post.title} | Direto do Trecho - O Diário do Caminhoneiro
        </title>

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
        <meta name="description" content={post.fineLine} />
        <meta
          property="og:title"
          content={
            post.title + ' | Direto do Trecho - O Diário do Caminhoneiro'
          }
        />
        <meta
          property="og:url"
          content={`https://diretodotrecho.com.br/noticia/${post.slug}`}
        />
        <meta property="og:description" content={post.fineLine} />
        <meta
          property="og:image"
          content={`https://transdesk.com.br/souconsultor/grupo-unus/assets/img/news/${post.id}_thumb.jpg`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content={`${post.title} | Direto do Trecho - O Diário do Caminhoneiro`}
        />
        <meta property="og:type" content="article" />
        <meta name="keywords" content={post.tags.replaceAll(';', ', ')} />
        <meta property="article:published_time" content={post.createdAt} />
        <meta
          property="article:tag"
          content={
            post.tags.replaceAll(';', ', ') +
            ', ' +
            post.companies.replaceAll(';', ', ')
          }
        />
        {/* @ts-ignore */}
        <meta name="twitter:card" value="summary" />
        <meta name="twitter:site" content="@krugerrgabriel" />
        <meta
          name="twitter:title"
          content={post.title + '| Direto do Trecho - O Diário do Caminhoneiro'}
        />
        <meta name="twitter:description" content={post.fineLine} />
        <meta name="twitter:creator" content="@krugerrgabriel" />
      </Head>

      <NavbarPadding />
      <Navbar />
      <Breadcrumb itemId={post.id} itemName={post.title} />
      <Container>
        <Row className="margin-72px">
          <Col lg={8} md={12} xs={12} ref={pageRef}>
            <Author>
              <b>Por:</b> {post.userName}
            </Author>
            <Date>
              <b>ATUALIZADO EM:</b> {returnFormattedDate(post.createdAt)}
            </Date>

            <Title>{post.title}</Title>

            <Box>
              <FineLine>{post.fineLine}</FineLine>
            </Box>

            <BannerWrapper margin={!post.legend_file}>
              {!newsImageLoading ? <SkeletonLoader /> : null}
              <Image
                src={`https://transdesk.com.br/souconsultor/grupo-unus/assets/img/news/${post.id}_thumb.jpg`}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                onLoad={() => setNewsImageLoading(true)}
              />
            </BannerWrapper>
            {post.legend_file ? (
              <LegendBox>
                <p>{post.legend_file}</p>
              </LegendBox>
            ) : (
              ''
            )}

            <div
              className="fr-view" // @ts-ignore
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>

            {posts.imagesExists ? (
              <Carousel>
                {posts.imagesExists.map((item, index) => {
                  return (
                    <Carousel.Item className="carousel-item">
                      <Image
                        src={`https://transdesk.com.br/souconsultor/grupo-unus/assets/img/news/${post.id}_0${item}.jpg`}
                        alt={post.title + ' ' + index}
                        layout="fill"
                        objectFit="cover"
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            ) : (
              ''
            )}
          </Col>

          <Col lg={4} className="hide-992px position-relative">
            <div className="margin-36px-992px"></div>
            {/* @ts-ignore */}
            <Sidebar color="black" posts={posts.recents} />
            {/* @ts-ignore */}
            {height >= heightSidebar ? (
              <VerticalBanner banners={banners.vertical} />
            ) : (
              ''
            )}
          </Col>
        </Row>

        <Row className="margin-24px">
          <Col lg={3} md={6} sm={12} xs={12}>
            <FacebookShareButton
              url={`https://diretodotrecho.com.br/noticia/${post.slug}`}
              quote={post.title}
              hashtag={`#diretodotrecho`} // @ts-ignore
              description={post.fineLine}
              className="w-100"
            >
              <ShareButton type="facebook" text="COMPARTILHAR" />
            </FacebookShareButton>
          </Col>

          <Col lg={3} md={6} sm={12} xs={12}>
            <TwitterShareButton
              title={
                'Confira esse artigo do Direto do Trecho - O Diário do Caminhoneiro: ' +
                post.title
              }
              url={`https://diretodotrecho.com.br/noticia/${post.slug}`}
              hashtags={['diretodotrecho']} // @ts-ignore
              className="w-100"
            >
              <ShareButton type="twitter" text="TWEETAR" />
            </TwitterShareButton>
          </Col>

          <Col lg={3} md={6} sm={12} xs={12}>
            <WhatsappShareButton
              title={
                'Confira esse artigo do Direto do Trecho - O Diário do Caminhoneiro: ' +
                post.title
              }
              url={`https://diretodotrecho.com.br/noticia/${post.slug}`}
              separator=" - "
              className="w-100"
            >
              <ShareButton type="whatsapp" text="ENCAMINHAR" />
            </WhatsappShareButton>
          </Col>

          <Col lg={3} md={6} sm={12} xs={12}>
            <TelegramShareButton
              title={
                'Confira esse artigo do Direto do Trecho - O Diário do Caminhoneiro: ' +
                post.title
              }
              url={`https://diretodotrecho.com.br/noticia/${post.slug}`}
              className="w-100"
            >
              <ShareButton type="telegram" text="ENCAMINHAR" />
            </TelegramShareButton>
          </Col>
        </Row>

        <Row className="margin-24px">
          {/* @ts-ignore */}
          <Banner banners={banners.horizontal} />
        </Row>

        <Row>
          <Col lg={12}>
            <Divider type="half" />
          </Col>
        </Row>

        <Row className="margin-36px">
          <Col lg={12} className="position-relative">
            <IconBox>
              <div>
                <Image
                  src="/mao-dupla-adiantex250.png"
                  alt="Placa de Mão Dupla Adiante no Direto do Trecho - O Diário do Caminhoneiro"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </IconBox>
            <Subtitle margin="0 0 28px 42px"> RELACIONADOS </Subtitle>
          </Col>
          {posts.related.map((item, index) => {
            return (
              <Col lg={4} md={4} sm={12} key={index}>
                <NewsMini
                  /* @ts-ignore */
                  item={item}
                />
              </Col>
            );
          })}
        </Row>
      </Container>

      <FooterImage />

      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    'https://transdesk.com.br/souconsultor/backend/direto-do-trecho/news/get.php'
    // 'http://localhost/souconsultor/backend/direto-do-trecho/news/get.php'
  );
  const posts = await res.json();

  const allItems = posts.data;
  if (posts.order1 != '0') {
    allItems.push(posts.order1);
  }
  if (posts.order2 != '0') {
    allItems.push(posts.order2);
  }
  if (posts.order3 != '0') {
    allItems.push(posts.order3);
  }
  if (posts.order4 != '0') {
    allItems.push(posts.order4);
  }
  if (posts.order5 != '0') {
    allItems.push(posts.order5);
  }

  const paths = allItems.map(item => {
    return {
      params: { slug: item.slug }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params;

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
        slug,
        related: true,
        new: true,
        recents: true
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

export default Item;
