import Link from 'next/link';
import Image from 'next/image';

import { Body, ArrowWrapper, ContainerStyled } from './styles';

const Breadcrumb: React.FC<{ itemName: String; itemId: Number }> = props => {
  const { itemName, itemId } = props;
  return (
    <Body>
      <ContainerStyled>
        <Link href="/">
          <a> Início </a>
        </Link>
        <ArrowWrapper>
          <Image
            src="/right-arrow.svg"
            alt="Seta para a direita do Direto do Trecho - O Diário do Caminhoneiro"
            layout="fill"
            objectFit="cover"
          />
        </ArrowWrapper>
        <Link href={`/item/${itemId}`}>
          <a>{itemName}</a>
        </Link>
      </ContainerStyled>
    </Body>
  );
};

export default Breadcrumb;
