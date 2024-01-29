import ContactLinks from "./contact-links";

export default function Footer() {
  return (
    <footer id="contact" className="pt-8 text-center bg-neutral-900">
      Copyright {new Date().getFullYear()} &copy; Elena Tiffania Iside-Berger |
      Full Stack Developer
      <ContactLinks />
    </footer>
  );
}
