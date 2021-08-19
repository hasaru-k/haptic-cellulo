import React from 'react';
import { Figure, Spinner, Badge } from 'react-bootstrap';
import pastel2 from '../assets/pastel2.png';
import Video from './Video';
import { FunctionComponent } from 'react'; // importing FunctionComponent
import ReactMarkdown from 'react-markdown'
import GolgiBody from './GolgiBody';
import Cytosol from './Cytosol';
import Nucleus from './Nucleus';
import Mitochondrion from './Mitochondrion';
import {Popover, OverlayTrigger, Button} from 'react-bootstrap';
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

const renderTooltip = (props: any) => (
    <Popover body {...props}>
        <div style={{padding: "10px", width: "10rem"}}>
            A description of the organelle which your robot is currently
            located on.
        </div>
    </Popover>
);


const Location: FunctionComponent<LocationProps> = (props: LocationProps): any => {
    return  <div style={{paddingBottom: "10px"}}>
                <Figure style={{marginBottom: "-3px", marginTop: "-5px"}}>
                    <Video src={props.src}></Video>
                </Figure>
                <Button variant="dark mt-2" style={{fontSize: "0.7em", width: "100%", textAlign: "left"}} disabled>
                    {
                        <OverlayTrigger
                        placement="left"
                        trigger="hover"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}>
                            <Button variant="dark" style={{"fontSize": "0.9em", "display": "block"}}>ⓘ</Button>
                        </OverlayTrigger>
                    }
                    {getOrganelleCarousel(props.zone)}
                </Button>
                <Button variant="dark mt-2" style={{ fontSize: "1rem", width: "100%" }} disabled>
                    <Spinner animation="grow" variant="light" size="sm" style={{ marginRight: "3%" }} />
                    Last updated at {props.lastFetched === null ? "" : props.lastFetched}
                </Button>
            </div>
};

export default Location;