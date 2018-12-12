import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import NewsFeed from './NewsFeed';
import ProfileContainer from './profile/ProfileContainer';
import LoginStore from "store/LoginStore";
import Messager from './messager/Messager';
import Calendar from '../calendar/Calendar';
import SvgIcon from 'material-ui/SvgIcon';
import Divider from 'material-ui/Divider';
import Payment from '../payment/Payment';
import GigPayment from '../payment/GigPayment';

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
            window.location.href = '/gigs';
        } else if (event.target.value === 4) {
            window.location.href = '/search';
        } else if (event.target.value === 5) {
            window.location.href = '/today/messager';
        } else if (event.target.value === 6){
            window.location.href = '/today/calendar';
        } else if (event.target.value === 7) {
            window.location.href = '/today/payment';
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
        } else if(!this.props.location.pathname.indexOf('/today/calendar')) {
            block = <Calendar {...translateProps}/>
        } else if(!this.props.location.pathname.indexOf('/today/payment/gig-payment')) {
            block = <GigPayment {...translateProps}/>
        } else if(!this.props.location.pathname.indexOf('/today/payment')) {
            block = <Payment {...translateProps}/>
        } else {
            block = index === '' || index === 'genre' ? <NewsFeed index={index} value={value} {...translateProps}/> :
                <ProfileContainer index={index} value={value} {...translateProps}/>
        }

        return (
            <Grid style={{
                marginTop: 20,
            }}>
                <Row>
                    <Col xs={2}>
                        <ul
                            className='menu-today'
                            style={{
                                listStyle: 'none',
                                padding: 0
                            }}
                        >
                            <li
                                className={`${(index === '' || index === 'genre') && (this.props.location.pathname.indexOf("/today/messager") && this.props.location.pathname.indexOf("/today/calendar") && this.props.location.pathname.indexOf("/today/payment")) ? 'selected-menu-item-today' : 'menu-item'}`}
                                onClick={this.selectingMenu}
                                value='1'
                            >
                                <SvgIcon xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 65.5 82.8" style={{enableBackground:"new 0 0 65.5 82.8", width: "1.3rem", height: "1.6rem", position: "relative", top: "0.2rem", marginRight: "2.3rem"}}>
                                    <path fill={"rgba(129,129,129, 0.8)"} d="M34.2,54.5L65.1,20c0.4-0.4,0.5-1.1,0.3-1.6c-0.2-0.5-0.8-0.9-1.4-0.9H48.3L60.1,2.4c0.5-0.6,0.4-1.6-0.2-2.1  c-0.7-0.5-1.6-0.4-2.1,0.2L44.4,17.5H1.5c-0.6,0-1.1,0.3-1.4,0.9C-0.1,18.9,0,19.6,0.4,20l30.8,34.3v25.5c0,0,0,0,0,0H20.9  c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h23.6c0.8,0,1.5-0.7,1.5-1.5s-0.7-1.5-1.5-1.5H34.2c0,0,0,0,0,0V54.5z M43.5,39.6L32.8,51.6  L22.1,39.6H43.5z M60.6,20.5L46.2,36.6h-13l12.7-16.2H60.6z M42.1,20.5L29.3,36.6h-9.9L4.9,20.5H42.1z"/>
                                </SvgIcon>
                                {t('today')}

                            </li>
                            <Divider/>
                            <li
                                className={`${index === 'fan' || index === 'booker' || index === 'talent' ? 'selected-menu-item-today' : 'menu-item'}`}
                                onClick={this.selectingMenu}
                                value='2'
                            >
                                <SvgIcon xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 72.8 86.7" style={{enableBackground:"new 0 0 72.8 86.7", width:"1.4rem", height: "1.7rem", position: "relative", top: "0.2rem", marginRight: "2.2rem"}}>
                                    <g>
                                        <g>
                                            <path fill={"rgba(129,129,129, 0.8)"} d="M36.4,47.4C16.3,47.4,0,64.4,0,85.2c0,0.8,0.7,1.5,1.5,1.5h69.8c0.8,0,1.5-0.7,1.5-1.5C72.8,64.4,56.4,47.4,36.4,47.4z     M3,83.7c0.8-18.5,15.4-33.2,33.3-33.2S69,65.2,69.7,83.7H3z"/>
                                            <path fill={"rgba(129,129,129, 0.8)"} d="M35.7,43.4c11.6,0,21-9.7,21-21.7S47.3,0,35.7,0s-21,9.7-21,21.7S24.2,43.4,35.7,43.4z M35.7,3c9.9,0,18,8.4,18,18.7    s-8.1,18.7-18,18.7c-9.9,0-18-8.4-18-18.7S25.8,3,35.7,3z"/>
                                        </g>
                                    </g>
                                 </SvgIcon>
                                {t('profile')}
                            </li>
                            <Divider/>
                            <li
                                className={`${!this.props.location.pathname.indexOf("/gigs") ? 'selected-menu-item-today' : 'menu-item'}`}
                                onClick={this.selectingMenu}
                                value='3'
                            >
                                <SvgIcon xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 93.17 95.6" style={{width:"1.8rem", height: "1.8rem", position: "relative", top: "0.2rem", marginRight: "1.8rem"}}>
                                    <title>gigs</title>
                                    <path fill={"rgba(129,129,129, 0.8)"} d="M78,63.08a1.63,1.63,0,0,0,.07-.2A34.05,34.05,0,0,0,50.5,18.72V13.24a1.5,1.5,0,0,0-1.5-1.5H47.18V1.5a1.5,1.5,0,0,0-3,0V11.74H42.37a1.5,1.5,0,0,0-1.5,1.5v5.48A34.16,34.16,0,0,0,13.65,40.84l0,.09a34,34,0,0,0-.4,21.83,1.47,1.47,0,0,0,.11.33A34.12,34.12,0,0,0,45.68,86.5h0l.68,0,.14,0,.17,0A34.12,34.12,0,0,0,78,63.08ZM14.62,52.44a31,31,0,0,1,1.49-9.5H27.24a33.32,33.32,0,0,0-1.32,9.2A36.28,36.28,0,0,0,27,61H15.82A31,31,0,0,1,14.62,52.44Zm14.3-.3a30.14,30.14,0,0,1,1.48-9.2H44.18V61h-14A32.88,32.88,0,0,1,28.92,52.14Zm31.75-12.2H47.18V22.32C50.2,24.84,56.95,31.17,60.67,39.94ZM44.18,23V39.94H31.51C34.92,31.9,40.88,25.92,44.18,23Zm0,40.94v18c-3.42-2.9-9.73-9.13-13.06-18Zm3,18.64V64H61.07C57.44,73.57,50.29,80.11,47.18,82.61Zm0-21.65v-18H61.79a30.12,30.12,0,0,1,1.48,9.2A32.77,32.77,0,0,1,62,61Zm17.77-18H75.26a31,31,0,0,1,.29,18H65.17a36.28,36.28,0,0,0,1.09-8.83A33.31,33.31,0,0,0,64.95,42.94Zm9.17-3H64c-3.16-8.26-8.85-14.52-12.68-18.05A31.16,31.16,0,0,1,74.12,39.94ZM43.87,18.38V14.74H47.5v3.64H43.87Zm-2.75,3.34c-3.83,3.5-9.66,9.82-12.87,18.23h-11A31.15,31.15,0,0,1,41.11,21.71ZM16.85,64H27.9A46.81,46.81,0,0,0,41,83.15,31.16,31.16,0,0,1,16.85,64ZM51.42,83A46.72,46.72,0,0,0,64.29,64H74.52A31.16,31.16,0,0,1,51.42,83Z"/><path d="M11.86,20.92a1.5,1.5,0,0,0,1.23-1.73,6.85,6.85,0,0,1,5.59-7.9h.05l.17,0a1.5,1.5,0,0,0-.51-3,6.85,6.85,0,0,1-7.9-5.59A1.5,1.5,0,0,0,9.2,1.48a1.49,1.49,0,0,0-.92-.14A1.5,1.5,0,0,0,7,3.07,6.8,6.8,0,0,1,5.89,8.18,6.79,6.79,0,0,1,1.46,11l-.07,0-.14,0a1.5,1.5,0,1,0,.51,3,6.8,6.8,0,0,1,5.11,1.16,6.79,6.79,0,0,1,2.79,4.43,1.48,1.48,0,0,0,1.28,1.21,1.47,1.47,0,0,0,.66.18ZM8.59,12.67a9.87,9.87,0,0,0-1.84-1A9.87,9.87,0,0,0,8.34,9.91,9.89,9.89,0,0,0,9.52,7.66a9.9,9.9,0,0,0,3.87,2.94,9.9,9.9,0,0,0-2.77,4A9.91,9.91,0,0,0,8.59,12.67Z"/>
                                    <path fill={"rgba(129,129,129, 0.8)"} d="M92.14,87.91a6.12,6.12,0,0,1-3.88-7.73,1.71,1.71,0,0,0-3.17-1.26,6.11,6.11,0,0,1-7.73,3.88h-.07l-.12,0a1.5,1.5,0,0,0-.94,2.85,6.12,6.12,0,0,1,3.88,7.73,1.7,1.7,0,0,0,3.17,1.26A6.12,6.12,0,0,1,91,90.69h0l.14.05a1.5,1.5,0,0,0,.95-2.85ZM85,88.35a9.16,9.16,0,0,0-1.77,1.18,9.18,9.18,0,0,0-1.69-3.7A8.91,8.91,0,0,0,85.15,84a9.18,9.18,0,0,0,1.69,3.7A9.25,9.25,0,0,0,85,88.35Z"/>
                                </SvgIcon>
                                Gigs
                            </li>
                            <Divider/>
                            <li
                                className={'menu-item'}
                                onClick={this.selectingMenu}
                                value='4'
                            >
                                <SvgIcon xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 82.32 82.83" style={{width:"1.8rem", height: "1.8rem", position: "relative", top: "0.2rem", marginRight: "1.8rem"}}>
                                    <title>talents</title>
                                    <path fill={"rgba(129,129,129, 0.8)"} d="M33,32.85a13.49,13.49,0,0,0-13.47,13.5A1.49,1.49,0,0,0,21,47.82H45a1.49,1.49,0,0,0,1.5-1.47A13.48,13.48,0,0,0,33,32.85Zm-10.36,12a10.47,10.47,0,0,1,20.72,0Z"/>
                                    <path fill={"rgba(129,129,129, 0.8)"} d="M32.8,31.68a8.17,8.17,0,1,0-8.16-8.17A8.18,8.18,0,0,0,32.8,31.68Zm0-13.33a5.17,5.17,0,1,1-5.16,5.16A5.17,5.17,0,0,1,32.8,18.35Z"/>
                                    <path fill={"rgba(129,129,129, 0.8)"} d="M81.88,73.43,66.24,57.79a1.5,1.5,0,0,0-1.06-.44h0a1.5,1.5,0,0,0-1.06.44l-2.57,2.57-4.62-4.62a33,33,0,1,0-2.16,2.08l4.66,4.66-2.15,2.15a1.5,1.5,0,0,0,0,2.12L72.92,82.39a1.5,1.5,0,0,0,2.12,0l6.84-6.84a1.5,1.5,0,0,0,0-2.12ZM3,33A30,30,0,1,1,33,63,30,30,0,0,1,3,33ZM74,79.21,60.46,65.69,65.18,61,78.7,74.49Z"/>
                                </SvgIcon>
                                Talents
                            </li>
                            <Divider/>
                            <li className={`${!this.props.location.pathname.indexOf("/today/messager") ? 'selected-menu-item-today' : 'menu-item'}`}
                                onClick={this.selectingMenu}
                                value='5'>
                                <SvgIcon xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 86.2 56.13"  style={{width:"1.7rem", height: "1rem", marginRight: "1.9rem"}}>
                                    <title>messages</title>
                                    <path fill={"rgba(129,129,129, 0.8)"} d="M86.13,55.08a1.48,1.48,0,0,0,.08-.46V1.5A1.47,1.47,0,0,0,86.12,1l0-.06a1.49,1.49,0,0,0-.28-.46l0,0h0a1.5,1.5,0,0,0-.44-.32l0,0A1.48,1.48,0,0,0,84.81,0H1.4A1.5,1.5,0,0,0,.88.13h0A1.48,1.48,0,0,0,.41.48h0l0,0A1.5,1.5,0,0,0,.1,1L.08,1A1.47,1.47,0,0,0,0,1.5V54.63a1.48,1.48,0,0,0,.08.47l0,.06a1.5,1.5,0,0,0,.28.46l0,0,0,0,.16.14.07.06L.86,56l.05,0a1.5,1.5,0,0,0,.59.12H84.7a1.48,1.48,0,0,0,.59-.12l.08,0,.18-.1.09-.07.14-.13,0,0,0,0a1.5,1.5,0,0,0,.28-.46ZM3,4.9,28.25,28,3,51.21ZM54.75,26.83a1.43,1.43,0,0,0-.3.22s0,.08-.07.12L43.1,37.47,5.37,3H80.84ZM30.47,30,42.09,40.61a1.5,1.5,0,0,0,2,0L55.59,30.12l25.24,23H5.35Zm27.34-1.9L83.2,4.9V51.23Z"/>
                                </SvgIcon>
                                Messages
                            </li>
                            <Divider/>
                            <li className={`${!this.props.location.pathname.indexOf("/today/calendar") ? 'selected-menu-item-today' : 'menu-item'}`}
                                onClick={this.selectingMenu}
                                value='6'>
                                <SvgIcon xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 85 80" style={{enableBackground:"new 0 0 72.8 86.7", width:"1.6rem", height: "1.6rem", position: "relative", top: "0.2rem", marginRight: "2rem"}}>
                                    <g>
                                        <path fill={"rgba(129,129,129, 0.8)"} d="M79.5,11.2H63.7V4.4c0-0.8-0.7-1.5-1.5-1.5s-1.5,0.7-1.5,1.5v6.8H22.2V4.4c0-0.8-0.7-1.5-1.5-1.5s-1.5,0.7-1.5,1.5v6.8H5.1   c-0.8,0-1.5,0.7-1.5,1.5v62.4c0,0.8,0.7,1.5,1.5,1.5h74.4c0.8,0,1.5-0.7,1.5-1.5V12.7C81,11.9,80.4,11.2,79.5,11.2z M78,73.7H6.6   V14.2h12.6v4.5c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5v-4.5h38.5v4.5c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5v-4.5H78V73.7z"/>
                                        <path fill={"rgba(129,129,129, 0.8)"} d="M63.2,54.1l-5.1-5.1c-0.6-0.6-1.5-0.6-2.1,0c-0.6,0.6-0.6,1.5,0,2.1l5.1,5.1L56,61.3c-0.6,0.6-0.6,1.5,0,2.1   c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l5.1-5.1l5.1,5.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1   l-5.1-5.1l5.1-5.1c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0L63.2,54.1z"/>
                                        <path fill={"rgba(129,129,129, 0.8)"} d="M26.3,28.4H17c-0.8,0-1.5,0.7-1.5,1.5v9.2c0,0.8,0.7,1.5,1.5,1.5h9.2c0.8,0,1.5-0.7,1.5-1.5v-9.2   C27.8,29,27.1,28.4,26.3,28.4z M24.8,37.6h-6.2v-6.2h6.2V37.6z"/>
                                        <path fill={"rgba(129,129,129, 0.8)"} d="M47.3,28.4h-9.2c-0.8,0-1.5,0.7-1.5,1.5v9.2c0,0.8,0.7,1.5,1.5,1.5h9.2c0.8,0,1.5-0.7,1.5-1.5v-9.2   C48.8,29,48.2,28.4,47.3,28.4z M45.8,37.6h-6.2v-6.2h6.2V37.6z"/>
                                        <path fill={"rgba(129,129,129, 0.8)"} d="M26.3,49.6H17c-0.8,0-1.5,0.7-1.5,1.5v9.2c0,0.8,0.7,1.5,1.5,1.5h9.2c0.8,0,1.5-0.7,1.5-1.5v-9.2   C27.8,50.3,27.1,49.6,26.3,49.6z M24.8,58.9h-6.2v-6.2h6.2V58.9z"/>
                                        <path fill={"rgba(129,129,129, 0.8)"} d="M47.3,49.6h-9.2c-0.8,0-1.5,0.7-1.5,1.5v9.2c0,0.8,0.7,1.5,1.5,1.5h9.2c0.8,0,1.5-0.7,1.5-1.5v-9.2   C48.8,50.3,48.2,49.6,47.3,49.6z M45.8,58.9h-6.2v-6.2h6.2V58.9z"/>
                                        <path fill={"rgba(129,129,129, 0.8)"} d="M58.2,28.4c-0.8,0-1.5,0.7-1.5,1.5v9.2c0,0.8,0.7,1.5,1.5,1.5h9.2c0.8,0,1.5-0.7,1.5-1.5v-9.2c0-0.8-0.7-1.5-1.5-1.5   L58.2,28.4z M65.9,37.6h-6.2v-6.2h6.2V37.6z"/>
                                    </g>
                                </SvgIcon>
                                Calendar
                            </li>
                            <Divider/>
                            <li className={`${!this.props.location.pathname.indexOf("/today/payment") ? 'selected-menu-item-today' : 'menu-item'}`}
                                onClick={this.selectingMenu}
                                value='7'
                                style={{display: "flex",
                                        lineHeight: "1.5rem",
                                        paddingTop: "1.4rem",
                                        paddingBottom: "1.4rem",
                                }}>
                                <div style={{marginRight: "1.8rem"}}>
                                    <SvgIcon xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 51.3 92.4" style={{enableBackground:"new 0 0 51.3 92.4", width: "1.9rem", height:"1.9rem", position: "relative", top: ".5rem"}}>
                                        <g>
                                            <path fill="rgba(128,128,128, 0.8)" d="M35.7,43C40.1,40.1,43,35,43,29.4c0-8.7-6.7-15.8-15.2-16.3V1.5c0-0.8-0.7-1.5-1.5-1.5s-1.5,0.7-1.5,1.5v11.4h-6V1.6   c0-0.8-0.7-1.5-1.5-1.5s-1.5,0.7-1.5,1.5v11.3H1.5c-0.8,0-1.4,0.7-1.4,1.5s0.7,1.5,1.4,1.5h4.3l-0.1,60H1.5c-0.8,0-1.5,0.7-1.5,1.5   s0.7,1.5,1.5,1.5h14.3v11.2c0.2,0.8,0.9,1.5,1.7,1.5s1.5-0.7,1.3-1.5V79.9h6v11c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5v-11h5   c10.2,0,18.4-8.3,18.4-18.5C51.2,52,44.5,44.4,35.7,43z M27.2,15.9C36,15.9,43,24.6,40,33.8c-1.8,5.5-7.1,9.1-12.9,9.1l-18.2,0v-27   H27.2z M33.1,75.9H8.8v-31h18.1c0.3,0,0.6,0,0.9,0l0,0h5.1c8.4,0,15.5,7.1,15.5,15.5C48.5,69,41.6,75.9,33.1,75.9z"/>
                                        </g>
                                    </SvgIcon>
                                 </div>
                                Payment management
                            </li>
                        </ul>
                        { this.state.isBooker &&
                            <span className={"menu-create-gig"} onClick={this.createGig}>
                                Create gig
                            </span>
                        }
                    </Col>
                    {
                      block
                    }
                </Row>
            </Grid>
        )
    }
}

export default TodayContainer;