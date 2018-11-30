import * as React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import {getDateGig} from "../../util/dateParser";

class GigCardPaid extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className={"gig-card-container"} style={this.props.style}>
                <div className={"gig-card-pills-container"}>
                    {this.props.talents.map((item,index)=>(
                        <span key={"pill "+index}>{item}</span>
                    ))}
                </div>
                <div className={"gig-card-name"}>
                    <h4 className={this.props.point}>{this.props.name}</h4>
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
                <div className={"gig-card-budget"}>
                    <SvgIcon style={{height: "2rem", width: "2rem", position: "relative", top: "0.7rem", marginRight: "0.6rem"}} viewBox="0 0 24 24">
                        <path fill={"rgba(128,128,128, 0.5)"} d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </SvgIcon>
                    <h5><span style={{color: "#000"}}>{this.props.cost} $</span> total budget</h5>
                </div>
            </div>
        )
    }
}

export default GigCardPaid;