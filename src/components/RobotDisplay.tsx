import React from 'react';
import {Form, Badge, Button} from 'react-bootstrap';
import LocationComponent from './LocationComponent';

interface RobotDisplayProps {
  queryRobot: string | null,
}

interface RobotDisplayState {
  isLoaded: boolean,
  robots: Array<string>,
  selectedRobot: string,
  error: any,
}

class RobotDisplay extends React.Component<RobotDisplayProps, RobotDisplayState> {

    constructor(props: RobotDisplayProps) {
      super(props);
      this.state = {
        isLoaded: false,
        robots: [],
        selectedRobot: "",
        error: null
      };
    }

    componentDidMount() {
      if (this.props.queryRobot != null) {
        return;
      }
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

    setSelectedRobot(robot: string) {
      this.setState({
        selectedRobot: robot
      });
    }

    renderFromQueryString() {
      let name = this.props.queryRobot;
      return (
        <div>
            <LocationComponent name={name}></LocationComponent> 
        </div>
      );
    }

    renderFromApi() {
      const { error, isLoaded, robots, selectedRobot } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>
              <LocationComponent name={selectedRobot}></LocationComponent> 
              <Form.Group>
                  <Form.Label>Tracking player:</Form.Label>
                  <Form.Control as="select"
                    onChange={e => this.setSelectedRobot(e.target.value)}>
                  {robots.map((robot,i) => <option key={i}>{robot}</option>)}
                  </Form.Control>
              </Form.Group>
          </div>
        );      
      }
    }
  
    render() {
      if (this.props.queryRobot != null) {
        return this.renderFromQueryString();
      }
      return this.renderFromApi();
    }
  }



export default RobotDisplay;