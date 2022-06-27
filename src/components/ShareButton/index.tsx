import Image from 'next/image';

import { Body } from './styles';

const ShareButton: React.FC<{ type: string; text: string }> = ({
  type,
  text
}) => {
  let color;
  switch (type) {
    case 'facebook':
      color = '#4267B2';
      break;
    case 'twitter':
      color = '#1DA1F2';
      break;
    case 'whatsapp':
      color = '#25D366';
      break;
    case 'telegram':
      color = '#35ABE7';
      break;
  }

  return (
    <Body color={color}>
      <div className={`iconWrapper ${type}`}>
        <Image
          src={`/${type}-icon.svg`}
          alt={`Compartilhar o Direto do Trecho no ${type.toUpperCase()}`}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <p>{text}</p>
    </Body>
  );
};

export default ShareButton;
