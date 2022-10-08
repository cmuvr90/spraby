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

const spacing = ({spacing, vertical}) => {
    return css`
      margin-bottom: -${spacing};

      & > * {
        margin-bottom: ${spacing};
      }

      & > .stack {
        margin-bottom: ${spacing};
      }

      & > *:not(:last-child) {
        margin-right: ${!vertical ? spacing : '0'};
      }
    `;
}

export const StackWrapper = styled.div`
  display: flex;
  flex-wrap: ${({wrap}) => wrap === 'true' ? 'wrap' : 'no-wrap'};
  ${distribution}
  ${spacing}
  ${alignment}
  ${({vertical}) => vertical ? 'flex-direction: column;' : ''}
  ${({full}) => full ? css`width: 100%` : ''}
`;