import styled from "styled-components";

export const SelectorWrapper = styled.label`
  position: relative;
  width: ${({full}) => full ? '100%' : 'auto'};

  padding: 0 10px;
  border: 1px solid var(--secondary-dark);
  border-radius: 8px;
  background-color: var(--secondary-lightest);

  &:before {
    content: "${({title}) => title}";
    position: absolute;
    top: -6px;
    left: 10px;
    font-size: 0.714rem;
    line-height: 1.143;
    height: 12px;
    padding: 0 5px;
    background-color: var(--secondary-lightest);
  }


  & > * {
    width: ${({full}) => full ? '100%' : 'auto'};
    border: none;
    height: 40px;
    padding: 0.754rem;
    background-color: var(--secondary-lightest);
    outline: none;
  }
`;