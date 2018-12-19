import * as React from 'react';
import { Grid, Row } from 'react-bootstrap';
import Menu from 'components/gigs/Menu';
import GigsContainer from 'components/gigs/GigsContainer';
import {withRouter} from "react-router";
import Feedback from 'components/gigs/Feedback';

class Gigs extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        let gigs;
        if (!this.props.location.pathname.indexOf("/gigs/feedback")){
            gigs = <Feedback/>
        } else {
            gigs = <GigsContainer/>
        }

        return(
            <Grid>
                <Row>
                    <Menu/>
                    {gigs}
                </Row>
            </Grid>
        )
    }
}

export default withRouter(Gigs);