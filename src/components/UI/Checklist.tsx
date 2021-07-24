import React from 'react';
import { Figure, Spinner, Badge, Alert, Button } from 'react-bootstrap';
import pastel2 from '../assets/pastel2.png';
import Video from './Video';
import Form from 'react-bootstrap/Form'
import { FunctionComponent } from 'react'; // importing FunctionComponent
import ReactMarkdown from 'react-markdown'

interface ChecklistProps {
}

let points = [
    "Find out who discovered the golgi body",
    "Establish what the cytosol is composed of",
    "Locate the control centre of the cell",
    "Find the energy centre of the cell",
    "Pinpoint the organelle with digestive enzymes",
]

const Checklist: FunctionComponent<ChecklistProps> = (props: ChecklistProps): any => {
    /* function body */

    return <Form style={{fontSize: "1rem", color: "#b9b9b9", padding: "1em", backgroundColor: "#343a40",
    borderRadius: "10px", fontFamily: "helvetica"}}>
    <h4>
    Tasks
    </h4>
    {
        points.map((point: string, i: number) => 
            <div key={i} className="mb-3">
                <Form.Check type={'checkbox'} label={point}/>
            </div>
        )
    }
  </Form>
};

export default Checklist;