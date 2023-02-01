import { Routes, Route } from "react-router";
// import Home from "../pages/Home/Home";
import Aside from "../Recomendaciones/Recomendaciones";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Carousel from "../Carousel/Carousel";



const Page = ({children}) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}

export default Page;