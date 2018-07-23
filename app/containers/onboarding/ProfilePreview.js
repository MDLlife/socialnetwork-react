import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';

import Avatar from './preview/Avatar';
import Medals from './preview/Medals';
import Video from './preview/Video';
import Categories from './preview/Categories';
import AdditionalInfo from './preview/AdditionalInfo';
import Gigs from './preview/Gigs';
import InfoPanel from './preview/InfoPanel';


class ProfilePreview extends Component {
    render() {
        return (
            <Grid style={{marginTop: 20}}>
                <Row>
                    <Col xs={12} md={3}>
                        <Avatar/>
                        <Medals/>
                        <Video/>
                        <Categories/>
                        <AdditionalInfo/>
                    </Col>
                    <Col xs={12} md={9}>
                        <Gigs/>
                        <InfoPanel/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default connect()(ProfilePreview);