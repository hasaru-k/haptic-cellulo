import React from 'react';
import { Figure, Spinner, Badge, Alert, Button } from 'react-bootstrap';
import pastel2 from '../assets/pastel2.png';
import Video from './Video';
import { FunctionComponent } from 'react'; // importing FunctionComponent
import ReactMarkdown from 'react-markdown'
import GolgiBody from './GolgiBody';
import Cytosol from './Cytosol';
import Nucleus from './Nucleus';
import Mitochondrion from './Mitochondrion';
import Lysosome from './Lysosome';

interface LocationProps {
    x: number,
    y: number,
    theta: number,
    zone: string,
    src: string,
    lastFetched: string | null,
    name: string
}

function getOrganelleCarousel(zone: string) {
    switch (zone) {
        case "golgiBody":
            return <GolgiBody/>;
        case "nucleus":
            return <Nucleus/>;
        case "lysosome":
            return <Lysosome/>;
        case "mitochondrion":
            return <Mitochondrion/>;
        case "cytosol":
        case "undefined":
            return <Cytosol/>;
        default:
            throw new Error("Undefined behaviour for zone: " + zone);
    }
}

const Location: FunctionComponent<LocationProps> = (props: LocationProps): any => {
    /* function body */
    /*
    <Button variant="dark mt-2" style={{ fontSize: "1rem", width: "100%" }} disabled>
        <Spinner animation="grow" variant="light" size="sm" style={{ marginRight: "3%" }} />
        Location: (x={Math.round(props.x)}, y={Math.round(props.y)}, theta={Math.round(props.theta)}, zone={props.zone})
    </Button>
    */
    return  <div style={{paddingBottom: "10px"}}>
                <Figure style={{marginBottom: "-3px", marginTop: "-5px"}}>
                    <Video src={props.src}></Video>
                </Figure>
                <Button variant="dark mt-2" style={{fontSize: "0.7em", width: "100%", textAlign: "left"}} disabled>
                    {getOrganelleCarousel(props.zone)}
                </Button>
                <Button variant="dark mt-2" style={{ fontSize: "1rem", width: "100%" }} disabled>
                    <Spinner animation="grow" variant="light" size="sm" style={{ marginRight: "3%" }} />
                    Last updated at {props.lastFetched === null ? "" : props.lastFetched}
                </Button>
            </div>
};

export default Location;