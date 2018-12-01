import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Grid, Row} from 'react-bootstrap';

import Avatar from './preview/Avatar';
import Medals from './preview/Medals';
import Video from './preview/Video';
import Categories from './preview/Categories';
import AdditionalInfo from './preview/AdditionalInfo';
import Gigs from './preview/Gigs';
import InfoPanel from './preview/InfoPanel';
import CompCard from './preview/CompCard';
import {FETCH_GET_USER_DATA} from "actions/onboarding";

class ProfilePreview extends Component {
    constructor(props) {
        super(props);
    }


    componentWillMount() {
        this.props.FETCH_GET_USER_DATA(this.props.location.query.id)
    }

    publishProfile = () => {
        if (typeof window !== 'undefined') {
            window.location.href = '/today'
        }
    };

    render() {
        const {t, i18n} = this.props;
        const translateProps = {
            t: t,
            i18n: i18n,
        }
        return (
            <Grid style={{marginTop: 20}}>
                <Row>
                    <Col xs={12} md={3}>
                        <Avatar {...translateProps}/>
                        <Medals {...translateProps}/>
                        <Video {...translateProps}/>
                        <Categories {...translateProps}
                                    categories={typeof this.props.profile === 'object' ? this.props.profile.work_areas : null}
                                    styles={typeof this.props.profile === 'object' ? this.props.profile.style : null}
                        />
                        <AdditionalInfo {...translateProps}
                                        ethnic={typeof this.props.profile === 'object' ? this.props.profile.ethnicity : null}
                                        languages={typeof this.props.profile === 'object' ? this.props.profile.languages_spoken : null}
                                        tattoo={typeof this.props.profile === 'object' ? this.props.profile.tattoo_where : null}
                                        piercing={typeof this.props.profile === 'object' ? this.props.profile.piercing : null}
                        />
                    </Col>
                    <Col xs={12} md={9}>
                        <Gigs {...translateProps}/>
                        <InfoPanel {...translateProps}
                                   height={typeof this.props.profile === 'object' ? this.props.profile.height : null}
                                   bust={typeof this.props.profile === 'object' ? this.props.profile.bust : null}
                                   waist={typeof this.props.profile === 'object' ? this.props.profile.waist : null}
                                   hips={typeof this.props.profile === 'object' ? this.props.profile.hips : null}
                                   shoeSize={typeof this.props.profile === 'object' ? this.props.profile.shoe_size : null}
                                   bodyType={typeof this.props.profile === 'object' ? this.props.profile.body_type : null}
                                   eyeColor={typeof this.props.profile === 'object' ? this.props.profile.eye_color : null}
                                   hairColor={typeof this.props.profile === 'object' ? this.props.profile.hair_color : null}
                                   hairLength={typeof this.props.profile === 'object' ? this.props.profile.hair_length : null}
                        />
                        <CompCard  {...translateProps} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}
                        >
                            {/*<button*/}
                            {/*style={{*/}
                            {/*color: '#660066'*/}
                            {/*}}*/}
                            {/*className='back-btn'*/}
                            {/*>*/}
                            {/*Edit*/}
                            {/*</button>*/}
                            <button
                                style={{
                                    fontFamily: 'Gilroy Medium'
                                }}
                                onClick={this.publishProfile}
                                className='next-btn'
                            >
                                {t('save')}
                            </button>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        profile: state.onboarding.user_data
    }
}

export default connect(
    mapStateToProps,
    {
        FETCH_GET_USER_DATA
    }
)(ProfilePreview);