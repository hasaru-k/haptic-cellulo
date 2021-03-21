import React from 'react';
import {Figure} from 'react-bootstrap';
import pastel2 from '../assets/pastel2.png';

function Location(props) {
    return  <Figure>
                <Figure.Image
                    width={300}
                    height={300}
                    src={props.src}
                    style={{backgroundImage: `url(${pastel2})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover"}}
                />
                <Figure.Caption>
                {props.caption}
                </Figure.Caption>
            </Figure>
}

export default Location;