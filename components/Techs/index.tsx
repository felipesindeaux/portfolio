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
  SiGooglecloud,
  SiMicrosoftexcel
} from "react-icons/si";
import { FaVuejs, FaAws } from "react-icons/fa";
import { SiRubyonrails, SiQuasar, SiAdonisjs, SiChartdotjs } from "react-icons/si";
import { DiRubyRough } from "react-icons/di";
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
                  <span>Vue</span>
                  <FaVuejs />
                </div>
                <div>
                  <span>Quasar</span>
                  <SiQuasar />
                </div>
                <div>
                  <span>Rails</span>
                  <SiRubyonrails />
                </div>
                <div>
                  <span>Chart.js</span>
                  <SiChartdotjs />
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
                  <span>Ruby</span>
                  <DiRubyRough />
                </div>
                <div>
                  <span>Express.js</span>
                  <SiExpress />
                </div>
                <div>
                  <span>Node.js</span>
                  <SiNodedotjs />
                </div>
                <div>
                  <span>Adonis.js</span>
                  <SiAdonisjs />
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
                  <span>AWS</span>
                  <FaAws />
                </div>
                <div>
                  <span>Google Cloud</span>
                  <SiGooglecloud />
                </div>
                <div>
                  <span>Docker</span>
                  <SiDocker />
                </div>
                <div>
                  <span>Excel</span>
                  <SiMicrosoftexcel />
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
