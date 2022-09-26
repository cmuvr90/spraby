import styled, {css} from "styled-components";


const distribution = ({distribution}) => {
  switch (distribution) {
    case 'equalSpacing':
      return css`justify-content: space-between;`;
    case 'leading':
    default:
      return css`justify-content: flex-start;`;
    case 'trailing':
      return css`justify-content: flex-end;`;
    case 'center':
      return css`justify-content: center;`;
    case 'fill':
      return css`width: 100%;`;
    case 'fillEvery':
      return css`
        & > * {
          width: 100%
        }
      ;`;
  }
};

const alignment = ({alignment}) => {
  switch (alignment) {
    case 'leading':
    default:
      return css`align-items: flex-start;`;
    case 'trailing':
      return css`align-items: flex-end;`;
    case 'center':
      return css`align-items: center;`;
    case 'fill':
      return css`height: 100%;`;
    case 'baseline':
      return css`align-items: baseline;`;
  }
};

const spacing = ({spacing}) => {
  return css`
    & > *:not(:last-child) {
      margin-right: ${spacing};
    }
  `;
}

export const StackWrapper = styled.div`
  display: flex;
  flex-wrap: ${({wrap}) => wrap ? 'wrap' : 'no-wrap'};
  ${distribution}
  ${spacing}
  ${alignment}
`;