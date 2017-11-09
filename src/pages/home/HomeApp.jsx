import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const SampleTopLevelContainer = glamorous.div({
    maxWidth: '300px',
    textAlign: 'center',
    margin: '0 auto'
});

const SampleStyledText = glamorous.p({
    fontFamily: 'sans-serif',
    fontSize: '25px'
});

const SampleOverwriteStyles = glamorous(SampleStyledText)({
    color: 'red',
    fontSize: '15px'
});

const SampleStyledButton = glamorous.button({
    fontFamily: 'sans-serif',
    fontSize: '20px',
    padding: '5px 10px',
    margin: '0 5px',
    fontSize: '20px',
    backgroundColor: '#87a7e2',
    borderRadius: '3px',
    border: 'none',
    boxShadow: '0px 1px 2px grey',
    ':hover': {
        backgroundColor: '#6495ed'
    }
});

export default class HomePage extends Component {
    static displayName = 'HomePage';

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
            <SampleTopLevelContainer>
                <SampleStyledText>Hello World</SampleStyledText>
                { toggle &&
                    (<SampleOverwriteStyles>foo</SampleOverwriteStyles>) }
                <SampleStyledButton onClick={this.clickButton}>
                    Click
                </SampleStyledButton>
                { toggleOther &&
                    (<SampleOverwriteStyles>bar</SampleOverwriteStyles>) }
            </SampleTopLevelContainer>
        );
    }
}
