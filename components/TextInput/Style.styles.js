import styled from "styled-components";

export const TextInputWrapper = styled.div`
  width: 100%;
`;

export const TextInputBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--secondary-dark);
  border-radius: 4px;
  padding: 5px;

  input {
    width: 100%;
    margin: 0 5px;
    border: none;

    &::placeholder {
      color: var(--secondary-darker);
    }
  }

`;

export const TextInputPrefix = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextInputSuffix = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

