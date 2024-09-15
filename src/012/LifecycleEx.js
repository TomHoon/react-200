import { Component } from "react";

class LifycycleEx extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let ExamCountFunc = (function () {
      function ExamCount(num) {
        this.num = num;
      }

      ExamCount.prototype.showNum = function () {
        console.log('1. num : ', this.num);
      }
      return ExamCount;
    })();

    class ExamCountClass {
      constructor(num2) {
        this.num2 = num2;
      }

      showNum() {
        console.log('2. num : ', this.num2);
      }
    }
    let ex = new ExamCountFunc(10);
    let ex2 = new ExamCountClass(200);

    ex.showNum();
    ex2.showNum();
  }

  render() {
    return (
      <h2>[THIS IS CSS Component]</h2>
    )
  }
}

export default LifycycleEx;