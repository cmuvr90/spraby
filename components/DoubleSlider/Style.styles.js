import styled, {css} from "styled-components";

export const SliderWrapper = styled.div`
  
  .splide:first-child {
    margin-bottom: 8px;
    border-radius: 8px;
    overflow: hidden;

    .splide__slide {
      border-radius: 8px;
      overflow: hidden;

      img {
        border-radius: 8px;
      }
    }
  }


  .splide:last-child {
    border-radius: 4px;
    overflow: hidden;

    .splide__slide {
      position: relative;
      border-radius: 4px;
      overflow: hidden;
      border: none;
      padding-bottom: 6px;

      &:before {
        content: '';
        position: absolute;
        bottom: 1px;
        left: 50%;
        transform: translateX(-50%);
        width: 98%;
        height: 3px;
        border-radius: 4px;
        background: var(--primary);
        opacity: 0;
        transition: opacity .5s;
      }

      img {
        border-radius: 4px;
      }

      &.is-active {
        &:before {
          opacity: 1;
        }
      }
    }
  }

  img {
    width: 100%;
  }
`;