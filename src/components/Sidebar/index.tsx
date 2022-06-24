import { Body } from './styles';
import { Subtitle } from '../../styles/home';

import NewsMini from '../NewsMini';

import { ISidebar } from './interface';

const Sidebar: React.FC<ISidebar> = props => {
  return (
    <>
      {/* @ts-ignore */}
      <Body color={props.color}>
        <Subtitle color={props.color}> MAIS VISTOS </Subtitle>
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
