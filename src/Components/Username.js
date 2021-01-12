import React from "react";
import api from "../api";

class Username extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    api.fetchUsername().then((result) => {
      console.log(result);
      this.setState({ username: result.username });
    });
  }

  render() {
    return <p>{this.state.username}</p>;
  }
}

export default Username;
