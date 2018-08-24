import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Panel, PanelGroup, Accordion} from 'react-bootstrap';
import {Row, Col, Grid} from 'react-bootstrap';
import TextField from "material-ui/TextField";
import {
    SET_TYPE,
    DELETE_TYPE,
    SET_PERSON_COUNT,
    SET_ETHNICITY_TYPE,
    SET_GENDER_TYPE,
    SET_AGE_TYPE,
    SET_OVERTIME_TYPE,
    SET_PAYMENT_TYPE,
    SET_RATE_TYPE
} from "actions/gigCreation";
import {Chip, DropDownMenu, MenuItem, RadioButton, RadioButtonGroup} from "material-ui";

const list = [];
['Asian', 'Eurasian', 'Caucasian', 'Black', 'Hispanic', 'Middle Eastern', 'Indian'].forEach((el) => {
    list.push(<MenuItem value={el} key={el} primaryText={el} />)
});

class gigBoard extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            activeKey: 1,
            payment: 'gig',
            ages: [
                {key: 0, label: 'Kid', addLabel: '0 - 10'},
                {key: 1, label: 'Teen', addLabel: '11 - 17'},
                {key: 2, label: 'Young', addLabel: '18 - 25'},
                {key: 3, label: 'Mature', addLabel: '26 - 45'},
                {key: 4, label: 'Senior', addLabel: '45+'},
                {key: 5, label: 'Custom'},
            ],
        }
    }

    handleSelect = (activeKey) => {
        this.setState({ activeKey: +activeKey });
    };

    addType = (count) => {
        this.props.SET_TYPE(++count, this.props.role)
    };

    deleteType = (index) => {
        this.props.DELETE_TYPE(index, this.props.role)
    };
    //
    // renderChip = data => {
    //     return (
    //         <Chip
    //             key={data.key}
    //             className={`chip ${this.props.gig[this.props.role].types.age === data.label ? 'selected' : ''}`}
    //             style={{marginRight: 10, fontFamily: 'inherit'}}
    //             onClick={this.selectedChip}
    //         >
    //             {data.label}
    //             {/*<Plus style={{verticalAlign: 'middle', marginLeft: 5, paddingBottom: 4}} />*/}
    //         </Chip>
    //     )
    // };

    renderAccordion = () => {
        let arrayAccordion = [];
        let count = 0;
        let types = this.props.gig[this.props.role].types;
        for (let x in types) {
            ++count;
            arrayAccordion.push(
                    <Panel
                        key={count}
                        eventKey={`${count}`}
                        expanded={this.state.activeKey === count}
                    >
                        <Panel.Heading
                            style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <Panel.Title toggle style={{width: '33%'}}>
                                {this.props.role} Type №{count}
                            </Panel.Title>
                            <div style={{width: '66%', display: 'flex', alignItems: 'center'}}>
                                <div style={{width: '50%', position: 'relative'}}>
                                    <TextField
                                        onChange={(event) => {
                                            this.props.SET_PERSON_COUNT(event.target.value, x, this.props.role)
                                        }}
                                        value={types[x].person || ''}
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
                                        count > 1 && <button onClick={() => {
                                            --count;
                                            console.log('-', count)
                                            this.deleteType(x);
                                        }}>Delete</button>
                                    }
                                    {/*<button onClick={this.copyType}>Copy</button>*/}
                                    {
                                        count == Object.keys(this.props.gig[this.props.role].types).length && <button onClick={() => this.addType(x)}>Add</button>
                                    }
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
                                            onChange={(event, value) => {
                                                this.props.SET_GENDER_TYPE(value, x, this.props.role)
                                            }}
                                            valueSelected={types[x].gender || null}
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
                                            {
                                                this.state.ages.map((data) => {
                                                    return (
                                                            <Chip
                                                                key={data.key}
                                                                className={`chip ${types[x].age === data.label ? 'selected' : ''}`}
                                                                style={{marginRight: 10, fontFamily: 'inherit', width: '100%'}}
                                                                labelStyle={{width: '100%', textAlign: 'center'}}
                                                                onClick={(event) => {
                                                                    this.props.SET_AGE_TYPE(event.target.innerHTML, x, this.props.role)
                                                                }}
                                                            >
                                                                {data.label}
                                                                {/*<Plus style={{verticalAlign: 'middle', marginLeft: 5, paddingBottom: 4}} />*/}
                                                            </Chip>
                                                    )
                                                }, this)
                                            }
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <h2>Ethnicity <span style={{color: '#ea2f85'}}>*</span></h2>
                                        <DropDownMenu
                                            value={types[x].ethnicity || ''}
                                            onChange={(event, index, value) => {
                                                this.props.SET_ETHNICITY_TYPE(value, x, this.props.role)
                                            }}
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
                                                onChange={(event, value) => {
                                                    this.props.SET_PAYMENT_TYPE(value, x, this.props.role)
                                                }}
                                                valueSelected={types[x].payment || null}
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
                                                    onChange={(event) => {
                                                        this.props.SET_RATE_TYPE(event.target.value, x, this.props.role)
                                                    }}
                                                    value={types[x].rate || ''}
                                                />
                                            }
                                            {
                                                this.state.payment === 'hour' &&
                                                <TextField
                                                    hintText='Hour rate'
                                                    onChange={(event) => {
                                                        this.props.SET_RATE_TYPE(event.target.value, x, this.props.role)
                                                    }}
                                                    value={types[x].rate || ''}
                                                />
                                            }
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <h2>Overtime payment</h2>
                                        <div style={{position: 'relative'}}>
                                            <TextField
                                                hintText='Rate'
                                                onChange={(event) => {
                                                    this.props.SET_OVERTIME_TYPE(event.target.value, x, this.props.role)
                                                }}
                                            />
                                            <label
                                                style={{
                                                    position: 'absolute',
                                                    top: 14,
                                                    left: 213,
                                                }}
                                            >$/hour</label>
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
        console.log(this.props.gig[this.props.role])
        return (
            <div>
                <PanelGroup
                    accordion
                    activeKey={this.state.activeKey}
                    onSelect={this.handleSelect}
                    id="accordion-controlled-example"
                >
                {
                    this.renderAccordion()
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
        DELETE_TYPE,
        SET_PERSON_COUNT,
        SET_ETHNICITY_TYPE,
        SET_GENDER_TYPE,
        SET_AGE_TYPE,
        SET_OVERTIME_TYPE,
        SET_PAYMENT_TYPE,
        SET_RATE_TYPE
    }
)(gigBoard);