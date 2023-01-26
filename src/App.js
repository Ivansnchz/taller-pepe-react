import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Servicios from "./pages/Servicios/Servicios";
import Recomendamos from "./pages/Recomendamos/Recomendamos";
import Contacto from "./pages/Contacto/Contacto";
import Aside from "./components/Aside/Aside";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Page from "./components/Page/Page";

import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.scss";

function App({children}) {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useNavigate hook we can use at this level to ensure we have security around our routes.
  return (
    <div className="index-container">
      <Page children={Servicios} />
    </div>
  );
}

export default App;
