import * as React from "react";
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {getTime, getDate} from 'util/dateParser';

const ChatField = (props) => {

    return (
        <div className={"chat-field-container"}>
            <div className={"chat-field-messages"}>{
                props.messages.map((item, index)=>{
                let dividerDate;
                if (index === 0 || (new Date(props.messages[index-1].time)).getDate() !== (new Date(item.time)).getDate()){
                    dividerDate = (<div key={index}>
                            <p>{getDate(item.time)}</p>
                            <Divider/>
                        </div>)
                }
                if (item.owner === "me"){
                return (
                    <div>
                        {dividerDate}
                        <div key={index} className={"chat-field-my-message"}>
                            <span style={{marginRight: "2rem"}}>{getTime(item.time)}</span>
                            <div className={"message"}>
                                {item.text}
                            </div>
                        </div>
                    </div>
                )
                } else{
                return(
                    <div>
                        {dividerDate}
                        <div key={index} className={"chat-field-other-message"}>
                            <Avatar
                                size={46}
                                className={"chat-field-message-avatar"}
                            />
                            <div style={{display: "inline-block", marginTop: "2.7rem"}}>
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