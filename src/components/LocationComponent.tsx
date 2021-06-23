import React from 'react';
import {Alert, Spinner, Badge} from 'react-bootstrap';
import Span from 'react-bootstrap';
import Location from './UI/Location';
import nucleusGraphic from '../assets/nucleus.mp4';
import mitochondrionGraphic from '../assets/mitochondrion.mp4';
import golgiBodyGraphic from '../assets/golgi_body.mp4';

interface OrganelleData {
  graphic: string,
  caption: string
}

// Todo: migrate into JSON
let nucleusData = {graphic: nucleusGraphic, caption: "The knowledge centre of the cell. A nucleus is a membrane-bound organelle that contains the cell's chromosomes. Pores in the nuclear membrane allow for the passage of RNA molecules in and out of the nucleus. The cell nucleus contains all of the cell's genome, except for a small amount of mitochondrial DNA."} as OrganelleData;
let mitochondrionData = {graphic: mitochondrionGraphic, caption: "The powerhouse of the cell. Mitochondria are membrane-bound cell organelles (mitochondrion, singular) that generate most of the chemical energy needed to power the cell's biochemical reactions. Chemical energy produced by the mitochondria is stored in a small molecule called adenosine triphosphate (ATP). Mitochondria contain their own small chromosomes. Generally, mitochondria, and therefore mitochondrial DNA, are inherited only from the mother."} as OrganelleData;
let golgiBodyData = {graphic: golgiBodyGraphic, caption: "The packaging warehouse of the cell. A Golgi body, also known as a Golgi apparatus, is a cell organelle that helps process and package proteins and lipid molecules, especially proteins destined to be exported from the cell. Named after its discoverer, Camillo Golgi, the Golgi body appears as a series of stacked membranes."} as OrganelleData;
let undefinedData = {graphic: "", caption: "Undefined"} as OrganelleData;

interface OrganelleStore {
  [index: string]: OrganelleData;
}

let organelles = {
  "nucleus" : nucleusData,
  "mitochondrion": mitochondrionData,
  "golgiBody": golgiBodyData,
  "undefined": undefinedData
} as OrganelleStore;

interface LocationComponentState {
  error: any,
  isLoaded: boolean,
  x: number,
  y: number,
  theta: number,
  zone: string,
  src: string,
  caption: string,
  lastFetched: string
}

interface LocationComponentProps {
  name: string | null
}

class LocationComponent extends React.Component<LocationComponentProps, LocationComponentState> {

    intervalId: any = 0;
    constructor(props: any) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        x: 0,
        y: 0,
        theta: 0,
        zone: "undefined",
        src: "",
        caption: "Location: undefined",
        lastFetched: ""
      };
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
                        zone: pose.zone,
                        lastFetched: date.toLocaleTimeString('en-US'),
                        src: organelles[pose.zone].graphic,
                        caption: organelles[pose.zone].caption
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
      const { error, isLoaded, x, y, theta, zone, src, caption, lastFetched } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>
            <Location 
                src={src} 
                caption={String(caption)} 
                lastFetched={String(lastFetched)}
                name={String(this.props.name)}
                x={Number(x)}
                y={Number(y)}
                theta={Number(theta)}
                zone={String(zone)}>
            </Location>
          </div>
        );
      }
    }
  }
export default LocationComponent;