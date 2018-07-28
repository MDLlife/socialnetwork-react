import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col, Grid} from 'react-bootstrap';
import {RadioButton, RadioButtonGroup} from "material-ui/RadioButton";
import DatePicker from 'material-ui/DatePicker';


class OnboardingFan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            year: null,
        }
    }

    selectedDateBirth = (event, date) => {
        let now = new Date().getUTCFullYear();
        this.setState({
            birthday: date,
            year: now - date.getUTCFullYear(),
        })
    };

    switchAgeComponent = year => {
        if (year <= 10) {
            return <AgeComponent age='Kid (0-10 y.o.)'/>;
        } else if (year >= 11 && year <= 17) {
            return <AgeComponent age='Teen (11-17 y.o.)'/>;
        } else if (year >= 18 && year <= 25) {
            return <AgeComponent age='Young (18-25 y.o.)'/>;
        } else if (year >= 26 && year <= 35) {
            return <AgeComponent age='Mature (26-35 y.o.)'/>;
        } else if (year >= 36) {
            return <AgeComponent age='Senior (35+ y.o.)'/>;
        } else {
            return <div></div>;
        }
    };

    onClickToday(){
         if (typeof window !== 'undefined') {
            window.location.href = '/today'
        }
    }

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
                        <RadioButtonGroup name="gender" defaultSelected="female">
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
                        <button onClick={this.onClickToday} style={{border: '2px solid white'}}
                                className='main-button radius-button clear-button'>
                            Continue
                        </button>
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

export default connect()(OnboardingFan)