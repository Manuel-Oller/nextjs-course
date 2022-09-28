import { AppType } from "next/dist/shared/lib/utils";
import { AppRouter } from "./api/trpc/[trpc]";
import "styles/globals.css";
import Layout from "components/layouts/MainLayout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout title="My first NextJS App">
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
