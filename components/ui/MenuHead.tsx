import { NextPage } from "next";
import Head from "next/head";
import Props from "interfaces/menuHead.interface";

const MenuHead: NextPage<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title || 'The title of my app'}</title>
    </Head>
  );
};

export default MenuHead;
