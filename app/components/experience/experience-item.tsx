type Experience = {
  date: string;
  title: string;
  company: string;
  duties: string[];
  stack: string[];
};

export default function ExperienceItem({
  date,
  title,
  company,
  duties,
  stack,
}: Experience) {
  return (
    <li className="my-8 mb-16 lg:flex gap-16 justify-center items-start">
      <div className="lg:w-1/3 lg:text-right text-neutral-600">{date}</div>
      <div className="lg:w-1/2">
        <h3 className="mb-1 text-lg text-neutral-300 font-semibold">
          {title} | {company}{" "}
        </h3>
        {duties && (
          <ul>
            {duties.map((duty: string, index: number) => (
              <li key={index} className="list-disc">
                {duty}
              </li>
            ))}
          </ul>
        )}
        {stack && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {stack.map((skill: string, index: number) => (
              <li
                key={index}
                className="py-1 px-4 border border-solid rounded-full border-teal-800 text-green-400 "
              >
                {skill}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}
