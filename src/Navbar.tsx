import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import logo from './images/logo.svg';

const Navbar: React.FC = () => {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          padding: '10px 16px',
          boxSizing: 'border-box',
        }}
      >
        <Icon to='/' />
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <LinkStyle to='/'>3D</LinkStyle>
        <LinkStyle to='/UX'>UX</LinkStyle>
        <LinkStyle to='/resume'>Resume</LinkStyle>
      </div>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  height: 64px;
`;

const LinkStyle = styled(Link)`
  color: #ff6561;
  text-decoration: none;
  padding: 16px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-tap-highlight-color: transparent;
`;

const Icon = styled(Link)`
  width: 42px;
  height: 42px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
