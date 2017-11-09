import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HomePage extends Component {
    static propTypes = {
        toggle: PropTypes.bool
    };

    static defaultProps = {
        toggle: false
    };

    state = {
        toggleOther: false
    };

    clickButton = () => {
        const { toggleOther } = this.state;
        this.setState({
            toggleOther: !toggleOther
        });
    };

    render() {
        const { toggle } = this.props;
        const { toggleOther } = this.state;

        return (
            <div>
                Hello World
                { toggle && (<div>foo</div>) }
                <button onClick={this.clickButton}>Click</button>
                { toggleOther && (<div>bar</div>) }
            </div>
        );
    }
}
