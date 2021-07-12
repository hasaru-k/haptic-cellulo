import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RobotDisplay from './components/RobotDisplay';
import Activity from './components/Activity';
import {Tab, Tabs} from 'react-bootstrap';

interface State {
  mode: Mode,
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
      mode: Mode.Explore
    };
  }

  changeMode(mode: Mode) {
    this.setState({
      mode: mode
    });
  }

  render() {
    return (
      <div className="App">
          <h2 style={{paddingTop: "30px", color: "#b9b9b9", fontFamily: "helvetica"}}>Haptic Cellulo</h2>
          <div className="container" style={{padding: "30px", borderRadius: "10px", width: "40%"}}>
            <Tabs defaultActiveKey="explore" style={{marginBottom: "20px", fontSize: "1rem"}}>
                <Tab eventKey="explore" title="Explore Cell Map">
                  <div className="row">
                      <div className="col">
                        <RobotDisplay queryRobot={getQuery('name')}></RobotDisplay>
                      </div>
                  </div>
                </Tab>
                <Tab eventKey="quiz" title="Complete Quiz">
                  <Activity robots={[]}></Activity>
                </Tab>
              </Tabs>
          </div>
      </div>
    );
  }

  renderContent() {
    return  
  }
}

export default App;
