import * as React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import SvgIcon from 'material-ui/SvgIcon';

class OfferGigModal extends React.Component{
    state={
        gig: null,
        talent: null,
    };

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => this.setState({value: e.target.value});

    render() {
        return (
            <div className={"offer-gig-modal-container"}>
                <div className={"offer-gig-modal-header"}>
                    <Avatar
                        size={46}
                        style={{margin: "1.8rem 1.4rem 1.7rem 1.8rem",
                            border: "0.1rem solid #eb3386"}}
                    />
                    <h5>Model Name</h5>
                    <SvgIcon viewBox="0 0 18 18">
                        <path fill="none" d="M0 0h18v18H0V0z"/>
                        <path fill={"#61116a"} d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"/>
                    </SvgIcon>
                    <SvgIcon viewBox="0 0 18 18">
                        <path fill="none" d="M0 0h18v18H0V0z"/>
                        <path fill={"#61116a"} d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"/>
                    </SvgIcon>
                    <SvgIcon viewBox="0 0 18 18">
                        <path fill="none" d="M0 0h18v18H0V0z"/>
                        <path fill={"#61116a"} d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"/>
                    </SvgIcon>
                    <SvgIcon viewBox="0 0 18 18">
                        <path fill="none" d="M0 0h18v18H0V0z"/>
                        <path fill={"#61116a"} d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"/>
                    </SvgIcon>
                    <SvgIcon viewBox="0 0 18 18">
                        <path fill="none" d="M0 0h18v18H0V0z"/>
                        <path fill={"#61116a"} d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"/>
                    </SvgIcon>
                    <p>5.0/1500 gigs</p>
                </div>
                <div className={"offer-gig-modal-item"}>
                    <h4>Gig</h4>
                    <SelectField
                        onChange={this.handleChange}
                        value={this.state.gig}
                    >
                        <MenuItem value={1} primaryText={"TV Commercial"}/>
                        <MenuItem value={2} primaryText={"Fashion show"}/>
                        <MenuItem value={3} primaryText={"Underwear catalog"}/>
                        <MenuItem value={4} primaryText={"Underwear catalog"}/>
                    </SelectField>
                    <h4>Talent</h4>
                    <SelectField
                        onChange={this.handleChange}
                        value={this.state.talent}
                    >
                        <MenuItem value={1} primaryText={"Female, Mature, Mid Eastern"}/>
                        <MenuItem value={2} primaryText={"Male, Senior, Eurasian"}/>
                        <MenuItem value={3} primaryText={"Female, Kid, Mid Eastern"}/>
                        <MenuItem value={4} primaryText={"Female, Kid, Mid Eastern"}/>
                    </SelectField>
                </div>
                <span onClick={this.props.handler}>Send</span>
            </div>)
    }
}

export default OfferGigModal;