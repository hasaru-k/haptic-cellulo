import React from 'react';
import { Figure, Spinner, Badge, Alert, Button } from 'react-bootstrap';
import pastel2 from '../assets/pastel2.png';
import Video from './Video';
import Carousel from 'react-bootstrap/Carousel'
import { FunctionComponent } from 'react'; // importing FunctionComponent
import ReactMarkdown from 'react-markdown'

interface LysosomeProps {
}

const Lysosome: FunctionComponent<LysosomeProps> = (props: LysosomeProps): any => {
    /* function body */
    return <Carousel indicators={false} touch={false} interval={null}>
        <Carousel.Item style={{width: "70%", marginLeft: "15%", textAlign: "center"}}>
            <ReactMarkdown>
            ## The lord of destruction of the cell.
            </ReactMarkdown>
            <ReactMarkdown>
            Lysosomes contain ***digestive enzymes*** which break down excess or worn-out cell parts.
            </ReactMarkdown>
            <ReactMarkdown>
            They are also involved in a rather morbid process called ***apoptosis***. Read ahead to find out what this is.
            </ReactMarkdown>
        </Carousel.Item>
        <Carousel.Item style={{width: "70%", marginLeft: "15%", textAlign: "center"}}>
            <ReactMarkdown>
            ***Apoptosis***: Programmed cell death.
            </ReactMarkdown>
            <ReactMarkdown>
            If the cell is damaged beyond repair, lysosomes can help it self-destruct in a process called apoptosis, or programmed cell death.
            </ReactMarkdown>
        </Carousel.Item>
    </Carousel>
};

export default Lysosome;