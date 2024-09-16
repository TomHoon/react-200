import { Component } from "react";

class ForEach extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let arr = [3, 2, 8, 8];
    let new_arr = [];

    arr.forEach((item) => new_arr.push(item));

    console.log(new_arr);
  }

  render() {
    return <h2>[THIS IS FOREACH COMPONENT]</h2>;
  }
}

export default ForEach;
