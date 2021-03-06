import * as React from 'react';
import {connect} from 'react-redux';
import {Tab, Tabs} from 'material-ui/Tabs';
import {Col} from 'react-bootstrap';
import Divider from 'material-ui/Divider';
import SearchDialogField from 'components/messager/SearchDialogField';
import DialogueList from "../../../components/messager/DialogueList";
import DialogueHeader from "components/messager/DialogueHeader";
import ChatField from 'components/messager/ChatField';
import ChatInputField from 'components/messager/ChatInputField';
import OfferGigModal from 'components/messager/OfferGigModal';
import Dialog from 'material-ui/Dialog';

const TabStyle = {
    textTransform: "none",
    backgroundColor: "#f4f4f4",
    color: "rgba(128, 128, 128, 0.8)",
    fontFamily: "Gilroy Medium",
    fontSize: "1.4rem",
    lineHeight: "1.8rem",
    height: "6.3rem"
};

const ActiveTabStyle = {
    textTransform: "none",
    backgroundColor: "#f4f4f4",
    color: "#000",
    fontFamily: "Gilroy ExtraBold",
    fontSize: "1.4rem",
    lineHeight: "1.8rem",
    height: "6.3rem"
};

class Messager extends React.Component {

    state = {
        tabIndex: 0,
        activeDialogueIndex: 0,
        talentsList: [
            {
                name: "Model1",
                index: 0,
                src: "",
                lastMessage: "I just came to say Hello",
                lastMessageTime: "just now",
                gigs: false,
                numMessages: 3,
                online: true
            },
            {
                name: "Model2",
                index: 1,
                src: "",
                lastMessage: "I just came to say Hello",
                lastMessageTime: "just now",
                gigs: false,
                numMessages: 0,
                online: false
            },
            {
                name: "Model3",
                index: 2,
                src: "",
                lastMessage: "I just came to say Hello",
                lastMessageTime: "just now",
                gigs: false,
                numMessages: 3,
                online: true
            },
            {
                name: "Model4",
                index: 3,
                src: "",
                lastMessage: "I just came to say Hello",
                lastMessageTime: "just now",
                gigs: false,
                numMessages: 11,
                online: false
            },
            {
                name: "Model5",
                index: 4,
                src: "",
                lastMessage: "I just came to say HelloHiHiHIHIHIHIHIHIHIHIHIH",
                lastMessageTime: "yesterday",
                gigs: true,
                numMessages: 3,
                online: true
            },
            {
                name: "Model6",
                index: 5,
                src: "",
                lastMessage: "I just came to say Hello",
                lastMessageTime: "just now",
                gigs: false,
                numMessages: 0,
                online: false
            },
            {
                name: "Model7",
                index: 6,
                src: "",
                lastMessage: "I just came to say Hello",
                lastMessageTime: "09:07",
                gigs: false,
                numMessages: 111,
                online: true
            },
            {
                name: "Model8",
                index: 7,
                src: "",
                lastMessage: "I just came to say Hello",
                lastMessageTime: "just now",
                gigs: false,
                numMessages: 3,
                online: true
            },
        ],
        allUsersList: [
            {
                name: "User1",
                index: 8,
                src: "",
                lastMessage: "I just came to say Hello",
                lastMessageTime: "just now",
                gigs: false,
                numMessages: 3,
                online: true
            },
            {
                name: "User2",
                index: 9,
                src: "",
                lastMessage: "I just came to say Hello",
                lastMessageTime: "just now",
                gigs: false,
                numMessages: 3,
                online: false
            },
            {
                name: "User3",
                index: 10,
                src: "",
                lastMessage: "I just came to say Hello",
                lastMessageTime: "just now",
                gigs: false,
                numMessages: 0,
                online: true
            },
            {
                name: "User4",
                index: 11,
                src: "",
                lastMessage: "I just came to say Hello",
                lastMessageTime: "just now",
                gigs: false,
                numMessages: 3,
                online: false
            },
            {
                name: "User5",
                index: 12,
                src: "",
                lastMessage: "I just came to say Hello",
                lastMessageTime: "18:52",
                gigs: false,
                numMessages: 3,
                online: true
            },
            {
                name: "User6",
                index: 13,
                src: "",
                lastMessage: "I just came to say Hello",
                lastMessageTime: "just now",
                gigs: false,
                numMessages: 30,
                online: false
            },
            {
                name: "User7",
                index: 14,
                src: "",
                lastMessage: "I just came to say Hello",
                lastMessageTime: "just now",
                gigs: false,
                numMessages: 3,
                online: true
            },
            {
                name: "User8",
                index: 15,
                src: "",
                lastMessage: "I just came to say Hello",
                lastMessageTime: "just now",
                gigs: false,
                numMessages: 3,
                online: true
            },
        ],
        openDialog: false,
    };

