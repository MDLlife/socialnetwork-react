import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Row} from 'react-bootstrap';
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import DatePicker from 'material-ui/DatePicker/DatePickerDialog';
import TimePicker from 'material-ui/TimePicker/TimePickerDialog';
import DateTimePicker from 'material-ui-datetimepicker';

import MenuItem from "material-ui/MenuItem";
import DropDownMenu from "material-ui/DropDownMenu";

import {
    FROM_DURATION,
    ONE_DAY_DURATION,
    REMOVE_LANGUAGE,
    REMOVE_PAYMENT,
    REMOVE_SEARCH_LANGUAGE,
    REMOVE_SEARCH_PAYMENT,
    SEARCH_LANGUAGE,
    SEARCH_PAYMENT,
    SELECT_ADDRESS,
    SELECT_LANGUAGE,
    SELECT_PAYMENT,
    SELECT_TYPE_GIG,
    SET_LOCATION_GIG,
    TO_DURATION
} from "actions/gigCreation";

import config from "config";
import superagent from "superagent";

const list = [];
['Tv commercial', 'Movie', 'Promo video', 'Tv show', 'Editorail', 'Catalog', 'Underwear catalog', 'Fashion show',
    'Showroom', 'Makeup show', 'Hairdress show', 'Body art', 'Hostess', 'Fitting', 'Promo event'].forEach((el) => {
    list.push(<MenuItem value={el} key={el} primaryText={el}/>)
});

class GigInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            duration: 'one',
            search: '',
            searchPaymentText: '',
            searchLocation: '',
            selectedLangs: [],
            selectedPayments: [],
            dataSource: [],
            language: [
                {key: 0, label: 'Chinese'},
                {key: 1, label: 'English'},
                {key: 2, label: 'Russian'},
            ],
            searchLanguages: [
                'Spanish', 'French', 'German', 'Japanese', 'Danish', 'Belorussian'
            ],
            paymentMethod: [
                {key: 0, label: 'SKY'},
                {key: 1, label: 'MDL'},
                {key: 2, label: 'USD'},
                {key: 3, label: 'RMB'},
            ],
            searchPayment: [
                'BTC', 'ETH', 'WAVES', 'XRM', 'CLOAK', 'XVG', 'LTC', 'DASH', 'EOS', 'BCH', 'ETC', 'ZCASH'
            ]
        }
    }

    selectGigType = (event, index, value) => {
        this.props.SELECT_TYPE_GIG(value)
    };

    saveCity = value => {
        superagent.get(`${config.APIS_URL}/_cts_/1.0/cities?q=${value}`).withCredentials().then(res => {
            this.setState({
                searchLocation: JSON.parse(res.text).data[0].attributes.name,
                city: Object.assign({}, JSON.parse(res.text).data[0].attributes, {id: JSON.parse(res.text).data[0].id})
            }, () => this.props.SET_LOCATION_GIG(this.state.city));
        })
    };

    handleGigAddress = (event, value) => {
        this.props.SELECT_ADDRESS(value)
    };

    selectDay = (date) => {
        this.props.ONE_DAY_DURATION(date);
    };

    selectFrom = (date) => {
        this.props.FROM_DURATION(date);
    };

    selectTo = (date) => {
        this.props.TO_DURATION(date);
    };

    handleUpdateInput = value => {
        let newArr = [];
        if (!value) {
            this.setState({
                searchLocation: '',
                dataSource: []
            });

            return false
        }

        this.setState({
            searchLocation: value,
        }, () => {
            superagent.get(`${config.APIS_URL}/_cts_/1.0/cities?q=${value}`).withCredentials().then(res => {
                JSON.parse(res.text).data.map(elem => {
                    newArr.push(elem.attributes.name)
                });
                this.setState({
                    dataSource: newArr
                });
            })
        })


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

    selectedPaymentChip = e => {
        let elem = e.target.parentNode;
        if (elem.classList.contains('selected')) {
            elem.classList.remove('selected');
            this.props.REMOVE_PAYMENT(e.target.innerHTML)
        } else {
            elem.classList.add('selected');
            this.props.SELECT_PAYMENT(e.target.innerHTML)
        }
    };

    updateLanguageInput = searchText => {
        this.setState({
            search: searchText
        })
    };

    updatePaymentInput = text => {
        this.setState({
            searchPaymentText: text
        })
    };

    handleNewPaymentRequest = () => {
        this.props.SELECT_PAYMENT(this.state.searchPaymentText);
        this.props.SEARCH_PAYMENT(this.state.searchPaymentText);
        this.setState({
            selectedPayments: [...this.state.selectedPayments, {
                key: this.state.searchPaymentText,
                label: this.state.searchPaymentText
            }],
        }, () => {
            this.setState({
                selectedPayments: this.state.selectedPayments.filter(function (x) {
                    return this.indexOf(x) < 0
                }, this.state.selectedPayments.map(x => x.label)),
                searchPaymentText: ''
            })
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
        this.selectedLangs = this.props.gig.search_language;
        const labelToDelete = this.selectedLangs.map((chip) => chip.key);
        const chipToDelete = this.selectedLangs.map((chip) => chip.key).indexOf(key);
        this.props.REMOVE_LANGUAGE(labelToDelete[0]);
        this.props.REMOVE_SEARCH_LANGUAGE(labelToDelete[0]);
        this.selectedLangs.splice(chipToDelete, 1);
        this.setState({
            selectedLangs: this.selectedLangs,
            searchLanguages: [...this.state.searchLanguages, labelToDelete[0]]
        });
    };

    handlePaymentRequestDelete = (key) => {
        this.search_payment = this.props.gig.search_payment;
        const labelToDelete = this.search_payment.map((chip) => chip.key);
        const chipToDelete = this.search_payment.map((chip) => chip.key).indexOf(key);
        this.props.REMOVE_PAYMENT(labelToDelete[0]);
        this.props.REMOVE_SEARCH_PAYMENT(labelToDelete[0]);
        this.search_payment.splice(chipToDelete, 1);
        this.setState({
            selectedPayments: this.search_payment,
            searchPayment: [...this.state.searchPayment, labelToDelete[0]]
        });
    };

    renderChip = data => {
        return (
            <Chip
                key={data.key}
                className={`chip ${this.props.gig.language_spoken.find(e => e === data.label.toLowerCase()) ? 'selected' : ''}`}
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

    renderPaymentChip = data => {
        return (
            <Chip
                key={data.key}
                className={`chip ${this.props.gig.language_spoken.find(e => e === data.label.toLowerCase()) ? 'selected' : ''}`}
                style={{marginRight: 10, fontFamily: 'inherit'}}
                onClick={this.selectedPaymentChip}
            >
                {data.label}
            </Chip>
        )
    };

    renderPaymentSearchChip = data => {
        return (
            <Chip
                key={data.key}
                className='selected'
                style={{marginRight: 10, fontFamily: 'inherit'}}
                onRequestDelete={() => this.handlePaymentRequestDelete(data.key)}
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

    capitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    };

    render() {


        let {searchLanguages, dataSource, searchPayment} = this.state;
        console.log('state', this.state);
        console.log('props', this.props.gig);


        const oneDay = (<div style={{position: 'relative'}}>
            <DateTimePicker
                hintText='Gig Day'
                textFieldStyle={{width: '100%'}}
                value={this.props.gig.from || null}
                onChange={this.selectDay}
                DatePicker={DatePicker}
                TimePicker={TimePicker}
                clearIcon={null}
                format='MMM DD, YYYY hh:mm'
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
        </div>);
        const twoDays = (<div style={{display: 'flex'}}>
            <div style={{position: 'relative'}}>
                <DateTimePicker
                    hintText='From'
                    textFieldStyle={{width: '100%'}}
                    onChange={this.selectFrom}
                    value={this.props.gig.from || null}
                    DatePicker={DatePicker}
                    TimePicker={TimePicker}
                    clearIcon={null}
                    format='MMM DD, YYYY hh:mm'
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
            <div style={{position: 'relative', marginLeft: 20}}>
                <DateTimePicker
                    hintText='To'
                    textFieldStyle={{width: '100%'}}
                    onChange={this.selectTo}
                    value={this.props.gig.to || null}
                    DatePicker={DatePicker}
                    TimePicker={TimePicker}
                    clearIcon={null}
                    format='MMM DD, YYYY hh:mm'
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

        </div>);

        return [
            <Row>
                <Col xs={12} style={{marginBottom: 45}}>
                    <h3>Basic info</h3>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{marginTop: 16}}>
                            <DropDownMenu
                                value={this.capitalize(this.props.gig.type ? this.props.gig.type : '')}
                                onChange={this.selectGigType}
                                style={{width: 280}}
                                underlineStyle={{marginLeft: 0}}
                            >
                                {list}
                            </DropDownMenu>
                        </div>
                        <div>
                            <AutoComplete
                                floatingLabelText="City"
                                dataSource={dataSource}
                                onUpdateInput={this.handleUpdateInput}
                                maxSearchResults={5}
                                filter={AutoComplete.noFilter}
                                onNewRequest={this.saveCity}
                                searchText={this.props.gig.city ? this.props.gig.city.name : this.state.searchLocation}
                            />
                        </div>
                    </div>
                    <div>
                        <TextField
                            floatingLabelText="Gig address"
                            fullWidth={true}
                            onChange={this.handleGigAddress}
                            value={this.props.gig.address || ''}
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
                                </RadioButtonGroup>

                                <RadioButtonGroup
                                    style={{display: 'flex'}}
                                    valueSelected={this.state.duration}
                                    onChange={this.changeDuration}
                                    name='duration'
                                >
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
                                    this.state.duration === 'one' ? oneDay : twoDays
                                }
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>,
            <Row style={{borderTop: '1px solid lightgrey'}}>
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
                        openOnFocus={true}
                    />
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {
                            this.props.gig.search_language.length > 0 && this.props.gig.search_language.map(this.renderSearchChip, this)
                        }
                    </div>
                    <h4 style={{marginTop: 30}}>TOP MOST POPULAR LANGUAGES</h4>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {
                            this.state.language.map(this.renderChip, this)
                        }
                    </div>
                </Col>
            </Row>,
            <Row style={{marginTop: 20, borderTop: '1px solid lightgrey'}}>
                <Col xs={12}>
                    <h3>Select Payment methods<span style={{color: '#ea2f85'}}>*</span></h3>
                    <AutoComplete
                        filter={AutoComplete.fuzzyFilter}
                        dataSource={searchPayment}
                        maxSearchResults={5}
                        searchText={this.state.searchPaymentText}
                        onUpdateInput={this.updatePaymentInput}
                        onNewRequest={this.handleNewPaymentRequest}
                        id='language'
                        openOnFocus={true}
                    />
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {
                            this.props.gig.search_payment.length > 0 && this.props.gig.search_payment.map(this.renderPaymentSearchChip, this)
                        }
                    </div>
                    <h4 style={{marginTop: 30}}>TOP MOST POPULAR PAYMENT METHODS</h4>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {
                            this.state.paymentMethod.map(this.renderPaymentChip, this)
                        }
                    </div>
                </Col>
            </Row>
        ]
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
        SELECT_TYPE_GIG,
        SELECT_ADDRESS,
        SELECT_LANGUAGE,
        REMOVE_LANGUAGE,
        SEARCH_LANGUAGE,
        REMOVE_SEARCH_LANGUAGE,
        ONE_DAY_DURATION,
        FROM_DURATION,
        TO_DURATION,
        SET_LOCATION_GIG,
        SELECT_PAYMENT,
        SEARCH_PAYMENT,
        REMOVE_PAYMENT,
        REMOVE_SEARCH_PAYMENT
    }
)(GigInfo);