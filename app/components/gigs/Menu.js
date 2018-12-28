import * as React from 'react';
import {Col, Collapse} from 'react-bootstrap';
import {withRouter} from "react-router";

import LeftMenu from 'components/menu/LeftMenu';

class Menu extends React.Component {

    state = {
        menuOpened: true
    };

    constructor(props) {
        super(props)
    }




    nextPage = (href) => {
        window.location.href = href;
    };

    render() {
        const {t, i18n} = this.props;
        const translateProps = {
            t: t,
            i18n: i18n,
        };

        let gigsLink;

        if (this.props.location.pathname.indexOf("/booker") >= 0) {
            gigsLink = '/booker'
        } else if (this.props.location.pathname.indexOf("/talent") >= 0) {
            gigsLink = '/talent'
        } else {
        }


        return (
            <Col xs={3}>
                <LeftMenu  {...translateProps}/>

                <div className={'gigs-menu'}>
                    <div
                        style={this.props.location.pathname.indexOf("/talent") >= 0 ? {display: 'none'} : {}}
                        onClick={this.nextPage.bind(this, '/gigs/booker/upcoming')}
                        className={(!this.props.location.pathname.indexOf("/gigs/booker/upcoming")) || ((!this.props.location.pathname.indexOf("/gigs/booker") && this.props.location.pathname.indexOf("/gigs/booker/"))) ? "gigs-menu-item-active" : "gigs-menu-item"}>
                        <h5>Upcoming</h5>
                        <span>6</span>
                    </div>
                    <div onClick={this.nextPage.bind(this, '/gigs' + gigsLink + '/ongoing')}
                         className={(!this.props.location.pathname.indexOf("/gigs" + gigsLink + "/ongoing")) ? "gigs-menu-item-active" : "gigs-menu-item"}>
                        <h5>Ongoing</h5>
                        <span>6</span>
                    </div>
                    <div
                        style={this.props.location.pathname.indexOf("/booker") >= 0 ? {display: 'none'} : {}}
                        onClick={this.nextPage.bind(this, '/gigs/talent/booked')}
                        className={!this.props.location.pathname.indexOf("/gigs/talent/booked") ? "gigs-menu-item-active" : "gigs-menu-item"}>
                        <h5>Booked</h5>
                        <span>1</span>
                    </div>
                    <div
                        style={this.props.location.pathname.indexOf("/booker") >= 0 ? {display: 'none'} : {}}
                        onClick={this.nextPage.bind(this, '/gigs/talent/pre-booked')}
                        className={!this.props.location.pathname.indexOf("/gigs/talent/pre-booked") ? "gigs-menu-item-active" : "gigs-menu-item"}>
                        <h5>Pre-booked</h5>
                        <span>12</span>
                    </div>
                    <div onClick={this.nextPage.bind(this, '/gigs' + gigsLink + '/completed')}
                         className={!this.props.location.pathname.indexOf("/gigs" + gigsLink + "/completed") || !this.props.location.pathname.indexOf("/gigs/talent/feedback") || !this.props.location.pathname.indexOf("/gigs/booker/feedback") ? "gigs-menu-item-active" : "gigs-menu-item"}>
                        <h5>Completed</h5>
                        <span>10</span>
                    </div>
                    <div
                        style={this.props.location.pathname.indexOf("/booker") >= 0 ? {display: 'none'} : {}}
                        onClick={this.nextPage.bind(this, '/gigs/talent/favorites')}
                        className={!this.props.location.pathname.indexOf("/gigs/talent/favorites") ? "gigs-menu-item-active" : "gigs-menu-item"}>
                        <h5>My favorites</h5>
                        <span>5</span>
                    </div>
                </div>
            </Col>
        )
    }
}

export default withRouter(Menu);
