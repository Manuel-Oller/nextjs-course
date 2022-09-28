import MenuLink from "./MenuLink";
import styles from "styles/Navbar.module.css";
import { NextPage } from "next";
import Image from "next/image";
import Link from 'next/link';

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
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <Link href="7" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              NextJs App
            </span>
          </Link>
          <div className="flex items-center">
            <a
              href="tel:5541251234"
              className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
            >
              (999) 1234-5678
            </a>
            <Link
              href="/login"
              className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              {menuItems.map(({ href, text }, index) => {
                return (
                  <>
                    <li>
                      <MenuLink
                        key={index}
                        href={href}
                        title={text}
                        className="text-gray-900 dark:text-white hover:underline"
                      />
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
