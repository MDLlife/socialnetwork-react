import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class CompCard extends Component {
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

    render() {
        return (
            <div
                style={{
                    backgroundColor: 'white',
                    padding: 20,
                    marginTop: 14,
                    borderRadius: 5
                }}
            >
                {
                    this.changeSchemas(this.state.scheme)
                }
            </div>
        )
    }
}

const SchemeOne = props => {
    return (
        <div>
            <div style={{position: 'relative', backgroundColor: '#EEF2F5', width: '100%', height: 464, marginBottom: 10, border: '3px dotted #CCCFD1'}}>
            </div>
            <div style={{position: 'relative', width: '100%', display: 'inline-flex'}}>
                <div style={{position: 'relative', width: '50%', marginRight: 10}}>
                    <div style={{position: 'relative', backgroundColor: '#EEF2F5', width: '100%', height: 249, marginBottom: 10, border: '3px dotted #CCCFD1'}}>
                    </div>
                    <div style={{position: 'relative', backgroundColor: '#EEF2F5', width: '100%', height: 182, border: '3px dotted #CCCFD1'}}>
                    </div>
                </div>
                <div style={{position: 'relative', width: '50%'}}>
                    <div style={{position: 'relative', backgroundColor: '#EEF2F5', width: '100%', height: 182, marginBottom: 10, border: '3px dotted #CCCFD1'}}>
                    </div>
                    <div style={{position: 'relative', backgroundColor: '#EEF2F5', width: '100%', height: 249, border: '3px dotted #CCCFD1'}}>
                    </div>
                </div>
            </div>
        </div>
    )
};
const SchemeTwo = props => {
    return (
        <div>
            <div style={{position: 'relative', backgroundColor: '#EEF2F5', width: '100%', height: 464, marginBottom: 10, border: '3px dotted #CCCFD1'}}>
            </div>
            <div style={{position: 'relative', width: '100%', display: 'inline-flex'}}>
                <div style={{position: 'relative', width: '50%', marginRight: 10}}>
                    <div style={{position: 'relative', backgroundColor: '#EEF2F5', width: '100%', height: 215, marginBottom: 10, border: '3px dotted #CCCFD1'}}>
                    </div>
                    <div style={{position: 'relative', backgroundColor: '#EEF2F5', width: '100%', height: 215, border: '3px dotted #CCCFD1'}}>
                    </div>
                </div>
                <div style={{position: 'relative', width: '50%'}}>
                    <div style={{position: 'relative', backgroundColor: '#EEF2F5', width: '100%', height: 215, marginBottom: 10, border: '3px dotted #CCCFD1'}}>
                    </div>
                    <div style={{position: 'relative', backgroundColor: '#EEF2F5', width: '100%', height: 215, border: '3px dotted #CCCFD1'}}>
                    </div>
                </div>
            </div>
        </div>
    )
};
const SchemeThree = props => {
    return (
        <div>
            <div style={{position: 'relative', backgroundColor: '#EEF2F5', width: '100%', height: 464, marginBottom: 10, border: '3px dotted #CCCFD1'}}>
            </div>
            <div style={{position: 'relative', backgroundColor: '#EEF2F5', width: '100%', height: 215, marginBottom: 10, border: '3px dotted #CCCFD1'}}>
            </div>
            <div style={{position: 'relative', width: '100%', display: 'inline-flex'}}>
                <div style={{position: 'relative', backgroundColor: '#EEF2F5', width: '33%', height: 215, marginRight: 10, border: '3px dotted #CCCFD1'}}>
                </div>
                <div style={{position: 'relative', backgroundColor: '#EEF2F5', width: '33%', height: 215, marginRight: 10, border: '3px dotted #CCCFD1'}}>
                </div>
                <div style={{position: 'relative', backgroundColor: '#EEF2F5', width: '33%', height: 215, border: '3px dotted #CCCFD1'}}>
                </div>
            </div>
        </div>
    )
};
const SchemeFour = props => {
    return (
        <div>
            <div style={{position: 'relative', backgroundColor: '#EEF2F5', width: '100%', height: 464, marginBottom: 10, border: '3px dotted #CCCFD1'}}>
            </div>
            <div style={{position: 'relative', width: '100%', display: 'inline-flex'}}>
                <div style={{position: 'relative', backgroundColor: '#EEF2F5', width: '33%', height: 440, marginRight: 10, border: '3px dotted #CCCFD1'}}>
                </div>
                <div style={{position: 'relative', width: '33%', marginRight: 10}}>
                    <div style={{position: 'relative', backgroundColor: '#EEF2F5', width: '100%', height: 215, marginBottom: 10, border: '3px dotted #CCCFD1'}}>
                    </div>
                    <div style={{position: 'relative', backgroundColor: '#EEF2F5', width: '100%', height: 215, marginRight: 10, border: '3px dotted #CCCFD1'}}>
                    </div>
                </div>
                <div style={{position: 'relative', backgroundColor: '#EEF2F5', width: '33%', height: 440, border: '3px dotted #CCCFD1'}}>
                </div>
            </div>
        </div>
    )
};

export default connect()(CompCard)