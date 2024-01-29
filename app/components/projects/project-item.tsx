import Image from "next/image";

type Project = {
  title: string;
  desc: string;
  img: string;
  stack: string[];
  url: string;
};

export default function ProjectItem({ title, desc, img, stack, url }: Project) {
  if (desc !== undefined)
    return (
      <li className="my-8 lg:mb-16 lg:flex gap-16 justify-center items-center">
        <div className="w-1/3">
          {img && (
            <Image
              src={img}
              width={190}
              height={107}
              alt={title}
              className="lg:ml-auto rounded-lg"
              draggable={false}
            />
          )}
        </div>
        <a
          href={url}
          className="w-1/2 lg:bg-neutral-900 p-4 rounded-md lg:hover:bg-neutral-800 lg:border lg:border-neutral-800 hover:shadow-2xl"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          {title && (
            <h3 className="mb-1 text-lg text-neutral-300 font-semibold">
              {title}{" "}
            </h3>
          )}
          {desc && <p>{desc}</p>}
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
        </a>
      </li>
    );
}
