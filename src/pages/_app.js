import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

function MyApp({ Component, pageProps }) {
  const { title } = pageProps;
  return (
    <Layout title={title} className={poppins.className}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
