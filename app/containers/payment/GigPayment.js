import * as React from 'react';
import { connect } from 'react-redux';
import { getDateGig } from '../../util/dateParser';
import Navigation from 'components/payment/Navigation';
import { Col } from 'react-bootstrap';

class GigPayment extends React.Component{

    state = {
      title: "Underwear catalog",
      point: "blue",
      date: "10-21-2018",
      location: "Longnan, China",
      talents: [
          { talent: "Model 1",
            amount: "123$",
            payment: "per gig",
            amountToPayment: "135$",
            address: {type: "MDL", link: "2MfX6756AKIDND4HGKFFK845JH76GGF67GGH", status: true},
            status: "Pending",
          }
      ]
    };

    constructor(props){
        super(props)
    }

    checkAmountToPayment = (payment, amount, hours, overtime, toPayment) => {
        if (payment === "per hour"){
            if (hours) {
                return (hours*amount + overtime? overtime: 0) + "$"
            }
            return " - "
        }
        return toPayment
    };

    render(){
        return(
            <Col xs={10}>
                <div className={"gig-payment-container"}>
                    <div className={"header-back"}>
                        <div>
                            <h6>
                               Back
                            </h6>
                        </div>
                    </div>
                    <div className={"gig-info"}>
                        <h3>{this.state.title}</h3>
                        <h5>{getDateGig(this.state.date)}</h5>
                        <h5>{this.state.location}</h5>
                    </div>
                    <div>
                        <div className={"gig-row"}>
                            <h6 className={"column-1"}>Type of talent</h6>
                            <h6 className={"column-2"}>Amount</h6>
                            <h6 className={"column-3"}>Type of payment</h6>
                            <h6 className={"column-4"}>Total hours</h6>
                            <h6 className={"column-5"}>Overtime payment</h6>
                            <h6 className={"column-6"}>Amount to payment</h6>
                            <h6 className={"column-7"}>Address(short link)</h6>
                            <h6 className={"column-8"}>Payment</h6>
                            <h6 className={"column-9"}>Evidences</h6>
                        </div>
                        {
                            this.state.talents.map((item, index) => (
                                <div key={"row " + index} className={"gig-row"}>
                                    <h6 className={"column-1"}>{item.talent}</h6>
                                    <h6 className={"column-2"}>{item.amount}</h6>
                                    <h6 className={"column-3"}>{item.payment}</h6>
                                    <h6 className={"column-4"}>{item.hours? item.hours : ""}</h6>
                                    <h6 className={"column-5"}>{item.overtime? item.overtime: ""}</h6>
                                    <h6 className={"column-6"}>{this.checkAmountToPayment(item.payment, item.amount, item.hours, item.overtime, item.amountToPayment)}</h6>
                                    <h6 className={"column-7"}>{item.address.link}</h6>
                                    <p className={"column-8"}>{item.status}</p>
                                    <span className={"column-9"}></span>
                                </div>
                            ))
                        }
                    </div>
                    <Navigation
                        classes={"payment-bottom-navigation"}
                    />
                </div>
            </Col>
        )
    }
}

export default connect()(GigPayment);