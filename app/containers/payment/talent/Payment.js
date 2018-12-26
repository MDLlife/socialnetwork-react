import * as React from 'react';
import { Col } from 'react-bootstrap';
import SvgIcon from 'material-ui/SvgIcon';
import { RadioButtonGroup, RadioButton } from 'material-ui';
import EditIcon from 'material-ui/svg-icons/content/create';
import { Collapse }  from 'react-bootstrap';
import {getDateGig} from "../../../util/dateParser";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Navigation from '../../../components/payment/Navigation';
import GigElement from '../../../components/payment/talent/GigElement';

class TalentPayment extends React.Component{

    state={
        radioButton: 'All addresses',
        newLinkOpened: false,
        selectValue: null,
        gigs: [
            {
                date: '09/08/18',
                method: 'bitcoin',
                address: '1KoX6AA5VTdbBTkw27YEqKfAtTeQo97RRt',
                status: 'active'
            },
            {
                date: '09/08/18',
                method: 'bitcoin',
                address: '3aBX6AA5VTdbBTkw27YEqKfAtTeQo97lOL',
                status: ''
            },
            {
                date: '09/08/18',
                method: 'Logo_without_text',
                address: '8Za1KoX6AA5VTdbBTkw27YEqKfAtTeQo97M',
                status: ''
            },
            {
                date: '09/08/18',
                method: 'Logo_without_text',
                address: '1KoX6AA5VTdbBTkw27YEqKfAtTeQo97RRt',
                status: 'active'
            },
            {
                date: '09/08/18',
                method: 'bitcoin',
                address: '2MfX6AA5VTdbBTkw27YEqKfAtTeQo97RGm',
                status: 'active'
            }
            ]
    };

    radioButtonHandler = (e, value) => {
        this.setState({radioButton: value})
    };

    newLinkClick = () => {
        this.setState({newLinkOpened: !this.state.newLinkOpened})
    };

    handleChangeSelect = (event, index, value) => this.setState({selectValue: value});

