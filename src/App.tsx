import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RobotDisplay from './components/RobotDisplay';
import Activity from './components/Activity';
import {Tab, Tabs, Modal, Button} from 'react-bootstrap';
import MainDisplay from './MainDisplay';

export interface GamePlayer {
  name: string
  zone: string
  x: number
  y: number
  theta: number
  lastFetched: string
}

interface State {
  player: GamePlayer
  partner: GamePlayer
}

interface Props {
}

function getQuery(query : string) {
  let result = new URLSearchParams(window.location.search).get(query);
  if (result === null) {
    throw new Error(`Query parameter ${query} not provided`);
  }
  return result;
}

class App extends React.Component<Props,State> {

  intervalId: any = 0;
  constructor(props: Props) {
    super(props);
    let player = {
      name: getQuery('player'),
      zone: "undefined",
      x: 0,
      y: 0,
      theta: 0,
      lastFetched: "Not fetched"
    } as GamePlayer;
    let partner = {
      name: getQuery('partner'),
      zone: "undefined",
      x: 0,
      y: 0,
      theta: 0,
      lastFetched: "Not fetched"
    } as GamePlayer;
    this.state = {
      player: player,
      partner: partner
    };
  }

  fetchGamePlayer = (name: string) => {
    return fetch(`https://cellulo-live.herokuapp.com/pose?name=${name}`)
    .then(res => res.json())
    .then(
    (res) => {
        if (res.type === 'success') {
            let pose = res.content;
            var date = new Date();
            let result = {
              name: name,
              zone: pose.zone,
              x: pose.x,
              y: pose.y,
              theta: pose.theta,
              lastFetched: date.toLocaleTimeString('en-US'),
            } as GamePlayer;
            return result;
        } else {
            console.log("Non-success:" + JSON.stringify(res));
        }
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    (error) => { throw new Error(error) });
  }

  fetchPose = () => {
    console.log(this.state);
    let playerName = this.state.player.name;
    this.fetchGamePlayer(playerName)
    .then((gamePlayer: GamePlayer | undefined) => {
      if (gamePlayer !== undefined) {
        this.setState({
          player: gamePlayer
        });
      }
    });
    let partnerName = this.state.partner.name;
    this.fetchGamePlayer(partnerName)
    .then((gamePlayer: GamePlayer | undefined) => {
      if (gamePlayer !== undefined) {
        this.setState({
          partner: gamePlayer
        });
      }
    });
  }

  componentDidMount() {
      this.intervalId = setInterval(this.fetchPose.bind(this), 500);
      this.fetchPose();
  }


  render() {
    console.log("This state");
    console.log(this.state);
    let {player, partner} = this.state;
    return (
      <MainDisplay player={player} partner={partner}></MainDisplay>
    );
  }
}

export default App;
