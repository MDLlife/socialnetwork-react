import * as React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import GigCard from './GigCard';
import Navigation from './Navigation';

class Gigs extends React.Component{

    state = {
      gigs: "unpaid",
      gigsDirection: "grid"
    };

    constructor(props) {
        super(props);
    }

    radioButtonHandler = (e, value) => {
      this.setState({gigs: value});
    };

    render(){
        return(
            <div className="payment-gigs-container">
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    padding: "2.9rem 2.9rem 2.4rem 3.2rem"
                }}>
                   <div>
                       <RadioButtonGroup name={"gig-type"}
                                         onChange={this.radioButtonHandler}
                                         defaultSelected={this.state.gigs}
                                         style={{
                                             display: "flex"
                                         }}
                       >
                           <RadioButton
                           label={"Unpaid gigs"}
                           value={"unpaid"}
                           iconStyle={this.state.gigs === "unpaid"? {fill: "#541065"}: {fill: "#818181"}}
                           labelStyle = {{ color: (this.state.gigs === "unpaid"? "#000": "#818181"),
                               fontFamily: "'Gilroy Light', sans-serif",
                               fontSize: "1.6rem",
                               whiteSpace: "nowrap",
                               marginRight: "4rem",
                           }}
                           />
                           <RadioButton
                           label={"Paid gigs"}
                           value={"paid"}
                           iconStyle={this.state.gigs === "paid"? {fill: "#541065"}: {fill: "#818181"}}
                           labelStyle = {{ color: (this.state.gigs === "paid"? "#000": "#818181"),
                               fontFamily: "'Gilroy Light', sans-serif",
                               fontSize: "1.6rem",
                               whiteSpace: "nowrap",
                           }}
                           />
                       </RadioButtonGroup>
                       <h5>{this.props.gigList.length} gigs found</h5>
                   </div>
                    <div className={'gig-cards-direction'}>
                        <span className={this.state.gigsDirection === "grid"? "active": ""}>Grid</span>
                        <span className={this.state.gigsDirection === "list"? "active": ""}>List</span>
                    </div>
                </div>
                <div className="gig-cards">
                    {this.props.gigList.map((item, index)=>(
                        <GigCard
                        key={"gig card " + index}
                        talents={item.talents}
                        point={item.point}
                        name={item.name}
                        date={item.date}
                        location={item.location}
                        cost={item.cost}
                        address={item.address}
                        />
                        ))}
                </div>
                <Navigation
                    classes={"payment-bottom-navigation"}
                />
            </div>
        )
    }
}

export default Gigs;