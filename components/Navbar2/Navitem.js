/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";

const NavItem = ({ text, href, active }) => {
  return (
    // <Link href={href}>
      <a
        className={`nav__item ${
          active ? "active" : ""
        }`}
        href="/"
        rel='noreferrer'
      >
        {text}
      </a>
    // </Link>
  );
};

export default NavItem;