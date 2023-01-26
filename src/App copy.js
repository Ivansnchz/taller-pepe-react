import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Servicios from "./pages/Servicios/Servicios";
import Recomendamos from "./pages/Recomendamos/Recomendamos";
import Contacto from "./pages/Contacto/Contacto";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.scss";

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useNavigate hook we can use at this level to ensure we have security around our routes.
  return (
    <div className="index-container">
      
      {/* Added features */}
      {/*<Security {...config} onAuthRequired={authHandler}>*/}
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/servicios">
          <Servicios />
        </Route>
        <Route path="/recomendamos">
          <Recomendamos />
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>
        {/* any of the routes you need secured should be registered as SecureRoutes */}
        {/* <Route>
          <NotFoundPage />
        </Route> */}
        {/* <Redirect to="/404" /> */}
        {/* <Route path="/404" component={NotFoundPage} /> */}
        {/*         <Redirect to="/404" /> */}
      </Routes>
      {/* </Security>*/}
    </div>
    // un cambio
  );
}

export default App;
