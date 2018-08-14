import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Step, StepLabel, Stepper} from 'material-ui/Stepper';
import {Col, Grid, Row} from 'react-bootstrap';
import LoginStore from 'store/LoginStore';
import SnackBar from 'material-ui/Snackbar'

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

import {
    FETCH_GET_USER_DATA,
    FETCH_UPDATE_USER_DATA,
    ERROR_UPDATE_USER_DATA,
    SUCCESS_UPDATE_USER_DATA
} from "../../actions/onboarding";

const styles = {
    stepBorder: {
        borderBottom: '2px solid #ea2f85'
    },
    balanced: {
        marginRight: 10
    },
    altStepper: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: 36,
        borderBottom: '2px solid #ea2f85',
    }
};

class OnboardingSteps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 0, // first step in onboarding
            finished: false,
            check: false
        }
    }

    handleNext = () => {
        if(this.state.step === 0) {
            if( typeof this.props.profile.gender === 'undefined' ||
                typeof this.props.profile.year === 'undefined' ||
                typeof this.props.profile.ethnic === 'undefined' ||
                this.props.profile.language_spoken.length < 1) {
                this.setState({
                    check: true
                });
                return false;
            };
        }

        if(this.state.step === 1) {
            if( this.props.profile.work_areas.length < 1 ||
                this.props.profile.style.length < 1 ) {
                this.setState({
                    check: true
                });
                return false;
            };
        }


        if(this.state.step === 2 ){
            if( typeof this.props.profile.body_type === 'undefined' ||
                (typeof this.props.profile.height === 'undefined' || this.props.profile.height === '') ||
                (typeof this.props.profile.bust === 'undefined' || this.props.profile.bust === '') ||
                (typeof this.props.profile.waist === 'undefined' || this.props.profile.waist === '') ||
                (typeof this.props.profile.hips === 'undefined' || this.props.profile.hips === '') ||
                (typeof this.props.profile.shoe_size === 'undefined' || this.props.profile.shoe_size === '') ||
                typeof this.props.profile.eye_color === 'undefined' ||
                typeof this.props.profile.hair_length === 'undefined' ||
                typeof this.props.profile.hair_color === 'undefined') {
                this.setState({
                    check: true
                });
                return false;
            };
        };

        this.setState({
            step: this.state.step + 1,
            finished: this.state.step >= 2,
        });
    };

    handleRequestClose = () => {
        this.setState({
            check: false,
        });
    };

    handlePrev = () => {
        if (this.state.step > 0) {
            this.setState({step: this.state.step - 1});
        }
    };

    previewProfile = () => {
        const data = {
            _key: LoginStore.user._key,
            profiles: ['talent'],
            gender: this.props.profile.gender,
            date_of_birth: this.props.profile.dateOfBirth,
            ethnicity: this.props.profile.ethnic ? this.props.profile.ethnic.toLowerCase() : this.props.profile.ethnic,
            languages_spoken: this.props.profile.language_spoken,
            work_areas: this.props.profile.work_areas,
            style: this.props.profile.style,
            piercing: this.props.profile.piercing,
            tattoo: this.props.profile.tattoo,
            tattoo_where: this.props.profile.tattoo_where,
            body_type: this.props.profile.body_type ? this.props.profile.body_type.toLowerCase() : this.props.profile.body_type,
            height: +(this.props.profile.height ? this.props.profile.height : 0),
            bust: +(this.props.profile.bust ? this.props.profile.bust : 0),
            waist: +(this.props.profile.waist ? this.props.profile.waist : 0),
            hips: +(this.props.profile.hips ? this.props.profile.hips : 0),
            shoe_size: +(this.props.profile.shoe_size ? this.props.profile.shoe_size : 0 ),

            comp_card: [],
            video: [],
            registration_talent_complete: true
        }

        if (this.props.profile.eye_color) {
            data.eye_color = this.props.profile.eye_color.toLowerCase()
        }
        if (this.props.profile.hair_length) {
            data.hair_length = this.props.profile.hair_length.toLowerCase()
        }
        if (this.props.profile.hair_color) {
            data.hair_color = this.props.profile.hair_color.toLowerCase()
        }

        let res = this.props.FETCH_UPDATE_USER_DATA(data);

        //TODO: this should be conditional trigger based on dispatch success action
        setTimeout(function () {
            if (typeof window !== 'undefined') {
                console.log(res.status, res.body)
                //TODO: later redirect to preview when preview is completed

                //window.location.href = '/today'
            }
        }, 1000)

    };

    switchSteps = (step) => {
        switch (step) {
            case 0:
                return <StepOne />;
            case 1:
                return <StepTwo/>;
            case 2:
                return <StepThree/>;
            case 3:
                return <StepFour/>;
            default:
                return <div>Error</div>;
        }
    };

    switchHeaderContent = (step) => {
        switch (step) {
            case 0:
                return 'Do you now that 78% of people drop their creative hobbies and die in boredom?';
            case 1:
                return 'Amount of people occupied in creative industries has increased by 465% for the last 30 years';
            case 2:
                return 'Having a creative hobby increases your family and business success';
            case 3:
                return 'Sociologists claim that having a creative hobby increases family life happiness';
            default:
                return 'MDL Talent Hub is for everyone';
        }
    };

    switchHeaderImage = (step) => {
        switch (step) {
            case 0:
                return `url('/static/img/Onboarding 1 step.png') center center no-repeat`;
            case 1:
                return `url('/static/img/Onboarding 2 step.png') center center no-repeat`;
            case 2:
                return `url('/static/img/Onboarding 3 step.png') center center no-repeat`;
            case 3:
                return `url('/static/img/Onboarding 4 step.png') center center no-repeat`;
            default:
                return `url('/static/img/onboarding fan img.png') center center no-repeat`;
        }
    };

    alternativeStepper = (step) => {
        switch (step) {
            case 0:
                return <div style={styles.altStepper}>Personal</div>;
            case 1:
                return <div style={styles.altStepper}>Categories</div>;
            case 2:
                return <div style={styles.altStepper}>Measurements</div>;
            case 3:
                return <div style={styles.altStepper}>Media</div>
        }
    };

    render() {
        let {step} = this.state;
        if(this.props.profile.success) {
            window.location.href = `/onboarding/profile-preview?profile=talent&id=${LoginStore.user._key}`
        }

        return (
            <Grid className='main-content-container onboarding white-back' style={{marginBottom: 50}}>
                <Row>
                    <Col
                        xs={12}
                        className='onboarding-header'
                        style={{
                            background: this.state.role === '1' ? this.switchHeaderImage(step) : `url('/static/img/onboarding fan img.png') center center no-repeat`,
                            backgroundSize: 'cover'
                        }}
                    >
                        <h1>{this.state.role === '1' ? this.switchHeaderContent(step) : 'MDL Talent Hub is for everyone'}</h1>
                    </Col>
                </Row>
                <Row className='stepper-main'>
                    <Col xs={12}>
                        <Stepper
                            connector={false}
                            activeStep={step}
                            className='stepper-main'
                        >
                            <Step className='stepper-step' style={step === 0 ? styles.stepBorder : null}>
                                <StepLabel className='stepper' style={{margin: 'auto'}}>Personal</StepLabel>
                            </Step>
                            <Step className='stepper-step' style={step === 1 ? styles.stepBorder : null}>
                                <StepLabel className='stepper' style={{margin: 'auto'}}>Categories</StepLabel>
                            </Step>
                            <Step className='stepper-step' style={step === 2 ? styles.stepBorder : null}>
                                <StepLabel className='stepper' style={{margin: 'auto'}}>Measurements</StepLabel>
                            </Step>
                            <Step className='stepper-step' style={step === 3 ? styles.stepBorder : null}>
                                <StepLabel className='stepper' style={{margin: 'auto'}}>Media</StepLabel>
                            </Step>
                        </Stepper>
                    </Col>
                </Row>
                <Row className='alt-stepper'>
                    <Col xs={12}>
                        {
                            this.alternativeStepper(step)
                        }
                    </Col>
                </Row>

                {this.switchSteps(this.state.step)}

                <Row>
                    <Col xs={12} style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>
                        <button className='back-btn' onClick={this.handlePrev}>Back</button>
                        <button
                            className='next-btn tooltip-main'
                            onClick={step === 3 ? this.previewProfile : this.handleNext}
                        >
                            {step === 3 ? 'Preview profile' : 'Next'}
                            {/*{step === 2 ? <span className='tooltip-text'>ToolTip</span> : null}*/}
                        </button>
                        <SnackBar
                            open={this.state.check}
                            message="Please fill all fields"
                            autoHideDuration={1500}
                            onRequestClose={this.handleRequestClose}
                        />
                    </Col>
                </Row>
            </Grid>
        )
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
        FETCH_GET_USER_DATA,
        FETCH_UPDATE_USER_DATA,
        ERROR_UPDATE_USER_DATA,
        SUCCESS_UPDATE_USER_DATA
    }
)(OnboardingSteps);