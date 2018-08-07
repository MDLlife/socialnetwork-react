import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Chip from 'material-ui/Chip';

class AdditionalInfo extends Component {
    constructor(props) {
        super(props);
    }

    renderChip = data => {
        return (
            <Chip
                className='selected'
                key={data}
                style={{width: 'auto', marginRight: 10, fontFamily: 'Gilroy Light'}}
            >
                {data.charAt(0).toUpperCase() + data.slice(1)}
            </Chip>
        )
    };

    render() {
        return (
            <div style={{
                marginTop: 20,
                borderRadius: '5px',
                padding: 10,
                backgroundColor: 'white'
            }}>
                <div>
                    <h4 
                        style={{
                            margin: 0,
                            fontFamily: 'Gilroy Medium'
                        }}
                    >
                        Additional info
                    </h4>
                </div>
                <div style={{marginTop: 30}}>
                    <div>
                        <h5 style={{color: '#999999'}}>Ethnicity</h5>
                    </div>
                    <div>
                        <ul
                            style={{
                                listStyle: 'none',
                                padding: 0
                            }}
                        >
                            {
                                this.props.ethnic &&
                                <li className='list-item-preview'>
                                    {this.props.ethnic.charAt(0).toUpperCase() + this.props.ethnic.slice(1)}
                                </li>
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <h5 style={{color: '#999999'}}>Languages</h5>
                    </div>
                    <div>
                        <ul
                            style={{
                                listStyle: 'none',
                                padding: 0
                            }}
                        >
                            {
                                this.props.languages &&
                                this.props.languages.map((elem, index) => {
                                    return <li key={index} className='list-item-preview'>
                                                {elem.charAt(0).toUpperCase() + elem.slice(1)}
                                            </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <h5 style={{color: '#999999'}}>Tattoos</h5>
                    </div>
                    <div style={{display: 'flex'}}>
                        {
                            this.props.tattoo && this.props.tattoo.map(this.renderChip, this)
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <h5 style={{color: '#999999'}}>Piercing</h5>
                    </div>
                    <div>
                    <ul
                            style={{
                                listStyle: 'none',
                                padding: 0
                            }}
                        >
                        {
                            this.props.piercing && <li className='list-item-preview'>Model has a piercing</li>
                        }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(AdditionalInfo);