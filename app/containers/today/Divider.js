import React from 'react';
import PropTypes from 'prop-types';

const Divider = props => {
    return (
        <div style={{
            marginTop: 15,
            marginBottom: 15,
            display: 'flex'
        }}>
            <hr style={{
                border: '1px solid lightgrey',
                width: '50%',
                margin: '9px 0'
            }}/>
            <div style={{
                padding: '0 10px'
            }}>
                {props.date}
            </div>
            <hr style={{
                border: '1px solid lightgrey',
                width: '50%',
                margin: '9px 0'
            }}/>
        </div>
    )
};

Divider.propTypes = {
    date: PropTypes.string
};

Divider.defaultProps = {
    date: 'Today'
};

export default Divider;