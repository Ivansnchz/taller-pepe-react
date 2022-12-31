import logo from './images/logo-1-300x138.png';

import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.scss';

function App() {
  return (
    <div id="pageContainer">
      <header class="logoAndMenuItemsContainer">
        <div class="menu">
          <div class="logo">
            <li class="nobullets"><a href="./"><img class="logo-img" src={logo}
              alt="logo" /></a></li>
          </div>
          <div class="menuItems">
            <ul>
              <li><a href="../"><span class="orange">Inicio</span></a></li>
              <li><a href="./servicios"><span>Servicios24</span></a></li>
              <li><a href="./recomendamos"><span class="ini">Recomendamos</span></a></li>
              <li><a href="./"><span>Contacto</span></a></li>

            </ul>
          </div>

          <nav id="mobileMenu" class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
              </button>
            </div>

            <div class="collapse" id="navbarToggleExternalContent">
              <div class="bg-light shadow-3 p-4">
                <button class="btn btn-link btn-block border-bottom m-0">
                 {/*eslint-disable-next-line*/ }

                  <a href="./"><span
                  class="orange">Inicio</span></a></button>
                <button class="btn btn-link btn-block border-bottom m-0"><a
                  href="./servicios"><span>Servicios24</span></a></button>
                <button class="btn btn-link btn-block m-0">
                 {/*eslint-disable-next-line*/ }
                  <a href="./recomendamos" /><span
                  class="ini">Recomendamos</span></button>
                <button class="btn btn-link btn-block m-0">
                 {/*eslint-disable-next-line*/ }
                
                 {/*eslint-disable-next-line*/ }
                  <a href="./contacto"/><span
                  class="ini">Contacto</span></button>
              </div>
            </div>
          </nav>

        </div>


      </header>
      <aside class="intro-section">
        <h2>RECOMENDACIONES PARA COCHES</h2>
        <p><span class="orangeText">Taller 24 horas Madrid,</span> se enfoca en tu seguridad y tranquilidad a la
          hora de transitar, encuentra las mejores recomendaciones para coches, alarga la vida de tu vehículo
          con
          prácticos consejos y trucos, para que se mantenga constantemente en buen estado</p>
        {/* images */}

      </aside>

      <MDBCarousel showControls>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://mdbootstrap.com/img/new/slides/041.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/new/slides/042.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/new/slides/043.jpg'
        alt='...'
      />
    </MDBCarousel>

    

      <main id="contacto">
      </main>


      <footer class="footer">Copyright 2020</footer>
    </div>
  );
}

export default App;
