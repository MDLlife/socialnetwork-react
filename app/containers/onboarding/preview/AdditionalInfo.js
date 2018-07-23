import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class AdditionalInfo extends Component {
    render() {
        return (
            <div style={{
                marginTop: 15,
                backgroundColor: 'lightgrey',
                borderRadius: '5px'
            }}>
                Additional Info
            </div>
        )
    }
}

export default connect()(AdditionalInfo);