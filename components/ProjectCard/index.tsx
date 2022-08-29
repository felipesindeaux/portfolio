import { HTMLAttributes, ReactNode } from "react";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { Wrapper } from "./styled";

export interface StyledProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  img: string;
}

interface Props {
  title: string;
  desc: string;
  img: string;
  repo: string;
  app: string;
  categorie: string;
}

const ProjectCard = ({ title, desc, img, repo, app, categorie }: Props) => {
  return (
    <Wrapper img={img}>
      <div className="container">
        <div className="overlay">
          <div className="title">
            <h3>{title}</h3>
          </div>
          <div className="description">
            <p>{desc}</p>
          </div>
          <div className="buttons">
            <div>
              <AiOutlineGithub />
              <a href={repo} target="_blank" rel="noreferrer">
                Repositório
              </a>
            </div>
            <div>
              <AiOutlineLink />
              <a href={app} target="_blank" rel="noreferrer">
                Aplicação
              </a>
            </div>
          </div>
          <div className="categories">
            <span>{categorie}</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectCard;
