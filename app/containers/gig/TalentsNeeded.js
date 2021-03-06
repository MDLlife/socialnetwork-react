import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import Delete from 'material-ui/svg-icons/action/highlight-off';
import TalentBoard from './TalentBoard';

class TalentsNeeded extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'Actor': false,
            'Model': false,
            'Dancer': false,
            'Singer': false,
            'Musician': false,
            'Animator & Entertainer': false,
            'DJ': false,
            'Host & MC': false,
            'Other': false,
            'menuItem': 1,
        }
    }

    selectedBlock = e => {
        this.setState({
            [e.target.getAttribute('name')]: !this.state[e.target.getAttribute('name')]
        }, () => console.log(this.state))
    };

    deleteOtherTalents = e => {
        this.setState({
            [e.target.getAttribute('name')]: !this.state[e.target.getAttribute('name')],
            selectedBoard: null
        }, () => console.log(this.state))
    };

    selectTalent = (event) => {
        let x = Array.from(document.getElementsByClassName('selecting-talents'));
        for (let i = 0; i < x.length; i = i + 1) {
            if (x[i].getAttribute('name') !== event.target.textContent) {
                x[i].classList.remove('selected-talents')
            } else {
                x[i].classList.add('selected-talents')
            }
        }

        this.setState({
            selectedBoard: document.getElementsByClassName('selected-talents')[0].getAttribute('name')
        })
    };

    switchBoard = (role) => {
        switch(role) {
            case "Actor":
                return <TalentBoard role={role}/>;
            case "Model":
                return <TalentBoard role={role}/>;
            case "Dancer":
                return <TalentBoard role={role}/>;
            case "Singer":
                return <TalentBoard role={role}/>;
            case "Musician":
                return <TalentBoard role={role}/>;
            case "Animator & Entertainer":
                return <TalentBoard role={role}/>;
            case "DJ":
                return <TalentBoard role={role}/>;
            case "Host & MC":
                return <TalentBoard role={role}/>;
            case "Other":
                return <TalentBoard role={role}/>;
            default:
                return <div>Error</div>
        }
    };

    render() {
        return [
                <Row style={{marginBottom: 40}}>
                    <Col xs={12}>
                        {
                            this.state['Actor'] &&
                            this.state['Model'] &&
                            this.state['Dancer'] &&
                            this.state['Singer'] &&
                            this.state['Musician'] &&
                            this.state['Animator & Entertainer'] &&
                            this.state['DJ'] &&
                            this.state['Host & MC'] &&
                            this.state['Other'] ? null : <h2>Select talents for gig</h2>
                        }

                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                margin: 'auto',
                                justifyContent: 'center'
                            }}
                        >
                            {
                                !this.state['Actor'] ?
                                    <TalentsCards
                                        classes='gig-talents'
                                        name='Actor'
                                        onSelect={this.selectedBlock}
                                    /> : null
                            }
                            {
                                !this.state['Model'] ?
                                    <TalentsCards
                                        classes='gig-talents'
                                        name='Model'
                                        onSelect={this.selectedBlock}
                                    /> : null
                            }
                            {
                                !this.state['Dancer'] ?
                                    <TalentsCards
                                        classes='gig-talents'
                                        name='Dancer'
                                        onSelect={this.selectedBlock}
                                        style={{paddingLeft: 8}}
                                    /> : null
                            }
                            {
                                !this.state['Singer'] ?
                                    <TalentsCards
                                        classes='gig-talents'
                                        name='Singer'
                                        onSelect={this.selectedBlock}
                                    /> : null
                            }
                            {
                                !this.state['Musician'] ?
                                    <TalentsCards
                                        classes='gig-talents'
                                        name='Musician'
                                        onSelect={this.selectedBlock}
                                    /> : null
                            }
                            {
                                !this.state['Animator & Entertainer'] ?
                                    <TalentsCards
                                        classes='gig-talents'
                                        name='Animator & Entertainer'
                                        onSelect={this.selectedBlock}
                                        style={{paddingLeft: 8}}
                                    /> : null
                            }
                            {
                                !this.state['DJ'] ?
                                    <TalentsCards
                                        classes='gig-talents'
                                        name='DJ'
                                        onSelect={this.selectedBlock}
                                    /> : null
                            }
                            {
                                !this.state['Host & MC'] ?
                                    <TalentsCards
                                        classes='gig-talents'
                                        name='Host & MC'
                                        onSelect={this.selectedBlock}
                                    /> : null
                            }
                            {
                                !this.state['Other'] ?
                                    <TalentsCards
                                        classes='gig-talents'
                                        name='Other'
                                        onSelect={this.selectedBlock}
                                    /> : null
                            }
                        </div>
                    </Col>
                </Row>,
                <Row
                    className={`${
                        this.state['Actor'] ||
                        this.state['Model'] ||
                        this.state['Dancer'] ||
                        this.state['Singer'] ||
                        this.state['Musician'] ||
                        this.state['Animator & Entertainer'] ||
                        this.state['DJ'] ||
                        this.state['Host & MC'] ||
                        this.state['Other']
                            ? 'selected-talents-cards'
                            : ''}
                    `}
                >
                    <Col xs={12}>
                        {
                            this.state['Actor'] ||
                            this.state['Model'] ||
                            this.state['Dancer'] ||
                            this.state['Singer'] ||
                            this.state['Musician'] ||
                            this.state['Animator & Entertainer'] ||
                            this.state['DJ'] ||
                            this.state['Host & MC'] ||
                            this.state['Other'] ? <h2>Talents selected</h2> : null
                        }
                        <div
                            style={{
                                display: 'flex',
                                marginTop: 20,
                                flexWrap: 'wrap',
                                margin: 'auto',
                                justifyContent: 'center'
                            }}
                        >
                            {
                                this.state['Model'] ?
                                    <TalentsCards
                                        name='Model'
                                        classes='selecting-talents gig-talents'
                                        onDelete={this.deleteOtherTalents}
                                        onSelect={this.selectTalent}
                                    /> : null
                            }
                            {
                                this.state['Actor'] ?
                                    <TalentsCards
                                        name='Actor'
                                        classes='selecting-talents gig-talents'
                                        onDelete={this.deleteOtherTalents}
                                        onSelect={this.selectTalent}
                                    /> : null
                            }
                            {
                                this.state['Dancer'] ?
                                    <TalentsCards
                                        name='Dancer'
                                        classes='selecting-talents gig-talents'
                                        onDelete={this.deleteOtherTalents}
                                        onSelect={this.selectTalent}
                                    /> : null
                            }
                            {
                                this.state['Singer'] ?
                                    <TalentsCards
                                        name='Singer'
                                        classes='selecting-talents gig-talents'
                                        onDelete={this.deleteOtherTalents}
                                        onSelect={this.selectTalent}
                                    /> : null
                            }
                            {
                                this.state['Musician'] ?
                                    <TalentsCards
                                        name='Musician'
                                        classes='selecting-talents gig-talents'
                                        onDelete={this.deleteOtherTalents}
                                        onSelect={this.selectTalent}
                                    /> : null
                            }
                            {
                                this.state['Animator & Entertainer'] ?
                                    <TalentsCards
                                        name='Animator & Entertainer'
                                        classes='selecting-talents gig-talents'
                                        onDelete={this.deleteOtherTalents}
                                        onSelect={this.selectTalent}
                                        style={{paddingLeft: 8}}
                                    /> : null
                            }
                            {
                                this.state['DJ'] ?
                                    <TalentsCards
                                        name='DJ'
                                        classes='selecting-talents gig-talents'
                                        onDelete={this.deleteOtherTalents}
                                        onSelect={this.selectTalent}
                                    /> : null
                            }
                            {
                                this.state['Host & MC'] ?
                                    <TalentsCards
                                        name='Host & MC'
                                        classes='selecting-talents gig-talents'
                                        onDelete={this.deleteOtherTalents}
                                        onSelect={this.selectTalent}
                                    /> : null
                            }
                            {
                                this.state['Other'] ?
                                    <TalentsCards
                                        name='Other'
                                        classes='selecting-talents gig-talents'
                                        onDelete={this.deleteOtherTalents}
                                        onSelect={this.selectTalent}
                                    /> : null
                            }
                        </div>
                    </Col>
                </Row>,
                this.state.selectedBoard &&
                <Row>
                    {/*<Col xs={3}>*/}
                        {/*<ul*/}
                            {/*className='menu-today'*/}
                            {/*style={{*/}
                                {/*listStyle: 'none',*/}
                                {/*padding: 0*/}
                            {/*}}*/}
                        {/*>*/}
                            {/*<li*/}
                                {/*className={`list-item ${this.state.menuItem === 1 ? 'selected-item' : null}`}*/}
                                {/*style={{margin: 0}}*/}
                                {/*onClick={this.selectingMenu}*/}
                                {/*value='1'*/}
                            {/*>*/}
                                {/*Personal*/}
                            {/*</li>*/}
                            {/*<li*/}
                                {/*className={`list-item ${this.state.menuItem === 2 ? 'selected-item' : null}`}*/}
                                {/*style={{margin: 0}}*/}
                                {/*onClick={this.selectingMenu}*/}
                                {/*value='2'*/}
                            {/*>*/}
                                {/*Budget*/}
                            {/*</li>*/}
                        {/*</ul>*/}
                    {/*</Col>*/}
                    <Col xs={12}>
                        {
                            this.switchBoard(this.state.selectedBoard)
                        }
                    </Col>
                </Row>
        ]
    }
}

const TalentsCards = props => {
    return (
        <div
            className={props.classes}
            style={props.style}
            onClick={props.onSelect}
            name={props.name}
        >
            <span
                name={props.name}
                style={{
                    display: 'flex',
                    position: 'absolute',
                    right: 0,
                    top: 0
                }}
                onClick={props.onDelete}
            >
            {
                props.onDelete
                    ? <Delete
                        color={'#cccccc'}
                        onClick={props.onDelete}
                        name={props.name}
                    />
                    : null
            }

            </span>
            {props.name}
        </div>
    )
};

export default connect()(TalentsNeeded);