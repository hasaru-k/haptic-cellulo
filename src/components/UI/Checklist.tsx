import React from 'react';
import { Figure, Spinner, Badge, Alert, Button } from 'react-bootstrap';
import pastel2 from '../assets/pastel2.png';
import Video from './Video';
import Form from 'react-bootstrap/Form'
import { FunctionComponent } from 'react'; // importing FunctionComponent
import ReactMarkdown from 'react-markdown'
import internal from 'stream';

interface ChecklistProps {
}

interface ChecklistState {
    isChecked: Map<number, boolean>
}

let points = [
    "Find out who discovered the golgi body",
    "Establish what the cytosol is composed of",
    "Locate the control centre of the cell",
    "Find the energy centre of the cell",
    "Pinpoint the organelle with digestive enzymes",
]

class Checklist extends React.Component<ChecklistProps, ChecklistState> {

    constructor(props: any) {
        super(props);
        let isChecked = new Map<number, boolean>();
        points.forEach((question, i) => {
          isChecked.set(i, false);
        })
        this.state = {
            isChecked
        };
    }

    setChecked = (i: number, target: HTMLInputElement) => {
        let isChecked = this.state.isChecked;
        isChecked.set(i, target.checked);
        this.setState({
          isChecked: isChecked
        });
    }

    /* function body */
    render() {
        let isChecked = this.state.isChecked;
        return <Form style={{fontSize: "1rem", color: "#b9b9b9", padding: "1em", backgroundColor: "#343a40",
        borderRadius: "10px", fontFamily: "helvetica"}}>
        <h4>
        Tasks
        </h4>
        {
            points.map((point: string, i: number) => 
                <div key={i} className="mb-3">
                    <Form.Check type={'checkbox'} label={point} onChange={(e) => this.setChecked(i, e.currentTarget)} />
                </div>
            )
        }
        {
            Array.from(isChecked.values()).every(val => val) ?
            <Button variant="success" style={{pointerEvents: "none"}}>Great! You can start the quiz.</Button> :
            null
        }
      </Form>
    }
}

export default Checklist;