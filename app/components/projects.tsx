import { PROJECT_LIST } from "../data/project-list";
import ProjectItem from "./projects/project-item";

export default function Projects() {
  return (
    <section id="projects">
      <div className="lg:flex w-full gap-16 justify-center">
        <div className="w-1/3"></div>
        <h2 className="my-8 w-1/2 text-3xl tracking-wide">Projects</h2>
      </div>
      <ul>
        {PROJECT_LIST &&
          PROJECT_LIST.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              desc={project.desc}
              img={project.img}
              stack={project.stack}
              url={project.url}
            />
          ))}
      </ul>
    </section>
  );
}
