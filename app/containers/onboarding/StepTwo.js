import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import Chip from 'material-ui/Chip';
import Toggle from 'material-ui/Toggle';

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

    selectedChip = e => {
        let elem = e.target.parentNode;
        if (elem.classList.contains('selected')) {
            elem.classList.remove('selected');
            elem.classList.add('hover-chip');
        } else {
            elem.classList.remove('hover-chip');
            elem.classList.add('selected');
        }
    };

    selectedTattoo = () => {
        this.setState({
            showTattoo: !this.state.showTattoo
        })
    };

    selectedPiercing = () => {
        this.setState({
            pierce: !this.state.pierce
        })
    }

    renderChip = data => {
        return (
            <Chip
                className='hover-chip'
                key={data.key}
                style={{width: 'auto', marginLeft: 10, marginTop: 10, fontFamily: 'inherit'}}
                onClick={this.selectedChip}
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
                            this.state.areas.map(this.renderChip, this)
                        }
                    </div>
                </Col>
            </Row>,
            <Row>
                <Col xs={12}>
                    <h2>Niches</h2>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {
                            this.state.styles.map(this.renderChip, this)
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
                        />
                    </div>
                </Col>
            </Row>,
            <Row>
                <Col xs={12}>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {
                            this.state.showTattoo &&
                                this.state.tattoo.map(this.renderChip, this)
                        }
                    </div>
                </Col>
            </Row>,

        ]
    }
}

export default connect()(StepOne);