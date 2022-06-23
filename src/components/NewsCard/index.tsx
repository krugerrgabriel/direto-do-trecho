import Image from 'next/image';
import Link from 'next/link';

import { Body, Overlay } from './styles';

import { INewsCard } from './interface';

import { returnFormattedDate } from '../../functions';

const NewsCard: React.FC<INewsCard> = props => {
  let { item } = props;

  return (
    <Link href={`/item/${item.id}`}>
      <a>
        <Body type={props.type}>
          <Image
            src={`https://transdesk.com.br/souconsultor/grupo-unus/assets/img/news/${item.id}_thumb.jpg`}
            alt="Imagem da Notícia"
            layout="fill"
            objectFit="cover"
          />
          <Overlay />

          <div className="info">
            <h3>{item.category}</h3>
            <h2>{item.title}</h2>
          </div>
          <h4>{returnFormattedDate(item.createdAt)}</h4>
        </Body>
      </a>
    </Link>
  );
};

export default NewsCard;
