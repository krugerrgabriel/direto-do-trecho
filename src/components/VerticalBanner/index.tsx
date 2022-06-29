import { useEffect, useState } from 'react';

import { Col } from 'react-bootstrap';

import Image from 'next/image';
import Link from 'next/link';

import SkeletonLoader from '../../components/SkeletonLoader';

import { Divider } from '../NewsItem/styles';

import { Text, Body } from './styles';

import { IVerticalBanner } from './interfaces';

const VerticalBanner: React.FC<IVerticalBanner> = props => {
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

  const [newsImageLoading, setNewsImageLoading] = useState(false);

  return (
    <Col lg={12} className="vertical-banner">
      <Link href={banners[activeBanner].url || '#!'} passHref={true}>
        <a
          className={
            banners[activeBanner].url ? 'no-text-decoration' : 'no-link'
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text> ANÚNCIO PUBLICITÁRIO </Text>
          <Body title={banners[activeBanner].title}>
            {!newsImageLoading ? <SkeletonLoader /> : null}
            <Image
              src={`https://transdesk.com.br/souconsultor/direto-do-trecho/assets/img/banners/${banners[activeBanner].id}.jpg?1`}
              alt={banners[activeBanner].title}
              layout="fill"
              objectFit="cover"
              onLoad={() => setNewsImageLoading(true)}
            />
          </Body>
        </a>
      </Link>

      {wDivider ? <Divider /> : null}
    </Col>
  );
};

export default VerticalBanner;
