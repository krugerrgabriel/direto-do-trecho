import Image from 'next/image';
import Link from 'next/link';

import { Container, Row, Col } from 'react-bootstrap';
import { Body, LogoWrapper, Sitemap } from './styles';

const Footer: React.FC = () => {
  return (
    <Body>
      <Container>
        <Row className="justify-content-between justify-768px-center">
          <Col xl={2} lg={3} md={4} sm={6} xs={12}>
            <LogoWrapper>
              <Image
                src="/logo01.svg"
                alt="Logo da Segtruck"
                layout="fill"
                objectFit="contain"
              />
            </LogoWrapper>
          </Col>

          <Col
            xl={3}
            lg={4}
            md={4}
            sm={12}
            sx={12}
            className="justify-content-center d-flex"
          >
            <Sitemap>
              <h2> ACESSO RÁPIDO </h2>
              <Link href="/">
                <a> INÍCIO </a>
              </Link>
              <Link href="/">
                <a> LOREM IPSUM </a>
              </Link>
              <Link href="/">
                <a> LOREM IPSUM </a>
              </Link>
              <Link href="/">
                <a> LOREM IPSUM </a>
              </Link>
            </Sitemap>
          </Col>

          <Col
            xl={4}
            lg={5}
            md={4}
            sm={12}
            xs={12}
            className="d-flex align-items-center justify-content-end justify-768px-center"
          >
            <p> © Direto do Trecho - TODOS OS DIREITOS RESERVADOS </p>
          </Col>
        </Row>
      </Container>
    </Body>
  );
};

export default Footer;
