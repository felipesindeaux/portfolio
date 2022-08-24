import { HTMLAttributes, ReactNode, useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-scroll";
import {
  Container,
  Content,
  HamburguerMenu,
  Navigator,
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
      </Container>
      <Navigator isOpen={isOpen}>
        <Link
          to="headerCopy"
          activeClass="active"
          spy={true}
          offset={50}
          smooth={true}
          duration={500}
          onClick={toggleMenu}
        >
          Início
        </Link>
        <Link
          to="headerCopy2"
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
      </Navigator>
    </Wrapper>
  );
};

export default Header;
