
import react from 'React';

import {

    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit'

import Servicios from '../Servicios/Servicios';
import Aside from '../../components/Aside/Aside'
import Navigation from '../../components/Navigation/Navigation'

function Home() {

    return (

        <div id="homeContainer">

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

            <Servicios />

            <footer className="footer">Copyright 2020</footer>
        </div>

    );

}


export default Home;