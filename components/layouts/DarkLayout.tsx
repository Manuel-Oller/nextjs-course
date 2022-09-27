import Props from "../../interfaces/layout.interface";
import Navbar from "../Navbar";
import MenuHead from "../MenuHead";
import { NextPage } from "next";

const DarkLayout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <MenuHead />
      <Navbar />
      <main style={{ background: "red" }}>{children}</main>
    </>
  );
};

export default DarkLayout;
