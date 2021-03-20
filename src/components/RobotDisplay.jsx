import React from 'react';
import {Form} from 'react-bootstrap';
import RobotMap from './RobotMap';

class RobotDisplay extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        robots: [],
        selectedRobot: ""
      };
    }

    componentDidMount() {
        fetch(`https://cellulo-live.herokuapp.com/robots/`)
            .then(res => res.json())
            .then(
            (res) => {
                if (res.type === 'success') {
                    let robots = res.content;
                    this.setState({
                        isLoaded: true,
                        robots: robots,
                        selectedRobot: robots[0]
                    });                    
                } else {
                    console.log("Non-success:" + JSON.stringify(res));
                }
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                isLoaded: true,
                error
                });
            }
            )
    }

    setSelectedRobot(robot) {
      this.setState({
        selectedRobot: robot
      });
    }
  
    render() {
      const { error, isLoaded, robots, selectedRobot } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div>
                <RobotMap name={selectedRobot}></RobotMap> 
                <Form.Group>
                    <Form.Label>Tracking robot:</Form.Label>
                    <Form.Control as="select"
                      onChange={e => this.setSelectedRobot(e.target.value)}>
                    {robots.map((robot,i) => <option key={i}>{robot}</option>)}
                    </Form.Control>
                </Form.Group>
            </div>
        );
      }
    }
  }
export default RobotDisplay;