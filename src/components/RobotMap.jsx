import React from 'react';
import {Alert, Spinner, Span, Badge} from 'react-bootstrap';
import Location from './Location';
import nucleus from '../assets/nucleus.png';
import rough_er from '../assets/rough_er.png';
import golgi_body from '../assets/golgi_body.png';

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
      if (pose.x < 50) {
        this.setState({
          location: nucleus,
          caption: "Location: nucleus. The knowledge centre of the cell."
        });
      } else if (pose.x < 100) {
        this.setState({
          location: rough_er,
          caption: `Location: rough endoplasmic reticulum. Tiny ribosomes cling to the endoplasmic reticulum, injecting"
                    proteins into it.`
        });
      } else {
        this.setState({
          location: golgi_body,
          caption: "Location: golgi body. The packaging warehouse of the cell."
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
                    console.log(res);
                    let pose = res.content;
                    console.log(pose);
                    var date = new Date();
                    this.setState({
                        isLoaded: true,
                        x: pose.x,
                        y: pose.y,
                        theta: pose.theta,
                        lastFetched: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`
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
                error
                });
            }
            )
    }

    componentDidMount() {
        this.intervalId = setInterval(this.fetchPose.bind(this), 200);
        this.fetchPose();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.name !== this.props.name) {
          this.fetchPose();
        }
    }

    render() {
      const { error, isLoaded, x, y, theta, location, caption, lastFetched } = this.state;
      console.log(lastFetched);
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
                name={this.props.name}>
                x={x}
                y={y}
                theta={theta}
            </Location>
          </div>
        );
      }
    }
  }
export default RobotMap;