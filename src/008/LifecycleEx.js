import { Component } from "react";

class LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('call getDerivedStateFromProps');
        return {tmp_state: props.props_value};
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log('call componentDidMount');
        this.setState({tmp_state2: true});
    }

    shouldComponentUpdate(props, state) {
        console.log('call shouldComponentUpdate');
        console.log('props >>> ', props);
        console.log(state.tmp_state2);

        return state.tmp_state2;
    }

    render() {
        return (
            <h3>[THIS IS shouldComponentUpdate]</h3>
        )
    }
}

export default LifecycleEx;