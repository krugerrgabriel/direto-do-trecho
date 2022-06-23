import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';

import Navbar from '../../components/Navbar';
import NewsMini from '../../components/NewsMini';
import Breadcrumb from '../../components/Breadcrumb';
import { Divider } from '../../components/NewsItem/styles';
import Sidebar from '../../components/Sidebar';

import {
  Title,
  FineLine,
  Author,
  Date,
  BannerWrapper,
  NavbarPadding
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
        <meta property="og:type" content="blog" />
        <meta property="og:locale" content="pt_BR" />
      </Head>

      <NavbarPadding />
      <Navbar />
      <Breadcrumb itemId={post.id} itemName={post.title} />
      <Container>
        <Row className="margin-72px">
          <Col lg={8} md={12} xs={12}>
            <Title>{post.title}</Title>
            <FineLine>{post.fineLine}</FineLine>

            <Author>
              <b>Por:</b> {post.userName}
            </Author>
            <Date>
              <b>ATUALIZADO EM:</b> {returnFormattedDate(post.createdAt)}
            </Date>

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

          <div className="margin-36px-992px"></div>

          <Col lg={4}>
            {/* @ts-ignore */}
            <Sidebar posts={posts.moreVisited} />
          </Col>
        </Row>

        <Divider type="half" />

        <Row className="margin-36px">
          <Col lg={12}>
            <Subtitle> RELACIONADOS </Subtitle>
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
