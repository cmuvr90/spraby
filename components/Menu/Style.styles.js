import styled from "styled-components";

export const MenuWrapper = styled.nav`

  padding: 0;

  a {
    cursor: pointer;
    font-size: 1rem;
    line-height: 1.714;
    color: var(--primary-darkest);
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  //------------------- FIRST LINE 

  & > ul {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;

    & > li {

      & > a {
        position: relative;
        display: block;
        color: var(--primary-darkest);
        font-weight: 700;
        padding: 20px 0;

        &:before {
          content: '';
          position: absolute;
          bottom: 3px;
          left: 0;
          width: 100%;
          height: 3px;
          border-radius: 4px;
          background: var(--primary);
          opacity: 0;
          transition: opacity .3s;
        }
      }

      &:hover {

        & > a {
          &:before {
            opacity: 1;
          }
        }

        & > ul {
          top: calc(100% + 4px);
          right: 0;
          opacity: 1;
        }
      }

      //------------------- SECOND LINE  

      & > ul {
        background: var(--secondary-lightest);
        position: absolute;
        z-index: 1;
        display: grid;
        grid-template-columns: 1fr;
        gap: 12px;        
        width: 100%;
        top: 1000vh;
        right: 1000vw;
        padding: 24px;
        box-shadow: 0 6px 20px -4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        opacity: 0;
        transition: opacity .3s;

        & > li {
          position: relative;

          & > a {
            position: relative;
            display: block;
            width: 30%;
            transition: color .3s;

            &:before {
              content: '\\276D';
              position: absolute;
              right: 5%;
              top: 50%;
              transform: translateY(-50%);
              opacity: 0;
              color: var(--primary);
              transition: opacity .3s;
            }
          }

          &:hover {

            & > a {
              color: var(--primary);

              &:before {
                opacity: 1;
              }
            }

            & > ul {
              display: grid;
            }
          }

          //------------------- THIRD LINE  

          & > ul {
            padding: 0 0 0 20px;
            position: absolute;
            z-index: 2;
            top: 0;
            right: 0;
            width: 70%;
            display: none;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            border-left: 1px solid var(--secondary-dark);

            & > li {
              &:hover {
                a {
                  color: var(--primary);
                }
              }
            }
          }
        }
      }
    }
  }
`;