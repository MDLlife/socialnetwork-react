import * as React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import {getDateGig} from "../../util/dateParser";
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class GigCard extends React.Component{

    state = {
        paymentDialog: false,
        hours: '',
        overtime: '',
    };

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    constructor(props){
        super(props);

    }

    handleDialog = () => {
        this.setState({paymentDialog: !this.state.paymentDialog})
    };

    handleFeedback = () => {
        window.location.href = '/gigs/feedback';
    };

    render(){
        return(
            <div className={"gig-card-container"} style={this.props.style}>
                <div className={'gig-card-header'}>
                <h5><span style={{color: "#000"}}>{this.props.cost} $</span> {this.props.nameCost}</h5>
                <div className={"gig-card-pills-container"}>
                    <span>{this.props.talent}</span>
                </div>
                </div>
                <div className={"gig-card-name"}>
                    <h4 className={this.props.point}>{this.props.name}</h4>
                    <span style={{background: "url(/static/img/star-rate.png)", backgroundSize: "3.4rem 3.3rem", backgroundRepeat: "no-repeat", width: "3.4rem", }}>{this.props.rate}</span>
                </div>
                <div className={"gig-card-date"}>
                    <SvgIcon style={{height: "1.8rem", width: "1.8rem", position: "relative", top: "0.7rem", marginRight: "0.8rem"}} viewBox={"0 0 24 24"}>
                        <path fill={"none"} d="M0 0h24v24H0V0z" />
                        <path fill={"rgba(128,128,128, 0.5)"} d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z" />
                    </SvgIcon>
                    <h5>{getDateGig(this.props.date)}</h5>
                </div>
                <div className={"gig-card-location"}>
                    <SvgIcon style={{height: "2rem", width: "2rem", position: "relative", top: "0.7rem", marginRight: "0.8rem"}} viewBox={"0 0 24 24"}>
                        <path fill={"none"} d={"M0 0h24v24H0V0z"} />
                        <path fill={"rgba(128,128,128, 0.5)"} d={"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"}/>
                        <circle fill={"rgba(128,128,128, 0.5)"} cx={"12"} cy={"9"} r={"2.5"}/>
                    </SvgIcon>
                    <h5>
                        {this.props.location}
                    </h5>
                </div>
                {
                    this.props.completed &&
                        <div className={"gig-card-completed-buttons"} style={{backgroundColor: !this.props.feedback && !this.props.payment? "#f4f4f4": "#fff"}}>
                            {
                                this.props.feedback &&
                                    <div onClick={this.handleFeedback} className={"completed-button"}><span>Leave feedback</span></div>
                            }
                            {
                                this.props.feedback && this.props.payment &&
                                    <div style={{borderLeft: ".1rem solid #d9d9d9"}}/>
                            }
                            {
                                this.props.payment &&
                                <div className={"completed-button"} onClick={this.handleDialog}><span>Payment Request</span></div>
                            }
                            {
                                !this.props.feedback && !this.props.payment &&
                                <span className={"no-buttons"}>All done</span>
                            }
                            {
                                this.props.payment &&
                                <Dialog
                                    open={this.state.paymentDialog}
                                    modal={true}
                                    contentClassName={"payment-dialog"}
                                    contentStyle={{maxWidth: "36.2rem"}}
                                    bodyStyle={{paddingLeft: 0, paddingRight: 0}}
                                >
                                    <div>
                                        <div>
                                            <div className={"gig-card-name"}>
                                                <h4 className={this.props.point}>{this.props.name} <span>{this.props.talent}</span></h4>
                                                    <SvgIcon xmlns="http://www.w3.org/2000/svg" style={{height: "1.6rem", width: "1.6rem", cursor: "pointer"}} viewBox="0 0 24 24" onClick={this.handleDialog}>
                                                        <path fill={'#808080'} d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                                                        <path d="M0 0h24v24H0z" fill="none"/>
                                                    </SvgIcon>
                                            </div>
                                        </div>
                                        <div className={"dialog-gig-info"}>
                                            <div className={"gig-card-date"}>
                                                <SvgIcon style={{height: "1.8rem", width: "1.8rem", position: "relative", top: "0.7rem", marginRight: "0.8rem"}} viewBox={"0 0 24 24"}>
                                                    <path fill={"none"} d="M0 0h24v24H0V0z" />
                                                    <path fill={"rgba(128,128,128, 0.5)"} d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z" />
                                                </SvgIcon>
                                                <h5>{getDateGig(this.props.date)}</h5>
                                            </div>
                                            <div className={"gig-card-location"}>
                                                <SvgIcon style={{height: "2rem", width: "2rem", position: "relative", top: "0.7rem", marginRight: "0.8rem"}} viewBox={"0 0 24 24"}>
                                                    <path fill={"none"} d={"M0 0h24v24H0V0z"} />
                                                    <path fill={"rgba(128,128,128, 0.5)"} d={"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"}/>
                                                    <circle fill={"rgba(128,128,128, 0.5)"} cx={"12"} cy={"9"} r={"2.5"}/>
                                                </SvgIcon>
                                                <h5>
                                                    {this.props.location}
                                                </h5>
                                            </div>
                                        </div>
                                        <div className={"amount"}>
                                            <h5> Amount:</h5>
                                            <p><span>{this.props.cost}$</span> {this.props.nameCost}</p>
                                        </div>
                                        {
                                            this.props.nameCost === "per hour" &&
                                            <div className={"input-hours"}>
                                            <TextField
                                                onChange={this.handleInput}
                                                floatingLabelText={"Total hours"}
                                                type={"number"}
                                                name={"hours"}
                                                floatingLabelFocusStyle={{color: "#808080"}}
                                                underlineFocusStyle={{borderBottomColor: "#61116a"}}
                                                fullWidth={true}
                                            />
                                            <TextField
                                                onChange={this.handleInput}
                                                floatingLabelText={"Overtime"}
                                                type={"number"}
                                                name={"overtime"}
                                                floatingLabelFocusStyle={{color: "#808080"}}
                                                underlineFocusStyle={{borderBottomColor: "#61116a"}}
                                                fullWidth={true}
                                            />
                                        </div>}
                                        <div className={"amount"}>
                                            <h5>Total:</h5>
                                            <p><span>{this.props.nameCost === "per gig"? this.props.cost: Number(this.props.cost)*this.state.hours + Number(this.state.overtime)}$</span></p>
                                        </div>
                                    </div>
                                    <div className={"payment-button-row"}><span>Go to Payment</span></div>
                                </Dialog>
                            }
                        </div>
                }
            </div>
        )
    }
}

export default GigCard;