import { Body } from './styles';
import { Subtitle } from '../../styles/home';

import NewsMini from '../NewsMini';

import { IPostFetch } from '../../interfaces/IPost';

const Sidebar: React.FC<IPostFetch> = ({ posts }) => {
  return (
    <Body>
      <Subtitle> MAIS VISTOS </Subtitle>
      {/* @ts-ignore */}
      {posts.map((item, index) => {
        return (
          <div key={index}>
            <NewsMini item={item} />

            <hr />
          </div>
        );
      })}
    </Body>
  );
};

export default Sidebar;
