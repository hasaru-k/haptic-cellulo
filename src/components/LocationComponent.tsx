import React from 'react';
import Span from 'react-bootstrap';
import Location from './UI/Location';
import nucleusGraphic from '../assets/nucleus.mp4';
import mitochondrionGraphic from '../assets/mitochondrion.mp4';
import golgiBodyGraphic from '../assets/golgi_body.mp4';
import lysosomeGraphic from '../assets/lysosome.mp4';
import undefinedGraphic from '../assets/cytosol.mp4';
import Captions from '../assets/captions.json';
import {GamePlayer} from '../App';

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
  "?": {graphic: undefinedGraphic},
  "cytosol": {graphic: undefinedGraphic}
} as OrganelleStore;

interface LocationComponentState {
}

interface LocationComponentProps {
  player: GamePlayer
  partner: GamePlayer
}

class LocationComponent extends React.Component<LocationComponentProps, LocationComponentState> {

    constructor(props: any) {
      super(props);
      this.state = {};
    }
    
    render() {
      return <div>
        
        <Location
          src={organelles[this.props.player.zone].graphic} 
          lastFetched={this.props.player.lastFetched}
          name={this.props.player.name}
          x={this.props.player.x}
          y={this.props.player.y}
          theta={this.props.player.theta}
          zone={this.props.player.zone === "?" ? "cytosol" : this.props.player.zone}>
        </Location>
      </div>;
    }
  }
export default LocationComponent;