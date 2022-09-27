import Link from "next/link";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-1/2 min-h-screen mx-auto">
        <h1 className="font-extrabold text-center text-7xl">
          Welcome to the About page
        </h1>

        <h2 className="mt-10  text-orange-600">
          <Link href="/">Go to home page</Link>
        </h2>
      </main>
    </>
  );
};

export default Home;
