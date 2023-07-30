import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import data from './data/ProjectData';

const Home: React.FC = () => {
  const listItems = data.art.map((x) => (
    <Square
      key={x.id}
      to={`/3D/${x.id}`}
      style={{ backgroundImage: `url(${x.thumb})` }}
    />
  ));

  return <Container>{listItems}</Container>;
};

export default Home;

const Container = styled.div`
  display: grid;
  gap: 16px;
  padding-top: 64px;
  grid-template-columns: 1fr;

  @media (min-width: 651px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Square = styled(Link)`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  background-color: #2980b9;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
