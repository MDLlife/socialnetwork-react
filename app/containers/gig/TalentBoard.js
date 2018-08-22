import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Panel, PanelGroup, Accordion} from 'react-bootstrap';
import {Row, Col, Grid} from 'react-bootstrap';
import TextField from "material-ui/TextField";
import {SET_TYPE, DELETE_TYPE} from "actions/gigCreation";
import {DropDownMenu, MenuItem, RadioButton, RadioButtonGroup} from "material-ui";

const list = [];
['Asian', 'Eurasian', 'Caucasian', 'Black', 'Hispanic', 'Middle Eastern', 'Indian'].forEach((el) => {
    list.push(<MenuItem value={el} key={el} primaryText={el} />)
});

class gigBoard extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            activeKey: 1,
            payment: 'gig'
        }
    }

    handleChange = event => {
        this.setState({
            person: event.target.value
        })
    };

    handleSelect = (activeKey) => {
        this.setState({ activeKey: +activeKey });
    };

    selectPayment = (event, value) => {
        this.setState({
            payment: value
        })
    };

    addType = (index) => {
        this.props.SET_TYPE(index, this.props.role, ++this.props.gig[this.props.role].count)
    };

    deleteType = (index) => {
        this.props.DELETE_TYPE(index, --this.props.gig[this.props.role].count)
    };

    renderAccordion = (count) => {
        let arrayAccordion = [];
        for (let i = 1; i <= count; i++) {
            arrayAccordion.push(
                    <Panel
                        key={i}
                        eventKey={`${i}`}
                        expanded={this.state.activeKey === i}
                    >
                        <Panel.Heading
                            style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <Panel.Title toggle style={{width: '33%'}}>
                                {this.props.role} Type №{i}
                            </Panel.Title>
                            <div style={{width: '66%', display: 'flex', alignItems: 'center'}}>
                                <div style={{width: '50%', position: 'relative'}}>
                                    <TextField
                                        onChange={this.handleChange}
                                        style={{width: '100%'}}
                                        inputStyle={{paddingRight: 56}}
                                    />
                                    <label
                                        style={{
                                            position: 'absolute',
                                            top: 13,
                                            right: 0,
                                        }}
                                    >
                                        person
                                    </label>
                                </div>
                                <div style={{width: '50%', textAlign: 'center'}}>
                                    {
                                        i > 1 && <button onClick={() => this.deleteType(i)}>Delete</button>
                                    }
                                    <button onClick={this.copyType}>Copy</button>
                                    <button onClick={() => this.addType(i)}>Add</button>
                                </div>
                            </div>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                                <Row>
                                    <Col xs={12}>
                                        <h2>Gender<span style={{color: '#ea2f85'}}>*</span></h2>
                                        <p>If you don't indentify yourself as female or male then please select 'Other'</p>
                                        <RadioButtonGroup
                                            name="gender"
                                            //onChange={this.selectGender}
                                            //valueSelected={this.props.profile.gender || null}
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
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <h2>Age <span style={{color: '#ea2f85'}}>*</span></h2>
                                        <div style={{position: 'relative', display: 'flex'}}>

                                        </div>
                                    </Col>
                                </Row>
                                <Row style={{paddingBottom: 35}}>
                                    <Col xs={12}>
                                        <h2>Ethnicity <span style={{color: '#ea2f85'}}>*</span></h2>
                                        <DropDownMenu
                                            //value={this.props.profile.ethnic || ''}
                                            //onChange={this.selectEthnic}
                                            style={{width: 280}}
                                            underlineStyle={{ marginLeft: 0}}
                                        >
                                            {list}
                                        </DropDownMenu>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <h2>Payment<span style={{color: '#ea2f85'}}>*</span></h2>
                                    </Col>
                                    <Col xs={6}>
                                        <div>
                                            <RadioButtonGroup
                                                name="payment"
                                                defaultSelected='gig'
                                                onChange={this.selectPayment}
                                                //valueSelected={this.props.profile.gender || null}
                                            >
                                                <RadioButton
                                                    value="gig"
                                                    label="Per gig"
                                                    inputStyle={{color: '#541065'}}
                                                />
                                                <RadioButton
                                                    value="hour"
                                                    label="Per hour"
                                                />
                                            </RadioButtonGroup>
                                        </div>
                                    </Col>
                                    <Col xs={6}>
                                        <div>
                                            {
                                                this.state.payment === 'gig' &&
                                                <TextField
                                                    hintText='Gig rate'
                                                />
                                            }
                                            {
                                                this.state.payment === 'hour' &&
                                                <TextField
                                                    hintText='Hour rate'
                                                />
                                            }
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <h2>Overtime payment</h2>
                                        <div>
                                            <TextField
                                                hintText='Rate'
                                            />
                                            <label>$/hour</label>
                                        </div>
                                    </Col>
                                </Row>
                        </Panel.Body>
                    </Panel>
            )
        }

        return <div>{arrayAccordion}</div>
    };

    render() {
        console.log(this.props.gig);
        console.log(this.state)
        return (
            <div>
                <PanelGroup
                    accordion
                    activeKey={this.state.activeKey}
                    onSelect={this.handleSelect}
                    id="accordion-controlled-example"
                >
                {
                    this.renderAccordion(this.props.gig[this.props.role].count)
                }
                </PanelGroup>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        gig: state.gigCreation
    }
}

export default connect(
    mapStateToProps,
    {
        SET_TYPE,
        DELETE_TYPE
    }
)(gigBoard);