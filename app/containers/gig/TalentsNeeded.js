import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col, Grid} from 'react-bootstrap';
import Chip from 'material-ui/Chip';
import LoginStore from 'store/LoginStore';
import Delete from 'material-ui/svg-icons/action/highlight-off';

import {
    SELECT_WORK_AREAS_ACTOR,
    SELECT_WORK_AREAS_DANCER,
    SELECT_WORK_AREAS_MODEL,
    UNSELECT_WORK_AREAS_ACTOR,
    UNSELECT_WORK_AREAS_DANCER,
    UNSELECT_WORK_AREAS_MODEL,
    FETCH_BOOKER_DATA
} from "../../actions/onboardingBooker";

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
        }
    }

    renderChipActorWorkAreas = data => {
        return (
            <Chip
                className={`hover-chip`}
                key={data.key}
                style={{width: 'auto', marginLeft: 10, marginTop: 10, fontFamily: 'inherit'}}
                onClick={this.selectedChipActorWorkAreas}
            >
                {data.label}
                {/*{*/}
                {/*data.key % 2 !== 0 ? <img src="/static/img/fire.svg" alt="" style={{width: 16}}/> : null*/}
                {/*}*/}
            </Chip>
        )
    };

    selectedChipActorWorkAreas = e => {
        let elem = e.target.parentNode;
        if (elem.classList.contains('selected')) {
            elem.classList.remove('selected');
            elem.classList.add('hover-chip');
            this.props.UNSELECT_WORK_AREAS_ACTOR(e.target.innerHTML)
        } else {
            elem.classList.remove('hover-chip');
            elem.classList.add('selected');
            this.props.SELECT_WORK_AREAS_ACTOR(e.target.innerHTML)
        }
    };

    renderChipModelWorkAreas = data => {
        return (
            <Chip
                className={`hover-chip`}
                key={data.key}
                style={{width: 'auto', marginLeft: 10, marginTop: 10, fontFamily: 'inherit'}}
                onClick={this.selectedChipModelWorkAreas}
            >
                {data.label}
                {/*{*/}
                {/*data.key % 2 !== 0 ? <img src="/static/img/fire.svg" alt="" style={{width: 16}}/> : null*/}
                {/*}*/}
            </Chip>
        )
    };

    selectedChipModelWorkAreas = e => {
        let elem = e.target.parentNode;
        if (elem.classList.contains('selected')) {
            elem.classList.remove('selected');
            elem.classList.add('hover-chip');
            this.props.UNSELECT_WORK_AREAS_MODEL(e.target.innerHTML)

        } else {
            elem.classList.remove('hover-chip');
            elem.classList.add('selected');
            this.props.SELECT_WORK_AREAS_MODEL(e.target.innerHTML)
        }
    };

    renderChipDancerWorkAreas = data => {
        return (
            <Chip
                className={`hover-chip`}
                key={data.key}
                style={{width: 'auto', marginLeft: 10, marginTop: 10, fontFamily: 'inherit'}}
                onClick={this.selectedChipDancerWorkAreas}
            >
                {data.label}
                {/*{*/}
                {/*data.key % 2 !== 0 ? <img src="/static/img/fire.svg" alt="" style={{width: 16}}/> : null*/}
                {/*}*/}
            </Chip>
        )
    };

    selectedChipDancerWorkAreas = e => {
        let elem = e.target.parentNode;
        if (elem.classList.contains('selected')) {
            elem.classList.remove('selected');
            elem.classList.add('hover-chip');
            this.props.UNSELECT_WORK_AREAS_DANCER(e.target.innerHTML)
        } else {
            elem.classList.remove('hover-chip');
            elem.classList.add('selected');
            this.props.SELECT_WORK_AREAS_DANCER(e.target.innerHTML)
        }
    };

    selectedBlock = e => {
        this.setState({
            [e.target.getAttribute('name')]: !this.state[e.target.getAttribute('name')]
        }, () => console.log(this.state))
    };

    saveBooker = () => {
        console.log(this.props.booker);
        let selectTalentsWorkAreas = [];

        if(this.state.actorSelect) {
            selectTalentsWorkAreas
                .push({
                    role: 'actor',
                    work_areas: this.props.booker.actorAreas
                })
        }

        if(this.state.modelSelect) {
            selectTalentsWorkAreas.push({
                role: 'model',
                work_areas: this.props.booker.modelAreas
            })
        }

        if(this.state.dancerSelect) {
            selectTalentsWorkAreas.push({
                role: 'dancer',
                work_areas: this.props.booker.dancerAreas
            })
        }

        this.props.FETCH_BOOKER_DATA({
            _key: LoginStore.user._key,
            profiles: ['booker'],
            booker_work_areas: selectTalentsWorkAreas,
            registration_booker_complete: true
        });

        //TODO: this should be conditional trigger based on dispatch success action
        if (typeof window !== 'undefined') {
            //TODO: later redirect to preview when preview is completed
            // window.location.href = '/onboarding/profile-preview?profile=booker'

            window.location.href = '/today'
        }
    };

    deleteOtherTalents = e => {
        this.setState({
            [e.target.getAttribute('name')]: !this.state[e.target.getAttribute('name')]
        }, () => console.log(this.state))
    };

    render() {
        return [
                <Row style={{marginBottom: 40}}>
                    <Col xs={12}>
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
                                        name='Actor'
                                        onSelect={this.selectedBlock}
                                    /> : null
                            }
                            {
                                !this.state['Model'] ?
                                    <TalentsCards
                                        name='Model'
                                        onSelect={this.selectedBlock}
                                    /> : null
                            }
                            {
                                !this.state['Dancer'] ?
                                    <TalentsCards
                                        name='Dancer'
                                        onSelect={this.selectedBlock}
                                        style={{paddingLeft: 8}}
                                    /> : null
                            }
                            {
                                !this.state['Singer'] ?
                                    <TalentsCards
                                        name='Singer'
                                        onSelect={this.selectedBlock}
                                    /> : null
                            }
                            {
                                !this.state['Musician'] ?
                                    <TalentsCards
                                        name='Musician'
                                        onSelect={this.selectedBlock}
                                    /> : null
                            }
                            {
                                !this.state['Animator & Entertainer'] ?
                                    <TalentsCards
                                        name='Animator & Entertainer'
                                        onSelect={this.selectedBlock}
                                        style={{paddingLeft: 8}}
                                    /> : null
                            }
                            {
                                !this.state['DJ'] ?
                                    <TalentsCards
                                        name='DJ'
                                        onSelect={this.selectedBlock}
                                    /> : null
                            }
                            {
                                !this.state['Host & MC'] ?
                                    <TalentsCards
                                        name='Host & MC'
                                        onSelect={this.selectedBlock}
                                    /> : null
                            }
                            {
                                !this.state['Other'] ?
                                    <TalentsCards
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
                                        onDelete={this.deleteOtherTalents}
                                    /> : null
                            }
                            {
                                this.state['Actor'] ?
                                    <TalentsCards
                                        name='Actor'
                                        onDelete={this.deleteOtherTalents}
                                    /> : null
                            }
                            {
                                this.state['Dancer'] ?
                                    <TalentsCards
                                        name='Dancer'
                                        onDelete={this.deleteOtherTalents}
                                    /> : null
                            }
                            {
                                this.state['Singer'] ?
                                    <TalentsCards
                                        name='Singer'
                                        onDelete={this.deleteOtherTalents}
                                    /> : null
                            }
                            {
                                this.state['Musician'] ?
                                    <TalentsCards
                                        name='Musician'
                                        onDelete={this.deleteOtherTalents}
                                    /> : null
                            }
                            {
                                this.state['Animator & Entertainer'] ?
                                    <TalentsCards
                                        name='Animator & Entertainer'
                                        onDelete={this.deleteOtherTalents}
                                        style={{paddingLeft: 8}}
                                    /> : null
                            }
                            {
                                this.state['DJ'] ?
                                    <TalentsCards
                                        name='DJ'
                                        onDelete={this.deleteOtherTalents}
                                    /> : null
                            }
                            {
                                this.state['Host & MC'] ?
                                    <TalentsCards
                                        name='Host & MC'
                                        onDelete={this.deleteOtherTalents}
                                    /> : null
                            }
                            {
                                this.state['Other'] ?
                                    <TalentsCards
                                        name='Other'
                                        onDelete={this.deleteOtherTalents}
                                    /> : null
                            }
                        </div>
                    </Col>
                </Row>
        ]
    }
}

const TalentsCards = props => {
    return (
        <div
            className='gig-talents'
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