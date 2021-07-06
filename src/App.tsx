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
          <p></p>
          <div className="container" style={{backgroundColor: "rgb(23 23 23)", padding: "30px", borderRadius: "10px"}}>
            <Tabs defaultActiveKey="explore" style={{marginBottom: "20px", fontSize: "1rem"}}>
                <Tab eventKey="explore" title="Explore Cell Map">
                  <div className="row">
                      <div className="col">
                        <RobotDisplay queryRobot={getQuery('left')}></RobotDisplay>
                      </div>
                      <div className="col">
                        <RobotDisplay queryRobot={getQuery('right')}></RobotDisplay>
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
