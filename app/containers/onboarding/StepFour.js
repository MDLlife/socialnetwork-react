import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import TextField from 'material-ui/TextField';

const compCards = [
    '/static/img/comp card 1.svg',
    '/static/img/comp card 2.svg',
    '/static/img/comp card 3.svg',
    '/static/img/comp card 4.svg'
];

class StepOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scheme: 0
        }
    }

    changeSchemas = id => {
        switch(id) {
            case 0:
                return <SchemeOne/>;
            case 1:
                return <SchemeTwo/>;
            case 2:
                return <SchemeThree/>;
            case 3:
                return <SchemeFour/>;
            default:
                return <div></div>
        }
    };

    handleClick = event => {
        this.setState({
            scheme: +event.target.value
        })
    };

    render() {
        return [
            <Row>
                <Col xs={12} className='comp-card'>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: 20,
                        marginBottom: 20
                    }}>
                        <div>
                            <h2 style={{margin: 0}}>Comp Card</h2>
                        </div>
                        <div>
                            <button
                                className='comp-card'

                                style={{
                                    background: `url('${compCards[0]}') center center no-repeat`,
                                    border: 'none',
                                    width: 36,
                                    height: 36,
                                    opacity: this.state.scheme === 0 ? 1 : 0.1
                                }}
                                value='0'
                                onClick={this.handleClick}
                            />
                            <button
                                className='comp-card'
                                style={{
                                    background: `url('${compCards[1]}') center center no-repeat`,
                                    border: 'none',
                                    width: 36,
                                    height: 36,
                                    opacity: this.state.scheme === 1 ? 1 : 0.1

                                }}
                                value='1'
                                onClick={this.handleClick}
                            />
                            <button
                                className='comp-card'

                                style={{
                                    background: `url('${compCards[2]}') center center no-repeat`,
                                    border: 'none',
                                    width: 36,
                                    height: 36,
                                    opacity: this.state.scheme === 2 ? 1 : 0.1

                                }}
                                value='2'
                                onClick={this.handleClick}
                            />
                            <button
                                className='comp-card'

                                style={{
                                    background: `url('${compCards[3]}') center center no-repeat`,
                                    border: 'none',
                                    width: 36,
                                    height: 36,
                                    opacity: this.state.scheme === 3 ? 1 : 0.1

                                }}
                                value='3'
                                onClick={this.handleClick}
                            />
                        </div>
                    </div>

                    {
                        this.changeSchemas(this.state.scheme)
                    }
                </Col>
            </Row>,
            <Row>
                <Col xs={12}>
                    <h2>Video</h2>
                    <TextField
                        hintText='YouTube Video'
                        fullWidth={true}
                    />
                </Col>
            </Row>
        ]
    }
}

const SchemeOne = props => {
    return (
        <div>
            <div style={{position: 'relative', backgroundColor: 'grey', width: '100%', height: 464, marginBottom: 10}}>

            </div>
            <div style={{position: 'relative', width: '100%', display: 'inline-flex'}}>
                <div style={{position: 'relative', width: '50%', marginRight: 10}}>
                    <div style={{position: 'relative', backgroundColor: 'black', width: '100%', height: 249, marginBottom: 10}}>

                    </div>
                    <div style={{position: 'relative', backgroundColor: 'red', width: '100%', height: 182}}>

                    </div>
                </div>
                <div style={{position: 'relative', width: '50%'}}>
                    <div style={{position: 'relative', backgroundColor: 'blue', width: '100%', height: 182, marginBottom: 10}}>

                    </div>
                    <div style={{position: 'relative', backgroundColor: 'green', width: '100%', height: 249}}>

                    </div>
                </div>
            </div>
        </div>
    )
};
const SchemeTwo = props => {
    return (
        <div>
            <div style={{position: 'relative', backgroundColor: 'grey', width: '100%', height: 464, marginBottom: 10}}>

            </div>
            <div style={{position: 'relative', width: '100%', display: 'inline-flex'}}>
                <div style={{position: 'relative', width: '50%', marginRight: 10}}>
                    <div style={{position: 'relative', backgroundColor: 'black', width: '100%', height: 215, marginBottom: 10}}>

                    </div>
                    <div style={{position: 'relative', backgroundColor: 'red', width: '100%', height: 215}}>

                    </div>
                </div>
                <div style={{position: 'relative', width: '50%'}}>
                    <div style={{position: 'relative', backgroundColor: 'blue', width: '100%', height: 215, marginBottom: 10}}>

                    </div>
                    <div style={{position: 'relative', backgroundColor: 'green', width: '100%', height: 215}}>

                    </div>
                </div>
            </div>
        </div>
    )
};
const SchemeThree = props => {
    return (
        <div>
            <div style={{position: 'relative', backgroundColor: 'grey', width: '100%', height: 464, marginBottom: 10}}>

            </div>
            <div style={{position: 'relative', backgroundColor: 'black', width: '100%', height: 215, marginBottom: 10}}>

            </div>
            <div style={{position: 'relative', width: '100%', display: 'inline-flex'}}>
                <div style={{position: 'relative', backgroundColor: 'red', width: '33%', height: 215, marginRight: 10}}>

                </div>
                <div style={{position: 'relative', backgroundColor: 'blue', width: '33%', height: 215, marginRight: 10}}>

                </div>
                <div style={{position: 'relative', backgroundColor: 'green', width: '33%', height: 215}}>

                </div>
            </div>
        </div>
    )
};
const SchemeFour = props => {
    return (
        <div>
            <div style={{position: 'relative', backgroundColor: 'grey', width: '100%', height: 464, marginBottom: 10}}>

            </div>
            <div style={{position: 'relative', width: '100%', display: 'inline-flex'}}>
                <div style={{position: 'relative', backgroundColor: 'red', width: '33%', height: 440, marginRight: 10}}>

                </div>
                <div style={{position: 'relative', width: '33%', marginRight: 10}}>
                    <div style={{position: 'relative', backgroundColor: 'black', width: '100%', height: 215, marginBottom: 10}}>

                    </div>
                    <div style={{position: 'relative', backgroundColor: 'blue', width: '100%', height: 215, marginRight: 10}}>

                    </div>
                </div>
                <div style={{position: 'relative', backgroundColor: 'green', width: '33%', height: 440}}>

                </div>
            </div>
        </div>
    )
};

export default connect()(StepOne);