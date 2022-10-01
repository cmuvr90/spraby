import styled, {css} from "styled-components";

const background = ({status}) => {
    switch (status) {
        case 'info':
            return css`var(--secondary)`;
        case 'warning':
            return css`var(--secondary)`;
        case 'alert':
            return css`var(--secondary-dark)`;
        case 'success':
            return css`var(--secondary-dark)`;
    }
};

export const BadgeWrapper = styled.div`
  background-color: ${background};
  display: flex;
  justify-items: center;
  align-content: center;
  padding: 7px 10px;
  min-width: 50px;
  border-radius: 30px;
`;