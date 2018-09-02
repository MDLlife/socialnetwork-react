import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import Chip from 'material-ui/Chip';
import Toggle from 'material-ui/Toggle';
import categories from './categoriesStyle';

import {
    SELECT_WORK_AREAS,
    REMOVE_WORK_AREAS,
    SELECT_WORK_NICHES,
    REMOVE_WORK_NICHES,
    SELECT_FEATURES,
    REMOVE_FEATURES,
    SELECT_TATTOO,
    REMOVE_TATTOO,
    TOGGLE_PIERCING,
    TOGGLE_TATTOO
} from "actions/onboarding";

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
};

class StepOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pierce: false,
            showTattoo: false,
            features: this.props.profile.year > 10
                        && this.props.profile.gender === 'male' ? categories.FEATURES : null,
            tattoo: this.props.profile.year > 10,
            piercing: this.props.profile.year > 10,
            styles: this.switchStyles(this.props.profile.year, this.props.profile.gender)
        }
    }

    selectedChipWorkAreas = e => {
        let elem = e.target.parentNode;
        if (elem.classList.contains('selected')) {
            elem.classList.remove('selected');
            elem.classList.add('hover-chip');
            this.props.REMOVE_WORK_AREAS(e.target.innerHTML.toLowerCase())
        } else {
            elem.classList.remove('hover-chip');
            elem.classList.add('selected');
            this.props.SELECT_WORK_AREAS(e.target.innerHTML.toLowerCase())
        }
    };

    selectedChipStyle = e => {
        let elem = e.target.parentNode;
        if (elem.classList.contains('selected')) {
            elem.classList.remove('selected');
            elem.classList.add('hover-chip');
            this.props.REMOVE_WORK_NICHES(e.target.innerHTML.toLowerCase())
        } else {
            elem.classList.remove('hover-chip');
            elem.classList.add('selected');
            this.props.SELECT_WORK_NICHES(e.target.innerHTML.toLowerCase())
        }
    };

    selectedChipTattoo = e => {
        let elem = e.target.parentNode;
        if (elem.classList.contains('selected')) {
            elem.classList.remove('selected');
            elem.classList.add('hover-chip');
            this.props.REMOVE_TATTOO(e.target.innerHTML.toLowerCase())
        } else {
            elem.classList.remove('hover-chip');
            elem.classList.add('selected');
            this.props.SELECT_TATTOO(e.target.innerHTML.toLowerCase())
        }
    };

    selectedChipFeatures = e => {
        let elem = e.target.parentNode;
        if(!e.target.innerHTML){
            return;
        }
        if (elem.classList.contains('selected')) {
            elem.classList.remove('selected');
            elem.classList.add('hover-chip');
            this.props.REMOVE_FEATURES(e.target.innerHTML.toLowerCase())
        } else {
            elem.classList.remove('hover-chip');
            elem.classList.add('selected');
            this.props.SELECT_FEATURES(e.target.innerHTML.toLowerCase())
        }
    };

    selectedTattoo = () => {
        this.props.TOGGLE_TATTOO(!this.state.showTattoo);
        this.setState({
            showTattoo: !this.state.showTattoo
        })
    };

    selectedPiercing = () => {
        this.props.TOGGLE_PIERCING(!this.state.pierce);
        this.setState({
            pierce: !this.state.pierce
        })
    };

    renderChipWorkAreas = data => {
        return (
            <Chip
                className={`hover-chip ${this.props.profile && this.props.profile.work_areas && this.props.profile.work_areas.find(e => e === data.label.toLowerCase()) ? 'selected' : ''}`}
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
                className={`hover-chip ${this.props.profile && this.props.profile.style && this.props.profile.style.find(e => e === data.label.toLowerCase()) ? 'selected' : ''}`}
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
                className={`hover-chip ${this.props.profile && this.props.profile.tattoo_where && this.props.profile.tattoo_where.find(e => e === data.label.toLowerCase()) ? 'selected' : ''}`}
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

    renderChipFeatures = data => {
        return (
            <Chip
                className={`hover-chip ${this.props.profile && this.props.profile.features && this.props.profile.features.find(e => e === data.label.toLowerCase()) ? 'selected' : ''}`}
                key={data.key}
                style={{width: 'auto', marginLeft: 10, marginTop: 10, fontFamily: 'inherit'}}
                onClick={this.selectedChipFeatures}
            >
                {data.label}
                {/*{*/}
                {/*data.key % 2 !== 0 ? <img src="/static/img/fire.svg" alt="" style={{width: 16}}/> : null*/}
                {/*}*/}
            </Chip>
        )
    };

    switchStyles = (year, gender) => {
        if (year < 10) {
            if (gender === 'male') {
                return categories.KIDS.boys
            } else if(gender === 'female') {
                return categories.KIDS.girls
            } else {
                return categories.KIDS.other
            }
        } else if (year >= 11 && year <= 17) {
            if (gender === 'male') {
                return categories.TEEN.guys
            } else if (gender === 'female') {
                return categories.TEEN.girls
            } else {
                return categories.TEEN.other
            }
        } else if (year >= 18 && year <= 25 || year >= 26 && year <= 45 || year >= 46) {
            if (gender === 'male') {
                return categories.ADULT.men
            } else if (gender === 'female') {
                return categories.ADULT.women
            } else {
                return categories.ADULT.other
            }
        } else {
            return [];
        }
    };


    render() {
        console.log(this.state.styles)
        return [
            <Row>
                <Col xs={12}>
                    <h2>Work areas</h2>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {
                            categories.AREAS.map(this.renderChipWorkAreas, this)
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
            this.props.profile.gender === 'male' && this.props.profile.year > 10 ?
            <Row>
                <Col xs={12}>
                    <div>
                        <h2>Features</h2>
                    </div>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {
                            this.state.features && this.state.features.map(this.renderChipFeatures, this)
                        }
                    </div>
                </Col>
            </Row> : null,
            this.props.profile.year > 10 ?
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
                            toggled={!!this.props.profile.piercing}
                        />
                    </div>
                </Col>
            </Row> : null,
            this.props.profile.year > 10 ? ([
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
                                toggled={!!this.props.profile.tattoo}
                            />
                        </div>
                    </Col>
                </Row>,
                <Row>
                    <Col xs={12}>
                        <div style={{display: 'flex', flexWrap: 'wrap'}}>
                            {
                                this.props.profile.tattoo &&
                                    categories.TATTOO.map(this.renderChipTattoo, this)
                            }
                        </div>
                    </Col>
                </Row>
            ]) : null,
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
        SELECT_FEATURES,
        REMOVE_FEATURES,
        SELECT_TATTOO,
        REMOVE_TATTOO,
        TOGGLE_PIERCING,
        TOGGLE_TATTOO
    }
)(StepOne);