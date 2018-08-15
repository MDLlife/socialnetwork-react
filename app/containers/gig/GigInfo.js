import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import DatePicker from 'material-ui/DatePicker';

class GigInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            duration: 'one',
            search: '',
            selectedLangs: [],
            language: [
                {key: 0, label: 'Chinese'},
                {key: 1, label: 'English'},
                {key: 2, label: 'Russian'},
            ],
            searchLanguages: [
                'Spanish','French', 'German','Japanese','Danish','Belorussian'
            ],
            //languages_spoken: []
        }
    }

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
                searchLanguages: this.state.searchLanguages.filter(function(x){
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
                //className={`chip ${this.props.profile.language_spoken.find(e => e === data.label.toLowerCase()) ? 'selected' : ''}`}
                style={{marginRight: 10, fontFamily: 'inherit'}}
                onClick={this.selectedChip}
            >
                {data.label}
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

    changeDuration = (event, value) => {
        this.setState({
            duration: value
        })
    };

    render() {
        let {searchLanguages} = this.state;
        console.log(this.props.profile);
        return [
            <Row>
                <Col xs={12} style={{ marginBottom: 45}}>
                    <h3>Basic info</h3>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <TextField
                                floatingLabelText="Gig type"
                            />
                        </div>
                        <div>
                            <TextField
                                floatingLabelText="Gig location"
                            />
                        </div>
                    </div>
                    <div>
                        <TextField
                            floatingLabelText="Gig address"
                            fullWidth={true}
                        />
                    </div>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} style={{paddingTop: 20, borderTop: '1px solid lightgrey', marginBottom: 45}}>
                    <div>
                        <h3>Duration</h3>
                        <div style={{display: 'flex'}}>
                            <div
                                style={{width: '50%', margin: 'auto 0'}}
                            >
                                <RadioButtonGroup
                                    style={{display: 'flex'}}
                                    valueSelected={this.state.duration}
                                    onChange={this.changeDuration}
                                    name='duration'
                                >
                                    <RadioButton
                                        value='one'
                                        label='One day gig'
                                    />
                                    <RadioButton
                                        value='multi'
                                        label='More than one day'
                                    />
                                </RadioButtonGroup>
                            </div>
                            <div
                                style={{width: '50%'}}
                            >
                                {
                                    this.state.duration === 'one' ? (
                                        <div style={{position: 'relative'}}>
                                            <DatePicker
                                                textFieldStyle={{width: '100%'}}
                                            />
                                            <img
                                                src="/static/img/calendar.svg"
                                                alt=""
                                                style={{
                                                    width: 24,
                                                    position: 'absolute',
                                                    top: 12,
                                                    right: 0,
                                                }}
                                            />
                                        </div>

                                    ) : (
                                        <div style={{display: 'flex'}}>
                                            <div style={{position: 'relative'}}>
                                                <DatePicker
                                                    textFieldStyle={{width: '100%'}}
                                                />
                                                <img
                                                    src="/static/img/calendar.svg"
                                                    alt=""
                                                    style={{
                                                        width: 24,
                                                        position: 'absolute',
                                                        top: 12,
                                                        right: 0,
                                                    }}
                                                />
                                            </div>
                                            <div style={{position: 'relative'}}>
                                                <DatePicker
                                                    textFieldStyle={{width: '100%'}}
                                                    style={{marginLeft: 20}}
                                                />
                                                <img
                                                    src="/static/img/calendar.svg"
                                                    alt=""
                                                    style={{
                                                        width: 24,
                                                        position: 'absolute',
                                                        top: 12,
                                                        right: 0,
                                                    }}
                                                />
                                            </div>

                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>,
            <Row style={{paddingTop: 20, borderTop: '1px solid lightgrey'}}>
                <Col xs={12}>
                    <h3>Languages spoken <span style={{color: '#ea2f85'}}>*</span></h3>
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
                        {/*{*/}
                            {/*this.props.profile.search_language.length > 0 && this.props.profile.search_language.map(this.renderSearchChip, this)*/}
                        {/*}*/}
                    </div>
                    <h4 style={{marginTop: 30}}>TOP MOST POPULAR LANGUAGES</h4>
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

export default connect()(GigInfo);