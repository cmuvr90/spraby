import styled, {css} from "styled-components";

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({columns}) => columns.map(i => `${i}0% `)};
  gap: ${({gap}) => gap};
`;

export const SectionWrapper = styled.div`
  ${({width}) => {
    if (width) return css`width: ${width}`;
  }};
`;