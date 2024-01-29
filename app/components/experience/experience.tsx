import { EXPERIENCE_LIST } from "@/app/data/experience-list";
import ExperienceItem from "./experience-item";

export default function Experience() {
  return (
    <section
      id="work-history"
      className="flex flex-col max-lg:pb-0 justify-center items-center"
    >
      <div className="lg:flex w-full gap-16 justify-center">
        <div className="w-1/3"></div>
        <h2 className="my-8 w-1/2 text-3xl tracking-wide">Work History</h2>
      </div>

      <ul>
        {EXPERIENCE_LIST &&
          EXPERIENCE_LIST.map((experience, index) => (
            <ExperienceItem
              key={index}
              date={experience.date}
              title={experience.title}
              company={experience.company}
              duties={experience.duties}
              stack={experience.stack}
            />
          ))}
      </ul>
    </section>
  );
}
