import * as React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

class Gig extends React.Component{

    state = {
        open: false
    };

    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        this.setState({open: !this.state.open})
    }

    render(){

        return(
        <div style={{position: "relative"}}>
            <div style={this.state.open? {display: "block"}: {display: "none"}} className={"calendar-gig-info-block"}>
                <div style={{display: "flex", justifyContent: "space-between", marginBottom: "2rem"}}>
                    <h5 className={this.props.item.point}>{this.props.item.name}</h5>
                    <SvgIcon style={{
                        width: "1.8rem",
                        height: "1.8rem",
                        position: "relative",
                        marginLeft: "2rem",
                        top: "0.1rem",
                        cursor: "pointer",
                        display: "inline-block"}}
                        viewBox={"0 0 24 24"}
                        onClick={this.handleChange}>
                        <path fill="none" d="M0 0h24v24H0V0z"/>
                        <path fill="#808080" d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
                    </SvgIcon>
                </div>
                <div style={{display: "inline-block"}}>
                    <span>Date:</span>
                    <span>Time:</span>
                    <span>Location:</span>
                    <span>Payment:</span>
                </div>
                <div style={{display: "inline-block"}}>
                    <div>
                        <p>{this.props.item.date}</p>
                    </div>
                    <div>
                        <p>{this.props.item.startTime} - {this.props.item.endTime}</p>
                    </div>
                    <div>
                        <p>{this.props.item.location}</p>
                    </div>
                    <div>
                        <p>{this.props.item.payment}</p>
                    </div>
                </div>
                <h6>View booker profile</h6>
            </div>
            <p onClick={this.handleChange} className={this.props.className}>
                <span className={this.props.item.point}>{this.props.item.startTime}</span>
                {this.props.item.name}
            </p>
        </div>)
    }

}

export default Gig;