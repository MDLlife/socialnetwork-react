import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import NewsFeed from './NewsFeed';
import ProfileContainer from './profile/ProfileContainer';

class TodayContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            head: 1,
            menu: 1,
        }
    }


    selectingMenu = event => {
        if (event.target.value === 2) {
            window.location.href = '/today/me/profile'
        } else {
            window.location.href = '/today'
        }
    };

    render() {
        let index = this.props.params && this.props.params.index ? this.props.params.index : '';
        let value = this.props.params && this.props.params.value ? this.props.params.value : '';
        // console.log("index,",index," value,",value);

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
                                className={`${index === '' || index === 'genre' ? 'selected-menu-item-today' : 'menu-item'}`}
                                onClick={this.selectingMenu}
                                value='1'
                            >
                                Today
                            </li>
                            <li
                                className={`${index === 'profile' ? 'selected-menu-item-today' : 'menu-item'}`}
                                onClick={this.selectingMenu}
                                value='2'
                            >
                                Profile
                            </li>
                        </ul>
                    </Col>
                    {
                        index === '' || index === 'genre'  ? <NewsFeed index={index} value={value}/> :
                            <ProfileContainer index={index} value={value}/>
                    }
                </Row>
            </Grid>
        )
    }
};

export default TodayContainer;