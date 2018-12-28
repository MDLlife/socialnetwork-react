import * as React from 'react';
import GigCard from './GigCard'
import Navigation from '../../payment/Navigation';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';


class CompletedGigs extends React.Component{

    state = {
        gigs: [
            {
                talent: "Actor",
                point: "sky-blue",
                name: "Fashion show",
                date: "8-14-2018",
                location: "Longnan, China",
                cost: "1256",
                nameCost: "per gig",
                rate: 4.5,
                completed: true,
                feedback: false,
                payment: false,
            },
            {
                talent: "Actor",
                point: "sky-blue",
                name: "Fashion show",
                date: "8-14-2018",
                location: "Longnan, China",
                cost: "125",
                nameCost: "per hour",
                rate: 4.5,
                completed: true,
                feedback: false,
                payment: true,
            },
            {
                talent: "Actor",
                point: "sky-blue",
                name: "Fashion show",
                date: "8-14-2018",
                location: "Longnan, China",
                cost: "125",
                nameCost: "per hour",
                rate: 4.5,
                completed: true,
                feedback: true,
                payment: true,
            },
        ],
        radioButton: "completed",
    };

    radioButtonHandler = (e, value) => {
        this.setState({radioButton: value})
    };

    render(){
        let feedback;
        this.state.gigs.map((item) => {
            if (item.feedback){
                feedback = true
            }
        });
        let content;
        if (this.state.gigs.length && (this.state.radioButton !== "feedback" || feedback)) {
            content = <div>
                <RadioButtonGroup name={"gig-type"}
                                  onChange={this.radioButtonHandler}
                                  defaultSelected={this.state.radioButton}
                                  style={{
                                      display: "flex",
                                      justifyContent: "flex-start",
                                      margin: "2.5rem 0 0 2rem ",
                                  }}
                >
                    <RadioButton
                        label={"All completed"}
                        value={"completed"}
                        iconStyle={this.state.radioButton === "completed"? {fill: "#541065"}: {fill: "#818181"}}
                        labelStyle = {{ color: (this.state.gigs === "unpaid"? "#000": "#818181"),
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
                        label={"Need feedback"}
                        value={"feedback"}
                        iconStyle={this.state.radioButton === "feedback"? {fill: "#541065"}: {fill: "#818181"}}
                        labelStyle = {{ color: (this.state.gigs === "paid"? "#000": "#818181"),
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
                        label={"Need payment"}
                        value={"payment"}
                        iconStyle={this.state.radioButton === "payment"? {fill: "#541065"}: {fill: "#818181"}}
                        labelStyle = {{ color: (this.state.gigs === "paid"? "#000": "#818181"),
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
                <div className={"gigs-container"}>
                    {
                        this.state.gigs.map((item, index) => {
                            console.log(item[this.state.radioButton]);
                            if (item[this.state.radioButton]) {
                                return (<GigCard
                                    key={index}
                                    talent={item.talent}
                                    point={item.point}
                                    name={item.name}
                                    date={item.date}
                                    location={item.location}
                                    cost={item.cost}
                                    nameCost={item.nameCost}
                                    rate={item.rate}
                                    completed={item.completed}
                                    feedback={item.feedback}
                                    payment={item.payment}
                                />)
                            }
                        })
                    }

                </div>
                <Navigation
                    classes={'navigation'}
                />
            </div>
        }else if (!feedback && this.state.radioButton === "feedback") {
            content = <div><RadioButtonGroup name={"gig-type"}
                                             onChange={this.radioButtonHandler}
                                             defaultSelected={this.state.radioButton}
                                             style={{
                                                 display: "flex",
                                                 justifyContent: "flex-start",
                                                 margin: "2.5rem 0 0 2rem ",
                                             }}
            >
                <RadioButton
                    label={"All completed"}
                    value={"completed"}
                    iconStyle={this.state.radioButton === "completed"? {fill: "#541065"}: {fill: "#818181"}}
                    labelStyle = {{ color: (this.state.gigs === "unpaid"? "#000": "#818181"),
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
                    label={"Need feedback"}
                    value={"feedback"}
                    iconStyle={this.state.radioButton === "feedback"? {fill: "#541065"}: {fill: "#818181"}}
                    labelStyle = {{ color: (this.state.gigs === "paid"? "#000": "#818181"),
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
                    label={"Need payment"}
                    value={"payment"}
                    iconStyle={this.state.radioButton === "payment"? {fill: "#541065"}: {fill: "#818181"}}
                    labelStyle = {{ color: (this.state.gigs === "paid"? "#000": "#818181"),
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
                <div className={'no-gigs'}>
                    <img src="/static/img/finger.png" alt=""/>
                    <h1>All done!</h1>
                    <h5>You given feedback for all needed gigs</h5>
                </div>
            </div>
        }else{
            content = <div>
                <div className={'no-gigs'}>
                    <h1>You don't have gigs you are booked on</h1>
                </div>
            </div>

        }
        return(
            content
        )
    }
}

export default CompletedGigs;
