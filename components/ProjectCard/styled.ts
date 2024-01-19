import styled from "styled-components";
import { StyledProps } from ".";

export const Wrapper = styled.li<StyledProps>`
  list-style-type: none;

  .container {
    width: 290px;
    height: 200px;
    border-radius: 5px;

    //1160x800
    background: url(${({ img }) => img});
    background-position: center;
    background-color: black;
    background-size: contain;
    background-repeat: no-repeat;

    -webkit-box-shadow: 0 0 5px rgba(18, 18, 20, 0.4);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }

  .overlay {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background: rgba(18, 18, 20, 0.9);
    color: var(--grey-3);
    opacity: 0;
    transition: all 0.5s;
  }

  .title {
    font: var(--title-3);

    transform: translateY(40px);
    transition: all 0.7s;
  }

  .description {
    font: var(--body);
    color: var(--grey-3);
    text-align: center;
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.7s;
    padding: 0px 30px;
  }

  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-around;
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.7s;

    div {
      display: flex;
      align-items: center;

      a {
        text-decoration: none;
        background: none;
        border: none;
        font: var(--headline);
        color: var(--grey-3);
        margin-left: 8px;
      }

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }

  .categories {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.7s;

    span {
      font: var(--headline);
      background-color: var(--color-primary);
      padding: 5px 12px;
      border-radius: 15px;
    }
  }

  .container:hover .overlay {
    opacity: 1;
    .title {
      transform: translateY(0px);
    }

    .description {
      transform: translateY(0px);
      transition-delay: 0.3s;
      opacity: 1;
    }

    .buttons {
      transform: translateY(0px);
      transition-delay: 0.6s;
      opacity: 1;
    }

    .categories {
      transform: translateY(0px);
      transition-delay: 0.9s;
      opacity: 1;
    }
  }
`;
