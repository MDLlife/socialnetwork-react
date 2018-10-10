import * as React from 'react';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';

const DialogueListElement = (props) => {

    function handleClick() {
        props.handler(props.index)
    }

    const marginTop = props.online? "0.9rem": "2.1rem";

    return(<li
        className={props.index === props.activeIndex ? 'selected-dialogue-list-item' :'dialogue-list-item'}
        onClick={handleClick}
    >
        <div style={{display:"flex", flexWrap:"nowrap"}}>
            <Avatar
                size={46}
                className={"dialogue-list-item-avatar"}
                src={props.src}
            />
            <div style={{width: "20.5rem", marginRight: "1.4rem"}}>
                {props.online && <div
                    style={{
                        backgroundColor: '#00C245',
                        height: 12,
                        width: 12,
                        borderRadius: '50%',
                        position: 'relative',
                        left: "-5.9rem",
                        top: "1.8rem",
                        border: '1px solid white'
                    }}
                />}
                <div style={{display:"flex", flexWrap:"nowrap", justifyContent: "space-between", marginTop: marginTop}}>
                    <h5>{props.name}</h5> <div className={"last-message-time"}>{props.lastMessageTime}</div>
                </div>
                <div style={{display:"flex", flexWrap:"nowrap", justifyContent: "space-between", margin: "0.3rem 0 1.9rem 0"}}>
                    <p className={props.numMessages!==0? "unread-message": ""}>{props.lastMessage}</p>
                    {props.numMessages!==0 && <span className={props.gigs? "gigs-number-messages":"number-messages"}>{props.numMessages}</span>}
                </div>

            </div>
        </div>
        <Divider/>
    </li>
    )
};

DialogueListElement.propTypes={
    handler: PropTypes.func,
    index: PropTypes.string || PropTypes.number,
    activeIndex: PropTypes.string || PropTypes.number,
    src: PropTypes.string,
    online: PropTypes.bool,
    name: PropTypes.string,
    numMessages: PropTypes.number,
    gigs: PropTypes.bool,
    lastMessage: PropTypes.string,
    lastMessageTime: PropTypes.string,
};

export default DialogueListElement;