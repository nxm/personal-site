import NextLink from 'next/link';
import styled from "styled-components";
import { Icon } from "@iconify/react";
import Link from 'next/link';
import { Text } from "@mantine/core";


export function FooterComponent(): React.ReactElement {
  return (
      <Container>
        <LeftContainer>
        <Text>jakub.app</Text>
          <Text style={{ paddingLeft: '10px', paddingRight: '10px' }}>•</Text>
          <Text>{new Date().getFullYear()}</Text>
        </LeftContainer>
        <RightContainer>
            <Icon icon="bi:moon-fill" />
        </RightContainer>
      </Container>
  );
}

const LeftContainer = styled.div`
  left: 0;
  margin-left: 40px;
  margin-right: 40px;
  flex-direction: row;
  display: flex;
`;

const RightContainer = styled.div`
  right: 0;
  margin-left: 40px;
  margin-right: 40px;
  flex-direction: row;
  display: flex;
`;

const ExtLink = styled.a`
  font-family: 'FiraCode-Light';
  color: var(--text, #000000);
  text-decoration: none;
  opacity: 50%;
  :hover {
    cursor: pointer;
    color: #127796;
    text-decoration: underline;
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  font-family: 'FiraCode-Light';
  color: var(--text, #000000);
  opacity: 50%;
  :hover {
    cursor: pointer;
    color: #127796;
    text-decoration: underline;
  }
`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  min-width: fit-content;
  padding-top: 40px;
  width: 100%;
  z-index: 1;
  pointer-events: none;
  max-height: max-content;
  justify-content: space-between;
  padding-bottom: 40px;
  @media only screen and (max-width: 1080px) {
    visibility: hidden;
  }
`;