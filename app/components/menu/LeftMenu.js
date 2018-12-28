import * as React from 'react';
import {Collapse} from 'react-bootstrap';
import SvgIcon from 'material-ui/SvgIcon';
import {withRouter} from "react-router";
import Divider from 'material-ui/Divider';
import LoginStore from "store/LoginStore";

import TodayIcon from 'components/menu/icons/TodayIcon';
import GigsIcon from 'components/menu/icons/GigsIcon';
import TalentsIcon from 'components/menu/icons/TalentsIcon';
import CalendarIcon from 'components/menu/icons/CalendarIcon';
import MessagesIcon from 'components/menu/icons/MessagesIcon';
import ProfileIcon from 'components/menu/icons/ProfileIcon';
import PaymentIcon from 'components/menu/icons/PaymentIcon';
import NotificationsIcon from 'components/menu/icons/NotificationsIcon';

class Menu extends React.Component {

    state = {
        menuOpened: true
    };

    constructor(props) {
        super(props)
    }


    menuClick = () => {
        this.setState({menuOpened: !this.state.menuOpened});
    };

    nextPage = (href) => {
        window.location.href = href;
    };

    createGig = () => {
        window.location.href = '/gig-creation';
    };


    componentDidMount() {
        const isBooker = !(LoginStore.user && LoginStore.user.registration_booker_complete);
        const isTalent = !(LoginStore.user && LoginStore.user.registration_talent_complete);

        this.setState({
            isBooker: isBooker,
            isTalent: isTalent,
        })
    }

    render() {
        const {t, i18n} = this.props;

        let index = this.props.params && this.props.params.index ? this.props.params.index : '';

        const isTalent = !(LoginStore.user && LoginStore.user.registration_talent_complete);
        const isBooker = !(LoginStore.user && LoginStore.user.registration_booker_complete);

        let profileLink;
        let gigsLink;

        if (isBooker) {
            profileLink = '/today/me/booker';
            gigsLink = '/booker'
        } else if (isTalent) {
            profileLink = '/today/me/talent';
            gigsLink = '/talent'
        } else {
            profileLink = '/today/me/fan';
            gigsLink = ''
        }


        return (
            <div>
                <div className={"menu-show"}>
                    <span>Menu</span>
                    <SvgIcon style={{
                        marginTop: "1.4rem",
                        marginRight: ".6rem",
                        cursor: "pointer",
                        transform: this.state.menuOpened ? "rotate(0deg)" : "rotate(180deg)",
                    }}
                             onClick={this.menuClick}
                    >
                        <path fill="#808080" xmlns="http://www.w3.org/2000/svg"
                              d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                        <path xmlns="http://www.w3.org/2000/svg" fill="none" d="M0 0h24v24H0V0z"/>
                    </SvgIcon>
                </div>
                <Collapse in={this.state.menuOpened}>
                    <div className={'menu-list'}
                    >
                        <div onClick={this.nextPage.bind(this, '/today')}
                             className={`${(index === '' || index === 'genre') && (this.props.location.pathname.indexOf("/today/messager") && this.props.location.pathname.indexOf("/today/calendar") && this.props.location.pathname.indexOf("/today/payment") && this.props.location.pathname.indexOf("/gigs")) ? 'selected-list-menu-item' : 'menu-list-item'}`}>
                            <TodayIcon/>
                            <span>{t('today')}</span>
                        </div>
                        <Divider/>

                        <div onClick={this.nextPage.bind(this, profileLink)}
                             className={`${index === 'fan' || index === 'booker' || index === 'talent' ? 'selected-list-menu-item' : 'menu-list-item'}`}>
                            <ProfileIcon/>
                            <span>{t('profile')}</span>
                        </div>
                        <Divider/>

                        <div onClick={this.nextPage.bind(this, '/gigs' + gigsLink)}
                             className={`${!this.props.location.pathname.indexOf("/gigs") ? 'selected-list-menu-item' : 'menu-list-item'}`}>
                            <GigsIcon/>
                            <span>Gigs</span>
                        </div>
                        <Divider/>

                        <div onClick={this.nextPage.bind(this, '/search')} className="menu-list-item">
                            <TalentsIcon/>
                            <span>Talents</span>
                        </div>
                        <Divider/>

                        <div onClick={this.nextPage.bind(this, '/today/calendar')}
                             className={`${!this.props.location.pathname.indexOf("/today/calendar") ? 'selected-list-menu-item' : 'menu-list-item'}`}>
                            <CalendarIcon/>
                            <span>Calendar</span>
                        </div>
                        <Divider/>

                        <div onClick={this.nextPage.bind(this, '/today/messager')}
                             className={`${!this.props.location.pathname.indexOf("/today/messager") ? 'selected-list-menu-item' : 'menu-list-item'}`}>
                            <MessagesIcon/>
                            <span>Messages</span>
                        </div>
                        <Divider/>

                        <div onClick={this.nextPage.bind(this, '/today/payment' + (isTalent ? '/talent' : '/booker'))}
                             className={`${!this.props.location.pathname.indexOf("/today/payment") ? 'selected-list-menu-item' : 'menu-list-item'}`}
                             style={{
                                 display: "flex",
                                 lineHeight: "2rem",
                                 paddingTop: "2rem",
                                 paddingBottom: "2rem",
                             }}>
                            <div style={{marginRight: "1.8rem"}}>
                                <PaymentIcon/>
                            </div>
                            <span>Payment management</span>
                        </div>
                        <Divider/>

                        <div className="menu-list-item">
                            <NotificationsIcon/>
                            <span>Notifications</span>
                        </div>
                        <Divider/>

                        {this.state.isBooker &&
                        <span className={"menu-create-gig"} onClick={this.createGig}>
                                Create gig
                        </span>
                        }

                    </div>

                </Collapse>


            </div>
        )
    }
}

export default withRouter(Menu);
