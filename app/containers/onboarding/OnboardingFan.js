import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Grid, Row} from 'react-bootstrap';
import {RadioButton, RadioButtonGroup} from "material-ui/RadioButton";
import DatePicker from 'material-ui/DatePicker';
import LoginStore from 'store/LoginStore';

import {DATE_OF_BIRTH, FETCH_FAN_DATA, SELECT_GENDER} from "../../actions/onboardingFan"

class OnboardingFan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            year: null,
        }
    }

    switchAgeComponent = year => {
        if (year <= 10) {
            return <AgeComponent age='Kid (0-10 y.o.)'/>;
        } else if (year >= 11 && year <= 17) {
            return <AgeComponent age='Teen (11-17 y.o.)'/>;
        } else if (year >= 18 && year <= 25) {
            return <AgeComponent age='Young (18-25 y.o.)'/>;
        } else if (year >= 26 && year <= 45) {
            return <AgeComponent age='Mature (26-45 y.o.)'/>;
        } else if (year >= 46) {
            return <AgeComponent age='Senior (45+ y.o.)'/>;
        } else {
            return <div></div>;
        }
    };

    selectGender = (event, value) => {
        this.props.SELECT_GENDER(value);
    };

    selectedDateBirth = (event, date) => {
        this.props.DATE_OF_BIRTH(date)
    };

    onClickToday = event => {
        this.props.FETCH_FAN_DATA({
            _key: LoginStore.user._key,
            profiles: ['fan'],
            gender: this.props.fan.gender,
            date_of_birth: this.props.fan.dateOfBirth,
            registration_fan_complete:true,
        });

        //TODO: this should be conditional trigger based on dispatch success action
        setTimeout(function () {
            if (typeof window !== 'undefined') {
                //TODO: later redirect to preview when preview is completed
                // window.location.href = '/onboarding/profile-preview?profile=fan'
                window.location.href = '/today'
            }
        }, 1000)
    };

    render() {
        return (
            <Grid className='main-content-container onboarding' style={{marginBottom: 50}}>
                <Row>
                    <Col
                        xs={12}
                        className='onboarding-header'
                        style={{
                            background: `url('/static/img/onboarding fan img.png') center center no-repeat`,
                            backgroundSize: 'cover'
                        }}
                    >
                        <h1>MDL Talent Hub is for everyone</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h2>Gender<span style={{color: '#ea2f85'}}>*</span></h2>
                        <p>If you don't indentify yourself as female or male then please select 'Other'</p>
                        <RadioButtonGroup
                            name="gender"
                            onChange={this.selectGender}
                            valueSelected={this.props.fan.gender || null}
                        >
                            <RadioButton
                                value="female"
                                label="Female"
                                inputStyle={{color: '#541065'}}
                            />
                            <RadioButton
                                value="male"
                                label="Male"
                            />
                            <RadioButton
                                value="other"
                                label="Other"
                            />
                        </RadioButtonGroup>
                    </Col>
                    <Col xs={12}>
                        <h2>Date of birth <span style={{color: '#ea2f85'}}>*</span></h2>
                        <div style={{position: 'relative', display: 'flex'}}>
                            <DatePicker
                                hintText="mm/dd/yyyy"
                                container='inline'
                                onChange={this.selectedDateBirth}
                                value={this.props.fan.dateOfBirth || null}
                            />
                            <img
                                src="/static/img/calendar.svg"
                                alt=""
                                style={{
                                    width: 24,
                                    position: 'absolute',
                                    top: 12,
                                    left: 228,
                                }}
                            />
                            {
                                this.state.year && this.switchAgeComponent(this.state.year)
                            }
                        </div>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <button
                                onClick={this.onClickToday}
                                style={{border: '2px solid white'}}
                                className='main-button radius-button clear-button'
                            >
                                Continue
                            </button>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

const AgeComponent = props => {
    return (
        <div style={{
            borderRadius: 4,
            backgroundColor: '#660066',
            color: 'white',
            textAlign: 'center',
            lineHeight: '30px',
            paddingLeft: 20,
            paddingRight: 20,
            height: 30,
            margin: 10
        }}>
            {props.age}
        </div>
    )
};

function mapStateToProps(state) {
    return {
        fan: state.onboardingFan
    }
}

export default connect(
    mapStateToProps,
    {
        SELECT_GENDER,
        DATE_OF_BIRTH,
        FETCH_FAN_DATA
    }
)(OnboardingFan)