import Image from 'next/image';

import { Body } from './styles';
import { Subtitle } from '../../styles/home';

import NewsMini from '../NewsMini';

import { ISidebar } from './interface';

const Sidebar: React.FC<ISidebar> = props => {
  return (
    <>
      {/* @ts-ignore */}
      <Body color={props.color}>
        <div className="iconBox">
          <div>
            <Image
              src="/curva-acentuada.png"
              alt="Logo da Segtruck"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <Subtitle margin="0 0 0 6px" color={props.color}>
          MAIS VISTOS
        </Subtitle>
        <div className="margin-24px"></div>
        {/* @ts-ignore */}
        {props.posts.map((item, index) => {
          return (
            <div key={index}>
              <NewsMini color={props.color} item={item} />

              <hr />
            </div>
          );
        })}
      </Body>
    </>
  );
};

export default Sidebar;
