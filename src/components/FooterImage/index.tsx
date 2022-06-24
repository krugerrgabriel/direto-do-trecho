import Image from 'next/image';

import { Body } from './styles';

const FooterImage: React.FC = () => {
  return (
    <Body>
      <div>
        <Image
          src="/footer-image.jpg"
          alt="Logo da Segtruck"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </Body>
  );
};

export default FooterImage;
