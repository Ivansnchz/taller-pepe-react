import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="pageContainer">
      <header class="logoAndMenuItemsContainer">
        <div class="menu">
          <div class="logo">
            <li class="nobullets"><a href="./"><img class="logo-img" src="./images/logo-1-300x138.png"
              alt="logo" /></a></li>
          </div>
          <div class="menuItems">
            <ul>
              <li><a href="../"><span class="orange">Inicio</span></a></li>
              <li><a href="./servicios"><span>Servicios24</span></a></li>
              <li><a href="./recomendamos"><span class="ini">Recomendamos</span></a></li>
              <li><a href="./"><span>Contacto</span></a></li>

              {/* <form>
							<input id="hello" class="hello" alt="name" type="text"></input>
							<button class="buttonHello" onclick="sayHello()">Enviar</button>
						</form>  */}
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
                <button class="btn btn-link btn-block border-bottom m-0"><a href="./"><span
                  class="orange">Inicio</span></a></button>
                <button class="btn btn-link btn-block border-bottom m-0"><a
                  href="./servicios"><span>Servicios24</span></a></button>
                <button class="btn btn-link btn-block m-0"><a href="./recomendamos" /><span
                  class="ini">Recomendamos</span></button>
                <button class="btn btn-link btn-block m-0"><a href="./contacto"/><span
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

      <section id="carouselBasicExample" class="carousel slide carousel-fade" data-mdb-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="2"
            aria-label="Slide 3"></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" class="d-block w-100"
              alt="Sunset Over the City" />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>

          <div class="carousel-item">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" class="d-block w-100"
              alt="Canyon at Nigh" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div class="carousel-item">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" class="d-block w-100"
              alt="Cliff Above a Stormy Sea" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample"
          data-mdb-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample"
          data-mdb-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </section>

      <main id="contacto">
      </main>


      <footer class="footer">Copyright 2020</footer>
    </div>
  );
}

export default App;
