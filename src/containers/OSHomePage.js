import React, { Component } from 'react';
import { connect } from 'react-redux';
import { barAction } from '../actions/fooAction'

class OSHomePage extends Component {
    render() {
        const { name, updateBarData } = this.props;
        return (
            <div>
                OS booting name: {name}
                <button onClick={() => updateBarData('Priyanshu')}>Bar</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { name } = state.foo;
    return {
        name
    }
};

const mapDispatchToProps = (dispatch) => {
    const updateBarData = (data) => {
        dispatch(barAction(data))
    };
    return { updateBarData };
};

export default connect(mapStateToProps, mapDispatchToProps)(OSHomePage);
