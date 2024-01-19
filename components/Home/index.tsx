import Image from "next/image";
import {
  BackgroundContent,
  BackgroundImages,
  BottomOutline,
  Buttons,
  CatchPhrase,
  Content,
  Description,
  PersonalInfo,
  Wrapper,
} from "./styled";

import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-scroll";

const HomeSection = () => {
  return (
    <>
      <BackgroundContent>
        <Wrapper id="homeSection">
          <Content>
            <PersonalInfo>
              <Image
                src={
                  "https://avatars.githubusercontent.com/u/116728290"
                }
                alt="Profile Photo"
                height={46}
                width={46}
              />
              <h4>Olá, meu nome é Felipe</h4>
            </PersonalInfo>
            <CatchPhrase>
              Eu <span>amo</span> criar e <span>desenvolver</span> projetos
            </CatchPhrase>
            <Description>
              Descubra aqui nesse ambiente criado especialmente para você, alguns de
              meus projetos e tecnologias
            </Description>
            <Buttons>
              <Link
                className="button"
                to="projectsSection"
                activeClass="active"
                spy={true}
                offset={-76}
                smooth={true}
                duration={500}
              >
                Ver Projetos
              </Link>
              <a
                href="https://github.com/felipesindeaux"
                target="_blank"
                rel="noreferrer"
                className="gitButton"
              >
                <AiFillGithub />
              </a>
            </Buttons>
          </Content>
          <BackgroundImages>
            <div>
              <Image
                src={"https://i.imgur.com/nx1l9yd.png"}
                alt="Project Photo"
                height={350}
                width={600}
              />
            </div>
            <div>
              <Image
                src={"https://i.imgur.com/Q3O4PL9.png"}
                alt="Project Photo"
                height={350}
                width={600}
              />
            </div>
            <div>
              <Image
                src={"https://i.imgur.com/6YRIGMa.png"}
                alt="Project Photo"
                height={350}
                width={600}
              />
            </div>
          </BackgroundImages>
        </Wrapper>
      </BackgroundContent>
      <BottomOutline />
    </>
  );
};

export default HomeSection;
