import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import AutoComplete from 'material-ui/AutoComplete';
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
            year: null,
            search: '',
            ethnic: null,
            selectedLangs: [],
            language: [
                {key: 0, label: 'Chinese'},
                {key: 1, label: 'English'},
                {key: 2, label: 'Russian'},
            ],
            searchLanguages: [
                'Spanish','French', 'German','Japanese','Danish','Belorussian'
            ]
        }
    }

    selectEthnic = (event, index, value) => this.setState({ethnic: value});
    selectedDateBirth = (event, date) => {
        let now = new Date().getUTCFullYear();
        this.setState({
            birthday: date,
            year: now - date.getUTCFullYear(),
        })
    };

    selectedChip = e => {
        let elem = e.target.parentNode;
        if (elem.classList.contains('selected')) {
            elem.classList.remove('selected');
        } else {
            elem.classList.add('selected');
        }
    };

    updateLanguageInput = searchText => {
        this.setState({
            search: searchText
        })
    };

    handleNewRequest = () => {
        this.setState({
            selectedLangs: [...this.state.selectedLangs, {key: this.state.search, label: this.state.search}]
        }, () => {
            this.setState({
                searchLanguages: this.state.searchLanguages.filter(function(x){
                    return this.indexOf(x) < 0
                }, this.state.selectedLangs.map(x => x.label)),
                search: ''
            })
        })
    };

    handleRequestDelete = (key) => {
        this.selectedLangs = this.state.selectedLangs;
        const chipToDelete = this.selectedLangs.map((chip) => chip.key).indexOf(key);
        this.selectedLangs.splice(chipToDelete, 1);
        this.setState({selectedLangs: this.selectedLangs});
    };

    renderChip = data => {
        return (
            <Chip
                key={data.key}
                className='chip'
                style={{marginRight: 10, fontFamily: 'inherit'}}
                onClick={this.selectedChip}
            >
                {data.label}
                {/*<Plus style={{verticalAlign: 'middle', marginLeft: 5, paddingBottom: 4}} />*/}
            </Chip>
        )
    };

    renderSearchChip = data => {
        return (
            <Chip
                key={data.key}
                className='selected'
                style={{marginRight: 10, fontFamily: 'inherit'}}
                // onClick={this.selectedChip}
                onRequestDelete={() => this.handleRequestDelete(data.key)}
                deleteIconStyle={{
                    fill: 'rgb(255,255,255)'
                }}
            >
                {data.label}
                {/*<Plus style={{verticalAlign: 'middle', marginLeft: 5, paddingBottom: 4}} />*/}
            </Chip>
        )
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

    render() {
        let {ethnic, searchLanguages} = this.state;

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
            </Row>,
            <Row style={{paddingBottom: 35}}>
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
            <Row style={{paddingTop: 20, borderTop: '1px solid lightgrey'}}>
                <Col xs={12}>
                    <h2>Languages spoken</h2>
                    <AutoComplete
                        filter={AutoComplete.fuzzyFilter}
                        dataSource={searchLanguages}
                        maxSearchResults={5}
                        searchText={this.state.search}
                        onUpdateInput={this.updateLanguageInput}
                        onNewRequest={this.handleNewRequest}
                        id='language'
                    />
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {
                            this.state.selectedLangs.length > 0 && this.state.selectedLangs.map(this.renderSearchChip, this)
                        }
                    </div>
                    <h4 style={{color: '#ea2f85', marginTop: 30}}>TOP MOST POPULAR LANGUAGES</h4>
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


export default connect()(StepOne);