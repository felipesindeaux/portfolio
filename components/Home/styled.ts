import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media (min-width: 1115px) {
    justify-content: flex-start;
  }
`;

export const BackgroundContent = styled.div`
  width: 100%;
  background-color: var(--grey-1);
  border-bottom: 3px solid var(--color-tertiary-50);
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 600px;
  height: 100%;
  padding: 130px 30px 90px 30px;

  @media (min-width: 1115px) {
    padding: 130px 0;
  }
`;

export const PersonalInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
  }

  h4 {
    font: var(--headline);
    color: var(--grey-3);
    margin-left: 20px;
  }
`;
export const CatchPhrase = styled.h2`
  font: var(--title-1);
  color: var(--grey-4);
  margin-top: 50px;

  span {
    color: var(--color-primary);
  }
`;

export const Description = styled.p`
  font: var(--headline);
  color: var(--grey-2);
  margin-top: 46px;
`;

export const BackgroundImages = styled.div`
  display: none;

  @media (min-width: 1115px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: 0.5;
    position: absolute;
    height: 600px;
    width: 400px;
    right: 0px;
    top: -19px;
    z-index: 1;

    div {
      transform: matrix(1, 0.38, 0, 0.89, 0, 0);
    }
  }
`;

export const Buttons = styled.div`
  margin-top: 43px;
  display: flex;

  button{
    height: 48px;
    width: 160px;
    border-radius: 8px;
    padding: 0px 32px;
    background-color: var(--color-primary);
    color: white;
    border: none;
    font-family: "Inter";
    font-size: 16px;
    font-weight: 600;
    margin-right: 16px;
  }

  a{
    color: black;
    width: 48px;
    height: 48px;
    background-color: var(--grey-4);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg{
      width: 23px;
      height: 23px;
    }
  }
`
