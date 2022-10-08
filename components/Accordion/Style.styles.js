import styled from "styled-components";


export const Body = styled.div`
  overflow: hidden;
  height: ${({height}) => `${height}`};
  transition: height .3s;
`;

export const AccordionWrapper = styled.div`
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 5px 0;
  background: var(--secondary-lightest);

  & > * {
    z-index: 1;
    line-height: 24px;
    background: var(--secondary-lightest);

    &:first-child {
      padding-right: 10px;
    }

    &:last-child {
      padding-left: 10px;
    }
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background: var(--secondary-dark);
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`;

export const Icon = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 50%;
  transform: rotate(${({state}) => state === 'close' ? 180 : 0}deg);
  transition: transform .3s;

  svg {
    path {
      stroke: var(--primary);
    }
  }

  & > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;