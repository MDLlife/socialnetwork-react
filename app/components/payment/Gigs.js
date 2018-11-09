import * as React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class Gigs extends React.Component{

    state = {
      gigs: "unpaid",
      gigsDirection: "grid"
    };

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="payment-gigs-container">
               <div>
                   <RadioButtonGroup name={"gig-type"} defaultSelected={this.state.gigs} >
                       <RadioButton
                       label={"Unpaid gigs"}
                       value={"unpaid"}
                       checkedColor={"#541065"}/>
                       <RadioButton
                       label={"Paid gigs"}
                       value={"paid"}
                       checkedColor={"#541065"}/>
                   </RadioButtonGroup>
               </div>
            </div>
        )
    }
}

export default Gigs;