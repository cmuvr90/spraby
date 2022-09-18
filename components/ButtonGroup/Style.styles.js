import styled, {css} from "styled-components";

export const ButtonGroupWrapper = styled.div`

  display: grid;
  grid-template-columns: repeat(${({count}) => count}, 1fr);
  gap: 21px;

  & > *:not(:last-child) {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 2px;
      height: 80%;
      background: var(--secondary-dark);
      top: 50%;
      transform: translateY(-50%);
      right: -10px;
    }
  }

`;