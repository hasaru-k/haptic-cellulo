import React from 'react';
import {Form, Badge, Button, ListGroup} from 'react-bootstrap';
import Questions from '../assets/question_sheet.json';

interface ActivityProps {
  robots: Array<string>
}

interface Response {
  number: Number,
  selection: Number
}

interface ActivityState {
  responses: Array<Response>
}

class Activity extends React.Component<ActivityProps, ActivityState> {

    constructor(props : ActivityProps) {
      super(props);
      this.state = {
        responses : []
      };
    }

    componentDidMount() {
    }
  
    render() {
      let responses = this.state.responses;
      console.log(Questions);
      return  <div>
                <Button variant="dark" style={{fontSize: "1.5rem", width: "100%", marginBottom: "20px"}} disabled>
                  For each question, place your robot to the organelle on the map
                    that you consider to be the correct answer.
                </Button>                
                <div>
                </div>
                {
                  Questions.map((question, i) => 
                    <div key={i} style={{marginTop: "10px"}}>
                      <Button variant="dark" style={{fontSize: "1.5rem", width: "100%", marginBottom: "20px"}} disabled>
                        {i+1}. {question.Q}
                      </Button>
                      <div></div>
                        <ListGroup horizontal style={{color: "black", display: "flex", 
                            justifyContent: "center", alignItems: "center"}}>
                          <ListGroup.Item>Robot A says: Mitochondria</ListGroup.Item>
                          <ListGroup.Item>Robot B says: Ribosomes</ListGroup.Item>
                        </ListGroup>
                    </div>
                  )
                }
              </div>
    }
  }



export default Activity;