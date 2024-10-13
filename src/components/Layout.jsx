// components/Layout.jsx
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import ImageCard from "./ImageCard/imageCard";
import Banner from "./Banner"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Banner />
      <ImageCard />
      <main className="my-10">{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
