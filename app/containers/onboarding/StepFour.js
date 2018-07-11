import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import TextField from 'material-ui/TextField';

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
                    <button value='0' onClick={this.handleClick}>1</button>
                    <button value='1' onClick={this.handleClick}>2</button>
                    <button value='2' onClick={this.handleClick}>3</button>
                    <button value='3' onClick={this.handleClick}>4</button>
                    <h2>Comp Card</h2>
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