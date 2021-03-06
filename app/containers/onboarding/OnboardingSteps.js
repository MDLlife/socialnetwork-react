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
    ERROR_UPDATE_USER_DATA,
    FETCH_GET_USER_DATA,
    FETCH_UPDATE_USER_DATA,
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
        if (this.state.step === 0) {
            if (typeof this.props.profile.gender === 'undefined' ||
                typeof this.props.profile.year === 'undefined' ||
                typeof this.props.profile.ethnic === 'undefined') {
                this.setState({
                    check: true
                });
                return false;
            }
            ;
        }

        // if(this.state.step === 1) {
        //     if( this.props.profile.work_areas.length < 1 ||
        //         this.props.profile.style.length < 1 ) {
        //         this.setState({
        //             check: true
        //         });
        //         return false;
        //     };
        // }


        // if(this.state.step === 2 ){
        //     if( typeof this.props.profile.body_type === 'undefined' ||
        //         (typeof this.props.profile.height === 'undefined' || this.props.profile.height === '') ||
        //         (typeof this.props.profile.bust === 'undefined' || this.props.profile.bust === '') ||
        //         (typeof this.props.profile.waist === 'undefined' || this.props.profile.waist === '') ||
        //         (typeof this.props.profile.hips === 'undefined' || this.props.profile.hips === '') ||
        //         (typeof this.props.profile.shoe_size === 'undefined' || this.props.profile.shoe_size === '') ||
        //         typeof this.props.profile.eye_color === 'undefined' ||
        //         typeof this.props.profile.hair_length === 'undefined' ||
        //         typeof this.props.profile.hair_color === 'undefined') {
        //         this.setState({
        //             check: true
        //         });
        //         return false;
        //     };
        // };

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
        };

        if (this.props.profile.eye_color) {
            data.eye_color = this.props.profile.eye_color.toLowerCase()
        }
        if (this.props.profile.hair_length) {
            data.hair_length = this.props.profile.hair_length.toLowerCase()
        }
        if (this.props.profile.hair_color) {
            data.hair_color = this.props.profile.hair_color.toLowerCase()
        }

        this.props.FETCH_UPDATE_USER_DATA(data);


    };

    switchSteps = (step) => {
         const {t, i18n} = this.props;
         const translateProps = {
            t: t,
            i18n: i18n,
        }
        switch (step) {
            case 0:
                return <StepOne {...translateProps}/>;
            case 1:
                return <StepTwo {...translateProps}/>;
            case 2:
                return <StepThree {...translateProps}/>;
            case 3:
                return <StepFour {...translateProps}/>;
            default:
                return <div>Error</div>;
        }
    };

    switchHeaderContent = (step) => {
        const {t} = this.props;

        switch (step) {
            case 0:
                return t('witty_quote_1');
            case 1:
                return t('witty_quote_2');
            case 2:
                return t('witty_quote_3');
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
            // case 3:
            //     return <div style={styles.altStepper}>Media</div>
        }
    };

    componentWillReceiveProps(props) {
        if (props.profile.success) {
            console.log("Saved success")
            window.location.href = `/onboarding/profile-preview?profile=talent&id=${LoginStore.user._key}`
        }

        if (props.profile.error) {
            console.log("ERROR when saving, not ok!")
            this.setState({
                check: true
            });
        }
    }

    render() {
        let {step} = this.state;
        const {t} = this.props;

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
                        <h1>{this.switchHeaderContent(step)}</h1>
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
                                <StepLabel className='stepper' style={{margin: 'auto'}}>{t('personal')}</StepLabel>
                            </Step>
                            <Step className='stepper-step' style={step === 1 ? styles.stepBorder : null}>
                                <StepLabel className='stepper' style={{margin: 'auto'}}>{t('categories')}</StepLabel>
                            </Step>
                            <Step className='stepper-step' style={step === 2 ? styles.stepBorder : null}>
                                <StepLabel className='stepper' style={{margin: 'auto'}}>{t('measurements')}</StepLabel>
                            </Step>
                            {/*<Step className='stepper-step' style={step === 3 ? styles.stepBorder : null}>*/}
                            {/*<StepLabel className='stepper' style={{margin: 'auto'}}>Media</StepLabel>*/}
                            {/*</Step>*/}
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
                            onClick={step >= 2 ? this.previewProfile : this.handleNext}
                        >
                            {step >= 2 ? 'Preview profile' : 'Next'}
                            {/*{step === 2 ? <span className='tooltip-text'>ToolTip</span> : null}*/}
                        </button>
                        <SnackBar
                            open={this.state.check}
                            message={this.props.gig && this.props.gig.error ? this.props.gig.error.message : "Please fill in all fields"}
                            autoHideDuration={10000}
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