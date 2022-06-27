import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

import { Body, LogoWrapper } from './styles';

const Navbar = () => {
  return (
    <>
      <Body>
        <Container className="d-flex align-items-center justify-content-center h-100">
          <Row className="w-100">
            <Col lg={12} className="d-flex justify-content-center">
              <Link href="/">
                <a>
                  <LogoWrapper>
                    <Image
                      src="/logo01.svg"
                      alt="Logo da Segtruck"
                      layout="fill"
                      objectFit="contain"
                    />
                  </LogoWrapper>
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </Body>
    </>
  );
};

export default Navbar;
