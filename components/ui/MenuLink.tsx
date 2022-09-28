import Link from "next/link";
import { useRouter } from "next/router";
import Props from "interfaces/menuLink.interface";
import { NextPage } from "next";

const MenuLink: NextPage<Props> = ({ title, href, className }) => {
  return (
    <Link href={href}>
      <a className={className}>{title}</a>
    </Link>
  );
};

export default MenuLink;
