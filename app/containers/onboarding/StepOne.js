import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Row} from 'react-bootstrap';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';

import {
    DATE_OF_BIRTH,
    REMOVE_LANGUAGE,
    REMOVE_SEARCH_LANGUAGE,
    SEARCH_LANGUAGE,
    SELECT_ETHNICITY,
    SELECT_GENDER,
    SELECT_LANGUAGE
} from 'actions/onboarding';

const list = [];
['Asian', 'Eurasian', 'Caucasian', 'Black', 'Hispanic', 'Middle Eastern', 'Indian'].forEach((el) => {
    list.push(<MenuItem value={el} key={el} primaryText={el}/>)
});

class StepOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            selectedLangs: [],
            language: [
                {key: 0, label: 'Chinese'},
                {key: 1, label: 'English'},
            ],
            searchLanguages: [
                'Spanish', 'French', 'Russian', 'German', 'Japanese', 'Danish', 'Belorussian'
            ],
            //languages_spoken: []
        }
    }

    selectGender = (event, value) => {
        this.props.SELECT_GENDER(value);
    };

    selectEthnic = (event, index, value) => {
        this.props.SELECT_ETHNICITY(value);
    };

    selectedDateBirth = (event, date) => {
        this.props.DATE_OF_BIRTH(date)
    };

    selectedChip = e => {
        let elem = e.target.parentNode;
        if (elem.classList.contains('selected')) {
            elem.classList.remove('selected');
            this.props.REMOVE_LANGUAGE(e.target.innerHTML.toLowerCase())
        } else {
            elem.classList.add('selected');
            this.props.SELECT_LANGUAGE(e.target.innerHTML.toLowerCase())
        }
    };

    updateLanguageInput = searchText => {
        this.setState({
            search: searchText
        })
    };

    handleNewRequest = () => {
        this.props.SELECT_LANGUAGE(this.state.search);
        this.props.SEARCH_LANGUAGE(this.state.search);
        this.setState({
            selectedLangs: [...this.state.selectedLangs, {key: this.state.search, label: this.state.search}],
        }, () => {
            this.setState({
                searchLanguages: this.state.searchLanguages.filter(function (x) {
                    return this.indexOf(x) < 0
                }, this.state.selectedLangs.map(x => x.label)),
                search: ''
            })
        })
    };

    handleRequestDelete = (key) => {
        this.selectedLangs = this.props.profile.search_language;
        const labelToDelete = this.selectedLangs.map((chip) => chip.key);
        const chipToDelete = this.selectedLangs.map((chip) => chip.key).indexOf(key);
        console.log(labelToDelete[0])
        this.props.REMOVE_LANGUAGE(labelToDelete[0]);
        this.props.REMOVE_SEARCH_LANGUAGE(labelToDelete[0]);
        this.selectedLangs.splice(chipToDelete, 1);
        this.setState({
            selectedLangs: this.selectedLangs,
            searchLanguages: [...this.state.searchLanguages, labelToDelete[0]]
        });
    };

    renderChip = data => {
        return (
            <Chip
                key={data.key}
                className={`chip ${this.props.profile.language_spoken && this.props.profile.language_spoken.find(e => e === data.label.toLowerCase()) ? 'selected' : ''}`}
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
        } else if (year >= 26 && year <= 45) {
            return <AgeComponent age='Mature (26-45 y.o.)'/>;
        } else if (year >= 46) {
            return <AgeComponent age='Senior (45+ y.o.)'/>;
        } else {
            return <div></div>;
        }
    };

    render() {
        let {searchLanguages} = this.state;
        const {t} = this.props;

        console.log(this.props.profile);
        return [
            <Row>
                <Col xs={12}>
                    <h2>{t('gender')}<span style={{color: '#ea2f85'}}>*</span></h2>
                    <p>{t('if_you_dont_identify')}</p>
                    <RadioButtonGroup
                        name="gender"
                        onChange={this.selectGender}
                        valueSelected={this.props.profile.gender || null}
                    >
                        <RadioButton
                            value="female"
                            label={t('female')}
                            inputStyle={{color: '#541065'}}
                        />
                        <RadioButton
                            value="male"
                            label={t('male')}
                        />
                        <RadioButton
                            value="other"
                            label={t('other')}
                        />
                    </RadioButtonGroup>
                </Col>
            </Row>,
            <Row>
                <Col xs={12}>
                    <h2>{t('date_of_birth')} <span style={{color: '#ea2f85'}}>*</span></h2>
                    <div style={{position: 'relative', display: 'flex'}}>
                        <DatePicker
                            hintText="mm/dd/yyyy"
                            container='inline'
                            onChange={this.selectedDateBirth}
                            value={this.props.profile.dateOfBirth || null}
                            autoOk={true}
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
                            this.props.profile.dateOfBirth && this.switchAgeComponent(this.props.profile.year)
                        }
                    </div>
                </Col>
            </Row>,
            <Row style={{paddingBottom: 35}}>
                <Col xs={12}>
                    <h2>{t('ethnicity')} <span style={{color: '#ea2f85'}}>*</span></h2>
                    <DropDownMenu
                        value={this.props.profile.ethnic || ''}
                        onChange={this.selectEthnic}
                        style={{width: 280}}
                        underlineStyle={{marginLeft: 0}}
                    >
                        {list}
                    </DropDownMenu>
                </Col>
            </Row>,
            <Row style={{paddingTop: 20, borderTop: '1px solid lightgrey'}}>
                <Col xs={12}>
                    <h2>{t('languages_spoken')}</h2>
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
                            this.props.profile.search_language.length > 0 && this.props.profile.search_language.map(this.renderSearchChip, this)
                        }
                    </div>
                    <h4 style={{color: '#ea2f85', marginTop: 30}}>{t('top_most_popular_languages')}</h4>
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


function mapStateToProps(state) {
    return {
        profile: state.onboarding
    }
}

export default connect(
    mapStateToProps,
    {
        SELECT_GENDER,
        SELECT_ETHNICITY,
        DATE_OF_BIRTH,
        SELECT_LANGUAGE,
        REMOVE_LANGUAGE,
        SEARCH_LANGUAGE,
        REMOVE_SEARCH_LANGUAGE
    }
)(StepOne);