import React from 'react';
import {Alert, Spinner, Badge} from 'react-bootstrap';
import Span from 'react-bootstrap';
import Location from './UI/Location';
import nucleus from '../assets/nucleus.mp4';
import mitochondrion from '../assets/mitochondrion.mp4';
import golgi_body from '../assets/golgi_body.mp4';

class LocationComponent extends React.Component<any,any> {

    intervalId: any = 0;
    constructor(props: any) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        x: "",
        y: "",
        theta: "",
        location: nucleus,
        caption: "Location: nucleus. A nucleus is a membrane-bound organelle that contains the cell's chromosomes. Pores in the nuclear membrane allow for the passage of RNA molecules in and out of the nucleus. The cell nucleus contains all of the cell's genome, except for a small amount of mitochondrial DNA.",
        lastFetched: null
      };
    }

    updateLocation(pose: any) {
      if (pose.x < 15) {
        this.setState({
          location: nucleus,
          caption: "The knowledge centre of the cell. A nucleus is a membrane-bound organelle that contains the cell's chromosomes. Pores in the nuclear membrane allow for the passage of RNA molecules in and out of the nucleus. The cell nucleus contains all of the cell's genome, except for a small amount of mitochondrial DNA."
        });
      } else if (pose.x < 100) {
        this.setState({
          location: mitochondrion,
          caption: `The powerhouse of the cell. Mitochondria are membrane-bound cell organelles (mitochondrion, singular) that generate most of the chemical energy needed to power the cell's biochemical reactions. Chemical energy produced by the mitochondria is stored in a small molecule called adenosine triphosphate (ATP). Mitochondria contain their own small chromosomes. Generally, mitochondria, and therefore mitochondrial DNA, are inherited only from the mother.`
        });
      } else {
        this.setState({
          location: golgi_body,
          caption: "The packaging warehouse of the cell. A Golgi body, also known as a Golgi apparatus, is a cell organelle that helps process and package proteins and lipid molecules, especially proteins destined to be exported from the cell. Named after its discoverer, Camillo Golgi, the Golgi body appears as a series of stacked membranes."
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
                caption={String(caption)} 
                lastFetched={String(lastFetched)}
                name={String(this.props.name)}
                x={Number(x)}
                y={Number(y)}
                theta={Number(theta)}>
            </Location>
          </div>
        );
      }
    }
  }
export default LocationComponent;