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
            piercing: this.props.profile.year > 10
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
                className={`hover-chip ${this.props.profile.work_areas.find(e => e === data.label.toLowerCase()) ? 'selected' : ''}`}
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
                className={`hover-chip ${this.props.profile.style.find(e => e === data.label.toLowerCase()) ? 'selected' : ''}`}
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
                className={`hover-chip ${this.props.profile.tattoo_where.find(e => e === data.label.toLowerCase()) ? 'selected' : ''}`}
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
                            categories.KIDS.girls.map(this.renderChipStyle, this)
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
                            toggled={!!this.props.profile.piercing}
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