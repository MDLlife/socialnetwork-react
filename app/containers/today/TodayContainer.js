import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import NewsFeed from './NewsFeed';
import ProfileContainer from './profile/ProfileContainer';
import LoginStore from "store/LoginStore";
import Messager from './messager/Messager';

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
            window.location.href = '/gig-creation';
        } else if (event.target.value === 4) {
            window.location.href = '/search';
        } else if (event.target.value === 5) {
            window.location.href = '/today/messager';
        } else {
            window.location.href = '/today';
        }
    }

    render() {
        let index = this.props.params && this.props.params.index ? this.props.params.index : '';
        let value = this.props.params && this.props.params.value ? this.props.params.value : '';
        // console.log("index,",index," value,",value);

        let block;

        if (this.props.location.pathname.indexOf("/today/messager")){
            block = index === '' || index === 'genre' ? <NewsFeed index={index} value={value}/> :
                <ProfileContainer index={index} value={value}/>
        } else {
            block = <Messager/>
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
                                className={`${index === '' || index === 'genre' ? 'selected-menu-item-today' : 'menu-item'}`}
                                onClick={this.selectingMenu}
                                value='1'
                            >
                                Today
                            </li>
                            <li
                                className={`${index === 'fan' || index === 'booker' || index === 'talent' ? 'selected-menu-item-today' : 'menu-item'}`}
                                onClick={this.selectingMenu}
                                value='2'
                            >
                                Profile
                            </li>
                            <li
                                className={`${index === 'gig-creation' ? 'selected-menu-item-today' : 'menu-item'}`}
                                onClick={this.selectingMenu}
                                value='3'
                            >
                                Create Gig
                            </li>
                            <li
                                className={'menu-item'}
                                onClick={this.selectingMenu}
                                value='4'
                            >
                                Search Talents
                            </li>
                            <li className={'menu-item'}
                                onClick={this.selectingMenu}
                                value='5'>
                                Messenger
                            </li>
                        </ul>
                    </Col>
                    {
                      block
                    }
                </Row>
            </Grid>
        )
    }
};

export default TodayContainer;