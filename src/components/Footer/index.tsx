import Image from 'next/image';

import { Container, Row, Col } from 'react-bootstrap';
import { Body, LogoWrapper } from './styles';

const Footer: React.FC = () => {
  return (
    <Body>
      <Container>
        <Row className="justify-content-between">
          <Col lg={2}>
            <LogoWrapper>
              <Image
                src="/logo01.svg"
                alt="Logo da Segtruck"
                layout="fill"
                objectFit="contain"
              />
            </LogoWrapper>
          </Col>

          <Col lg={4} className="d-flex align-items-center justify-content-end">
            <p> © Direto do Trecho - TODOS OS DIREITOS RESERVADOS </p>
          </Col>
        </Row>
      </Container>
    </Body>
  );
};

export default Footer;
