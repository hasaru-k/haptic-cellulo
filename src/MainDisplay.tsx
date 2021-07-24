import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Activity from './components/Activity';
import {Tab, Tabs, Modal, Button, Form} from 'react-bootstrap';
import { GamePlayer } from './App';
import LocationComponent from './components/LocationComponent';
import Checklist from './components/UI/Checklist';

interface MainDisplayState {
  mode: Mode,
  key: string
  showModal: boolean
  startedQuiz: boolean
}

interface MainDisplayProps {
  player: GamePlayer
  partner: GamePlayer
}

enum Mode {
  Test,
  Explore,
}

class MainDisplay extends React.Component<MainDisplayProps, MainDisplayState> {

  constructor(props: MainDisplayProps) {
    super(props);
    this.state = {
      mode: Mode.Explore,
      key: "explore",
      showModal: false,
      startedQuiz: false
    };
  }

  changeMode(mode: Mode) {
    this.setState({
      mode: mode
    });
  }

  setKey(key: string | null) {
    let desiredKey = key;
    let showModal = key === "quiz" ? true : false;
    this.setState({
      key: desiredKey === null ? "explore" : desiredKey,
      showModal: showModal
    });
  }

  startQuiz = () => {
    this.setState({
      showModal: false,
      startedQuiz: true
    });
  }

  keepExploring = () => {
    this.setState({
      key: "explore",
      showModal: false
    });
  }

  render() {
    let key = this.state.key;
    let showModal = this.state.showModal;
    let startedQuiz = this.state.startedQuiz;
    console.log("ActiveKey:");
    console.log(key);
    return (
      <div className="App">
              <h2 style={{paddingTop: "15px", color: "#b9b9b9", fontFamily: "helvetica"}}>
              Haptic Cellulo
              </h2>
              <Tabs activeKey={key}  
              onSelect={(k) => this.setKey(k)}
              style={{marginTop: "-20px", marginBottom: "30px", fontSize: "1rem", width: "65%"}}>
                  <Tab eventKey="explore" 
                    title="Explore Cell Map" 
                    disabled={startedQuiz ? true : false}>
                        <div className="gridContainer" style={{borderRadius: "10px", margin: "0%"}}>
                          <div className="guideBox">
                            <Checklist/>
                          </div>
                          <div className="mainApp">
                            <LocationComponent player={this.props.player} partner={this.props.partner}/>
                          </div>
                        </div>
                  </Tab>
                  <Tab 
                  eventKey="quiz" 
                    title="Start Quiz"
                    disabled={startedQuiz ? true : false}
                    >
                    <Activity player={this.props.player} partner={this.props.partner}></Activity>
                  </Tab>
                </Tabs>
                <Modal
                  show={showModal}
                  backdrop="static"
                  keyboard={false}>
                <Modal.Header 
                  closeButton>
                  <Modal.Title>Quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Are you ready to start the quiz? Once you begin, you cannot return
                  to the learning activity.
                </Modal.Body>
                <Modal.Footer>
                  <Button 
                    variant="secondary" 
                    onClick={this.keepExploring}>
                    Keep exploring
                  </Button>
                  <Button 
                    variant="primary" 
                    onClick={this.startQuiz}>
                      Yes, start the quiz
                  </Button>
                </Modal.Footer>
              </Modal>
      </div>
    );
  }

  renderContent() {
    return  
  }
}

export default MainDisplay;
