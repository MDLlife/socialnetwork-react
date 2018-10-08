import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Medals extends Component {
    render() {
        return (
            <div style={{
                height: 120,
                borderBottomLeftRadius: '5px',
                borderBottomRightRadius: '5px',
                backgroundColor: 'white',
                padding: 10
            }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        fontFamily: 'Gilroy Medium'
                    }}
                >
                    <h4 style={{margin: 0}}>
                        Medals
                    </h4>
                </div>
                <div 
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: 5
                    }}
                >
                    <div>
                        <img 
                            src='/static/img/medals_s-18.png'
                            style={{
                                width: 70,
                            }}
                        />
                    </div>
                    <div 
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            fontFamily: 'Gilroy Medium',
                            padding: '0px 21px'
                        }}
                    >
                        Congratulations! You are a part of MDL now!
                    </div>
                </div>
            </div>
        ) 
    }

}



export default Medals