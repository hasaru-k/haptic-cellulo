import React from 'react';
import { Figure, Spinner, Badge, Alert, Button, Tooltip, Popover, OverlayTrigger } from 'react-bootstrap';
import Header from 'react-bootstrap/Popover';
import Body from 'react-bootstrap/Popover';
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

    renderTooltip = (props: any) => (
        <Popover body {...props}>
            <div style={{padding: "10px", width: "10rem"}}>
                A checklist of points you should explore together
                before starting the quiz.
            </div>
        </Popover>
    );

    /* function body */
    render() {
        let isChecked = this.state.isChecked;
        return <Form style={{fontSize: "1rem", color: "#b9b9b9", padding: "1em", backgroundColor: "#343a40",
            borderRadius: "10px", fontFamily: "helvetica"}}>
            <OverlayTrigger
                placement="left"
                trigger="hover"
                delay={{ show: 250, hide: 400 }}
                overlay={this.renderTooltip}>
            <Button variant="dark" style={{"fontSize": "0.9em", "display": "block"}}>ⓘ</Button>
            </OverlayTrigger>
            <h4 style={{"display": "block"}}>
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