import React from 'react';
import {Form, Badge, Button, ListGroup, ToggleButton, ToggleButtonGroup} from 'react-bootstrap';
import Questions from '../assets/question_sheet.json';
import { GamePlayer } from '../App';
import {Popover, OverlayTrigger} from 'react-bootstrap';


interface ActivityProps {
  player: GamePlayer
  partner: GamePlayer
}

interface Answer {
  isChecked: boolean,
  zone: string
}

enum SendingState {
  UNSENT,
  IN_FLIGHT,
  SENT
}

interface ActivityState {
  answers: Map<number, Answer>,
  sendingState: SendingState
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
        answers: answers,
        sendingState: SendingState.UNSENT
      };
    }
    
    submitResults = (player: string, partner: string, answers: Array<string>) => {
      this.setState({
        sendingState: SendingState.IN_FLIGHT
      });
      const requestOptions = {
        method: 'POST'
      };
      fetch(
        `https://cellulo-live.herokuapp.com/results/?player=${player}&partner=${partner}&answers=${answers.join(',')}`,
        requestOptions
        )
      .then(res => res.json())
      .then(
      (res) => {
          console.log(res);
      },
      (error) => { throw new Error(error) })
      .then((res) => {
        this.setState({
          sendingState: SendingState.SENT
        });
      });
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

    renderTooltip = (props: any) => (
      <Popover body {...props}>
          <div style={{padding: "10px", width: "10rem"}}>
            To lock in an answer, you and your partner
            must select the same organelle using your robots.
          </div>
      </Popover>
    );

    render() {
      let answers = this.state.answers;
      let sendingState = this.state.sendingState;
      let answerList = Array.from(answers.values()).map(val => val.zone);
      let gamePlayers = [this.props.player, this.props.partner];
      let inAccordance = this.props.player.zone === this.props.partner.zone;
      let allAnswered = answerList.every((answer) => answer !== "?");
      console.log(Questions);
      return  <div style={{paddingLeft: "20%", paddingRight: "20%", paddingBottom: "20px"}}>
                <Button variant="dark" style={{fontSize: "1.4rem", width: "100%", marginBottom: "5px"}} disabled>
                  <OverlayTrigger
                  placement="left"
                  trigger="hover"
                  delay={{ show: 250, hide: 400 }}
                  overlay={this.renderTooltip}>
                      <Button variant="dark" style={{"fontSize": "0.9em", "marginRight": "10px"}}>ⓘ</Button>
                  </OverlayTrigger>
                  For each question, move your robot to the organelle on the map that you think
                  is the correct answer.
                </Button>           
                <div></div>    
                {
                  Questions.map((question, i) => 
                    <div key={i} style={{marginTop: "10px"}}>
                      <Button variant="dark mt-2" style={{ fontSize: "1.2rem", width: "100%", textAlign: "left", marginBottom: "15px", marginTop: "15px"}} disabled>
                      {i+1}. {question.Q}
                      </Button>
                        <ToggleButtonGroup 
                          type="checkbox" 
                          style={{alignItems: "center",  
                                  animation: answers.get(i)?.isChecked ? "" : "pulse 1s infinite",
                                  width: "80%"}}>
                          {
                            sendingState === SendingState.SENT ?
                            <ToggleButton 
                              disabled={sendingState === SendingState.SENT}
                              value={Questions.length} 
                              style={{pointerEvents: "none", marginRight: "2px"}}
                              variant={answers.get(i)?.zone === Questions[i].A ? "success" : "danger"}>
                            { answers.get(i)?.zone === Questions[i].A ? "Correct" : `Correct answer: ${Questions[i].A}`}
                            </ToggleButton> : null
                          }
                          {
                            gamePlayers.map((player: GamePlayer, j) =>
                            <ToggleButton 
                              disabled={sendingState === SendingState.SENT}
                              value={Questions.length + 1 + j} 
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
                            disabled={sendingState === SendingState.SENT}
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
                  disabled={!allAnswered || sendingState !== SendingState.UNSENT}
                  onClick={(e) => this.submitResults(this.props.player.name, this.props.partner.name, answerList)}
                  variant="success">
                    { !allAnswered ?
                      "Lock in an answer for each question." :
                      sendingState === SendingState.UNSENT ?
                      "Submit" :
                      sendingState === SendingState.IN_FLIGHT ?
                      "Submitting..." :
                      "Submitted"}
                </Button>
              </div>
    }
  }



export default Activity;