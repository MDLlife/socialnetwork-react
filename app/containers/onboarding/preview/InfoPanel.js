import React, {Component} from 'react';
import PropTypes from 'prop-types';

const InfoPanel = props => {
    return (
        <div style={{
            backgroundColor: 'lightgrey',
            marginTop: 20,
            borderRadius: '5px'
        }}>
            <div>
                Measurements
            </div>
            <div>
                Appearance
            </div>
        </div>
    )
};

export default InfoPanel;