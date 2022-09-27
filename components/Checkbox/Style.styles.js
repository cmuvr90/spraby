import styled from "styled-components";

export const CheckboxWrapper = styled.div`
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
      border-radius: 3px;
      box-sizing: border-box;
      transition: border .2s;
    }

    &:after {
      content: '\\2713';
      position: absolute;
      width: 18px;
      height: 18px;
      font-size: 35px;
      top: -21px;
      left: -2px;
      opacity: 0;
      -webkit-transition: opacity .2s;
      transition: opacity .2s;
    }

    &:checked {
      &:before {
        border-color: var(--primary-darkes);
      }

      &:after {
        opacity: 1;
      }
    }
  }
`;