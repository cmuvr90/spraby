import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${({columns}) => columns}, 1fr);
  gap: ${({gap}) => gap};
`;