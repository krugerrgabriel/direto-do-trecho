import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Body, ImageWrapper } from './styles';

import SkeletonLoader from '../../components/SkeletonLoader';

import { INewsCard } from '../NewsCard/interface';

import { returnFormattedDate } from '../../functions';

const NewsMini: React.FC<INewsCard> = props => {
  const [newsImageLoading, setNewsImageLoading] = useState(false);

  let { item, color } = props;

  return (
    <>
      <Link href={`/noticia/${item.slug}`}>
        <a className="text-decoration-none">
          <Body type={props.type} color={color}>
            <h3>{item.category}</h3>
            <h2>{item.title}</h2>
            <ImageWrapper type={props.type}>
              {!newsImageLoading ? <SkeletonLoader /> : null}
              <Image
                src={`https://transdesk.com.br/souconsultor/grupo-unus/assets/img/news/${item.id}_thumb.jpg`}
                alt="Imagem da Notícia"
                layout="fill"
                objectFit="cover"
                onLoad={() => setNewsImageLoading(true)}
              />
            </ImageWrapper>

            <div className="info">
              <div>
                <h4>Por: {item.userName}</h4>
                <h4>{returnFormattedDate(item.createdAt)}</h4>
              </div>
            </div>
          </Body>
        </a>
      </Link>
    </>
  );
};

export default NewsMini;
