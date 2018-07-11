import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import Plus from 'material-ui/svg-icons/content/add';

const list = [];
['Asian', 'Eurasian', 'Caucasian', 'Black', 'Hispanic', 'Middle Eastern', 'Indian'].forEach((el) => {
    list.push(<MenuItem value={el} key={el} primaryText={el} />)
});

class StepOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ethnic: null,
            language: [
                {key: 0, label: 'Chinese'},
                {key: 1, label: 'English'},
                {key: 2, label: 'Russian'},
            ]
        }
    }

    selectEthnic = (event, index, value) => this.setState({ethnic: value});
    selectedDateBirth = (event, date) => {
        this.setState({
            birthday: date,
        }, () => console.log(this.state.birthday.getYear()));
    };

    selectedChip = e => {
        let elem = e.target.parentNode;
        console.log(elem)
        if (elem.classList.contains('selected')) {
            elem.classList.remove('selected');
        } else {
            elem.classList.add('selected');
        }
    }

    renderChip = data => {
        return (
            <Chip
                key={data.key}
                style={{width: 100, marginLeft: data.key === 0 ? 0 : 10, fontFamily: 'inherit'}}
                onClick={this.selectedChip}
            >
                {data.label}
                <Plus style={{verticalAlign: 'middle', marginLeft: 5, paddingBottom: 4}} />
            </Chip>
        )
    };

    render() {
        let {ethnic} = this.state;

        return [
            <Row>
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
            </Row>,
            <Row>
                <Col xs={12}>
                    <h2>Date of birth <span style={{color: '#ea2f85'}}>*</span></h2>
                    <div style={{position: 'relative'}}>
                        <DatePicker
                            hintText="mm/dd/yyyy"
                            container='inline'
                            mode="landscape"
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
                    </div>
                </Col>
            </Row>,
            <Row>
                <Col xs={12}>
                    <h2>Ethnicity <span style={{color: '#ea2f85'}}>*</span></h2>
                    <DropDownMenu
                        value={ethnic}
                        onChange={this.selectEthnic}
                        style={{width: 280}}
                        underlineStyle={{ marginLeft: 0}}
                    >
                        {list}
                    </DropDownMenu>
                </Col>
            </Row>,
            <Row>
                <Col xs={12}>
                    <h2>Languages spoken</h2>
                    <TextField
                        hintText='Language'
                    />
                    <h4 style={{color: '#ea2f85'}}>TOP MOST POPULAR LANGUAGES</h4>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {
                            this.state.language.map(this.renderChip, this)
                        }
                    </div>
                </Col>
            </Row>
        ]
    }
}

export default connect()(StepOne);