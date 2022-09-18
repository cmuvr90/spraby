import styled from "styled-components";

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  
  &:hover {
    text-decoration: underline;
  }
  
  a {
    color: var(--primary-darkest);
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
  }
`;