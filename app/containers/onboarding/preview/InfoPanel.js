import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InfoPanel extends Component {
    render() {
            const {t} = this.props;

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
                        <h3 style={{margin: 0}}>{t('measurements')}</h3>
                    </div>
                    <div
                        className='measurements-table'
                    >
                        <div className='height'>{t('measurements_height')}</div>
                        <div className='height-value'>{this.props.height}cm</div>
                        <div className='bust'>{t('measurements_bust')}</div>
                        <div className='bust-value'>{this.props.bust}cm</div>
                        <div className='waist'>{t('measurements_waist')}</div>
                        <div className='waist-value'>{this.props.waist}cm</div>
                        <div className='hips'>{t('measurements_hips')}</div>
                        <div className='hips-value'>{this.props.hips}cm</div>
                        <div className='shoe-size'>{t('measurements_shoe_size')}</div>
                        <div className='shoe-size-value'>{this.props.shoeSize}cm</div>
                    </div>
                </div>
                <div style={{width : '50%'}}>
                    <div>
                        <h3 style={{margin: 0}}>{t('appearance')}</h3>
                    </div>
                    <div
                        className='appearance-table'
                    >
                        <div className='body-type'>{t('body_type')}</div>
                        <div className='body-type-value'>{this.props.bodyType}</div>
                        <div className='eye-color'>{t('measurements_eye_color')}</div>
                        <div className='eye-color-value'>{this.props.eyeColor}</div>
                        <div className='hair-color'>{t('measurements_hair_color')}</div>
                        <div className='hair-color-value'>{this.props.hairColor}</div>
                        <div className='hair-length'>{t('measurements_hair_length')}</div>
                        <div className='hair-length-value'>{this.props.hairLength}</div>
                    </div>
                </div>
            </div>
        )
    }
};

export default InfoPanel;