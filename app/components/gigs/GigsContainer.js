import * as React from 'react';
import {Col} from 'react-bootstrap';
import OngoingGigs from '../../components/gigs/OngoingGigs';
import BookedGigs from '../../components/gigs/BookedGigs';
import CompletedGigs from '../../components/gigs/CompletedGigs';
import {withRouter} from "react-router";

class GigsContainer extends React.Component{


    render(){
        let gigs;
        if ((!this.props.location.pathname.indexOf("/gigs/ongoing"))|| ((!this.props.location.pathname.indexOf("/gigs")&& this.props.location.pathname.indexOf("/gigs/")))){
            gigs = <OngoingGigs/>
        } else if (!this.props.location.pathname.indexOf("/gigs/booked")){
            gigs = <BookedGigs/>
        } else if (!this.props.location.pathname.indexOf("/gigs/completed")){
            gigs= <CompletedGigs/>
        }
        return(
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

export default withRouter(GigsContainer);