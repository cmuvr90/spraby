import styled, {css} from "styled-components";

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({columns, unit}) => columns.map(i => `${i}${unit}`).join(' ')};
  gap: ${({gap}) => gap};
`;

export const SectionWrapper = styled.div`
  ${({width}) => {
    if (width) return css`width: ${width}`;
  }};
`;