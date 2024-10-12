// components/Layout.jsx
import Navbar from "./Navbar/Navbar";
import BannerSlider from "./BannerSlider/BannerSlider";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <BannerSlider />
      <main className="my-10">{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
