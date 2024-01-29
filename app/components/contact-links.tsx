import Image from "next/image";

const CONTACT_LINKS = [
  {
    href: "https://github.com/tiffaniaib/",
    label: "GitHub",
    img: "/img/github.min.svg",
  },
  {
    href: "https://www.linkedin.com/in/tiffania-iside-berger-7b6390227/",
    label: "LinkedIn",
    img: "/img/in.svg",
  },
  {
    href: "mailto:ielenatiffania@gmail.com",
    label: "Email me",
    img: "/img/email.svg",
  },
  {
    href: "tel:+19083104548",
    label: "Telephone",
    img: "/img/tel.svg",
  },
];

export default function ContactLinks() {
  return (
    <div className="mt-4">
      {CONTACT_LINKS.map(({ href, label, img }, index) => (
        <a
          key={index}
          href={href}
          className="inline-block mr-2"
          rel="nofollow noopener noreferrer"
          target="_blank"
          title={label}
        >
          <Image
            src={img}
            width={28}
            height={28}
            alt={label}
            className="mb-4 rounded-full hover:bg-green-400"
            draggable={false}
          />
        </a>
      ))}
    </div>
  );
}
