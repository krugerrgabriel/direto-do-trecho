import { useEffect, useState } from 'react';

import { Col } from 'react-bootstrap';

import Image from 'next/image';

import { Divider } from '../NewsItem/styles';

import { Text, Body } from './styles';

import { IBanner } from './interface';

const Banner: React.FC<IBanner> = props => {
  let { wDivider, banners } = props;

  useEffect(() => {
    randomBanner();
  }, []);

  const [activeBanner, setActiveBanner] = useState(0);

  const randomBanner = () => {
    // @ts-ignore
    const len = banners.length;
    setActiveBanner(Math.floor(Math.random() * len));
  };

  return (
    <Col lg={12}>
      <Text> ANÚNCIO PUBLICITÁRIO </Text>
      <Body>
        <Image
          src={`https://transdesk.com.br/souconsultor/direto-do-trecho/assets/img/banners/${banners[activeBanner].id}.jpg`}
          alt={banners[activeBanner].title}
          layout="fill"
          objectFit="cover"
        />
      </Body>

      {wDivider ? <Divider /> : null}
    </Col>
  );
};

export default Banner;
