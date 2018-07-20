import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Stepper, Step, StepLabel} from 'material-ui/Stepper';
import {Grid, Row, Col} from 'react-bootstrap';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

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
            step: 1,
            finished: false,
        }
    }

    handleNext = () => {
        this.setState({
            step: this.state.step + 1,
            finished: this.state.step >= 2,
        });
    };

    handlePrev = () => {
        if (this.state.step > 0) {
            this.setState({step: this.state.step - 1});
        }
    };

    previewProfile = () => {
        alert('All is good')
    };

    switchSteps = (step) => {
        switch(step) {
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
        switch(step) {
            case 0:
                return 'Do you now that 78% of people drop their creative hobbies and die in boredom?';
            case 1:
                return 'Amount of people occupied in creative industries has increased by 465% for the last 30 years';
            case 2:
                return 'Having a creative hobby increases your family and business success';
            case 3:
                return 'Sociologists claim that having a creative hobby increases family life happiness';
            default:
                return 'Error';
        }
    };

    alternativeStepper = (step) => {
        switch(step) {
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

        return (
            <Grid className='main-content-container onboarding' style={{marginBottom: 50}}>
                <Row>
                    <Col xs={12} className='onboarding-header'>
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
                            onClick={step === 3 ? () => this.previewProfile() : () => this.handleNext()
                        }>
                            {step === 3 ? 'Preview profile' : 'Next'}
                            {step === 12 ? <span className='tooltip-text'>ToolTip</span> : null}
                        </button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}


export default connect()(OnboardingSteps);