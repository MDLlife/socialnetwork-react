import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col} from 'react-bootstrap';
import EditIcon from 'material-ui/svg-icons/content/create';
import LoginStore from "store/LoginStore";
import Avatar from 'material-ui/Avatar';
import TrustScore from 'components/profile/booker/TrustScore';
import CompletedGigs from 'components/profile/booker/CompletedGigs';
import Carousel from 'components/profile/booker/Carousel';
import CarouselImgItem from 'components/profile/booker/CarouselImgItem';
import CarouselItemBlock from "../../../components/profile/booker/CarouselItemBlock";
import MyGigs from 'components/profile/booker/MyGigs';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const username = LoginStore.user && LoginStore.user.username ? LoginStore.user.username : '';
        const avatarurl = LoginStore.user && LoginStore.user.avatarurl ? LoginStore.user.avatarurl : '//via.placeholder.com/145x145';

        this.setState({
            avatarurl: avatarurl,
            username: username,
        })
    }

    render() {

        return (
            <Col xs={8}>
                <div
                    style={{
                        display: 'flex'
                    }}
                >
                    <div className={"profile-booker-left-header-container"}>
                        <div
                        style={{
                            background: 'url(/static/img/IntroLoginBG.jpg) left center',
                            width:"23.1rem",
                            height: "28.5rem",
                            borderRadius: ".5rem .5rem 0 0",
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: "1rem"
                            }}
                        >
                            <div style={{color: 'white'}}>
                                Booker
                            </div>
                            <EditIcon
                                color='white'
                                style={{
                                    height: 18,
                                    cursor: 'pointer',
                                }}
                            />
                        </div>
                        <div>
                            <div
                                style={{
                                    backgroundColor: '#00C245',
                                    height: "1.2rem",
                                    width: "1.2rem",
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    left: "7rem",
                                    top: "5.9rem",
                                    border: '1px solid white'
                                }}
                            />
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                <Avatar src={this.state.avatarurl} size={156} style={{
                                    borderRadius: '50%',
                                    border: '1px solid blue',
                                    height: 156
                                }}/>
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'grid',
                                justifyContent: 'center',
                                color: 'white',
                                justifyItems: 'center'
                            }}
                        >
                            <div style={{fontSize: 24}}>{this.state.username}</div>
                            <div>New York, USA</div>
                            <div>Agency Name</div>
                        </div>
                    </div>
                        <div
                            style={{
                                width: '100%',
                                backgroundColor: 'white',
                                borderRadius: "0 0 .5rem .5rem",
                                position: 'relative'
                            }}
                        >
                            <div
                                style={{
                                    padding: "1.8rem 0 1.4rem 1.7rem"
                                }}
                            >
                                <p style={{fontSize: "1.6rem", margin: 0, lineHeight: "1.3rem"}}>Medals</p>
                            </div>
                            <div
                                style={{
                                    textAlign: 'center'
                                }}
                            >
                                <div style={{display:"flex", flexWrap: "no-wrap", margin: "0 3rem 0 3rem", paddingBottom: "1.3rem"}}>
                                    <img
                                        src="/static/img/medals_s-18.png"
                                        alt=""
                                        style={{width: "6.4rem", height: "6rem"}}
                                    />
                                    <p style={{fontSize: "1.2rem", margin:0, paddingTop: ".5rem"}}>Congratulations! You are a part of MDL now!</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection:"column", width: "100%"}}>
                        <div style={{display: "flex", width: "100%", height: "6.9rem"}}>
                            <TrustScore
                                score={4.5}
                            />
                            <CompletedGigs
                                gigs={15}
                            />
                        </div>
                        <Carousel
                            name={"Talents I work with"}
                            list={[{info:"Models"}, {info: "Actors"}, {info: "Dancers"}, {info: "Singers"}, {info: "Artists"}]}
                            item={CarouselItemBlock}
                        />
                        <Carousel
                            name={"My favorite talents"}
                            list={[{name:"Kristina", image: ""}, {name:"Kristina", image: ""}, {name:"Kristina", image: ""}, {name:"Kristina", image: ""}, {name:"Sophie", image: ""}]}
                            item={CarouselImgItem}
                        />
                    </div>
                </div>
                <MyGigs />
            </Col>
        )
    }
}

export default connect()(Profile);