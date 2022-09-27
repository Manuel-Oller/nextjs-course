import Props from "../../interfaces/layout.interface";
import Navbar from "../Navbar";
import MenuHead from "../MenuHead";
import { NextPage } from "next";

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <MenuHead />
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
