import { Container } from "react-bootstrap";
import styled from "styled-components";

function setTopPosition({ scrollDirection, isMenuOpen }) {
  if (isMenuOpen) return 0;

  return scrollDirection === 'down' ? '-6rem' : 0;
}

export const HeaderMobileContainer = styled(Container)`
  display: none !important;

  @media screen and (max-width: 991px) {
    display: flex !important;
    width: 100%;
    position: sticky;
    height: 6rem;
    background: #fff;
    top: ${setTopPosition};
    transition: top .2s;
  }

  .header-mobile__wrapper {
    z-index: 2;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderDesktopContainer = styled.div`
  position: sticky;
  background: #fff;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 32px;
  height: 6rem;
  align-items: center;
  z-index: 10;
  top: ${props => props.scrollDirection === 'down' ? '-6rem' : 0};
  transition: top .2s;

  @media screen and (max-width: 991px) {
    display: none;  
  }

  .logo svg {
    width: 72px;
    height: 72px;
    fill: #B30000;
  }

  .nav-link {
    font-size: 18px;
    text-transform: uppercase;
    padding-left: 1rem !important;
    padding-right: 1rem !important;
    color: #B30000 !important;
  }
`;

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: ${props => props.isMenuOpen ? 0 : '-100%'};
  width: 100%;
  transition: left .3s;
  z-index: 1;

  div {
    display: flex;
    flex-direction: column;
  }
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    letter-spacing: 0.5rem;
    text-decoration: none;
    color: #B30000;
    transition: color 0.3s linear;
    text-underline-offset: 4px;

    &:hover {
      text-decoration: underline;
    }
    
    @media screen and (max-width: 991px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;

export const StyledHamburger = styled.div`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 10;

  .burger {
    width: 2rem;
    height: 0.1rem;
    border-radius: 10px;
    background-color: #B30000;
    transform-origin: 1px;
    transition: all .3s linear;
  }
`;