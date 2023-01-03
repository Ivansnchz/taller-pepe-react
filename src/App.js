import logo from './images/logo-1-300x138.png'
import Navigation from './components/Navigation/Navigation'
import Aside from './components/Aside/Aside'
import {
  
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit'

import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.scss'

function App() {

  return (
    <div id="pageContainer">
     {/*  <header className="logoAndMenuItemsContainer">
        <div className="menu">
          <div className="logo">
            <li className="nobullets">
              <a href="./">
                <img className="logo-img" src={logo} alt="logo" />
              </a>
            </li>
          </div>
          <div className="menuItems">
            <ul>
              <li>
                <a href="../">
                  <span className="orange">Inicio</span>
                </a>
              </li>
              <li>
                <a href="./servicios">
                  <span>Servicios24</span>
                </a>
              </li>
              <li>
                <a href="./recomendamos">
                  <span className="ini">Recomendamos</span>
                </a>
              </li>
              <li>
                <a href="./">
                  <span>Contacto</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </header> */}
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
      </MDBCarousel>

      <main id="contacto"></main>

      <footer className="footer">Copyright 2020</footer>
    </div>
  )
}

export default App
