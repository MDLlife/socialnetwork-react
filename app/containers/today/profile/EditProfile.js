import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Col, Row} from 'react-bootstrap';
import {RadioButton, RadioButtonGroup} from "material-ui/RadioButton";
import DatePicker from 'material-ui/DatePicker';
import EditIcon from 'material-ui/svg-icons/content/create';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';

class EditProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            year: null,
            dataSource: [],
            name: '',
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

    handleChange = event => {
        this.setState({
            name: event.target.value
        })
    };

    handleUpdateInput = value => {
        this.setState({
            dataSource: [
                value,
                value + value,
                value + value + value,
                value + value + value + value,
                value + value + value + value + value
            ],
        });
    };

    render() {
        return (
            <Col xs={10} style={{backgroundColor: 'white', borderRadius: 5}}>
                <Row>
                    <Col
                        xs={12}
                        style={{
                            padding: 0,
                            background: 'url(/static/img/IntroLoginBG.jpg) left center',
                            color: 'white',
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5
                        }}
                    >
                        <span
                            style={{
                                fontSize: 28,
                                padding: '10px 30px',
                                display: 'block'
                            }}
                        >Personal</span>
                    </Col>
                    <Col xs={12} style={{padding: 20, borderBottom: '1px solid lightgrey'}}>
                        <div style={{position: 'relative', display: 'flex'}}>
                            <div
                                style={{
                                    backgroundColor: '#61116A',
                                    height: 35,
                                    width: 35,
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    left: 8,
                                    top: 5,
                                    border: '0.5px solid white'
                                }}
                            >
                                <EditIcon
                                    color='white'
                                    style={{
                                        height: 18,
                                        cursor: 'pointer',
                                        marginLeft: 4,
                                        marginTop: 6
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                }}
                            >
                                <img
                                    src="http://via.placeholder.com/156x156"
                                    alt=""
                                    style={{
                                        borderRadius: '50%',
                                        border: '1px solid blue'
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    marginLeft: 40
                                }}
                            >
                                <div>
                                    <TextField
                                        floatingLabelText='Name'
                                        onChange={this.handleChange}
                                        value='Super Fan'
                                    />
                                </div>
                                <div>
                                    <AutoComplete
                                        floatingLabelText="Location"
                                        dataSource={this.state.dataSource}
                                        onUpdateInput={this.handleUpdateInput}
                                        maxSearchResults={5}
                                    />
                                </div>
                            </div>
                        </div>
                    </Col>
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
                    <Col xs={12} style={{marginBottom: 50}}>
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
                    </Col>
                    <Col xsOffset={8} style={{marginBottom: 40}}>
                        <button
                            style={{
                                backgroundColor: 'white',
                                border: 'none',
                                color: '#61116A',
                                fontSize: 16,
                                outline: 'none',
                                padding: '10px 20px',
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            style={{
                                backgroundColor: '#660066',
                                color: 'white',
                                border: 'none',
                                borderRadius: 10,
                                padding: '10px 20px',
                                outline: 'none',
                                fontSize: 16,
                            }}
                        >
                            Save changes
                        </button>
                    </Col>
                </Row>
            </Col>
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

export default connect()(EditProfile);