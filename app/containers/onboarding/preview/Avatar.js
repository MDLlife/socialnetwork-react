import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Avatar = props => {
    return (
        <div style={{
            backgroundColor: 'darkgray',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px'
        }}>
            <label>Model</label>
            <div>
                <img
                    src="http://via.placeholder.com/150x150"
                    alt=""
                    style={{
                        width: 150,
                        borderRadius: '50%'
                    }}
                />
                <span></span>
            </div>

            <div>
                <span>Kristina</span>
                <span>New York, USA</span>
                <span>Mature</span>
            </div>
        </div>
    )
}

export default Avatar;