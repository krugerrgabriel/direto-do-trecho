import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
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

import {
  Title,
  FineLine,
  Author,
  Date,
  BannerWrapper,
  NavbarPadding,
  Box,
  IconBox
} from '../../styles/item';
import { Subtitle } from '../../styles/home';

import { IPostFetch } from '../../interfaces/IPost';

import { returnFormattedDate } from '../../functions';

import 'froala-editor/css/froala_style.min.css';
import 'font-awesome/css/font-awesome.css';

const Item: React.FC<IPostFetch> = ({ posts }) => {
  var post = posts.data[0];

  return (
    <>
      <Head>
        <title>{post.title} | Direto do Trecho</title>

        <meta name="description" content={post.fineLine} />
        <meta name="og:site_name" content="Direto do Trecho" />
        <meta
          property="og:title"
          content={post.title + ' | Direto do Trecho'}
        />
        <meta
          property="og:url"
          content={`https://direto-do-trecho.vercel.app/item/${post.id}`}
        />
        <meta property="og:description" content={post.fineLine} />
        <meta
          property="og:image"
          content={`https://transdesk.com.br/souconsultor/grupo-unus/assets/img/news/${post.id}_thumb.jpg`}
        />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.createdAt} />
        <meta property="article:tag" content={post.companies} />
        <meta property="og:locale" content="pt_BR" />
        {/* @ts-ignore */}
        <meta name="twitter:card" value="summary" />
        <meta name="twitter:site" content="@krugerrgabriel" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.fineLine} />
        <meta name="twitter:creator" content="@krugerrgabriel" />
      </Head>

      <NavbarPadding />
      <Navbar />
      <Breadcrumb itemId={post.id} itemName={post.title} />
      <Container>
        <Row className="margin-72px">
          <Col lg={8} md={12} xs={12}>
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

            <BannerWrapper>
              <Image
                src={`https://transdesk.com.br/souconsultor/grupo-unus/assets/img/news/${post.id}_thumb.jpg`}
                alt="Imagem da Notícia"
                layout="fill"
                objectFit="cover"
              />
            </BannerWrapper>

            <div
              className="fr-view" // @ts-ignore
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </Col>

          <Col lg={4} className="hide-992px">
            <div className="margin-36px-992px"></div>
            {/* @ts-ignore */}
            <Sidebar color="black" posts={posts.moreVisited} />
          </Col>
        </Row>

        <Row className="margin-24px">
          <Col lg={3} md={6} sm={12} xs={12}>
            <FacebookShareButton
              url={`https://direto-do-trecho.vercel.app/item/${post.id}`}
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
              title={'Confira esse artigo do Direto do Trecho: ' + post.title}
              url={`https://direto-do-trecho.vercel.app/item/${post.id}`}
              hashtags={['diretodotrecho']} // @ts-ignore
              className="w-100"
            >
              <ShareButton type="twitter" text="TWEETAR" />
            </TwitterShareButton>
          </Col>

          <Col lg={3} md={6} sm={12} xs={12}>
            <WhatsappShareButton
              title={'Confira esse artigo do Direto do Trecho: ' + post.title}
              url={`https://direto-do-trecho.vercel.app/item/${post.id}`}
              separator=" - "
              className="w-100"
            >
              <ShareButton type="whatsapp" text="ENCAMINHAR" />
            </WhatsappShareButton>
          </Col>

          <Col lg={3} md={6} sm={12} xs={12}>
            <TelegramShareButton
              title={'Confira esse artigo do Direto do Trecho: ' + post.title}
              url={`https://direto-do-trecho.vercel.app/item/${post.id}`}
              className="w-100"
            >
              <ShareButton type="telegram" text="ENCAMINHAR" />
            </TelegramShareButton>
          </Col>
        </Row>

        <Row className="margin-24px">
          <Banner />
        </Row>

        <Divider type="half" />

        <Row className="margin-36px">
          <Col lg={12} className="position-relative">
            <IconBox>
              <div>
                <Image
                  src="/mao-dupla-adiante.png"
                  alt="Logo da Segtruck"
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

      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    'https://transdesk.com.br/souconsultor/backend/direto-do-trecho/news/get.php'
  );
  const posts = await res.json();

  const paths = posts.data.map(item => {
    return {
      params: { id: item.id }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params;

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
        itemId: id,
        related: true,
        new: true,
        moreVisited: true
      })
    }
  );
  const posts = await res.json();

  return {
    props: {
      posts
    }
  };
};

export default Item;
