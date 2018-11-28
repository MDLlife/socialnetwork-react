import * as React from 'react';
import { connect } from 'react-redux';
import { getDateGig } from '../../util/dateParser';
import Navigation from 'components/payment/Navigation';
import { Col } from 'react-bootstrap';
import SvgIcon from 'material-ui/SvgIcon';

class GigPayment extends React.Component{

    state = {
      title: "Underwear catalog",
      point: "blue",
      date: "10-21-2018",
      location: "Longnan, China",
      talents: [
          { talent: "Model 1",
            amount: 123,
            payment: "per gig",
            address: {type: "MDL", link: "2MfX6756AKIDND4HGKFFK845JH76GGF67GGH", status: "ready"},
            status: "Pending",
          },
          { talent: "Model 2",
              amount: 10,
              payment: "per hour",
              hours: 5,
              overtime: 13,
              address: {type: "BTC", link: "2MfX6756AKIDND4HGKFFK845JH76GGF67GGH", status: "ready"},
              status: "Pending",
          },
          { talent: "Model 3",
              amount: 123,
              payment: "per gig",
              address: {type: "MDL", link: "2MfX6756AKIDND4HGKFFK845JH76GGF67GGH", status: "ready"},
              status: "Unpaid",
          },
          { talent: "Actor 1",
              amount: 129,
              payment: "per gig",
              overtime: 55,
              address: {type: "MDL", link: "2MfX6756AKIDND4HGKFFK845JH76GGF67GGH", status: "ready"},
              status: "Paid",
          },
          { talent: "Actor 2",
              amount: 12,
              payment: "per gig",
              overtime: 55,
              address: {type: "BANK", link: "DE3494593924905209690", status: "ready"},
              status: "Paid",
          },
          { talent: "Actor 3",
              amount: 329,
              payment: "per gig",
              overtime: 31,
              address: {status: "sent"},
              status: "Unpaid",
          },
          { talent: "Actor 4",
              amount: 19,
              payment: "per gig",
              overtime: 435,
              address: {status: "not sent"},
              status: "Unpaid",
          },
          { talent: "Actor 5",
              amount: 19,
              payment: "per hour",
              overtime: 435,
              address: {status: "not sent"},
              status: "Unpaid",
          }
      ]
    };

    constructor(props){
        super(props)
    }

    checkAmountToPayment = (payment, amount, hours, overtime, toPayment) => {
        if (payment === "per hour"){
            if (hours) {
                return (hours*amount + (overtime? overtime: 0)) + "$"
            }
            return " - "
        }
        return amount + (overtime? overtime: 0) + "$";
    };

    choosePic = (index) => {
      switch (this.state.talents[index].address.type){
          case 'MDL':
              return <img
                  src="/static/img/Logo_without_text.png"
                  alt="mdl coin"
                  style = {{
                      bottom: "0.2rem",
                      height: "1.9rem"}}
              />;
          case 'BTC':
              return <img
                  src="/static/img/bitcoin.png"
                  alt="bitcoin"
                  style={{
                      height: "1.3rem",
                      padding: "0 .4rem",
                  }}
              />
          case "BANK":
              return <div style={{
                  width: "1.8rem",
                  height: "1.7rem",
                  position: "relative",
                  bottom: ".2rem",
                  margin: "0 .3rem 0 .1rem"
              }}>
                  <SvgIcon xmlns="http://www.w3.org/2000/svg"
                              style={{
                                  width: "1.8rem",
                                  height: "1.7rem",
                                  margin: "0 .3rem 0 .1rem"
                              }}
                              viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0z" fill="none"/>
                      <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"/>
                 </SvgIcon>
              </div>
      }
    };

    choosePoint = (status) => {
        switch (status) {
            case 'Pending':
                return "yellow";
            case 'Paid':
                return "green";
            case 'Unpaid':
                return "red";
        }
    };

