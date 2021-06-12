import React from 'react';
import {Alert, Spinner, Badge} from 'react-bootstrap';
import Span from 'react-bootstrap';
import Location from './UI/Location';
import nucleusGraphic from '../assets/nucleus.mp4';
import mitochondrionGraphic from '../assets/mitochondrion.mp4';
import golgiBodyGraphic from '../assets/golgi_body.mp4';

interface Organelle {
  name: String
  x: number,
  y: number,
  graphic: String,
  caption: String
}

// Todo: migrate into JSON
let nucleus = {name: "nucleus", x: 177, y: 85, graphic: nucleusGraphic, caption: "The knowledge centre of the cell. A nucleus is a membrane-bound organelle that contains the cell's chromosomes. Pores in the nuclear membrane allow for the passage of RNA molecules in and out of the nucleus. The cell nucleus contains all of the cell's genome, except for a small amount of mitochondrial DNA."};
let mitochondrion = {name: "mitochondrion", x: 136, y: 49, graphic: mitochondrionGraphic, caption: "The powerhouse of the cell. Mitochondria are membrane-bound cell organelles (mitochondrion, singular) that generate most of the chemical energy needed to power the cell's biochemical reactions. Chemical energy produced by the mitochondria is stored in a small molecule called adenosine triphosphate (ATP). Mitochondria contain their own small chromosomes. Generally, mitochondria, and therefore mitochondrial DNA, are inherited only from the mother."};
let golgiBody = {name: "golgi body", x: 167, y: 150, graphic: golgiBodyGraphic, caption: "The packaging warehouse of the cell. A Golgi body, also known as a Golgi apparatus, is a cell organelle that helps process and package proteins and lipid molecules, especially proteins destined to be exported from the cell. Named after its discoverer, Camillo Golgi, the Golgi body appears as a series of stacked membranes."};
let organelles = [nucleus, mitochondrion, golgiBody];

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
        location: nucleus.graphic,
        caption: "Location: nucleus. A nucleus is a membrane-bound organelle that contains the cell's chromosomes. Pores in the nuclear membrane allow for the passage of RNA molecules in and out of the nucleus. The cell nucleus contains all of the cell's genome, except for a small amount of mitochondrial DNA.",
        lastFetched: null
      };
    }

    getClosestOrganelle(pose: any) {
      // threshold in mm
      let threshold = 10;
      let minDist = Number.MAX_SAFE_INTEGER;
      let closest = {} as Organelle;
      organelles.forEach(function (organelle: Organelle) {
        let dist = Math.sqrt( Math.pow((organelle.x - pose.x), 2) + Math.pow((organelle.y - pose.y), 2) );
        console.log(`dist(pose, ${organelle.name})=${dist}`)
        if (dist < minDist) {
          minDist = dist;
          closest = organelle;
        }
      });
      return closest;
    }

    updateLocation(pose: any) {
      let closest = this.getClosestOrganelle(pose);
      this.setState({
        location: closest.graphic,
        caption: closest.caption
      });
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