    constructor(props) {
        super(props);

        this.handleTabClick = this.handleTabClick.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleDialogueClick = this.handleDialogueClick.bind(this);
        this.handleDialog = this.handleDialog.bind(this);
    }

    handleTabClick(e) {
        this.setState({tabIndex: e});
    }

    handleSearchChange(e) {

    }

    handleDialogueClick(e) {
        this.setState({activeDialogueIndex: e})
    }

    handleDialog() {
        this.setState({openDialog: !this.state.openDialog});
    }

    render() {
        const time = (new Date()).toISOString();
        const lessTime = (new Date()).setDate((new Date(time)).getDate() - 1);
        return (
            <Col>
                <hr style={{margin: '-1px 0px 0px', height: '10px', border: 'none'}}/>
                <div className={'messager-container'}>
                    <div>
                        <Tabs
                            onChange={this.handleTabClick}
                            value={this.state.tabIndex}
                            inkBarStyle={{
                                backgroundColor: "#eb3386",
                                height: "0.3rem",
                            }}
                        >
                            <Tab
                                label="Talents"
                                value={0}
                                style={this.state.tabIndex === 0 ? ActiveTabStyle : TabStyle}>

                                <Divider/>
                                <SearchDialogField handler={this.handleSearchChange}/>
                                <Divider/>
                                <DialogueList activeIndex={this.state.activeDialogueIndex}
                                              handler={this.handleDialogueClick}
                                              dialogues={this.state.talentsList}
                                />

                            </Tab>
                            <Tab
                                label="All users"
                                value={1}
                                style={this.state.tabIndex === 1 ? ActiveTabStyle : TabStyle}>

                                <Divider/>
                                <SearchDialogField handler={this.handleSearchChange}/>
                                <Divider/>
                                <DialogueList handler={this.handleDialogueClick}
                                              dialogues={this.state.allUsersList}
                                              activeIndex={this.state.activeDialogueIndex}
                                />

                            </Tab>
                        </Tabs>
                    </div>
                    <div style={{width: "100%", borderLeft: "0.1rem solid #e4e4e4"}}>
                        <DialogueHeader
                            name={"Model Name"}
                            onlineStatus={"Last seen 20 minutes ago"}
                            roles={["Dancer", "Actor", "Model"]}
                        />
                        <ChatField messages={[
                            {owner: "me", text: "Lorem ipsum dolor sit amet", time: lessTime, type: "message"},
                            {
                                owner: "notMe", text: "Lorem ipsum dolor sit amet, consectetur adipis " +
                            "sed do eiusmod tempor incididunt ut labore " +
                            "magna aliqua. ", name: "Model Name", time: time, type: "message"
                            },
                            {
                                owner: "notMe",
                                type: "gig",
                                gigName: "TV Commercial",
                                date: time,
                                talent: "Model",
                                pay: "125$",
                                tags: ["Male", "Senior", "Eurasian"],
                                place: "Longnan, China"
                            }
                        ]}/>
                        <ChatInputField handler={this.handleDialog}/>
                        <Dialog
                            open={this.state.openDialog}
                            handler={this.handleDialog}
                            modal={false}
                            paperClassName={"offer-gig-modal-paper"}
                            bodyStyle={{padding: 0}}
                        >
                            <OfferGigModal
                                handler={this.handleDialog}
                            />
                        </Dialog>
                    </div>
                </div>
            </Col>
        )
    }
}

export default connect()(Messager)