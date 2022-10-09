import styled from "styled-components";

export const Wrapper = styled.div`
`;

export const Header = styled.div`
  display: flex;
  font-weight: 600;
  line-height: 1.5;
  justify-content: space-between;
  font-size: 1.14rem;
  color: var(--secondary-darker);
  padding: 24px 0;

  & div {
    position: relative;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      border-radius: 4px;
      background: var(--primary);
      opacity: 0;
      transition: opacity .3s;
    }

    &.active {
      color: var(--primary-darkest);
      
      &:before {
        opacity: 1;
      }
    }
  }
`;

export const Body = styled.div`

  & div {
    display: none;

    &.active {
      display: block;
    }
  }
`;