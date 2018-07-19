import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Future extends Component {
    render() {
        return [
            <div className='future-post'>
                <div className='future-header'>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img
                            src="http://via.placeholder.com/36x36"
                            alt=""
                            style={{
                                borderRadius: '50%',
                            }}
                        />
                        <div
                            className='post-author'
                        >
                            Written by: <span style={{fontWeight: 'bolder'}}>Jack Jackson</span>
                        </div>
                    </div>
                    <div
                        className='post-date'
                    >
                        Posted: <span style={{fontWeight: 'bolder'}}>8 hours ago</span>
                    </div>
                </div>
                <div className='future-content'>
                    <p className='future-content-text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aliquid animi beatae blanditiis dicta enim est eum hic,
                        illum impedit inventore, laudantium nesciunt nisi
                        optio pariatur reprehenderit veritatis, voluptate.
                        Consectetur, est.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Assumenda atque deleniti dolore ducimus, eligendi enim exercitationem
                        fugiat harum inventore itaque laudantium maiores modi
                        numquam quae rerum similique sit suscipit, veritatis?
                    </p>
                </div>
            </div>
        ]
    }
}

export default connect()(Future);