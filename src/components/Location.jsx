import React from 'react';
import {Figure, Spinner, Badge, Alert} from 'react-bootstrap';
import pastel2 from '../assets/pastel2.png';

function Location(props) {
    return <div>
                <Figure>
                    <Figure.Image
                        width={300}
                        height={300}
                        src={props.src}
                        style={{backgroundImage: `url(${pastel2})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                display: "block",
                                width: "100%"}}
                    />
                    <Spinner animation="grow" variant="success" size="sm" 
                        style={{marginRight: "2%", marginBottom: "0.5%"}} />
                    <Figure.Caption style={{display: "inline"}}>
                    {props.caption}
                    </Figure.Caption>
                </Figure>
                <Alert variant="dark" style={{fontSize: "1rem"}}>
                    (x={props.x}, y={props.y}, theta={props.theta})
                </Alert>
                <Badge variant="info">{props.lastFetched === null ? "" : props.lastFetched}</Badge>
            </div>
}

export default Location;