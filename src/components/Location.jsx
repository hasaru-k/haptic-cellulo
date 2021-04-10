import React from 'react';
import {Figure, Spinner, Badge, Alert, Button} from 'react-bootstrap';
import pastel2 from '../assets/pastel2.png';
import Video from './Video';

function Location(props) {
    console.log(`x=${props.x},y=${props.y}`);
    return <div>
                <Figure>
                    <Video src={props.src}></Video>
                    <Figure.Caption style={{marginTop: "10px"}}>
                    {props.caption}
                    </Figure.Caption>
                </Figure>
                <Button variant="dark" style={{fontSize: "1rem", width: "100%"}} disabled>
                    <Spinner animation="grow" variant="light" size="sm" style={{marginRight: "3%"}} />
                    Location: (x={Math.round(props.x)}, y={Math.round(props.y)}, theta={Math.round(props.theta)})
                </Button>
                <Button variant="dark" style={{fontSize: "1rem", width: "100%"}} disabled>Last updated at {props.lastFetched === null ? "" : props.lastFetched}</Button>
            </div>
}

export default Location;