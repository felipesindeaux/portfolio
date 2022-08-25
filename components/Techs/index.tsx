import { HTMLAttributes, ReactNode, useState } from "react";
import {
  AiFillPlusCircle,
  AiOutlineDatabase,
  AiOutlineDesktop,
} from "react-icons/ai";
import {
  SiCss3,
  SiDjango,
  SiDocker,
  SiExpress,
  SiGit,
  SiHeroku,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiStyledcomponents,
  SiTypescript,
  SiVercel,
  SiWindows,
} from "react-icons/si";
import {
  BackEndSection,
  BottomOutline,
  Content,
  FrontEndSection,
  IconsDiv,
  Others,
  TechsWrapper,
  TitleSection,
  Wrapper,
} from "./styled";

export interface StyledProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isOpen: boolean;
}

const Techs = () => {
  const [frontOpen, setFrontOpen] = useState(false);
  const [backOpen, setBackOpen] = useState(false);
  const [othersOpen, setOthersOpen] = useState(false);

  const switchFront = () => {
    setFrontOpen(!frontOpen);
  };
  const switchBack = () => {
    setBackOpen(!backOpen);
  };
  const switchOthers = () => {
    setOthersOpen(!othersOpen);
  };

  return (
    <>
      <Wrapper id="techsSection">
        <Content>
          <TitleSection>
            <h2>Habilidades</h2>
            <p>Algumas tecnologias que conheço</p>
          </TitleSection>
          <TechsWrapper>
            <FrontEndSection>
              <h3>Front-End</h3>
              <IconsDiv isOpen={frontOpen}>
                <div onClick={switchFront}>
                  <AiOutlineDesktop />
                </div>
                <div>
                  <span>HTML</span>
                  <SiHtml5 />
                </div>
                <div>
                  <span>CSS</span>
                  <SiCss3 />
                </div>
                <div>
                  <span>Javascript</span>
                  <SiJavascript />
                </div>
                <div>
                  <span>Typescript</span>
                  <SiTypescript />
                </div>
                <div>
                  <span>React</span>
                  <SiReact />
                </div>
                <div>
                  <span>Styled Components</span>
                  <SiStyledcomponents />
                </div>
              </IconsDiv>
            </FrontEndSection>
            <BackEndSection>
              <h3>Back-End</h3>
              <IconsDiv isOpen={backOpen}>
                <div onClick={switchBack}>
                  <AiOutlineDatabase />
                </div>
                <div>
                  <span>Node.js</span>
                  <SiNodedotjs />
                </div>
                <div>
                  <span>Express.js</span>
                  <SiExpress />
                </div>
                <div>
                  <span>Prisma</span>
                  <SiPrisma />
                </div>
                <div>
                  <span>PostgreSQL</span>
                  <SiPostgresql />
                </div>
                <div>
                  <span>Django</span>
                  <SiDjango />
                </div>
                <div>
                  <span>Python</span>
                  <SiPython />
                </div>
              </IconsDiv>
            </BackEndSection>
            <Others>
              <h3>Outras</h3>
              <IconsDiv isOpen={othersOpen}>
                <div onClick={switchOthers}>
                  <AiFillPlusCircle />
                </div>
                <div>
                  <span>Linux</span>
                  <SiLinux />
                </div>
                <div>
                  <span>Windows</span>
                  <SiWindows />
                </div>
                <div>
                  <span>Git</span>
                  <SiGit />
                </div>
                <div>
                  <span>Docker</span>
                  <SiDocker />
                </div>
                <div>
                  <span>Vercel</span>
                  <SiVercel />
                </div>
                <div>
                  <span>Heroku</span>
                  <SiHeroku />
                </div>
              </IconsDiv>
            </Others>
          </TechsWrapper>
        </Content>
      </Wrapper>

      <BottomOutline />
    </>
  );
};

export default Techs;
