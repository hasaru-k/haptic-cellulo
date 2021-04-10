import React from 'react';
import {Alert, Spinner, Span, Badge} from 'react-bootstrap';
import Location from './Location';
import nucleus from '../assets/nucleus.mp4';
import mitochondrion from '../assets/mitochondrion.mp4';
import golgi_body from '../assets/golgi_body.mp4';

class RobotMap extends React.Component {

    intervalId = 0;
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        x: "",
        y: "",
        theta: "",
        location: nucleus,
        caption: "Location: nucleus. The knowledge centre of the cell.",
        lastFetched: null
      };
    }

    updateLocation(pose) {
      if (pose.x < 15) {
        this.setState({
          location: nucleus,
          caption: "The knowledge centre of the cell."
        });
      } else if (pose.x < 100) {
        this.setState({
          location: mitochondrion,
          caption: `The powerhouse of the cell.`
        });
      } else {
        this.setState({
          location: golgi_body,
          caption: "The packaging warehouse of the cell."
        });
      }
    }

  async fetchPose() {
        const name = this.props.name;
        fetch(`https://cellulo-live.herokuapp.com/pose?name=${name}`)
            .then(res => res.json())
            .then(
            (res) => {
                if (res.type === 'success') {
                    let pose = res.content;
                    var date = new Date();
                    this.setState({
                        isLoaded: true,
                        x: pose.x,
                        y: pose.y,
                        theta: pose.theta,
                        lastFetched: date.toLocaleTimeString('en-US')
                    });
                    this.updateLocation(pose);
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
                  error: error
                });
            }
            )
    }

    componentDidMount() {
        this.intervalId = setInterval(this.fetchPose.bind(this), 500);
        this.fetchPose();
    }

    render() {
      const { error, isLoaded, x, y, theta, location, caption, lastFetched } = this.state;
      if (this.props.name === "bloop") {
        console.log(`x=${x},y=${y}`);
      }
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>
            <Location 
                src={location} 
                caption={caption} 
                lastFetched={lastFetched}
                name={this.props.name}
                x={x}
                y={y}
                theta={theta}>
            </Location>
          </div>
        );
      }
    }
  }
export default RobotMap;