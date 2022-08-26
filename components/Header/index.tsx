import { HTMLAttributes, ReactNode, useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-scroll";
import {
  Container,
  Content,
  DesktopNavigator,
  HamburguerMenu,
  MobileNavigator,
  Wrapper,
} from "./styled";

export interface StyledProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isOpen: boolean;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <Container isOpen={isOpen}>
        <Content>
          <h1>Felipe</h1>
          <HamburguerMenu onClick={toggleMenu}>
            {isOpen ? <HiOutlineX /> : <HiMenu />}
          </HamburguerMenu>
        </Content>
        <DesktopNavigator>
          <Link
            to="homeSection"
            activeClass="active"
            spy={true}
            offset={-76}
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            Início
          </Link>
          <Link
            to="techsSection"
            spy={true}
            offset={-76}
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            Tecnologias
          </Link>
          <Link
            to="projectsSection"
            spy={true}
            offset={-76}
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            Projetos
          </Link>
          <Link
            to="item"
            spy={true}
            offset={50}
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            Contato
          </Link>
        </DesktopNavigator>
      </Container>
      <MobileNavigator isOpen={isOpen}>
        <Link
          to="homeSection"
          activeClass="active"
          spy={true}
          offset={0}
          smooth={true}
          duration={500}
          onClick={toggleMenu}
        >
          Início
        </Link>
        <Link
            to="techsSection"
            spy={true}
            offset={-76}
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            Tecnologias
          </Link>
        <Link
          to="projectsSection"
          spy={true}
          offset={-76}
          smooth={true}
          duration={500}
          onClick={toggleMenu}
        >
          Projetos
        </Link>
        <Link
          to="item"
          spy={true}
          offset={50}
          smooth={true}
          duration={500}
          onClick={toggleMenu}
        >
          Contato
        </Link>
      </MobileNavigator>
    </Wrapper>
  );
};

export default Header;
