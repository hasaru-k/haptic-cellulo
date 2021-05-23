import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RobotDisplay from './components/RobotDisplay';
import Activity from './components/Activity';

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
    let mode = this.state.mode;
    console.log(mode);
    return (
      <div className="App">
        <header className="App-header">
          <p></p>
          <div className="container">
            {this.renderContent(mode)}
          </div>
        </header>
      </div>
    );
  }

  renderExplore() {
    return <div className="row">
              <div className="col">
                <RobotDisplay queryRobot={getQuery('left')}></RobotDisplay>
              </div>
              <div className="col offset-1">
                <RobotDisplay queryRobot={getQuery('right')}></RobotDisplay>
              </div>
            </div>
  }

  renderTest() {
    return <div className="row">
              <div className="col">
                <Activity robots={[]}></Activity>
              </div>
           </div>
  }

  renderContent(mode : Mode) {
    switch (mode) {
      case Mode.Explore:
        return this.renderExplore();
      case Mode.Test:
        return this.renderTest();
      default:
        throw "Unknown mode " + mode;  
    }
  }
}

export default App;
