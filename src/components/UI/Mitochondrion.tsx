import React from 'react';
import { Figure, Spinner, Badge, Alert, Button } from 'react-bootstrap';
import pastel2 from '../assets/pastel2.png';
import Video from './Video';
import Carousel from 'react-bootstrap/Carousel'
import { FunctionComponent } from 'react'; // importing FunctionComponent
import ReactMarkdown from 'react-markdown'

interface MitochondrionProps {
}

const Mitochondrion: FunctionComponent<MitochondrionProps> = (props: MitochondrionProps): any => {
    /* function body */
    return <Carousel indicators={false} touch={false}>
        <Carousel.Item>
            <h1 style={{width: "60%", marginLeft: "20%", textAlign: "center"}}>
            The packaging warehouse of the cell.
            </h1>
        </Carousel.Item>
        <Carousel.Item>
            <h3 style={{width: "60%", marginLeft: "20%", textAlign: "center"}}>
                It helps process and package proteins and lipid molecules, especially proteins destined to be exported from the cell.
            </h3>
        </Carousel.Item>
        <Carousel.Item>
            <h3 style={{width: "60%", marginLeft: "20%", textAlign: "center"}}>
                Named after its discoverer, Camillo Golgi, the Golgi body appears as a series of stacked membranes.
            </h3>
        </Carousel.Item>
    </Carousel>
};

export default Mitochondrion;