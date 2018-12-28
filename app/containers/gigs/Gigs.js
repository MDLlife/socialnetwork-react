import * as React from 'react';
import { Grid, Row } from 'react-bootstrap';
import Menu from 'components/gigs/Menu';
import GigsContainer from 'components/gigs/GigsContainer';
import {withRouter} from "react-router";
import Feedback from 'components/gigs/Feedback';
import BookerFeedback from 'components/gigs/booker/BookerFeedback';
import BookerGigsContainer from 'components/gigs/booker/BookerGigsContainer';

class Gigs extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        const {t, i18n} = this.props;
        const translateProps = {
            t: t,
            i18n: i18n,
        };

        let gigs;
        if (!this.props.location.pathname.indexOf("/gigs/talent/feedback")){
            gigs = <Feedback  {...translateProps}/>
        } else if (!this.props.location.pathname.indexOf("/gigs/booker/feedback")) {
            gigs = <BookerFeedback  {...translateProps}/>
        } else if (!this.props.location.pathname.indexOf("/gigs/talent")){
            gigs = <GigsContainer  {...translateProps}/>
        } else if (!this.props.location.pathname.indexOf("/gigs/booker")) {
            gigs = <BookerGigsContainer  {...translateProps}/>
        }

        return(
            <Grid>
                <Row>
                    <Menu  {...translateProps}/>
                    {gigs}
                </Row>
            </Grid>
        )
    }
}

export default withRouter(Gigs);