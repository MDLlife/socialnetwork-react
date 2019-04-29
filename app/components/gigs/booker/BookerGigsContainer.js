import * as React from 'react';
import {withRouter} from "react-router";
import {Col} from 'react-bootstrap';
import OngoingGigs from './OngoingGigs';
import UpcomingGigs from './UpcomingGigs';
import CompletedGigs from './CompletedGigs';

class BookerGigsContainer extends React.Component {

    render() {
        let gigs;
        if (!this.props.location.pathname.indexOf("/gigs/booker/upcoming") || !this.props.location.pathname.indexOf("/gigs/booker")) {
            gigs = <UpcomingGigs/>
        } else if (!this.props.location.pathname.indexOf("/gigs/booker/ongoing")) {
            gigs = <OngoingGigs/>
        } else if (!this.props.location.pathname.indexOf("/gigs/booker/completed")) {
            gigs = <CompletedGigs/>
        }
        return (
            <Col md={9}>
                <div className={"gigs-paper"}>
                    <div className={"gigs-menu"}>
                        <span>All gigs</span>
                        <span className={'active'}>My gigs</span>
                    </div>
                    <div>
                        {gigs}
                    </div>
                </div>
            </Col>
        )
    }
}

export default withRouter(BookerGigsContainer);