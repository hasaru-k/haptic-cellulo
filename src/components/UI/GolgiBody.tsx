import React from 'react';
import { Figure, Spinner, Badge, Alert, Button } from 'react-bootstrap';
import pastel2 from '../assets/pastel2.png';
import Video from './Video';
import Carousel from 'react-bootstrap/Carousel'
import { FunctionComponent } from 'react'; // importing FunctionComponent
import ReactMarkdown from 'react-markdown'

interface GolgiBodyProps {
}

const GolgiBody: FunctionComponent<GolgiBodyProps> = (props: GolgiBodyProps): any => {
    /* function body */
    return <Carousel indicators={false} touch={false} interval={null}>
    <Carousel.Item style={{width: "70%", marginLeft: "15%", textAlign: "center"}}>
        <ReactMarkdown>
        ## The packaging warehouse of the cell.
        </ReactMarkdown>
        <ReactMarkdown>
        #### Did you know?
        </ReactMarkdown>
        <ReactMarkdown>
        The golgi body is named after its discoverer, Camillo Golgi. It appears as a set of stacked membranes!
        </ReactMarkdown>
        <ReactMarkdown>
        **Read ahead** to find out what this mysterious organelle does.
        </ReactMarkdown>
    </Carousel.Item>
    <Carousel.Item style={{width: "70%", marginLeft: "15%", textAlign: "center"}}>
        <ReactMarkdown>
        **What does it do?**
        </ReactMarkdown>
        <ReactMarkdown>
        The golgi body helps process and package ***proteins*** and ***lipid*** (fat) molecules.
        </ReactMarkdown>
        <ReactMarkdown>
        In particular, it readies proteins for export, to be jettisoned outside of the cell.
        </ReactMarkdown>
    </Carousel.Item>
    </Carousel>
};

export default GolgiBody;