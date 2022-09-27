import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";
import Props from "../interfaces/menuLink.interface";
import { NextPage } from "next";

const useActiveStyle = (href: string) => {
  const { asPath } = useRouter();

  return asPath === href ? styles["active-link"] : "";
};

const MenuLink: NextPage<Props> = ({ title, href }) => {
  const style = useActiveStyle(href);

  return (
    <Link href={href}>
      <a className={style}>{title}</a>
    </Link>
  );
};

export default MenuLink;