    render(){
        return(
            <Col xs={10}>
                <div className={"gig-payment-container"}>
                    <div className={"header-back"}>
                            <h6>
                                <SvgIcon xmlns="http://www.w3.org/2000/svg"
                                         style = {{
                                             width: "1.6rem",
                                             height: "1.6rem",
                                             position: "relative",
                                             top: ".3rem",
                                             right: ".5rem",
                                         }}
                                         viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path fill="#808080" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                                </SvgIcon>
                               Back
                            </h6>
                    </div>
                    <div className={"gig-info"}>
                        <h3 className={this.state.point}>{this.state.title}</h3>
                        <h5
                            style={{
                                textTransform: "uppercase",
                            }}
                        >
                            <SvgIcon style={{height: "1.8rem", width: "1.8rem", position: "relative", top: "0.4rem", marginRight: "0.8rem"}} viewBox={"0 0 24 24"}>
                                <path fill={"none"} d="M0 0h24v24H0V0z" />
                                <path fill={"rgba(128,128,128, 0.5)"} d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z" />
                            </SvgIcon>
                            {getDateGig(this.state.date)}
                        </h5>
                        <h5>
                            <SvgIcon style={{height: "2rem", width: "2rem", position: "relative", top: "0.5rem", marginRight: "0.8rem"}} viewBox={"0 0 24 24"}>
                                <path fill={"none"} d={"M0 0h24v24H0V0z"} />
                                <path fill={"rgba(128,128,128, 0.5)"} d={"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"}/>
                                <circle fill={"rgba(128,128,128, 0.5)"} cx={"12"} cy={"9"} r={"2.5"}/>
                            </SvgIcon>
                            {this.state.location}
                        </h5>
                    </div>
                    <div>
                        <div
                            style={{marginBottom: "1rem"}}
                            className={"gig-row"}>
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
                                    <h6 className={"column-2"}>{item.amount}$</h6>
                                    <h6 className={"column-3"}>{item.payment}</h6>
                                    {   ((item.hours && item.payment === "per hour") ||
                                        (!item.hours && item.payment === "per gig"))
                                        &&
                                        <h6 className={"column-4"}>{item.hours ? item.hours + "h" : ""}</h6>
                                    }
                                    {
                                        !item.hours && item.payment === "per hour" &&
                                            <p className={"column-4"}>Request hours</p>
                                    }
                                    <h6 className={"column-5"}>{item.overtime? item.overtime + "$": ""}</h6>
                                    <h6 className={"column-6"}>{this.checkAmountToPayment(item.payment, item.amount, item.hours, item.overtime)}</h6>
                                    { item.address.status === "ready" &&
                                    <div className={"column-7"}>

                                            {this.choosePic(index)}
                                            <h6>
                                            {item.address.link}
                                            </h6>
                                            <span className={"copy"}>Copy</span>

                                    </div>}
                                    {
                                        item.address.status === "sent" &&
                                        <div className={"column-7"}>
                                            <p>Waiting for address</p>
                                        </div>
                                    }
                                    {
                                        item.address.status === "not sent" &&
                                        <div className={"column-7"}>
                                            <p className={"not-sent"}>Ask the wallet address or IBAN</p>
                                        </div>
                                    }
                                    <p className={"column-8 " + this.choosePoint(item.status)}>{item.status}</p>

                                        {
                                            item.status === "Pending" && item.address.type !== "BANK"
                                            && <div className={"column-9"}><span>Link +</span></div>
                                        }
                                        {
                                            item.status === "Pending" && item.address.type === "BANK"
                                            && <div className={"column-9"}><span>PDF +</span></div>
                                        }
                                        {
                                            item.status === "Unpaid"
                                            && <div className={"column-9"}/>
                                        }
                                    {
                                        item.status === "Paid" && item.address.type === "BANK"
                                        && <div className={"column-9"}>
                                            <SvgIcon xmlns="http://www.w3.org/2000/svg"
                                                     style={{
                                                         enableBackground:"new 0 0 24 24",
                                                         position: "relative",
                                                         bottom: ".7rem",
                                                         right: ".4rem",
                                                         cursor: "pointer",
                                                     }} >
                                            <g>
                                                <path fill="#808080" d="M20.4,7.4l-4.8-4.8C15.2,2.2,14.7,2,14.2,2H7C5.9,2,5,2.9,5,4l0,6.5h12.8c1.1,0,2,0.9,2,2v5.8c0,1.1-0.9,2-2,2H5   C5.2,21.3,6,22,7,22h12c1.1,0,2-0.9,2-2V8.8C21,8.3,20.8,7.8,20.4,7.4z M15,9c-0.5,0-1-0.5-1-1V3.5L19.5,9H15z"/>
                                                <path fill="#808080" d="M6.3,14.6c-0.5,0-0.8,0.3-0.8,0.9s0.4,0.9,0.8,0.9c0.5,0,0.8-0.3,0.8-0.9S6.8,14.6,6.3,14.6z"/>
                                                <path fill="#808080" d="M11.1,14.6c-0.5,0-0.8,0.3-0.8,0.9s0.4,0.9,0.8,0.9c0.5,0,0.8-0.3,0.8-0.9S11.6,14.6,11.1,14.6z"/>
                                                <path fill="#808080" d="M18.8,18.3v-5.8c0-0.6-0.4-1-1-1H5H3.4c-0.6,0-1,0.4-1,1v5.8c0,0.6,0.4,1,1,1H5h12.8C18.3,19.3,18.8,18.9,18.8,18.3z    M6.5,17.3c-0.5,0-0.8-0.2-1-0.4v1.7H4.4v-4.9h1.1v0.3c0.2-0.3,0.6-0.4,1-0.4c0.9,0,1.7,0.8,1.7,1.8S7.4,17.3,6.5,17.3z M13,17.3   H12v-0.3c-0.2,0.3-0.6,0.4-1,0.4c-0.9,0-1.7-0.8-1.7-1.8s0.8-1.8,1.7-1.8c0.5,0,0.8,0.2,1,0.4v-1.7H13V17.3z M16.4,13.3   c-0.4,0-0.7,0.1-0.7,0.5h0.7v1h-0.7v2.5h-1.1v-2.5h-0.5v-1h0.5c0-1,0.5-1.6,1.7-1.5V13.3z"/>
                                            </g>
                                            </SvgIcon>
                                            <SvgIcon xmlns="http://www.w3.org/2000/svg"
                                                     style={{
                                                         cursor: "pointer",
                                                         height: "2.4rem",
                                                         width: "2.4rem",
                                                         position: "relative",
                                                         bottom: ".6rem",
                                                     }}
                                                     viewBox="0 0 24 24">
                                                <path fill="#e4e4e4" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                                                <path d="M0 0h24v24H0z" fill="none"/>
                                            </SvgIcon>
                                        </div>
                                    }
                                    {
                                        item.status === "Paid" && item.address.type !== "BANK"
                                        && <div className={"column-9"}>
                                            <SvgIcon xmlns="http://www.w3.org/2000/svg"
                                                     style={{
                                                         cursor: "pointer",
                                                         position: "relative",
                                                         bottom: ".6rem",
                                                         right: ".4rem",
                                                     }}
                                                     viewBox="0 0 24 24">
                                                <path d="M0 0h24v24H0z" fill="none"/>
                                                <path fill="#808080" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                                            </SvgIcon>
                                            <SvgIcon xmlns="http://www.w3.org/2000/svg"
                                                     style={{
                                                         cursor: "pointer",
                                                         height: "2.4rem",
                                                         width: "2.4rem",
                                                         position: "relative",
                                                         bottom: ".6rem",
                                                     }}
                                                     viewBox="0 0 24 24">
                                                <path fill="#e4e4e4" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                                                <path d="M0 0h24v24H0z" fill="none"/>
                                            </SvgIcon>
                                        </div>
                                    }
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