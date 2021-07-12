import React from 'react';
import { Figure, Spinner, Badge, Alert, Button } from 'react-bootstrap';
import pastel2 from '../assets/pastel2.png';
import Video from './Video';
import Carousel from 'react-bootstrap/Carousel'
import { FunctionComponent } from 'react'; // importing FunctionComponent
import ReactMarkdown from 'react-markdown'

interface CytosolProps {
}

const Cytosol: FunctionComponent<CytosolProps> = (props: CytosolProps): any => {
    /* function body */
    return <Carousel fade indicators={false}>
        <Carousel.Item>
        <h4 style={{width: "60%", marginLeft: "20%", textAlign: "center"}}>The liquid medium contained within a cell.</h4>
        </Carousel.Item>
        <Carousel.Item>
        <h6 style={{width: "60%", marginLeft: "20%", textAlign: "center"}}>The main component of cytosol is water.</h6>
        </Carousel.Item>
        <Carousel.Item>
        <h6 style={{width: "60%", marginLeft: "20%", textAlign: "center"}}>Various organelles and particles are suspended inside the cytosol.</h6>
        </Carousel.Item>
        <Carousel.Item>
        <h6 style={{width: "60%", marginLeft: "20%", textAlign: "center"}}>It also contains dissolved ions, small molecules, and proteins.</h6>
        </Carousel.Item>
    </Carousel>
};

export default Cytosol;