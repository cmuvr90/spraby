import styled from "styled-components";

export const RadioWrapper = styled.div`
  display: flex;
  align-content: center;

  span {
    padding-left: 10px;
    line-height: 1;
  }

  input {
    position: relative;
    width: 16px;
    height: 16px;

    &:before {
      content: '';
      position: absolute;
      width: 18px;
      height: 18px;
      top: -1px;
      left: -1px;
      background: var(--secondary-lightest);
      border: 1px solid var(--secondary-dark);
      border-radius: 50%;
      box-sizing: border-box;
      transition: border .2s;
    }

    &:after {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      font-size: 35px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background: var(--primary-darkest);
      -webkit-transition: opacity .2s;
      transition: opacity .2s;
      opacity: 0;
    }

    &:checked {
      &:before {
        border-color: var(--primary-darkest);
      }

      &:after {
        opacity: 1;
      }
    }
  }
`;