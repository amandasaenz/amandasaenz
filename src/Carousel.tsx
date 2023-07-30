import styled from '@emotion/styled';
import { ReactComponent as Left } from './images/left.svg';
import { ReactComponent as Right } from './images/right.svg';
import React, { useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

interface Props {
  items: string[];
}

interface ButtonProps extends Props {
  index: number;
  variant: 'l' | 'r';
  onClick: () => void;
}

const theme = {
  primary: '#3E9A9E',
  secondary: '#FF6561',
};

const Carousel: React.FC<Props> = ({ items }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log(index);
  }, [index]);

  const handleClick = (variant: 'l' | 'r') => () => {
    variant === 'l'
      ? setIndex((index - 1 + items.length) % items.length)
      : setIndex((index + 1) % items.length);
  };

  const move = useSpring({
    transform: `translate3d(${-index * 100}%, 0, 0)`,
  });

  return (
    <>
      <Container>
        <Flexbox style={move}>
          {items.map((item) => (
            <Item key={item} item={item} />
          ))}
        </Flexbox>
      </Container>

      <ButtonContainer style={{ display: items.length === 1 ? 'none' : '' }}>
        <Button
          variant='l'
          onClick={handleClick('l')}
          index={index}
          items={items}
        />
        <CircleContainer>
          {items.map((_, i) => (
            <Circle key={i} isActive={i === index} />
          ))}
        </CircleContainer>
        <Button
          variant='r'
          onClick={handleClick('r')}
          index={index}
          items={items}
        />
      </ButtonContainer>
    </>
  );
};

export default Carousel;

const Container = styled(animated.div)`
  position: relative;
  overflow: hidden;
  background-color: purple;
`;

const Flexbox = styled(animated.div)`
  display: flex;
  width: 100%;
`;

const Item = styled.div<{ item: string }>`
  flex: 0 0 auto;
  width: 100%;
  padding-bottom: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${(p) => p.item});
`;

const Button = styled(({ variant, ...rest }: ButtonProps) =>
  variant === 'l' ? <Left {...rest} /> : <Right {...rest} />
)`
  cursor: pointer;
  fill: ${theme.secondary};
  width: 16px;
  height: 16px;
  flex: 1;
  padding: 16px 0;
  ${(p) =>
    p.variant === 'l' && p.index === 0
      ? `visibility: hidden;`
      : p.variant === 'r' && p.index === p.items.length - 1
      ? `visibility: hidden;`
      : `visibility: visible;`}
`;

const Circle = styled.div<{ isActive: boolean }>`
  height: 8px;
  width: 8px;
  border-radius: 8px;
  border: 1px solid ${theme.secondary};
  background-color: ${(p) => (p.isActive ? theme.secondary : '')};
`;

const CircleContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
