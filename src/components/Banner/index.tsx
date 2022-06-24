import { Col } from 'react-bootstrap';

import Image from 'next/image';

import { Divider } from '../NewsItem/styles';

import { Body } from './styles';

const Banner: React.FC<{ wDivider?: Boolean }> = props => {
  let { wDivider } = props;

  return (
    <Col lg={12}>
      <Body>
        <Image
          src="https://segtruck.com.br/assets/img/banners/segtruck_nacao-pesada01.jpg"
          alt="Banner da Segtruck"
          layout="fill"
          objectFit="cover"
        />
      </Body>

      {wDivider ? <Divider /> : null}
    </Col>
  );
};

export default Banner;
