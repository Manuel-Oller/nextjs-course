import Props from "../../interfaces/layout.interface";
import Navbar from "../ui/Navbar";
import MenuHead from "../ui/MenuHead";
import { NextPage } from "next";

const Layout: NextPage<Props> = ({ children, title }) => {
  return (
    <>
      <MenuHead title={title} />
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
