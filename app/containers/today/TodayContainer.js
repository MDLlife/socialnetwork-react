import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import NewsFeed from './NewsFeed';
import ProfileContainer from './profile/ProfileContainer';
import LoginStore from "store/LoginStore";
import Messager from './messager/Messager';
import Calendar from '../calendar/Calendar';
import Payment from '../payment/Payment';
import GigPayment from '../payment/GigPayment';
import TalentPayment from "../payment/talent/Payment";

import LeftMenu from 'components/menu/LeftMenu';

class TodayContainer extends Component {

    componentDidMount() {
        const username = LoginStore.user && LoginStore.user.username ? LoginStore.user.username : '';
        const avatarurl = LoginStore.user && LoginStore.user.avatarurl ? LoginStore.user.avatarurl : '//via.placeholder.com/145x145';

        const isBooker = !(LoginStore.user && LoginStore.user.registration_booker_complete);
        const isTalent = !(LoginStore.user && LoginStore.user.registration_talent_complete);

        this.setState({
            isBooker: isBooker,
            isTalent: isTalent,
            avatarurl: avatarurl,
            username: username,
        })
    }

    constructor(props) {
        super(props);

        this.state = {
            head: 1,
            menu: 1,
        }
    }

    createGig = () => {
        window.location.href = '/gig-creation';
    };

    selectingMenu = event => {
        if (event.target.value === 2) {

            if (this.state.isBooker) {
                window.location.href = '/today/me/booker';
            } else if (this.state.isTalent) {
                window.location.href = '/today/me/talent';
            } else {
                window.location.href = '/today/me/fan';
            }
        } else if (event.target.value === 3) {
            window.location.href = ('/gigs' + (this.state.isBooker ? '/booker' : '/talent'));
        } else if (event.target.value === 4) {
            window.location.href = '/search';
        } else if (event.target.value === 5) {
            window.location.href = '/today/messager';
        } else if (event.target.value === 6) {
            window.location.href = '/today/calendar';
        } else if (event.target.value === 7) {
            window.location.href = this.state.isTalent ? '/today/payment/talent' : '/today/payment/booker';
        } else {
            window.location.href = '/today';
        }
    };

    render() {
        let index = this.props.params && this.props.params.index ? this.props.params.index : '';
        let value = this.props.params && this.props.params.value ? this.props.params.value : '';

        const {t, i18n} = this.props;
        const translateProps = {
            t: t,
            i18n: i18n,
        };

        let block;


        if (!this.props.location.pathname.indexOf("/today/messager")) {
            block = <Messager {...translateProps}/>
        } else if (!this.props.location.pathname.indexOf('/today/calendar')) {
            block = <Calendar {...translateProps}/>
        } else if (!this.props.location.pathname.indexOf('/today/payment/gig-payment')) {
            block = <GigPayment {...translateProps}/>
        } else if (!this.props.location.pathname.indexOf('/today/payment/booker')) {
            block = <Payment {...translateProps}/>
        } else if (!this.props.location.pathname.indexOf('/today/payment/talent')) {
            block = <TalentPayment {...translateProps}/>
        } else {
            block = index === '' || index === 'genre' ? <NewsFeed index={index} value={value} {...translateProps}/> :
                <ProfileContainer index={index} value={value} {...translateProps}/>
        }

        return (
            <Grid >
                <Row>
                     <Col xs={3}>
                        <LeftMenu  {...translateProps}/>
                     </Col>

                    {block}
                </Row>
            </Grid>
        )
    }
}

export default TodayContainer;