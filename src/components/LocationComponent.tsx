import React from 'react';
import {Alert, Spinner, Badge} from 'react-bootstrap';
import Span from 'react-bootstrap';
import Location from './UI/Location';
import nucleusGraphic from '../assets/nucleus.mp4';
import mitochondrionGraphic from '../assets/mitochondrion.mp4';
import golgiBodyGraphic from '../assets/golgi_body.mp4';
import lysosomeGraphic from '../assets/lysosome.mp4';
import undefinedGraphic from '../assets/cytosol.mp4';
import Captions from '../assets/captions.json';

interface OrganelleData {
  graphic: string
}

interface OrganelleStore {
  [index: string]: OrganelleData;
}

let organelles = {
  "nucleus" : {graphic: nucleusGraphic},
  "mitochondrion": {graphic: mitochondrionGraphic},
  "golgiBody": {graphic: golgiBodyGraphic},
  "lysosome": {graphic: lysosomeGraphic},
  "undefined": {graphic: undefinedGraphic},
  "cytosol": {graphic: undefinedGraphic}
} as OrganelleStore;

interface LocationComponentState {
  error: any,
  isLoaded: boolean,
  x: number,
  y: number,
  theta: number,
  zone: string,
  src: string,
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
      const { error, isLoaded, x, y, theta, zone, src, lastFetched } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>
            <Location 
                src={src} 
                lastFetched={lastFetched}
                name={String(this.props.name)}
                x={x}
                y={y}
                theta={theta}
                zone={zone === "undefined" ? "cytosol" : zone}>
            </Location>
          </div>
        );
      }
    }
  }
export default LocationComponent;