    render(){
        return(
            <Col xs={10}>
                <div className={'talent-payment-container'}>
                    <div className={'stepper'}>
                        <div className="stepper-element">
                            <SvgIcon xmlns="http://www.w3.org/2000/svg" style={{marginRight: '.3rem'}} viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path fill="#EB3386" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </SvgIcon>
                            <span>Install your wallet</span>
                        </div>
                        <div className="stepper-element">
                            <SvgIcon xmlns="http://www.w3.org/2000/svg" style={{marginRight: '.3rem'}} viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path fill="#EB3386" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </SvgIcon>
                            <span>Add your first wallet address</span>
                        </div>
                        <div className="stepper-element active">
                            <span className={'number'}>3</span>
                            <span>Payment</span>
                        </div>
                    </div>
                    {   !this.state.newLinkOpened &&
                        <div className={'archive'}>
                            <RadioButtonGroup name={"gig-type"}
                                              onChange={this.radioButtonHandler}
                                              defaultSelected={this.state.radioButton}
                                              style={{
                                                  display: "flex",
                                                  justifyContent: "flex-start",
                                                  margin: "2.7rem 0 2.7rem 3.2rem ",
                                              }}
                            >
                                <RadioButton
                                    label={"All addresses"}
                                    value={"All addresses"}
                                    iconStyle={this.state.radioButton === "All addresses" ? {fill: "#541065"} : {fill: "#818181"}}
                                    labelStyle={{
                                        color: (this.state.radioButton === "All addresses" ? "#000" : "#818181"),
                                        fontFamily: "'Gilroy Light', sans-serif",
                                        fontSize: "1.6rem",
                                        whiteSpace: "nowrap",
                                    }}
                                    style={{
                                        width: "auto",
                                        marginRight: "3rem"
                                    }}
                                />
                                <RadioButton
                                    label={"Valid addresses"}
                                    value={"Valid addresses"}
                                    iconStyle={this.state.radioButton === "Valid addresses" ? {fill: "#541065"} : {fill: "#818181"}}
                                    labelStyle={{
                                        color: (this.state.radioButton === "Valid addresses" ? "#000" : "#818181"),
                                        fontFamily: "'Gilroy Light', sans-serif",
                                        fontSize: "1.6rem",
                                        whiteSpace: "nowrap",

                                    }}
                                    style={{
                                        width: "auto",
                                        marginRight: "3rem"
                                    }}
                                />
                                <RadioButton
                                    label={"Need for addresses"}
                                    value={"Need for addresses"}
                                    iconStyle={this.state.radioButton === "Need for addresses" ? {fill: "#541065"} : {fill: "#818181"}}
                                    labelStyle={{
                                        color: (this.state.radioButton === "Need for addresses" ? "#000" : "#818181"),
                                        fontFamily: "'Gilroy Light', sans-serif",
                                        fontSize: "1.6rem",
                                        whiteSpace: "nowrap",
                                    }}
                                    style={{
                                        width: "auto",
                                        marginRight: "3rem"
                                    }}
                                />
                            </RadioButtonGroup>

                            <span>
                            Archive
                        </span>
                        </div>
                    }
                    {
                        this.state.newLinkOpened &&
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '1.6rem 3.5rem 1.5rem 5.4rem'
                            }}>
                                <div
                                style={{
                                    display: 'flex',

                                }}>
                                    <h6 style={{
                                        fontSize: '1.6rem',
                                        paddingRight: '3rem',
                                        color: '#58a8e3'
                                    }} className={'active'}>
                                        Valid addresses
                                    </h6>
                                    <h6 style={{
                                        fontSize: '1.6rem'
                                    }}>
                                        Archive
                                    </h6>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        backgroundColor: "#eef2f5",
                                        borderRadius: '.4rem',
                                        paddingLeft: '1.1rem'
                                    }}>
                                    <SvgIcon style={{
                                        position: "relative",
                                        top: '1.2rem'
                                    }} xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#808080" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                        <path d="M0 0h24v24H0z" fill="none"/>
                                    </SvgIcon>
                                    <TextField
                                        fullWidth={true}
                                        underlineShow = {false}
                                    />
                                </div>
                            </div>
                    }
                    <div className={'new-link'} onClick={this.newLinkClick}>
                        <h4><b>ADD NEW ADDRESS</b></h4>
                        <SvgIcon style={{
                            marginRight: ".6rem",
                            cursor: "pointer",
                            transform: this.state.newLinkOpened? "rotate(0deg)" : "rotate(90deg)",
                            position: 'relative',
                            bottom: '.1rem'

                        }}>
                            <path fill="#909090" xmlns="http://www.w3.org/2000/svg" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                            <path xmlns="http://www.w3.org/2000/svg" fill="none" d="M0 0h24v24H0V0z"/>
                        </SvgIcon>
                    </div>
                    <Collapse in={this.state.newLinkOpened}>
                        <div className={'add-new-link-container'}>
                            <div className={'gig-info-container'}>
                                <div className={'gig-info'}>
                                    <h5>TV Commercial</h5>
                                    <p><span>{getDateGig('08-14-2018')}</span>   Longnan, China</p>
                                </div>
                                <div className="gig-amount">
                                    <h6>Amount</h6>
                                    <p>125$ per hour</p>
                                </div>
                                <div className={'gig-hours'}>
                                    <h6>Total hours</h6>
                                    <p>10h</p>
                                </div>
                                <div className={'gig-overtime'}>
                                    <h6>Overtime</h6>
                                    <p>0</p>
                                </div>
                                <div className={"gig-total"}>
                                    <p>Total: 1250$</p>
                                </div>
                                <div className={'gig-edit'}>
                                    <EditIcon
                                        style={{
                                            height: "1.6rem",
                                            cursor: 'pointer',
                                            color: "#808080",
                                            marginRight: ".7rem",
                                            position: "relative",
                                            top: "-0.3rem"
                                        }}
                                    />
                                    <SvgIcon xmlns="http://www.w3.org/2000/svg" style={{width: "2.4rem", height: "2.4rem", cursor: 'pointer'}} viewBox="0 0 24 24">
                                        <path fill="#808080" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                                        <path d="M0 0h24v24H0z" fill="none"/>
                                    </SvgIcon>
                                </div>
                            </div>
                            <div className={'payment-method'}>
                                <h3>Select your payment method</h3>
                                <SelectField
                                style={{
                                    marginTop: '1.9rem',
                                }}
                                value={this.state.selectValue}
                                onChange={this.handleChangeSelect}
                                >
                                    <MenuItem value={0} primaryText={'BTC'}/>
                                    <MenuItem value={1} primaryText={'ETH'}/>
                                    <MenuItem value={2} primaryText={'MDL'}/>
                                    <MenuItem value={3} primaryText={'SKY'}/>
                                    <MenuItem value={4} primaryText={'WAVES'}/>
                                    <MenuItem value={5} primaryText={'IBAN'}/>
                                </SelectField>
                            </div>
                            <div className="payment-link">
                                <h3>Paste your wallet address <span>or IBAN</span></h3>
                                <div>
                                    <TextField
                                    hintText={'Link'}
                                    fullWidth={true}
                                    underlineFocusStyle={{
                                        borderBottomColor: "#61116a"
                                    }}
                                    />
                                    <span>Add</span>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                    <div className={'payment-columns'}>
                        <h6 className={'date'}>Date</h6>
                        <h6 className={'method'}>Payment method</h6>
                        <h6 className={'address'}>Valid address</h6>
                        <h6 className={'completed'}>Completed gig</h6>
                        <h6 className={'receive'}>Receive payment</h6>
                    </div>
                    <div style={{paddingTop: '2rem', paddingBottom: '5rem'}}>
                        {this.state.gigs.map((item, index) => (
                            <GigElement
                                key={index}
                                date={item.date}
                                method={item.method}
                                address={item.address}
                                status={item.status}
                            />
                        ))}
                    </div>
                    <Navigation
                        classes={'navigation'}
                    />
                    <h4 className={'payment-back'}>Back</h4>
                </div>
            </Col>
        )
    }
}

export default TalentPayment;