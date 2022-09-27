import MenuLink from "../components/MenuLink";
import styles from "../styles/Navbar.module.css";
import { NextPage } from "next";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
  {
    text: "Contact",
    href: "/contact",
  },
];

const Navbar: NextPage = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map(({ href, text }, index) => {
        return <MenuLink key={index} href={href} title={text} />;
      })}
    </nav>
  );
};

export default Navbar;
