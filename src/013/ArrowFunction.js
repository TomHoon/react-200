import { Component } from "react";

class ArrowFunction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowFunc: 'React200',
      num: 3
    };
  }

  componentDidMount() {
    Function1(1);
    this.Function2(11, 21);
    this.Function3();
    this.Function4();
    this.Function5();
    function Function1(num1) {
      return console.log(num1 + '. Function1');
    };
  }

  Function2 = (num1, num2) => {
    let num3 = num1 + num2;
    console.log(num3 + ". Function2 : " + this.state.arrowFunc);
  }

  Function3() {
    let this_bind = this;
    setTimeout(function () {
      console.log(this_bind.state.num + '. noBind : ');
    }, 100);
  }

  Function4() {
    setTimeout(function () {
      console.log('4. Es5 Callback function Bind : ' + this.state.arrowFunc);
    }.bind(this), 200);
  }

  Function5 = (num1, num2, num3) => {
    const num4 = num1 + num2 + num3;
    setTimeout(() => {
      console.log(num4 + '. Arrow Function : ' + this.state.arrowFunc);
    }, 100);
  }

  render() {
    return (
      <h2>[THIS IS ARROW FUNCTION]</h2>
    )
  }

}

export default ArrowFunction;