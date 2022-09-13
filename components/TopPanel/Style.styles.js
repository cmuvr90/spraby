import styled from "styled-components";

export const TopPanelStyled = styled.div`
  font-size: 0.857rem;
  padding: 8px;
  line-height: 1.333;
  background: #272738;
  border-radius: 0 0 8px 8px;
  color: #eee;
  text-align: ${({align}) => align};
`;