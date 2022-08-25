import styled from "styled-components";
import { StyledProps } from ".";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--grey-0);
  border-bottom: 3px solid var(--color-tertiary-50);
  z-index: 2;
`;

export const Content = styled.div`
  width: 100%;
  height: 1400px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1115px) {
    height: 600px;
    width: 1115px;
  }
`;

export const BottomOutline = styled.div`
  width: 100%;
  height: 3px;
  background-color: var(--color-tertiary-50);
  z-index: 2;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 60px auto 0 auto;
  height: 65px;
  width: 100%;
  flex-shrink: 0;

  h2 {
    font: var(--title-3);
    color: var(--grey-4);
    text-align: center;
  }

  p {
    font: var(--body);
    color: var(--grey-2);
    text-align: center;
  }
`;

export const TechsWrapper = styled.div`
  @media (min-width: 1115px) {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export const FrontEndSection = styled.div`
  margin-top: 40px;
  position: absolute;
  top: 800px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  h3 {
    font: var(--title-2);
    color: var(--grey-4);
    text-align: center;
  }
  display: flex;
  flex-direction: column;

  @media (min-width: 1115px) {
    right: 340px;
    margin: 0;
    position: inherit;
  }
`;

export const BackEndSection = styled.div`
  margin-top: 40px;
  position: absolute;
  top: 1200px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  h3 {
    font: var(--title-2);
    color: var(--grey-4);
    text-align: center;
  }
  display: flex;
  flex-direction: column;

  @media (min-width: 1115px) {
    right: 0px;
    top: 802px;
    margin: 0;
    position: inherit;
  }
`;

export const Others = styled.div`
  margin-top: 40px;
  position: absolute;
  top: 1600px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  h3 {
    font: var(--title-2);
    color: var(--grey-4);
    text-align: center;
  }
  display: flex;
  flex-direction: column;

  @media (min-width: 1115px) {
    /* left: 830px;
   top: 0px; */
    margin: 0;
    position: inherit;
  }
`;

export const IconsDiv = styled.div<StyledProps>`
  padding: 120px 0px;
  align-self: center;

  @keyframes shake {
    0% {
      transform: rotate(0);
    }
    10% {
      transform: rotate(10deg);
    }
    20% {
      transform: rotate(0);
    }
    80% {
      transform: rotate(0);
    }
    90% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(0);
    }
  }

  span {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: var(--grey-1);
    font: var(--caption-bold);
    background-color: var(--grey-2);
    border-radius: 3px;
    padding: 5px 7px;
    position: absolute;
    top: 0px;
    opacity: 0;
    transition: all 0.4s;
  }

  div:hover {
    span {
      top: 65px;
      opacity: 1;
    }
  }

  div:nth-child(1) {
    z-index: 1;
    cursor: pointer;
    animation: ${({ isOpen }) =>
      isOpen ? "none" : "shake 1s 1s both infinite"};
  }

  div:nth-child(2) {
    top: ${({ isOpen }) => (isOpen ? "20px" : "-80px")};
  }

  div:nth-child(3) {
    top: ${({ isOpen }) => (isOpen ? "-105px" : "-160px")};
    left: ${({ isOpen }) => (isOpen ? "90px" : "0px")};
  }

  div:nth-child(4) {
    top: ${({ isOpen }) => (isOpen ? "-285px" : "-240px")};
    left: ${({ isOpen }) => (isOpen ? "90px" : "0px")};
  }

  div:nth-child(5) {
    top: ${({ isOpen }) => (isOpen ? "-415px" : "-320px")};
    left: ${({ isOpen }) => (isOpen ? "0px" : "0px")};
  }

  div:nth-child(6) {
    top: ${({ isOpen }) => (isOpen ? "-445px" : "-400px")};
    left: ${({ isOpen }) => (isOpen ? "-90px" : "0px")};
  }

  div:nth-child(7) {
    top: ${({ isOpen }) => (isOpen ? "-425px" : "-480px")};
    left: ${({ isOpen }) => (isOpen ? "-90px" : "0px")};
  }

  div {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: var(--grey-1);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.4s;

    svg {
      fill: var(--grey-2);
      width: 40px;
      height: 40px;
    }
  }
`;
