import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Video extends Component {
    constructor(props) {
        super(props);

        this.state = {
            video: false
        }
    }

    render() {
        const {t} = this.props;

        return (
            <div 
                style={{
                    marginTop: 15,
                    backgroundColor: 'lightgrey',
                    borderRadius: '5px',
                    height: 170,
                    padding: 10,
                    fontFamily: 'Gilroy Medium',
                    backgroundColor: 'white',
                }}
            >
                <div>
                    <h4 style={{margin: 0}}>{t('video')}</h4>
                </div>
                <div 
                    style={{
                        backgroundColor: 'black'
                    }}
                >
                    {
                        this.props.video 
                        ? <div
                            style={{
                                height: 125
                            }}
                        ></div>  
                        : <div 
                            style={{
                                backgroundColor: 'white',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 125
                            }}
                        >
                            {t('video')}
                        </div>
                    }
                </div>
            </div>
        )
    }

};

export default Video;