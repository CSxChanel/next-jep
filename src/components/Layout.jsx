// components/Layout.jsx
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import ImageCard from "./ImageCard/imageCard";
import Banner from "./Banner"
import AreaCard from "./indihomeArea/areaCard";
const Layout = ({ title, children }) => {
  return (
    <>
      <Navbar />
      <Banner title={title} />
      <ImageCard />
      <main className="my-10">{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
