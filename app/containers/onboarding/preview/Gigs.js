import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Gigs extends Component {
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Gilroy Medium',
                }}
            >
                <div
                    style={{
                        color: '#660066',
                        width: '75%',
                        fontSize: 18,
                        backgroundColor: 'white',
                        borderRadius: 5,
                        height: 70,
                        display: 'grid',
                        gridTemplateColumns: '100%',
                        alignItems: 'center',
                    }}
                >
                    <p style={{margin: 0}}>Your trust score will be shown here as soon as you complete your first gig!</p>
                </div>
                <div
                    style={{
                        width: '25%',
                        color: 'white',
                        background: "url(/static/img/IntroLoginBG.jpg) left center",
                        height: 70,
                        borderRadius: 5,
                        marginLeft: 8
                    }}
                >
                    <h2 style={{margin: '3px 0', fontSize: '36px'}}>0</h2>
                    <p>Complete gigs</p>
                </div>
            </div>
        )
    }
}

export default Gigs;