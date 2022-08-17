import styled from "styled-components";

import { HeaderProps } from ".";

export const Wrapper = styled.header<HeaderProps>`
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? "250px" : "76px")};
  background-color: var(--grey-0);
  border-bottom: 2px solid var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;

  @media (min-width: 750px) {
    height: 76px;
  }
`;

export const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 750px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: var(--grey-4);
    font: var(--title-4);
  }

  @media (min-width: 750px) {
    width: auto;
  }
`;

export const HamburguerMenu = styled.div`
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--grey-1);
  border-radius: 8px;
  cursor: pointer;

  svg {
    fill: var(--grey-2);
    color: var(--grey-2);
    width: 25px;
    height: 25px;
  }

  @media (min-width: 750px) {
    display: none;
  }
`;

export const Navigator = styled.nav<HeaderProps>`
  margin-top: 35px;
  height: 140px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;

  .active {
    color: var(--grey-4);
  }

  a {
    color: var(--grey-2);
    font-family: "IBM Plex Sans";
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;

    :hover {
      color: var(--grey-4);
    }
  }

  @media (min-width: 750px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    width: 280px;
    margin: 0;
  }
`;
