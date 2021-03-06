import * as React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import {getDateGig} from "../../util/dateParser";

class GigCard extends React.Component{

    state={
        page: 0
    };

    constructor(props){
        super(props);

        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
    }

    nextPage = () => {
        if (this.state.page < this.props.tags.length-1){
            this.setState({page: this.state.page+1})
        }
    };

    prevPage = () => {
        if (this.state.page){
            this.setState({page: this.state.page-1})
        }
    };

    render(){
        return(
            <div className={"gig-card-container"}>
                <div className={"gig-card-pills-container"}>
                    {this.props.talents.map((item,index)=>(
                        <span key={"pill "+index}>{item}</span>
                    ))}
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
                <div className={"gig-card-types-container"}>
                    <div>
                        <SvgIcon width="24" height="24" viewBox="0 0 24 24" style={{marginTop: "3.2rem", cursor: "pointer"}} onClick={this.prevPage}>
                            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
                            <path fill="none" d="M0 0h24v24H0V0z"/>
                        </SvgIcon>
                    </div>
                    <div style={{width: "100%"}}>
                        <div className={"gig-card-cost"}>
                            <p><span>{this.props.cost[this.state.page]}</span> {this.props.typeCost[this.state.page]}</p>
                            <h6>Type {this.state.page + 1}</h6>
                        </div>
                        <div className={"gig-card-tags-container"}>
                            {
                                this.props.tags[this.state.page].map((item,index) => (
                                    <span key={"tags "+index} className={"gig-card-tags"}>{item}</span>
                                ))
                            }
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            {
                                this.props.tags.map((item,index)=> (<span key={"point "+index} className={this.state.page === index ? "gig-card-point active": "gig-card-point"}/>))
                            }
                        </div>
                    </div>
                    <div>
                        <SvgIcon width="24" height="24" viewBox="0 0 24 24" style={{marginTop: "3.2rem", cursor: "pointer"}} onClick={this.nextPage}>
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                            <path fill="none" d="M0 0h24v24H0V0z"/>
                        </SvgIcon>
                    </div>
                </div>
                <div>
                    <span className={"gig-card-button"}>Message</span>
                    <span className={"gig-card-button"}>Apply</span>
                </div>
            </div>
        )
    }
}

export default GigCard;