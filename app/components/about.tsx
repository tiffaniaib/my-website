import Image from "next/image";
import ContactLinks from "./contact-links";

const FULL_NAME = "Elena Tiffania Iside-Berger";
const ROLE = "Full Stack Developer";

function getIntroText() {
  return (
    <>
      Passionate about making a difference through web development, I am poised
      to bring my diverse skill set and innovative approach to your dynamic
      development team.
    </>
  );
}

function getAboutText() {
  return (
    <>
      <em className="text-2xl text-green-400 font-bold">Greetings!</em>
      <br />
      I&apos;m Tiffania, a proud blend of Italian and Malagasy heritage
      currently residing in New Jersey. Following the pursuit of a
      bachelor&apos;s degree in Intercultural Mediation and Languages, my
      journey took an intriguing turn when my brother introduced me to the
      realms of{" "}
      <strong>
        <a
          href="https://www.dajak.pl/"
          className="text-green-400"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          SEO, copywriting
        </a>
      </strong>
      , and eventually, software development. As I delved into crafting elements
      with HTML and CSS, my curiosity ignited, propelling me to explore the vast
      possibilities within the realm of coding. This passion culminated in my
      participation in a{" "}
      <strong>
        <a
          className="text-green-400"
          href="https://github.com/tiffaniaib"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Software Development bootcamp
        </a>
      </strong>
      , where I acquired skills in{" "}
      <strong className="text-green-400">Javascript, React, Express</strong>,
      and more. <br />
      <br />
      Being inherently curious, my quest for knowledge extends across diverse
      subjects, as I firmly believe that understanding fosters conscious
      decision-making. Not surprisingly, one of my favorite hobbies is reading!
      Additionally, I find joy in crocheting, strolling in nature, and
      experimenting in the kitchen—melding different aromas to create a unique
      flavor. This multifaceted approach to life reflects my belief in embracing
      variety and continually evolving.
    </>
  );
}

export default function About() {
  return (
    <section className="lg:flex lg:gap-16 justify-center items-center">
      <div className="lg:w-1/3">
        <Image
          src="/img/avatar.webp"
          width={80}
          height={80}
          alt="Picture of Tiffany"
          className="rounded-full mb-4"
          draggable={false}
        />
        <h2 className="text-5xl text-neutral-300 font-bold">{FULL_NAME}</h2>
        <p className="mt-2 text-2xl text-teal-800 font-semibold">{ROLE}</p>
        <p className="my-4">{getIntroText()}</p>
        <ContactLinks />
      </div>
      <div className="lg:w-1/2 leading-6">{getAboutText()}</div>
    </section>
  );
}
