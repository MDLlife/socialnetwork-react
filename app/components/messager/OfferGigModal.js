import * as React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import SvgIcon from 'material-ui/SvgIcon';
import Divider from 'material-ui/Divider';

class OfferGigModal extends React.Component{
    state={
        gig: null,
        talent: null,
    };

    constructor(props){
        super(props);
        this.handleChangeTalent = this.handleChangeTalent.bind(this);
        this.handleChangeGig = this.handleChangeGig.bind(this);
    }

    handleChangeTalent = (e, index, value) => this.setState({talent: value});

    handleChangeGig = (e, index, value) => this.setState({gig: value});

    render() {
        return (
            <div className={"offer-gig-modal-container"}>
                <div className={"offer-gig-modal-header"}>
                    <Avatar
                        size={46}
                        style={{margin: "0",
                            border: "0.1rem solid #eb3386"}}
                    />
                    <div style={{marginLeft: "1.3rem"}}>
                        <h5>Model Name</h5>
                        <div>
                            <SvgIcon style={{width: "1.8rem", height: "1.8rem"}} viewBox="0 0 18 18">
                                <path fill="none" d="M0 0h18v18H0V0z"/>
                                <path fill={"#61116a"} d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"/>
                            </SvgIcon>
                            <SvgIcon style={{width: "1.8rem", height: "1.8rem"}} viewBox="0 0 18 18">
                                <path fill="none" d="M0 0h18v18H0V0z"/>
                                <path fill={"#61116a"} d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"/>
                            </SvgIcon>
                            <SvgIcon style={{width: "1.8rem", height: "1.8rem"}} viewBox="0 0 18 18">
                                <path fill="none" d="M0 0h18v18H0V0z"/>
                                <path fill={"#61116a"} d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"/>
                            </SvgIcon>
                            <SvgIcon style={{width: "1.8rem", height: "1.8rem"}} viewBox="0 0 18 18">
                                <path fill="none" d="M0 0h18v18H0V0z"/>
                                <path fill={"#61116a"} d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"/>
                            </SvgIcon>
                            <SvgIcon style={{width: "1.8rem", height: "1.8rem"}} viewBox="0 0 18 18">
                                <path fill="none" d="M0 0h18v18H0V0z"/>
                                <path fill={"#61116a"} d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"/>
                            </SvgIcon>
                            <p>5.0/1500 gigs</p>
                        </div>
                    </div>
                    <SvgIcon style={{width: "1.8rem", height: "1.8rem", position: "relative", top: "1.2rem", left: "4.6rem", cursor: "pointer"}} viewBox={"0 0 24 24"} onClick={this.props.handler}>
                        <path fill="none" d="M0 0h24v24H0V0z"/>
                        <path fill="#808080" d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
                    </SvgIcon>
                </div>
                <Divider/>
                <div className={"offer-gig-modal-item"}>
                    <h4>Gig</h4>
                    <SelectField
                        onChange={this.handleChangeGig}
                        value={this.state.gig}
                        fullWidth={true}
                    >
                        <MenuItem value={1} primaryText={"TV Commercial"}/>
                        <MenuItem value={2} primaryText={"Fashion show"}/>
                        <MenuItem value={3} primaryText={"Underwear catalog"}/>
                        <MenuItem value={4} primaryText={"Underwear catalog"}/>
                    </SelectField>
                    <h4>Talent</h4>
                    <SelectField
                        onChange={this.handleChangeTalent}
                        value={this.state.talent}
                        fullWidth={true}
                    >
                        <MenuItem value={1} primaryText={"Model,Female, Mature, Mid Eastern"}/>
                        <MenuItem value={2} primaryText={"Model,Male, Senior, Eurasian"}/>
                        <MenuItem value={3} primaryText={"Model,Female, Kid, Mid Eastern"}/>
                        <MenuItem value={4} primaryText={"Actor,Female, Kid, Mid Eastern"}/>
                    </SelectField>
                </div>
                <div style={{width: "100%", display: "flex"}}>
                    <span onClick={this.props.handler}>Send</span>
                </div>
            </div>)
    }
}

export default OfferGigModal;