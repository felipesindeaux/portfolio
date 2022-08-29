import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--grey-0);
  height: 420px;

  @media (min-width: 750px) {
    height: 170px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  img {
    border-radius: 50%;
  }

  h2 {
    font: var(--title-3);
    color: var(--grey-4);
  }

  p {
    font: var(--body);
    color: var(--grey-2);
  }

  @media (min-width: 750px) {
    flex-direction: row;
    align-items: center;
    height: 100%;
    justify-content: space-between;
    max-width: 85%;
  }

  @media (min-width: 1115px) {
    max-width: 1000px;
  }
`;

export const DesktopDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
    height: 80px;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 750px) {
    flex-direction: row;
    width: 310px;

    div {
      height: 60px;
    }
  }
`;

export const Icons = styled.div`
  width: 256px;
  display: flex;
  justify-content: space-evenly;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    transition: all 0.6s;

    svg {
      color: white;
      width: 20px;
      height: 20px;
    }
  }

  .linkedin {
    background-color: var(--linkedin);

    :hover {
      background-color: transparent;
      border: 2px solid var(--linkedin);

      svg {
        color: var(--linkedin);
      }
    }
  }

  .github {
    background-color: var(--grey-4);

    svg {
      color: var(--grey-0);
    }

    :hover {
      background-color: transparent;
      border: 2px solid white;

      svg {
        color: white;
      }
    }
  }

  .mail {
    background-color: var(--color-primary);

    :hover {
      background-color: transparent;
      border: 2px solid var(--color-primary);

      svg {
        color: var(--color-primary);
      }
    }
  }
`;
