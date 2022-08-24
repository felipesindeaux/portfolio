import styled from "styled-components";

import { StyledProps } from ".";

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;

  @media (min-width: 750px) {
    height: 76px;
    background-color: var(--grey-0);
    border-bottom: 2px solid var(--color-primary);
  }
`;

export const Container = styled.div<StyledProps>`
  width: 100%;
  padding: 0px 25px;
  height: 76px;
  background-color: var(--grey-0);
  border-bottom: ${({ isOpen }) =>
    isOpen ? "none" : "2px solid var(--color-primary)"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s;

  @media (min-width: 750px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    border: none;
    padding: 0px 50px;
  }

  @media (min-width: 1115px) {
    padding: 0px;
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

export const MobileNavigator = styled.nav<StyledProps>`
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? "200px" : "0px")};
  padding: 0px 25px;
  position: relative;
  top: ${({ isOpen }) => (isOpen ? "0px" : "0px")};
  background-color: var(--grey-0);
  border-bottom: 2px solid var(--color-primary);
  display: flex;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  flex-direction: column;
  justify-content: space-around;
  transition: all 0.3s;

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
    position: relative;
    border: none;
    top: -39px;
    left: 0px;
    background: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    width: 280px;
    margin: 0;
    display: none;
  }
`;

export const DesktopNavigator = styled.nav`
  display: none;

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
    width: 280px;
  }
`;
