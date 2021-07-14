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
            ## The control centre of the cell.
            </ReactMarkdown>
            <ReactMarkdown>
            The nucleus contains most of the cell's genetic material inside DNA structures known as ***chromosomes***.
            </ReactMarkdown>
            <ReactMarkdown>
            Inside the nucleus, DNA is transcribed into ***messenger RNA*** which leaves the nucleus through
            small pores.
            </ReactMarkdown>
        </Carousel.Item>
        <Carousel.Item style={{width: "70%", marginLeft: "15%", textAlign: "center"}}>
            <ReactMarkdown>
            The messenger RNA is ***translated*** elsewhere into proteins, which have important
            roles to play - for instance, controlling your hair colour!
            </ReactMarkdown>
            <ReactMarkdown>
            The nucleus is also responsible for reproduction (AKA ***cell division***).
            </ReactMarkdown>
        </Carousel.Item>
    </Carousel>
};

export default Cytosol;