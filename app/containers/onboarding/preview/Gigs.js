import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Gigs = props => {
    return (
        <div style={{
            backgroundColor: 'lightgrey',
            borderRadius: '5px'
        }}>
            <div>
                <p>Your trust score will be shown here as soon as you complete your first gig!</p>
            </div>
            <div>
                <p>0</p>
                <p>Complete gigs</p>
            </div>
        </div>
    )
}

export default Gigs;