import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import Chip from 'material-ui/Chip';
import Toggle from 'material-ui/Toggle';

import {
    SELECT_WORK_AREAS,
    REMOVE_WORK_AREAS,
    SELECT_WORK_NICHES,
    REMOVE_WORK_NICHES,
    SELECT_TATTOO,
    REMOVE_TATTOO,
    TOGGLE_PIERCING,
    TOGGLE_TATTOO
} from "../../actions/onboarding";

const styles = {
    block: {
        width: 260,
        marginTop: 38,
        fontFamily: 'Gilroy Light'
    },
    thumbSwitched: {
        backgroundColor: '#EB3386',
    },
    trackSwitched: {
        backgroundColor: '#F599C2',
    },
}

class StepOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pierce: false,
            showTattoo: false,
            areas: [
                {key: 0, label: 'Fashion show'},
                {key: 1, label: 'Fitting'},
                {key: 2, label: 'Hostess'},
                {key: 3, label: 'TVC'},
                {key: 4, label: 'Movie'},
                {key: 5, label: 'Original catalog'},
                {key: 6, label: 'Unerwear Catalog'},
                {key: 7, label: 'Exhibition'},
                {key: 8, label: 'Promo event'},
                {key: 9, label: 'Makeup show'},
                {key: 10, label: 'Hairdress show'},
                {key: 11, label: 'Body art'}
            ],
            styles: [
                {key: 0, label: 'Cute'},
                {key: 1, label: 'Babyface'},
                {key: 2, label: 'Underground'},
                {key: 3, label: 'Bodybuilding'},
                {key: 4, label: 'Sport'},
                {key: 5, label: 'Sexy'},
                {key: 6, label: 'Mother'}
            ],
            features: [
                {key: 0, label: 'Tattoo'},
                {key: 1, label: 'Bold'},
            ],
            tattoo: [
                {key: 0, label: 'Arm'},
                {key: 1, label: 'Leg'},
                {key: 2, label: 'Face'},
                {key: 3, label: 'Neck'},
                {key: 4, label: 'Back'}
            ]
        }
    }

    selectedChipWorkAreas = e => {
        let elem = e.target.parentNode;
        if (elem.classList.contains('selected')) {
            elem.classList.remove('selected');
            elem.classList.add('hover-chip');
            this.props.REMOVE_WORK_AREAS(e.target.innerHTML)
        } else {
            elem.classList.remove('hover-chip');
            elem.classList.add('selected');
            this.props.SELECT_WORK_AREAS(e.target.innerHTML)
        }
    };

    selectedChipStyle = e => {
        let elem = e.target.parentNode;
        if (elem.classList.contains('selected')) {
            elem.classList.remove('selected');
            elem.classList.add('hover-chip');
            this.props.REMOVE_WORK_NICHES(e.target.innerHTML)
        } else {
            elem.classList.remove('hover-chip');
            elem.classList.add('selected');
            this.props.SELECT_WORK_NICHES(e.target.innerHTML)
        }
    };

    selectedChipTattoo = e => {
        let elem = e.target.parentNode;
        if (elem.classList.contains('selected')) {
            elem.classList.remove('selected');
            elem.classList.add('hover-chip');
            this.props.REMOVE_TATTOO(e.target.innerHTML)
        } else {
            elem.classList.remove('hover-chip');
            elem.classList.add('selected');
            this.props.SELECT_TATTOO(e.target.innerHTML)
        }
    };

    selectedTattoo = () => {
        this.props.TOGGLE_TATTOO(!this.state.showTattoo)
    };

    selectedPiercing = () => {
        this.props.TOGGLE_PIERCING(!this.state.pierce)
    };

    renderChipWorkAreas = data => {
        return (
            <Chip
                className={`hover-chip ${this.props.profile.work_areas.find(e => e === data.label) ? 'selected' : ''}`}
                key={data.key}
                style={{width: 'auto', marginLeft: 10, marginTop: 10, fontFamily: 'inherit'}}
                onClick={this.selectedChipWorkAreas}
            >
                {data.label}
                {/*{*/}
                    {/*data.key % 2 !== 0 ? <img src="/static/img/fire.svg" alt="" style={{width: 16}}/> : null*/}
                {/*}*/}
            </Chip>
        )
    };

    renderChipStyle = data => {
        return (
            <Chip
                className={`hover-chip ${this.props.profile.style.find(e => e === data.label) ? 'selected' : ''}`}
                key={data.key}
                style={{width: 'auto', marginLeft: 10, marginTop: 10, fontFamily: 'inherit'}}
                onClick={this.selectedChipStyle}
            >
                {data.label}
                {/*{*/}
                {/*data.key % 2 !== 0 ? <img src="/static/img/fire.svg" alt="" style={{width: 16}}/> : null*/}
                {/*}*/}
            </Chip>
        )
    };

    renderChipTattoo = data => {
        return (
            <Chip
                className={`hover-chip ${this.props.profile.tattoo_where.find(e => e === data.label) ? 'selected' : ''}`}
                key={data.key}
                style={{width: 'auto', marginLeft: 10, marginTop: 10, fontFamily: 'inherit'}}
                onClick={this.selectedChipTattoo}
            >
                {data.label}
                {/*{*/}
                {/*data.key % 2 !== 0 ? <img src="/static/img/fire.svg" alt="" style={{width: 16}}/> : null*/}
                {/*}*/}
            </Chip>
        )
    };


    render() {
        console.log(this.props.profile)
        return [
            <Row>
                <Col xs={12}>
                    <h2>Work areas</h2>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {
                            this.state.areas.map(this.renderChipWorkAreas, this)
                        }
                    </div>
                </Col>
            </Row>,
            <Row>
                <Col xs={12}>
                    <h2>Niches</h2>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {
                            this.state.styles.map(this.renderChipStyle, this)
                        }
                    </div>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} style={{display: 'inline-flex', justifyContent: 'space-between'}}>
                    <div>
                        <h2>Piercing</h2>
                    </div>
                    <div>
                        <Toggle
                            style={{marginTop: 24}}
                            thumbSwitchedStyle={styles.thumbSwitched}
                            trackSwitchedStyle={styles.trackSwitched}
                            onToggle={this.selectedPiercing}
                            toggled={this.props.profile.piercing ? true : false}
                        />
                    </div>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} style={{display: 'inline-flex', justifyContent: 'space-between'}}>
                    <div>
                        <h2>Tattoo</h2>
                    </div>
                    <div>
                        <Toggle
                            style={{marginTop: 24}}
                            thumbSwitchedStyle={styles.thumbSwitched}
                            trackSwitchedStyle={styles.trackSwitched}
                            onToggle={this.selectedTattoo}
                            toggled={this.props.profile.tattoo ? true : false}
                        />
                    </div>
                </Col>
            </Row>,
            <Row>
                <Col xs={12}>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {
                            this.props.profile.tattoo &&
                                this.state.tattoo.map(this.renderChipTattoo, this)
                        }
                    </div>
                </Col>
            </Row>,

        ]
    }
}

function mapStateToProps(state) {
    return {
        profile: state.onboarding
    }
}

export default connect(
    mapStateToProps,
    {
        SELECT_WORK_AREAS,
        REMOVE_WORK_AREAS,
        SELECT_WORK_NICHES,
        REMOVE_WORK_NICHES,
        SELECT_TATTOO,
        REMOVE_TATTOO,
        TOGGLE_PIERCING,
        TOGGLE_TATTOO
    }
)(StepOne);