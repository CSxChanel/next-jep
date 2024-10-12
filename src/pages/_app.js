import Layout from "@/components/Layout";
import "@/styles/globals.css"; // Pastikan untuk mengimpor CSS global
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

function MyApp({ Component, pageProps }) {
  return (
    <Layout className={poppins.className}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
