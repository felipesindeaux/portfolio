import { HTMLAttributes, ReactNode } from "react";
import ProjectCard from "../ProjectCard";
import { BottomOutline, Content, Wrapper } from "./styled";

export interface StyledProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isOpen: boolean;
}

const Projects = () => {
  return (
    <>
      <Wrapper id="projectsSection">
        <Content>
          <h1>Projetos</h1>
          <ul>
            <ProjectCard
              title="Kenzie Hub"
              desc="Um local para registrar suas habilidades, podendo ser divida por níveis"
              img="https://i.imgur.com/79ucIkN.png"
              repo="https://github.com/felipesindeaux/kenzie-hub"
              app="https://react-entrega-s2-kenzie-hub-felipesindeaux-felipesindeaux.vercel.app/"
              categorie="React"
            />
            <ProjectCard
              title="Hamburgueria"
              desc="Uma Hamburgueria com sistema de login e carrinho"
              img="https://i.imgur.com/nFiOJT2.png"
              repo="https://github.com/felipesindeaux/hamburgueria-2.0"
              app="https://hamburgueria-2-0.vercel.app/"
              categorie="React"
            />
            <ProjectCard
              title="Nu Kenzie"
              desc="Uma aplicação para controle de gastos"
              img="https://i.imgur.com/zigUrcY.png"
              repo="https://github.com/felipesindeaux/nu-kenzie"
              app="https://react-entrega-s1-nu-kenzie-felipesindeaux-felipesindeaux.vercel.app/"
              categorie="React"
            />
            <ProjectCard
              title="Kenzie Shop"
              desc="Um comércio digital"
              img="https://i.imgur.com/cB6bvll.png"
              repo="https://github.com/felipesindeaux/kenzie-shop"
              app="https://react-entrega-s3-kenzieshop-felipesindeaux.vercel.app/"
              categorie="React"
            />
            <ProjectCard
              title="Yoca"
              desc="Uma api para gerenciameto de restaurantes"
              img="https://i.imgur.com/4uMTNJF.png"
              repo="https://github.com/cayo-rodrigues/yoca"
              app="https://cayoca.herokuapp.com/api/docs/"
              categorie="Node"
            />
            <ProjectCard
              title="Avalanche Cursos"
              desc="Uma api para uma plataforma de venda de cursos"
              img="https://i.imgur.com/lW1ovg3.png"
              repo="https://github.com/felipesindeaux/avalanche-cursos"
              app="https://avalanche-cursos.herokuapp.com/api/docs/"
              categorie="Django"
            />
          </ul>
        </Content>
      </Wrapper>

      <BottomOutline />
    </>
  );
};

export default Projects;
