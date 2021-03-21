import React from 'react';
import {Alert} from 'react-bootstrap';
import Location from './Location';
import nucleus from '../assets/nucleus.png';
import rough_er from '../assets/rough_er.png';
import golgi_body from '../assets/golgi_body.png';

class RobotMap extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        x: "",
        y: "",
        theta: "",
        location: nucleus,
        caption: "Location: nucleus. The knowledge centre of the cell."
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

    fetchPose() {
        const name = this.props.name;
        fetch(`/pose?name=${name}`)
            .then(res => res.json())
            .then(
            (res) => {
                if (res.type === 'success') {
                    console.log(res);
                    let pose = res.content;
                    console.log(pose);
                    this.setState({
                        isLoaded: true,
                        x: pose.x,
                        y: pose.y,
                        theta: pose.theta
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
        this.fetchPose();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.name !== this.props.name) {
          this.fetchPose();
        }
    }
  
    render() {
      const { error, isLoaded, x, y, theta, location, caption } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>
            <Location src={location} caption={caption}></Location>
            <Alert variant="info">
              {this.props.name} is at (x={x},y={y},theta={theta})
            </Alert>
          </div>
        );
      }
    }
  }
export default RobotMap;