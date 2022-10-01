import styled, {css} from "styled-components";

const defaultColor = css`var(--primary-darkest)`;

const color = ({color}) => color ?? defaultColor;

export const Header1 = styled.h1`
  font-weight: 600;
  line-height: 1.429;
  color: ${color};
  font-size: ${({size}) => size ?? '2rem'}; 
`;

export const Header2 = styled.h2`
  color: ${color};
  font-size: ${({size}) => size ?? '1.429rem'};
`;

export const Header3 = styled.h3`
  color: ${color};
  font-size: ${({size}) => size ?? '1.286rem'};
`;

export const Header4 = styled.h4`
  color: ${color};
  font-size: ${({size}) => size ?? '1rem'};
`;

export const Header5 = styled.h5`
  color: ${color};
  font-size: ${({size}) => size ?? '0.857rem'};
`;

export const Header6 = styled.h6`
  color: ${color};
  font-size: ${({size}) => size ?? '0.714rem'};
`;

export const Paragraph = styled.p`
  color: ${color};
  font-size: ${({size}) => size ?? '1rem'};
`;

export const Wrapper = styled.span`
  color: ${color};
  font-size: ${({size}) => size ?? '1rem'};
`;
