import styled, {css} from "styled-components";

const background = ({primary, inner}) => {
    if (inner && primary) return css`var(--secondary-lightest)`
    if (primary) return css`var(--primary)`;
    return css`var(--secondary-dark)`;
};

const backgroundHover = ({primary}) => {
    if (primary) return css`var(--primary-dark)`;
    return css`var(--secondary)`;
};

const color = ({primary, inner}) => {
    if (primary && inner) return css`var(--primary)`;
    if (primary) return css`var(--secondary-lightest)`;
    return css`var(--secondary-darker)`;
};

const padding = ({size}) => {
    switch (size) {
        case 'extra-small':
            return '1px 10px';
        case 'small':
            return '5px 15px';
        case 'medium':
        default:
            return '10px 20px';
        case 'large':
            return '15px 30px';
        case 'extra-large':
            return '20px 35px';
    }
};

const fontSize = ({size}) => {
    switch (size) {
        case 'extra-small':
            return '.7rem';
        case 'small':
            return '.9rem';
        case 'medium':
        default:
            return '1rem';
        case 'large':
            return '1.5rem';
        case 'extra-large':
            return '2rem';
    }
};

export const ButtonStyled = styled.button`
  width: ${({full}) => full ? '100%' : 'auto'};
  font-size: ${fontSize};
  line-height: 1.714;
  padding: ${padding};
  background: ${background};
  color: ${color};
  border-radius: 4px;
  border: 1px solid ${({inner}) => inner ? color : 'transparent'};
  transition: all .3s;

  &:hover {
    background: ${backgroundHover};
    ${({inner}) => inner ? css`color: ${background}` : ''};
  }
`;