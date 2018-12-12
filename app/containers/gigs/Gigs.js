import * as React from 'react';
import { Grid, Row } from 'react-bootstrap';
import Menu from 'components/gigs/Menu';
import GigsContainer from 'components/gigs/GigsContainer';
import {withRouter} from "react-router";

class Gigs extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <Grid>
                <Row>
                    <Menu/>
                    <GigsContainer/>
                </Row>
            </Grid>
        )
    }
}

export default Gigs;