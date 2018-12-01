import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Row} from 'react-bootstrap';
import MenuItem from 'material-ui/MenuItem';
import {DropDownMenu} from "material-ui/DropDownMenu";
import TextField from "material-ui/TextField";

import {
    SELECT_BODY_TYPE,
    SELECT_EYE_COLOR,
    SELECT_HAIR_COLOR,
    SELECT_HAIR_LENGTH,
    TYPE_BUST,
    TYPE_HEIGHT,
    TYPE_HIPS,
    TYPE_SHOE_SIZE,
    TYPE_WAIST
} from "../../actions/onboarding";


const styles = {
    thumbSwitched: {
        backgroundColor: '#EB3386',
    },
    trackSwitched: {
        backgroundColor: '#F599C2',
    },
};

const list = [];
const listEyes = [];
const listHair = [];
const listLenght = [];


['Skinny', 'Fit', 'Average', 'Curvy'].forEach((el) => {
    list.push(<MenuItem value={el} key={el} primaryText={el}/>)
});

['Blue', 'Green', 'Black', 'Brown', 'Hazel', 'Other'].forEach((el) => {
    listEyes.push(<MenuItem value={el} key={el} primaryText={el}/>)
});

['Black', 'Dark brown', 'Light brown', 'Blond', 'Platinum', 'Auburn', 'Red', 'Gray and white', 'Other'].forEach((el) => {
    listHair.push(<MenuItem value={el} key={el} primaryText={el} />)
});

['Short', 'Mid', 'Long', 'Bold'].forEach((el) => {
    listLenght.push(<MenuItem value={el} key={el} primaryText={el}/>)
});

class StepOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //bodyType: null,
            eyes: null,
            hair: null,
            hairLenght: null,
            showTattoo: false,
            tattoo: [
                {key: 0, label: 'Arm'},
                {key: 1, label: 'Leg'},
                {key: 2, label: 'Face'},
                {key: 3, label: 'Neck'},
                {key: 4, label: 'Back'}
            ],
        }
    }

    selectType = (event, index, value) => this.props.SELECT_BODY_TYPE(value);
    selectEyes = (event, index, value) => this.props.SELECT_EYE_COLOR(value);
    selectHair = (event, index, value) => this.props.SELECT_HAIR_COLOR(value);
    selectLength = (event, index, value) => this.props.SELECT_HAIR_LENGTH(value);


    changeInputHeight = (event) => {
        if (isNaN(+event.target.value) || +event.target.value > 999) {
            return false;
        }
        this.props.TYPE_HEIGHT(event.target.value)
    };
    changeInputBust = (event) => {
        if (isNaN(+event.target.value) || +event.target.value > 999) {
            return false;
        }
        this.props.TYPE_BUST(event.target.value)
    };
    changeInputWaist = (event) => {
        if (isNaN(+event.target.value) || +event.target.value > 999) {
            return false;
        }
        this.props.TYPE_WAIST(event.target.value)
    };
    changeInputHips = (event) => {
        if (isNaN(+event.target.value) || +event.target.value > 999) {
            return false;
        }
        this.props.TYPE_HIPS(event.target.value)
    };
    changeInputShoe = (event) => {
        if (isNaN(+event.target.value) || +event.target.value > 99) {
            return false;
        }
        this.props.TYPE_SHOE_SIZE(event.target.value)
    };


    render() {
        const {t} = this.props;

        return [
            <Row>
                <Col xs={12}>
                    <h2 style={{color: '#ea2f85'}}>
                        {t('onboarding_measurements_tip')}
                    </h2>

                </Col>
            </Row>,

            <Row>
                <Col xs={12} style={{display: 'flex', flexDirection: 'column'}}>
                    <div className='cards'>
                        <div
                            className='inputs'
                            style={{
                                width: '50%',
                                display: 'flex',
                                flexDirection: 'column',
                                marginLeft: 40,
                                marginBottom: 10,
                            }}>
                            <h4>{t('body_type')}</h4>
                            <DropDownMenu
                                value={this.props.profile.body_type || null}
                                onChange={this.selectType}
                                style={{width: 280}}
                                underlineStyle={{marginLeft: 0}}
                            >
                                {list}
                            </DropDownMenu>
                        </div>
                    </div>
                </Col>
            </Row>,

            <Row style={{marginTop: 30}}>
                <Col xs={12} style={{display: 'flex', flexDirection: 'column'}}>
                    <div className='cards'>
                        <div className='card-avatar' style={{backgroundColor: '#fafafa', width: '56%'}}>
                            <img src="/static/img/dancer.png" alt="" style={{width: '100%', margin: '30px 10px'}}/>
                        </div>
                        <div
                            className='inputs'
                            style={{
                                width: '50%',
                                display: 'flex',
                                flexDirection: 'column',
                                marginLeft: 40,
                                marginBottom: 10,
                            }}>
                            <div style={{position: 'relative'}}>
                                <TextField
                                    floatingLabelText="Height"
                                    floatingLabelFixed={true}
                                    name={t('measurements_height')}
                                    inputStyle={{
                                        paddingLeft: 30,
                                        paddingRight: 30
                                    }}
                                    onChange={this.changeInputHeight}
                                    value={this.props.profile.height || ''}
                                />
                                <img
                                    src="/static/img/height.svg"
                                    alt=""
                                    style={{
                                        position: 'absolute',
                                        width: 24,
                                        top: 37,
                                        left: 1
                                    }}
                                />
                                <label
                                    style={{
                                        position: 'absolute',
                                        top: 42,
                                        left: 235
                                    }}
                                >cm</label>
                            </div>
                            <div style={{position: 'relative'}}>
                                <TextField
                                    floatingLabelFixed={true}
                                    floatingLabelText="Bust"
                                    name={t('measurements_bust')}
                                    inputStyle={{
                                        paddingLeft: 30,
                                        paddingRight: 30
                                    }}
                                    onChange={this.changeInputBust}
                                    value={this.props.profile.bust || ''}
                                />
                                <img
                                    src="/static/img/bust.svg"
                                    alt=""
                                    style={{
                                        position: 'absolute',
                                        width: 24,
                                        top: 37,
                                        left: 1
                                    }}
                                />
                                <label
                                    style={{
                                        position: 'absolute',
                                        top: 42,
                                        left: 235
                                    }}
                                >cm</label>
                            </div>
                            <div style={{position: 'relative'}}>
                                <TextField
                                    floatingLabelFixed={true}
                                    floatingLabelText="Waist"
                                    name={t('measurements_waist')}
                                    inputStyle={{
                                        paddingLeft: 30,
                                        paddingRight: 30
                                    }}
                                    onChange={this.changeInputWaist}
                                    value={this.props.profile.waist || ''}
                                />
                                <img
                                    src="/static/img/waist.svg"
                                    alt=""
                                    style={{
                                        position: 'absolute',
                                        width: 24,
                                        top: 37,
                                        left: 1
                                    }}
                                />
                                <label
                                    style={{
                                        position: 'absolute',
                                        top: 42,
                                        left: 235
                                    }}
                                >cm</label>
                            </div>
                            <div style={{position: 'relative'}}>
                                <TextField
                                    floatingLabelFixed={true}
                                    floatingLabelText="Hips"
                                    name={t('measurements_hips')}
                                    inputStyle={{
                                        paddingLeft: 30,
                                        paddingRight: 30
                                    }}
                                    onChange={this.changeInputHips}
                                    value={this.props.profile.hips || ''}
                                />
                                <img
                                    src="/static/img/hips.svg"
                                    alt=""
                                    style={{
                                        position: 'absolute',
                                        width: 24,
                                        top: 37,
                                        left: 1
                                    }}
                                />
                                <label
                                    style={{
                                        position: 'absolute',
                                        top: 42,
                                        left: 235
                                    }}
                                >cm</label>
                            </div>
                            <div style={{position: 'relative'}}>
                                <TextField
                                    floatingLabelFixed={true}
                                    floatingLabelText="Shoe size"
                                    name={t('measurements_shoe_size')}
                                    inputStyle={{
                                        paddingLeft: 30,
                                        paddingRight: 30
                                    }}
                                    onChange={this.changeInputShoe}
                                    style={{marginBottom: 30}}
                                    value={this.props.profile.shoe_size || ''}
                                />
                                <img
                                    src="/static/img/shoe size.svg"
                                    alt=""
                                    style={{
                                        position: 'absolute',
                                        width: 24,
                                        top: 37,
                                        left: 1
                                    }}
                                />
                                <label
                                    style={{
                                        position: 'absolute',
                                        top: 42,
                                        left: 235
                                    }}
                                >cm</label>
                            </div>


                        </div>

                    </div>
                </Col>
            </Row>,
            <Row style={{marginTop: 30}}>
                <h4 style={{paddingLeft: 15}}>{t('appearance')}</h4>
                <Col xs={12}>
                    <div className='cards'>
                        <div className='card-avatar' style={{backgroundColor: '#fafafa', width: '50%'}}>
                            <img src="/static/img/appearence.png" alt=""
                                 style={{width: '60%', margin: '20px auto', display: 'block'}}/>
                        </div>
                        <div className='inputs' style={{
                            display: 'grid',
                            alignItems: 'center',
                            gridTemplateColumns: 300,
                            marginLeft: 40,
                            paddingTop: 15
                        }}>
                            <div style={{position: 'relative'}}>
                                <div style={{
                                    position: 'absolute',
                                    top: -7
                                }}>
                                    <label>{t('measurements_eye_color')}</label>
                                </div>

                                <DropDownMenu
                                    hintText={t('measurements_eye_color')}
                                    value={this.props.profile.eye_color || null}
                                    onChange={this.selectEyes}
                                    underlineStyle={{marginLeft: 0}}
                                    style={{width: '100%'}}
                                    labelStyle={{paddingLeft: 30}}
                                >
                                    {listEyes}
                                </DropDownMenu>
                                <div style={{
                                    position: 'absolute',
                                    width: 24,
                                    top: 15,
                                }}>
                                    <img
                                        src="/static/img/eye color.svg"
                                        alt=""
                                    />
                                </div>

                            </div>

                            <div style={{
                                position: 'relative',
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: -7
                                }}>
                                    <label>{t('measurements_hair_length')}</label>
                                </div>
                                <DropDownMenu
                                    hintText={t('measurements_hair_length')}
                                    value={this.props.profile.hair_length || ''}
                                    onChange={this.selectLength}
                                    underlineStyle={{marginLeft: 0}}
                                    style={{width: '100%'}}
                                    labelStyle={{paddingLeft: 30}}
                                >
                                    {listLenght}
                                </DropDownMenu>
                                <div style={{
                                    position: 'absolute',
                                    width: 24,
                                    top: 15,
                                }}>
                                    <img
                                        src="/static/img/hair lenght.svg"
                                        alt=""
                                    />
                                </div>
                            </div>

                            <div style={{
                                position: 'relative',
                                opacity: this.props.profile.hair_length === 'Bold' ? 0.3 : 1
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: -7
                                }}>
                                    <label>{t('measurements_hair_color')}</label>
                                </div>
                                <DropDownMenu
                                    disabled={this.props.profile && this.props.profile.hair_length === 'Bold' ? true : false}
                                    hintText={t('measurements_hair_color')}
                                    value={this.props.profile.hair_color}
                                    onChange={this.selectHair}
                                    underlineStyle={{marginLeft: 0}}
                                    style={{width: '100%'}}
                                    labelStyle={{paddingLeft: 30}}
                                >
                                    {listHair}
                                </DropDownMenu>
                                <div style={{
                                    position: 'absolute',
                                    width: 24,
                                    top: 15,
                                }}>
                                    <img
                                        src="/static/img/hair color.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>,
        ]
    }
}

function mapStateToProps(state) {
    return {
        profile: state.onboarding
    }
}

export default connect(
    mapStateToProps,
    {
        SELECT_BODY_TYPE,
        TYPE_HEIGHT,
        TYPE_BUST,
        TYPE_WAIST,
        TYPE_HIPS,
        TYPE_SHOE_SIZE,
        SELECT_EYE_COLOR,
        SELECT_HAIR_COLOR,
        SELECT_HAIR_LENGTH
    }
)(StepOne);