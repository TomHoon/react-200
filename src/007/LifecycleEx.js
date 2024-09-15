import { Component } from "react";

class LifycycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps call : ' + props.prop_value);

        return {tmp_state: props.prop_value}
    }

    constructor(props) {
        super(props);
        this.state = {};

        console.log('1. constructor call');
    }

    componentDidMount() {
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state : ', this.state.tmp_state);
    }

    render() {
        console.log('render >>> ');
        return (
            <h2>[THIS IS COMPONENDDIDMOUNT FUNCTION]</h2>
        )
    }
}

export default LifycycleEx;