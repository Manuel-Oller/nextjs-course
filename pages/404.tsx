import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const pageNotFound: NextPage = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image
          className="hola"
          src="/404.png"
          alt="Page not found"
          width={"500"}
          height={"500"}
        />
      </div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        <span>
          Page not found - Return to <Link href="/">Home</Link>
        </span>
      </h1>
    </>
  );
};

export default pageNotFound;
