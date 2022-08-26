import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--grey-1);
  border-bottom: 3px solid var(--color-tertiary-50);
  z-index: 2;
`;

export const Content = styled.div`
  width: 100%;
  padding-bottom: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1{
    font: var(--title-2);
    color: var(--grey-4);
    margin: 40px 0px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 1300px;
  }

  @media (min-width: 750px) {
    ul {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      height: 700px;
      max-width: 865px;
    }
  }

  @media (min-width: 935px) {
    ul {
      max-width: 1155px;
      justify-content: space-evenly;
      height: 500px;
    }
  }
`;

export const BottomOutline = styled.div`
  width: 100%;
  height: 3px;
  background-color: var(--color-tertiary-50);
  z-index: 2;
`;
