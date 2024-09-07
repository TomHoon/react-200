import React, {Component} from "react";

class R005_LifycycleEx extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    render() {
        console.log('3. render Call');

        return (
            <h3>[THIS IS CONSTRUCTOR FUNCTION]</h3>
        )
    }
}

export default R005_LifycycleEx