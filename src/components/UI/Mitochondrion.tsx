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
    return <Carousel indicators={false} touch={false} interval={null}>
            <Carousel.Item style={{width: "70%", marginLeft: "15%", textAlign: "center"}}>
                <ReactMarkdown>
                ## The powerhouse of the cell.
                </ReactMarkdown>
                <ReactMarkdown>
                Mitochondria generate the **chemical energy** to power the cell's biochemical reactions.
                </ReactMarkdown>
                <ReactMarkdown>
                This energy is stored in a small molecule called ***ATP: adenosine triphosphate***.
                </ReactMarkdown>
            </Carousel.Item>
            <Carousel.Item style={{width: "70%", marginLeft: "15%", textAlign: "center"}}>
                <ReactMarkdown>
                **Did you know?**
                </ReactMarkdown>
                <ReactMarkdown>
                Mitochondria contain their own DNA, in the form of small, circular chromosomes. These are only inherited from the mother!
                </ReactMarkdown>
            </Carousel.Item>
        </Carousel>
};

export default Mitochondrion;