import React from 'react';

import {
  Container,
  Wrapper,
  // Menu,
  HowTo,
  Logo,
  // Statistics,
  Settings,
  Colorful,
} from './styles';

interface HeaderProps {
  handleShowHowToClick: () => void;
}

function Header({ handleShowHowToClick }: HeaderProps) {
  return (
    <Container>
      <Wrapper>
        {/* <Menu>M</Menu> */}
        <HowTo onClick={handleShowHowToClick} />
      </Wrapper>

      <Logo>
        Riddl
        <Colorful>e</Colorful>
        <Colorful>e</Colorful>
        <Colorful>e</Colorful>
        y
      </Logo>

      <Wrapper>
        {/* <Statistics>S</Statistics> */}
        <Settings />
      </Wrapper>
    </Container>
  );
}

export default Header;
