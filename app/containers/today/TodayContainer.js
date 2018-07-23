import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-bootstrap';
import NewsFeed from './NewsFeed';
import ProfileContainer from './profile/ProfileContainer';

class TodayContainer extends Component {
    constructor(props) {
        super(props);

        this.state ={
            head: 1,
            menu: 1,
        }
    }


    selectingMenu = event => {
        this.setState({
            menu: event.target.value
        })
    };

    render() {
        return (
            <Grid style={{
                marginTop: 20
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
                                className={`${this.state.menu === 1 ? 'selected-menu-item-today' : 'menu-item'}`}
                                onClick={this.selectingMenu}
                                value='1'
                            >
                                Today
                            </li>
                            <li
                                className={`${this.state.menu === 2 ? 'selected-menu-item-today' : 'menu-item'}`}
                                onClick={this.selectingMenu}
                                value='2'
                            >
                                Profile
                            </li>
                        </ul>
                    </Col>
                    {
                        this.state.menu === 1 ? <NewsFeed/> : <ProfileContainer/>
                    }
                </Row>
            </Grid>
        )
    }
};

export default TodayContainer;