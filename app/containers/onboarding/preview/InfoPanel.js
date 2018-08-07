import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InfoPanel extends Component {
    render() {
        return (
            <div
                style={{
                    marginTop: 20,
                    borderRadius: '5px',
                    display: 'flex',
                    fontFamily: 'Gilroy Medium',
                    padding: 20,
                    backgroundColor: 'white'
                }}
            >
                <div style={{width : '50%'}}>
                    <div>
                        <h3 style={{margin: 0}}>Measurements</h3>
                    </div>
                    <div
                        className='measurements-table'
                    >
                        <div className='height'>Height</div>
                        <div className='height-value'>{this.props.height}cm</div>
                        <div className='bust'>Bust</div>
                        <div className='bust-value'>{this.props.bust}cm</div>
                        <div className='waist'>Waist</div>
                        <div className='waist-value'>{this.props.waist}cm</div>
                        <div className='hips'>Hips</div>
                        <div className='hips-value'>{this.props.hips}cm</div>
                        <div className='shoe-size'>Shoe size</div>
                        <div className='shoe-size-value'>{this.props.shoeSize}cm</div>
                    </div>
                </div>
                <div style={{width : '50%'}}>
                    <div>
                        <h3 style={{margin: 0}}>Appearance</h3>
                    </div>
                    <div
                        className='appearance-table'
                    >
                        <div className='body-type'>Body type</div>
                        <div className='body-type-value'>{this.props.bodyType}</div>
                        <div className='eye-color'>Eye color</div>
                        <div className='eye-color-value'>{this.props.eyeColor}</div>
                        <div className='hair-color'>Hair color</div>
                        <div className='hair-color-value'>{this.props.hairColor}</div>
                        <div className='hair-length'>Hair length</div>
                        <div className='hair-length-value'>{this.props.hairLength}</div>
                    </div>
                </div>
            </div>
        )
    }
};

export default InfoPanel;