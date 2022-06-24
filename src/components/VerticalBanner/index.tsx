import { Col } from 'react-bootstrap';

import Image from 'next/image';

import { Divider } from '../NewsItem/styles';

import { Text, Body } from './styles';

const VerticalBanner: React.FC<{ wDivider?: Boolean }> = props => {
  let { wDivider } = props;

  return (
    <Col lg={12}>
      <Body>
        <Image
          src="/vertical-banner.jpg"
          alt="Banner da Segtruck"
          layout="fill"
          objectFit="cover"
        />
      </Body>

      {wDivider ? <Divider /> : null}
    </Col>
  );
};

export default VerticalBanner;
