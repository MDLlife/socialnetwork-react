import * as React from 'react';
import DialogueListElement from './DialogueListElement';
import PropTypes from 'prop-types';

const DialogueList = (props) => {
    return(
        <ul className={"dialogue-list"}>
            {props.dialogues.map((item)=>(
                <DialogueListElement
                    key= {item.index}
                    name = {item.name}
                    index = {item.index}
                    activeIndex= {props.activeIndex}
                    handler={props.handler}
                    src = {item.src}
                    lastMessage={item.lastMessage}
                    lastMessageTime={item.lastMessageTime}
                    numMessages={item.numMessages}
                    gigs={item.gigs}
                    online={item.online}
                />
            ))}
        </ul>
    )
};

DialogueList.propTypes = {
    dialogues: PropTypes.array,
    handler: PropTypes.func,
    activeIndex: PropTypes.number || PropTypes.string
};

export default DialogueList;