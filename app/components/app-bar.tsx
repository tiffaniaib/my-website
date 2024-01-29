"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "#", label: "About me" },
  { href: "#work-history", label: "Work History" },
  { href: "#projects", label: "Projects" },
];

export default function AppBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 lg:top-8 z-50 lg:w-1/3 mx-auto lg:rounded-full bg-neutral-900">
      <nav
        className="flex items-center justify-around p-3 lg:px-4 text-sm lg:tracking-wide lg:font-semibold leading-6 text-neutral-300"
        aria-label="Global"
      >
        {NAV_LINKS.map(({ href, label }, index) => (
          <Link
            key={index}
            href={href}
            className={
              "hover:text-green-400"
              // TODO: fix active links color
              //   (window.location.pathname + window.location.hash) ==
              // window.location.host+pathname + href
              //   ? "text-green-400"
              //   : "text-neutral-300"
            }
          >
            {label}
          </Link>
        ))}
        <a
          href="mailto:ielenatiffania@gmail.com"
          className="px-4 py-1 ml-2 bg-green-400 text-neutral-900 rounded-full hover:bg-black hover:text-green-400"
        >
          Send email
        </a>
      </nav>
    </header>
  );
}
