import { Container } from "react-bootstrap";
import styled from "styled-components";

function setTopPosition({ scrollDirection, isMenuOpen }) {
  if (isMenuOpen) return 0;

  return scrollDirection === 'down' ? '-6rem' : 0;
}

export const HeaderMobileContainer = styled(Container)`
  @media screen and (max-width: 991px) {
    top: ${setTopPosition};
  }
`;

export const HeaderDesktopContainer = styled.div`
  top: ${props => props.scrollDirection === 'down' ? '-6rem' : 0};
`;

export const StyledMenu = styled.nav`
  left: ${props => props.isMenuOpen ? '50%' : '-150vh'};
  transform: translateX(${props => props.isMenuOpen ? '-50%' : '0'});
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;
