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
    return <Carousel indicators={false} touch={false} interval={null}>
    <Carousel.Item style={{width: "70%", marginLeft: "15%", textAlign: "center"}}>
        <ReactMarkdown>
        ## The liquid medium contained within a cell.
        </ReactMarkdown>
        <ReactMarkdown>
        The main component of cytosol is **water**.
        </ReactMarkdown>
        <ReactMarkdown>
        Suspended within the cytosol are various ***organelles*** - move your robot to these to learn more.
        </ReactMarkdown>
    </Carousel.Item>
    <Carousel.Item style={{width: "70%", marginLeft: "15%", textAlign: "center"}}>
        <ReactMarkdown>
        #### Did you know?
        </ReactMarkdown>
        <ReactMarkdown>
        That's not all! The cytosol also contains **dissolved ions**, **small molecules**, and **proteins**.
        </ReactMarkdown>
    </Carousel.Item>
</Carousel>
};

export default Cytosol;