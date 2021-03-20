import React from 'react';

class RobotMap extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        x: "",
        y: "",
        theta: ""
      };
    }

    fetchPose() {
        const name = this.props.name;
        fetch(`https://cellulo-live.herokuapp.com/pose?name=${name}`)
            .then(res => res.json())
            .then(
            (res) => {
                if (res.type === 'success') {
                    console.log(res);
                    let pose = res.content;
                    this.setState({
                        isLoaded: true,
                        x: pose.x,
                        y: pose.y,
                        theta: pose.theta
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

    componentDidMount() {
        this.fetchPose();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.name !== this.props.name) {
          this.fetchPose();
        }
    }
  
    render() {
      const { error, isLoaded, x, y, theta } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div>Robot {this.props.name} is at (x={x},y={y},theta={theta})</div>
        );
      }
    }
  }
export default RobotMap;