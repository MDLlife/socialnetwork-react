import * as React from 'react';
import Divider from 'material-ui/Divider';

const DialogueHeader = (props) => {
    return(<div className={"dialogue-header-container"}>
        <div className={"dialogue-header-item"}  style={{display: "flex", justifyContent: "space-between"}}>
            <h5>{props.name}</h5>
            <p style={{paddingTop:"1.4rem", cursor: "pointer"}}>View this talent's profile</p>
        </div>
        <div className={"dialogue-header-item"} style={{display: "flex", justifyContent: "space-between"}}>
            <p style={{paddingTop: "0.4rem"}}>{props.onlineStatus}</p>
            <div className={"status-pills-container"}>
            {props.roles.map((status,index)=>(<div className={"status-pill"} key={index}>{status}</div>))
            }
            </div>
        </div>
        <Divider/>
    </div>)
};

export default DialogueHeader;