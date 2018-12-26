import * as React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import SvgIcon from 'material-ui/SvgIcon';
import EditIcon from 'material-ui/svg-icons/content/create';

class GigElement extends React.Component{

    state = {
        selectValue: null,
    };

    handleChangeSelect = (event, index, value) => this.setState({selectValue: value});

    render(){
        return(<div className={'gig-container'}>
            <div className={'gig-date'}>
                {this.props.date}
            </div>
            <div className={'payment-method'}>
                <img src={'/static/img/'+this.props.method + '.png'}
                style={this.props.method === 'bitcoin'?{height: '2rem', width: '2rem'}: {height: '3rem', width: '3rem'}}/>

            </div>
            <div className={'payment-address'}>
                <h5>{this.props.address}</h5>
            </div>
            <div className={'completed-gig'}>
                <SelectField
                    value={this.state.selectValue}
                    onChange={this.handleChangeSelect}
                    fullWidth={true}
                    style={{position: 'relative', bottom: '1.6rem'}}
                >
                    <MenuItem value={0} primaryText={'TV Commercial'}/>
                    <MenuItem value={1} primaryText={'Underwear catalog'}/>
                    <MenuItem value={2} primaryText={'Fashion show'}/>
                </SelectField>
            </div>
            <div className={'receive-payment ' + this.props.status}>
                {this.props.status === "active"? "Send to the booker": "Sent" }
            </div>
            <div className={'edit'}>
                <EditIcon
                    style={{
                        height: "1.6rem",
                        cursor: 'pointer',
                        color: "#e4e4e4",
                        position: "relative",
                        top: "-0.3rem"
                    }}
                />
                <SvgIcon xmlns="http://www.w3.org/2000/svg" style={{width: "2.4rem", height: "2.4rem", cursor: 'pointer'}} viewBox="0 0 24 24">
                    <path fill="#e4e4e4" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </SvgIcon>
            </div>
        </div>)
        }
}

export default GigElement;
