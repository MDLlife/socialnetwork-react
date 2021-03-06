import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Grid, Row} from 'react-bootstrap';
import Chip from 'material-ui/Chip';
import LoginStore from 'store/LoginStore';
import Delete from 'material-ui/svg-icons/action/highlight-off';
import SnackBar from 'material-ui/Snackbar';

import {
    ERROR_UPDATE_BOOKER_DATA,
    FETCH_UPDATE_BOOKER_DATA,
    SELECT_WORK_AREAS_ACTOR,
    SELECT_WORK_AREAS_DANCER,
    SELECT_WORK_AREAS_MODEL,
    SUCCESS_UPDATE_BOOKER_DATA,
    UNSELECT_WORK_AREAS_ACTOR,
    UNSELECT_WORK_AREAS_DANCER,
    UNSELECT_WORK_AREAS_MODEL,
} from "../../actions/onboardingBooker";


class OnboardingBooker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            check: false,
            'actorSelect': false,
            'modelSelect': false,
            'dancerSelect': false,
            'Singer': false,
            'Musician': false,
            'Animator & Entertainer': false,
            'DJ': false,
            'Host & MC': false,
            'Other': false,
            'actorAreas': [
                {key: 0, label: 'Extras'},
                {key: 1, label: 'Stunt'},
                {key: 2, label: 'Stage'},
                {key: 3, label: 'Drama'},
                {key: 4, label: 'Voice over'},
                {key: 5, label: 'Puppet show'},
                {key: 6, label: 'Stand up'},
            ],
            'modelAreas': [
                {key: 0, label: 'Fashion show'},
                {key: 1, label: 'Fitting'},
                {key: 2, label: 'Hostess'},
                {key: 3, label: 'TVC'},
                {key: 4, label: 'Movie'},
                {key: 5, label: 'Ordinal catalog'},
                {key: 6, label: 'Underwear Catalog'},
                {key: 7, label: 'Exhibition'},
                {key: 8, label: 'Promo event'},
                {key: 9, label: 'Makeup show'},
                {key: 10, label: 'Hairdress show'},
                {key: 11, label: 'Body art'}
            ],
            'dancerAreas': {
                video: [
                    {key: 0, label: 'TV commercial'},
                    {key: 1, label: 'Movie'},
                    {key: 2, label: 'TV series'},
                    {key: 3, label: 'Promo video'},
                    {key: 4, label: 'TV show'}
                ],
                photo: [
                    {key: 5, label: 'Commercial'},
                    {key: 6, label: 'Editorial'},
                ],
                live: [
                    {key: 7, label: 'Night Park'},
                    {key: 8, label: 'Theme park'},
                    {key: 9, label: 'Festival'},
                    {key: 10, label: 'Stage'},
                    {key: 11, label: 'Promo event'},
                    {key: 12, label: 'Flashmob'},
                ]
            }
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

        if (this.state.actorSelect) {
            selectTalentsWorkAreas
                .push({
                    role: 'actor',
                    work_areas: this.props.booker.actorAreas
                })
        }

        if (this.state.modelSelect) {
            selectTalentsWorkAreas.push({
                role: 'model',
                work_areas: this.props.booker.modelAreas
            })
        }

        if (this.state.dancerSelect) {
            selectTalentsWorkAreas.push({
                role: 'dancer',
                work_areas: this.props.booker.dancerAreas
            })
        }

        this.props.FETCH_UPDATE_BOOKER_DATA({
            _key: LoginStore.user._key,
            profiles: ['booker'],
            booker_work_areas: selectTalentsWorkAreas,
            registration_booker_complete: true
        });

        // //TODO: this should be conditional trigger based on dispatch success action
        // if (typeof window !== 'undefined') {
        //     //TODO: later redirect to preview when preview is completed
        //     // window.location.href = '/onboarding/profile-preview?profile=booker'
        //
        //
        // }
    };

    handleRequestClose = () => {
        this.setState({
            check: false,
        });
    };

    componentWillReceiveProps(props) {
        if (props.booker.success) {
            console.log("Saved success")
            window.location.href = '/today'
        }

        if (props.booker.error) {
            console.log("ERROR when saving, not ok!")
            this.setState({
                check: true
            });
        }
    }

    deleteOtherTalents = e => {
        this.setState({
            [e.target.getAttribute('name')]: !this.state[e.target.getAttribute('name')]
        }, () => console.log(this.state))
    };

    render() {
        return (
            <Grid className='main-content-container onboarding white-back' style={{marginBottom: 50}}>
                <Row>
                    <Col
                        xs={12}
                        className='onboarding-header'
                        style={{
                            background: `url('/static/img/onboarding fan img.png') center center no-repeat`,
                            backgroundSize: 'cover'
                        }}
                    >
                        <h1>MDL Talent Hub is for everyone</h1>
                    </Col>
                </Row>
                <Row style={{marginBottom: 20}}>
                    <Col xs={12}>
                        {
                            this.state.actorSelect && this.state.modelSelect && this.state.dancerSelect ? null
                                : <h4 style={{margin: '36px 0', fontFamily: 'Gilroy Medium'}}>Select talents your work
                                    with</h4>
                        }
                        <div style={{display: 'flex'}}>
                            {
                                !this.state.actorSelect ?
                                    <div
                                        className='talent-cards'
                                        onClick={this.selectedBlock}
                                        name="actorSelect"
                                    >
                                        <img
                                            src="/static/img/actor.svg"
                                            alt=""
                                            style={{
                                                height: 100
                                            }}
                                            name="actorSelect"
                                        />
                                        <span name="actorSelect">Actor</span>
                                    </div> : null
                            }

                            {
                                !this.state.modelSelect ?
                                    <div
                                        className='talent-cards'
                                        onClick={this.selectedBlock}
                                        name="modelSelect"
                                    >
                                        <img
                                            src="/static/img/model.svg"
                                            alt=""
                                            style={{
                                                height: 100
                                            }}
                                            name="modelSelect"
                                        />
                                        <span name="modelSelect">Model</span>
                                    </div> : null
                            }

                            {
                                !this.state.dancerSelect ?
                                    <div
                                        className='talent-cards'
                                        onClick={this.selectedBlock}
                                        name="dancerSelect"
                                    >
                                        <img
                                            src="/static/img/dancer.svg"
                                            alt=""
                                            style={{
                                                height: 100
                                            }}
                                            name="dancerSelect"
                                        />
                                        <span name="dancerSelect">Dancer</span>
                                    </div> : null
                            }
                        </div>
                    </Col>
                </Row>
                <Row style={{marginBottom: 40}}>
                    <Col xs={12}>
                        <div style={{display: 'flex'}}>
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
                </Row>
                <Row
                    id={`${
                        this.state.actorSelect &&
                        this.state.modelSelect &&
                        this.state.dancerSelect
                            ? 'selected-talents-cards-id'
                            : ''}
                    `}
                    className={`${
                        this.state.actorSelect ||
                        this.state.modelSelect ||
                        this.state.dancerSelect ||
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
                            this.state.actorSelect || this.state.modelSelect || this.state.dancerSelect ?
                                <h4 style={{margin: '0', fontFamily: 'Gilroy Medium'}}>Talented selected</h4> : null
                        }

                        {
                            this.state.actorSelect ? [
                                <div
                                    style={{
                                        display: 'flex',
                                        marginTop: '35px',
                                    }}
                                >
                                    <div
                                        className='talent-cards'
                                        onClick={this.selectedBlock}
                                        name="actorSelect"
                                    >
                                        <img
                                            src="/static/img/actor.svg"
                                            alt=""
                                            style={{
                                                height: 100
                                            }}
                                            name="actorSelect"
                                        />
                                        <span name="actorSelect">Actor</span>
                                    </div>
                                    <div style={{width: '68%'}}>
                                        <h4>Work areas</h4>
                                        <div style={{display: 'flex', flexWrap: 'wrap'}}>
                                            {
                                                this.state.actorAreas.map(this.renderChipActorWorkAreas, this)
                                            }
                                        </div>

                                    </div>
                                </div>
                            ] : null
                        }

                        {
                            this.state.modelSelect ? [
                                <div
                                    style={{
                                        display: 'flex',
                                        marginTop: '35px',
                                    }}
                                >
                                    <div
                                        className='talent-cards'
                                        onClick={this.selectedBlock}
                                        name="modelSelect"
                                    >
                                        <img
                                            src="/static/img/model.svg"
                                            alt=""
                                            style={{
                                                height: 100
                                            }}
                                            name="modelSelect"
                                        />
                                        <span name="modelSelect">Model</span>
                                    </div>
                                    <div style={{width: '68%'}}>
                                        <h4>Work areas</h4>
                                        <div style={{display: 'flex', flexWrap: 'wrap'}}>
                                            {
                                                this.state.modelAreas.map(this.renderChipModelWorkAreas, this)
                                            }
                                        </div>

                                    </div>
                                </div>
                            ] : null
                        }

                        {
                            this.state.dancerSelect ? [
                                <div style={{display: 'flex', marginTop: '35px'}}>
                                    <div
                                        className='talent-cards'
                                        onClick={this.selectedBlock}
                                        name="dancerSelect"
                                    >
                                        <img
                                            src="/static/img/dancer.svg"
                                            alt=""
                                            style={{
                                                height: 100
                                            }}
                                            name="dancerSelect"
                                        />
                                        <span name="dancerSelect">Dancer</span>
                                    </div>
                                    <div style={{width: '68%'}}>
                                        <h4>Work areas</h4>
                                        <div style={{borderBottom: '1px solid lightgrey', paddingBottom: 10}}>
                                            <div style={{display: 'flex'}}>
                                                <div style={{width: '25%'}}>
                                                    <h5>Video shooting</h5>
                                                </div>
                                                <div style={{display: 'flex', flexWrap: 'wrap', width: '75%'}}>
                                                    {
                                                        this.state.dancerAreas.video.map(this.renderChipDancerWorkAreas, this)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{borderBottom: '1px solid lightgrey', paddingBottom: 10}}>
                                            <div style={{display: 'flex'}}>
                                                <div style={{width: '25%'}}>
                                                    <h5>Photo shooting</h5>
                                                </div>
                                                <div style={{display: 'flex', flexWrap: 'wrap', width: '75%'}}>
                                                    {
                                                        this.state.dancerAreas.photo.map(this.renderChipDancerWorkAreas, this)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div style={{display: 'flex'}}>
                                                <div style={{width: '25%'}}>
                                                    <h5>Live show</h5>
                                                </div>
                                                <div style={{display: 'flex', flexWrap: 'wrap', width: '75%'}}>
                                                    {
                                                        this.state.dancerAreas.live.map(this.renderChipDancerWorkAreas, this)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ] : null
                        }

                        <div style={{display: 'flex', marginTop: 20}}>
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

                        {
                            this.state.actorSelect ||
                            this.state.modelSelect ||
                            this.state.dancerSelect ||
                            this.state['Singer'] ||
                            this.state['Musician'] ||
                            this.state['Animator & Entertainer'] ||
                            this.state['DJ'] ||
                            this.state['Host & MC'] ||
                            this.state['Other']
                                ? <div style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end'
                                }}>
                                    <button
                                        className='onboarding-booker-button'
                                        onClick={this.saveBooker}
                                    >Save
                                    </button>
                                </div> : null
                        }


                    </Col>
                </Row>
                <SnackBar
                    open={this.state.check}
                    message={this.props.booker && this.props.booker.error ? this.props.booker.error.message : "Please fill in all fields"}
                    autoHideDuration={10000}
                    onRequestClose={this.handleRequestClose}
                />
            </Grid>
        )
    }
}

const TalentsCards = props => {
    return (
        <div
            className='other-talents'
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
                            color='white'
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

function mapStateToProps(state) {
    return {
        booker: state.onboardingBooker
    }
}

export default connect(
    mapStateToProps,
    {
        SELECT_WORK_AREAS_ACTOR,
        SELECT_WORK_AREAS_DANCER,
        SELECT_WORK_AREAS_MODEL,
        UNSELECT_WORK_AREAS_ACTOR,
        UNSELECT_WORK_AREAS_DANCER,
        UNSELECT_WORK_AREAS_MODEL,
        FETCH_UPDATE_BOOKER_DATA,
        ERROR_UPDATE_BOOKER_DATA,
        SUCCESS_UPDATE_BOOKER_DATA
    }
)(OnboardingBooker);