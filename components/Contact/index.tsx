import Image from "next/image";
import { HTMLAttributes, ReactNode } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { Content, DesktopDiv, Icons, Wrapper } from "./styled";

export interface StyledProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isOpen: boolean;
}

const Contact = () => {
  return (
    <Wrapper id="contactSection">
      <Content>
        <DesktopDiv>
          <Image
            src={
              "https://media-exp1.licdn.com/dms/image/C4D03AQG0wjCymSfrsA/profile-displayphoto-shrink_800_800/0/1629982945571?e=1666828800&v=beta&t=ogmNCKpNxOLCTGic7zR-YBBxKtvBdKYG2GDgXcayjYY"
            }
            alt="Profile Photo"
            height={60}
            width={60}
          />
          <div>
            <h2>Obrigado</h2>
            <p>Entre em contato comigo</p>
          </div>
        </DesktopDiv>
        <Icons>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/felipesindeaux/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="github"
            href="https://github.com/felipesindeaux"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="mail"
            href="mailto:felipesindeaux@outlook.com"
            target="_blank"
            rel="noreferrer"
          >
            <MdOutlineMailOutline />
          </a>
        </Icons>
      </Content>
    </Wrapper>
  );
};

export default Contact;
