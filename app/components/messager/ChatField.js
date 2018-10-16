import * as React from "react";
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {getTime, getDate, getDateGig} from 'util/dateParser';
import SvgIcon from 'material-ui/SvgIcon';

const ChatField = (props) => {

    return (
        <div className={"chat-field-container"}>
            <div className={"chat-field-messages"}>{
                props.messages.map((item, index)=>{
                let dividerDate;
                if (index === 0 || (new Date(props.messages[index-1].time)).getDate() !== (new Date(item.time)).getDate()){
                    dividerDate = (<div style={{display: "flex", justifyContent: "center", flexDirection: "column"}} key={"day_message"+index}>
                            <p>{getDate(item.time)}</p>
                            <Divider/>
                        </div>)
                }
                if (item.owner === "me"){
                return (
                    <div key={"message"+index}>
                        {dividerDate}
                        <div  className={"chat-field-my-message"}>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <span style={{margin: "0 2rem 0 auto"}}>{getTime(item.time)}</span>
                                <div className={"message"}>
                                    {item.text}
                                </div>
                            </div>
                        </div>
                    </div>
                )
                } else if (item.type === "message"){
                return(
                    <div  key={"message"+index}>
                        {dividerDate}
                        <div className={"chat-field-other-message"}>
                            <Avatar
                                size={46}
                                className={"chat-field-message-avatar"}
                            />
                            <div style={{display: "inline-block", marginTop: "2.7rem", width: "calc(100% - 7.8rem)"}}>
                                <div className={"chat-field-other-message-info"}>
                                <h5>{item.name}</h5>
                                <span>{getTime(item.time)}</span>
                                </div>
                                <div className={"message"}>
                                    {item.text}
                                </div>
                            </div>
                        </div>
                    </div>
                )
                } else if (item.type === "gig"){

                    return(
                        <div key={"gig"+index} className={"chat-field-other-gig chat-field-other-gig-margin"}>
                            <div className={"chat-field-other-gig-item"}>
                                <h4>{item.gigName}</h4>
                                <span>{item.talent}</span>
                            </div>
                            <div className={"chat-field-other-gig-item"}>
                                <div>
                                    <SvgIcon style={{height: "1.6rem", width: "1.6rem"}} viewBox={"0 0 24 24"}>
                                        <path fill={"none"} d="M0 0h24v24H0V0z" />
                                        <path fill={"rgba(128,128,128, 0.5)"} d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z" />
                                    </SvgIcon>
                                    <p style={{textTransform: "uppercase"}}>{getDateGig(item.date)}</p>
                                    <SvgIcon style={{height: "1.6rem", width: "1.6rem"}} viewBox={"0 0 24 24"}>
                                        <path fill={"none"} d={"M0 0h24v24H0V0z"} />
                                        <path fill={"rgba(128,128,128, 0.5)"} d={"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"}/>
                                        <circle fill={"rgba(128,128,128, 0.5)"} cx={"12"} cy={"9"} r={"2.5"}/>
                                    </SvgIcon>
                                    <p>{item.place}</p>
                                </div>
                            </div>
                            <div className={"chat-field-other-gig-item violet"}>
                                <p>{item.pay} per hour</p>
                                <div>
                                {item.tags.map((tag,index)=>(<span key={"key"+index}>{tag}</span>))}
                                </div>
                            </div>
                        </div>
                    )
                }
            })
            }
            </div>
            <div className={"chat-field-bottom-info"}>
                <p>Model Name is typing</p>
                <div>
                    <div className={"chat-field-book-button"}>Book</div>
                    <div className={"chat-field-book-button"}>Prebook</div>
                </div>

            </div>
            <Divider/>
        </div>
    )
};



export default ChatField;