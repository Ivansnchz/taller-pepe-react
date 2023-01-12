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
