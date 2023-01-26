import { Routes, Route } from "react-router";
// import Home from "../pages/Home/Home";
import Aside from "../Aside/Aside";
// /components/Aside/Aside";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const Page = ({children}) => {
  return (
    <>
      <Navigation />
      <Aside />
      <MDBCarousel showControls>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="https://mdbootstrap.com/img/new/slides/041.jpg"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="https://mdbootstrap.com/img/new/slides/042.jpg"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://mdbootstrap.com/img/new/slides/043.jpg"
          alt="..."
        />
      </MDBCarousel>{" "}
      {children}
      <Footer />
    </>
  );
}

export default Page;