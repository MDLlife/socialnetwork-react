import * as React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import {getDateGig} from "../../../util/dateParser";
import EditIcon from 'material-ui/svg-icons/content/create';
import Avatar from 'material-ui/Avatar';
import TalentPill from './TalentPill';

class GigCard extends React.Component{

    state={
        page: 0,
        talent: null,
        display: "none",
    };

    constructor(props){
        super(props);

        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.onOver = this.onOver.bind(this);
        this.onOut = this.onOut.bind(this);
    }

    componentWillMount(){
        this.setState({talent: Object.keys(this.props.talents)[0]});
    }

    nextPage = () => {
        if (this.state.page < this.props.talents[this.state.talent].types.length-1){
            this.setState({page: this.state.page+1})
        }
    };

    prevPage = () => {
        if (this.state.page){
            this.setState({page: this.state.page-1})
        }
    };

    handleTalentClick = (item) => {
        this.setState({talent:item});
    };

    onOver = () =>{
        this.setState({display: "block"});
    };

    onOut = () =>{
        this.setState({display: "none"});
    };

    render(){
        return(
            <div className={"gig-card-container"}>
                <div className={"gig-card-header"}>
                    <EditIcon
                        style={{
                            height: "1.6rem",
                            cursor: 'pointer',
                            color: "#808080",
                            marginRight: ".7rem",
                            position: "relative",
                            top: ".4rem"
                        }}
                    />
                    <SvgIcon xmlns="http://www.w3.org/2000/svg" style={{width: "2.4rem", height: "2.4rem"}} viewBox="0 0 24 24">
                        <path fill="#808080" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </SvgIcon>
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
                <div className={"gig-card-payment"}>
                    <SvgIcon xmlns="http://www.w3.org/2000/svg" style={{width: "2rem", height: "2rem", position:"relative", top: ".6rem", marginRight: "0.8rem"}} viewBox="0 0 24 24">
                        <path fill="rgba(128,128,128, 0.5)" d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </SvgIcon>
                    <h5><span>{this.props.cost}</span> {this.props.typeCost}</h5>
                </div>
                <div className={"gig-card-talents"}>
                    {Object.keys(this.props.talents).map((item, index)=>(
                        <TalentPill
                            key={"gig-card-talents"+index}
                            spanClass={(item === this.state.talent)? "active" : ""}
                            handler={this.handleTalentClick.bind(this, item)}
                            item={item}
                            list={this.props.talents[item]}
                        />
                    ))}
                </div>
                <div className={"gig-card-types-container"}>
                    <div>
                        <SvgIcon width="24" height="24" viewBox="0 0 24 24" style={{marginTop: "2.8rem", cursor: "pointer"}} onClick={this.prevPage}>
                            <path fill={(this.state.page)? "rgba(128,128,128,0.9)": "rgba(128,128,128,0.4)"} d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
                            <path fill="none" d="M0 0h24v24H0V0z"/>
                        </SvgIcon>
                    </div>
                    <div style={{width: "100%"}}>
                        <div className={"gig-card-type"}>
                            <h6>Type {this.state.page + 1}</h6>

                            <div className={"gig-card-type-hover"} style={{display: this.state.display}}>
                                <span>{this.props.talents[this.state.talent].types[this.state.page].booked}</span>  Booked
                                <span>{this.props.talents[this.state.talent].types[this.state.page].preBooked}</span>  Pre-booked
                                <span>{this.props.talents[this.state.talent].types[this.state.page].required}</span>  Required
                            </div>
                            <div onMouseOver={this.onOver} onMouseOut={this.onOut}>
                                <span>{this.props.talents[this.state.talent].types[this.state.page].booked}</span>
                                <span>{this.props.talents[this.state.talent].types[this.state.page].preBooked}</span>
                                <span>{this.props.talents[this.state.talent].types[this.state.page].required}</span>
                            </div>
                        </div>
                        <div className={"gig-card-tags-container"}>
                            {
                                this.props.talents[this.state.talent].types[this.state.page].tags.map((item,index) => (
                                    <span key={"tags "+index} className={"gig-card-tags"} >{item}</span>
                                ))
                            }
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            {
                                this.props.talents[this.state.talent].types.map((item,index)=> (<span key={"point "+index} className={this.state.page === index ? "gig-card-point active": "gig-card-point"}/>))
                            }
                        </div>
                    </div>
                    <div>
                        <SvgIcon width="24" height="24" viewBox="0 0 24 24" style={{marginTop: "2.8rem", cursor: "pointer"}} onClick={this.nextPage}>
                            <path fill={(this.state.page < this.props.talents[this.state.talent].types.length-1)? "rgba(128,128,128,0.9)": "rgba(128,128,128,0.4)"} d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                            <path fill="none" d="M0 0h24v24H0V0z"/>
                        </SvgIcon>
                    </div>
                </div>
                { this.props.talents[this.state.talent].types[this.state.page].required !== 0 && (
                    <div className={"gig-card-search-button"}>
                        Search now
                    </div>
                )
                }
                {
                    this.props.talents[this.state.talent].types[this.state.page].required === 0 && (
                        <div className={"gig-card-talents-carousel"}>
                            <div style={{marginTop: ".5rem", marginLeft: ".3rem"}}>
                                <SvgIcon width="24" height="24" viewBox="0 0 24 24" style={{ cursor: "pointer", width:"3rem", height:"3rem", position: "relative", right:".1rem"}}>
                                    <path fill="#808080" d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
                                    <path fill="none" d="M0 0h24v24H0V0z"/>
                                </SvgIcon>
                            </div>
                            <div style={{width: "100%", display: "flex", justifyContent: "space-around"}}>
                                <Avatar size={40}/>
                                <Avatar size={40}/>
                                <Avatar size={40}/>
                            </div>
                            <div style={{marginTop: ".5rem", marginRight: ".3rem"}}>
                                <SvgIcon width="24" height="24" viewBox="0 0 24 24" style={{cursor: "pointer", width:"3rem", height:"3rem", position: "relative", left:".1rem"}}>
                                    <path fill="#808080" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                                    <path fill="none" d="M0 0h24v24H0V0z"/>
                                </SvgIcon>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default GigCard;