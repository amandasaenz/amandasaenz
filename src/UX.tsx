import styled from '@emotion/styled';
import data from './data/ProjectData';
import { Link } from 'react-router-dom';
import spidey from './images/spidey.png';

const UX: React.FC = () => {
  const listItems = data.ux.map((x) => (
    <Rectangle
      key={x.id}
      to={x.href}
      target='_blank'
      style={{ backgroundImage: `url(${spidey})` }}
    />
  ));
  return <Container>{listItems}</Container>;
};

export default UX;

const Container = styled.div`
  padding-top: 64px;
  display: grid;
  gap: 16px;
  max-width: 700px;
  margin: 0 auto;
`;

const Rectangle = styled(Link)`
  width: 100%;
  padding-bottom: 60%;
  position: relative;
  background-color: #2980b9;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
