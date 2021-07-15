import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RobotDisplay from './components/RobotDisplay';
import Activity from './components/Activity';
import {Tab, Tabs, Modal, Button} from 'react-bootstrap';

interface State {
  mode: Mode,
  key: string
  showModal: boolean
  startedQuiz: boolean
}

interface Props {
}

enum Mode {
  Test,
  Explore,
}

function getQuery(query : string) {
  return new URLSearchParams(window.location.search).get(query);
}

class App extends React.Component<Props,State> {

  constructor(props: Props) {
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
          <h2 style={{paddingTop: "30px", color: "#b9b9b9", fontFamily: "helvetica"}}>Haptic Cellulo</h2>
          <div className="container" style={{padding: "20px", borderRadius: "10px", width: "50%"}}>
            <Tabs                 
            activeKey={key}  
            onSelect={(k) => this.setKey(k)}
            style={{marginBottom: "20px", fontSize: "1rem"}}>
                <Tab eventKey="explore" title="Explore Cell Map" disabled={startedQuiz ? true : false}>
                  <div className="row">
                      <div className="col">
                        <RobotDisplay queryRobot={getQuery('name')}></RobotDisplay>
                      </div>
                  </div>
                </Tab>
                <Tab eventKey="quiz" 
                  title="Start Quiz"
                  disabled={startedQuiz ? true : false}
                  //onSelect={this.setShowModal}
                  >
                  <Activity robots={[]} show={true}></Activity>
                </Tab>
              </Tabs>
              <Modal
                    // onHide={}
                    show={showModal}
                    backdrop="static"
                    keyboard={false}
                  >
                  <Modal.Header closeButton>
                    <Modal.Title>Quiz</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Are you ready to start the quiz? Once you begin, you cannot return
                    to the learning activity.
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.keepExploring}>
                      Keep exploring
                    </Button>
                    <Button variant="primary" onClick={this.startQuiz}>Yes, start the quiz</Button>
                  </Modal.Footer>
                </Modal>
          </div>
      </div>
    );
  }

  renderContent() {
    return  
  }
}

export default App;
