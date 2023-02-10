import { Container } from "react-bootstrap";
import styled from "styled-components";

export const HeaderMobileContainer = styled(Container)`
  display: none !important;

  @media screen and (max-width: 991px) {
    display: block !important;
    position: sticky;
    height: 6rem;
    background: #fff;
    top: ${props => props.scrollDirection === 'down' ? '-6rem' : 0};
    transition: top .2s;
  }

  .header-mobile__wrapper {
    display: flex;
    align-items: center;
    padding: 20px 0;
    justify-content: space-between;
  }

  .hamburger {
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 10;
  }

  .burger {
    width: 2rem;
    height: 0.1rem;
    border-radius: 10px;
    background-color: #B30000;
    transform-origin: 1px;
    transition: all .3s linear;
  }
`;

export const HeaderDesktopContainer = styled.div`
  
`;