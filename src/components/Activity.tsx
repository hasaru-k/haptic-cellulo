import React from 'react';
import {Form, Badge, Button, ListGroup, ToggleButton, ToggleButtonGroup} from 'react-bootstrap';
import Questions from '../assets/question_sheet.json';
import { GamePlayer } from '../App';

interface ActivityProps {
  player: GamePlayer
  partner: GamePlayer
}

interface Answer {
  isChecked: boolean,
  zone: string
}

interface ActivityState {
  answers: Map<number, Answer>
}

class Activity extends React.Component<ActivityProps, ActivityState> {

    constructor(props : ActivityProps) {
      super(props);
      let answers = new Map<number, Answer>();
      Questions.forEach((question, i) => {
        let response = {isChecked: false, zone: "?"} as Answer;
        answers.set(i, response);
      })
      this.state = {
        answers: answers
      };
    }

    componentDidMount() {
    }

    setChecked = (i: number, target: HTMLInputElement) => {
      let answers = this.state.answers;
      let playerZone = this.props.player.zone;
      let answer = answers.get(i);
      if (answer === undefined) {
        return;
      }
      answer.isChecked = target.checked;
      answer.zone = target.checked ? playerZone : "?";
      this.setState({
        answers: answers
      });
      target.blur();
    }

    render() {
      let answers = this.state.answers;
      let answerList = Array.from(answers.values()).map(val => val.zone);
      let gamePlayers = [this.props.player, this.props.partner];
      let inAccordance = this.props.player.zone === this.props.partner.zone;
      console.log(Questions);
      return  <div>
                <Button variant="dark" style={{fontSize: "1.4rem", width: "100%", marginBottom: "20px"}} disabled>
                  For each question, place your robot to the organelle on the map
                    that you consider to be the correct answer.
                </Button>            
                <div></div>    
                {
                  Questions.map((question, i) => 
                    <div key={i} style={{marginTop: "10px"}}>
                      <Button variant="dark mt-2" style={{ fontSize: "1.2rem", width: "100%", textAlign: "left", marginBottom: "15px", marginTop: "15px"}} disabled>
                      {i+1}. {question.Q}
                      </Button>
                        <ToggleButtonGroup type="checkbox" 
                          style={{alignItems: "center",  
                                  animation: answers.get(i)?.isChecked ? "" : "pulse 1s infinite",
                                  width: "80%"}}>
                          {
                            gamePlayers.map((player: GamePlayer, j) =>
                            <ToggleButton value={Questions.length + j} 
                              style={{pointerEvents: "none", marginRight: "2px"}}
                              variant={answers.get(i)?.isChecked ? "primary" : inAccordance ? "info" : "light"}>
                              {
                                answers.get(i)?.isChecked ?
                                `${player.name}: ${answers.get(i)?.zone}`
                                : `${player.name}: ${player.zone}`
                              }
                            </ToggleButton>)
                          }
                          <ToggleButton
                            id="toggle-check"
                            checked={answers.get(i)?.isChecked}
                            variant={answers.get(i)?.isChecked ? "primary" : inAccordance ? "info" : "danger"}
                            value={i}
                            style={{pointerEvents: (answers.get(i)?.isChecked ? "auto" : inAccordance ? "auto" : "none")}}
                            onChange={(e) => this.setChecked(i, e.currentTarget)}>
                          { 
                            answers.get(i)?.isChecked ? 
                            "Unlock" : 
                            inAccordance ? "Lock in" : "Settle on an answer"
                          }
                        </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                  )
                }
                <Button variant="dark" style={{fontSize: "1rem", width: "100%", marginTop: "20px"}} disabled>
                Your answers: [{answerList.join(", ")}]
                </Button>
                <Button
                  style={{marginTop: "20px", width: "50%"}}
                  variant="success">
                    Submit
                </Button>   
              </div>
    }
  }



export default Activity;