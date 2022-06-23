import Image from 'next/image';

import { Container, Row, Col } from 'react-bootstrap';
import { Body, LogoWrapper } from './styles';

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
            xl={4}
            lg={6}
            md={6}
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
