import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Step, StepLabel, Stepper} from 'material-ui/Stepper';
import {Col, Grid, Row} from 'react-bootstrap';
import LoginStore from 'store/LoginStore';
import SnackBar from 'material-ui/Snackbar';

import GigInfo from './GigInfo';
import TalentsNeeded from './TalentsNeeded';

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

class GigSteps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 0, // first step in onboarding
            finished: false,
            check: false
        }
    }

    handleNext = () => {
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

    switchSteps = (step) => {
        switch (step) {
            case 0:
                return <GigInfo />;
            case 1:
                return <TalentsNeeded />;
            default:
                return <div>Error</div>;
        }
    };

    render() {
        let {step} = this.state;

        return (
            <Grid className='main-content-container onboarding white-back' style={{marginBottom: 50}}>
                <Row>
                    <Col
                        xs={12}
                        className='gig-header'
                        style={{
                            background: `url('/static/img/IntroLoginBG.jpg') center center no-repeat`,
                            backgroundSize: 'cover',
                        }}
                    >
                        <div>
                            <h1>Gig Creation</h1>
                        </div>
                        <div className='gig-btn-group'>
                            <button className='publish-btn'>Publish gig</button>
                            <button>Save</button>
                            <button>Delete</button>
                            <button>Close</button>
                        </div>
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
                                <StepLabel className='stepper' style={{margin: 'auto'}}>Gig Info</StepLabel>
                            </Step>
                            <Step className='stepper-step' style={step === 1 ? styles.stepBorder : null}>
                                <StepLabel className='stepper' style={{margin: 'auto'}}>Talents Needed</StepLabel>
                            </Step>
                        </Stepper>
                    </Col>
                </Row>

                {this.switchSteps(this.state.step)}

                <Row>
                    <Col xs={12} style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>
                        <button
                            className='next-btn tooltip-main'
                            onClick={step === 1 ? this.handlePrev : this.handleNext}
                        >
                            {step === 1 ? 'Back' : 'Next'}
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

export default connect()(GigSteps);