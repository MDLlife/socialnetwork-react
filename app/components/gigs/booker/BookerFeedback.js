import * as React from 'react';
import {Col} from 'react-bootstrap';
import SvgIcon from 'material-ui/SvgIcon';
import Avatar from 'material-ui/Avatar';
import {getDateGig} from 'util/dateParser';
import TextField from 'material-ui/TextField';
import LoginStore from 'store/LoginStore';

class BookerFeedback extends React.Component {

    state = {
        support: '',
        conditions: '',
        time: '',
        amount: '',
        extra: '',
    };

    componentDidMount() {
        const username = LoginStore.user && LoginStore.user.username ? LoginStore.user.username : '';
        const avatarurl = LoginStore.user && LoginStore.user.avatarurl ? LoginStore.user.avatarurl : '';

        this.setState({
            username,avatarurl
        })
    }

    handleClick = (name, val) => {
        this.setState({[name]: val});
    };

    render() {


        return (
            <Col md={9}>
                <div className={"gigs-feedback-container"}>
                    <div className={"back-header"}
                         style={{
                             justifyContent: "space-between",
                             paddingTop: ".2rem",
                             paddingBottom: ".2rem",
                             alignItems: "center"
                         }}
                    >
                        <div>
                            <SvgIcon style={{width: "1.5rem", height: "1.5rem"}} viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                            </SvgIcon>
                            <h5>
                                Back
                            </h5>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "22.5rem"
                            }}
                        >
                            <div style={{
                                borderRadius: "50%",
                                backgroundColor: "rgba(128,128,128,0.1)",
                                width: "3rem",
                                height: "3rem",
                                margin: " 0 .9rem 0 1rem",
                            }}
                            >
                                <SvgIcon viewBox="0 0 24 24"
                                         style={{
                                             width: "3rem",
                                             height: "3rem",
                                             position: "relative",
                                             right: ".1rem"
                                         }}
                                >
                                    <path fill={"rgba(128,128,128,0.4)"}
                                          d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
                                    <path fill="none" d="M0 0h24v24H0V0z"/>
                                </SvgIcon>
                            </div>
                            <Avatar src={this.state.avatarurl} size={40} style={{
                                borderRadius: '50%',
                                border: '1px solid blue',
                            }}/>
                            <div style={{
                                borderRadius: "50%",
                                backgroundColor: "rgba(128,128,128,0.1)",
                                width: "3rem",
                                height: "3rem",
                                margin: " 0 1rem 0 .9rem",
                            }}>
                                <SvgIcon width="3rem" height="3rem" viewBox="0 0 24 24"
                                         style={{
                                             width: "3rem",
                                             height: "3rem",
                                             position: "relative",
                                             left: ".1rem"
                                         }}
                                >
                                    <path fill={"rgba(128,128,128,0.4)"}
                                          d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                                    <path fill="none" d="M0 0h24v24H0V0z"/>
                                </SvgIcon>
                            </div>
                        </div>
                    </div>
                    <div className={"info-block"}>
                        <div className={"info-block-booker"}>
                            <Avatar src={this.state.avatarurl} size={114} style={{
                                borderRadius: '50%',
                                border: '1px solid blue',
                            }}/>
                            <div className={"name-block"}>
                                    <span
                                        style={{
                                            borderRadius: "1.1rem",
                                            fontSize: "1.2rem",
                                            backgroundColor: "#61116a",
                                            color: "#fff",
                                            padding: "0.5rem 1.1rem",
                                            fontFamily: '"Gilroy Medium", sans-serif',
                                            lineHeight: ".9rem"
                                        }}
                                    >Model</span>
                                <h2 style={{marginTop: ".8rem"}}>{this.state.username}</h2>
                                <div>
                                    <SvgIcon style={{height: '1rem', width: '1rem', marginRight: '.1rem'}}
                                             viewBox="0 0 32.93 31.59">
                                        <title>star</title>
                                        <path fill="#61116a"
                                              d="M32.86,11.89a2.46,2.46,0,0,0-2-1.68L22.48,9,18.74,1.41A2.47,2.47,0,0,0,16.52,0h0A2.46,2.46,0,0,0,14.3,1.41L10.55,9,2.18,10.21A2.47,2.47,0,0,0,.81,14.43l6.06,5.91L5.43,28.72a2.48,2.48,0,0,0,2.44,2.9A2.49,2.49,0,0,0,9,31.35l7.7-3.9L24,31.29a2.48,2.48,0,0,0,3.6-2.61l-1.43-8.34,6.06-5.91A2.46,2.46,0,0,0,32.86,11.89Z"
                                              transform="translate(-0.06 -0.03)"/>
                                    </SvgIcon>
                                    <SvgIcon style={{height: '1rem', width: '1rem', marginRight: '.1rem'}}
                                             viewBox="0 0 32.93 31.59">
                                        <title>star</title>
                                        <path fill="#61116a"
                                              d="M32.86,11.89a2.46,2.46,0,0,0-2-1.68L22.48,9,18.74,1.41A2.47,2.47,0,0,0,16.52,0h0A2.46,2.46,0,0,0,14.3,1.41L10.55,9,2.18,10.21A2.47,2.47,0,0,0,.81,14.43l6.06,5.91L5.43,28.72a2.48,2.48,0,0,0,2.44,2.9A2.49,2.49,0,0,0,9,31.35l7.7-3.9L24,31.29a2.48,2.48,0,0,0,3.6-2.61l-1.43-8.34,6.06-5.91A2.46,2.46,0,0,0,32.86,11.89Z"
                                              transform="translate(-0.06 -0.03)"/>
                                    </SvgIcon>
                                    <SvgIcon style={{height: '1rem', width: '1rem', marginRight: '.1rem'}}
                                             viewBox="0 0 32.93 31.59">
                                        <title>star</title>
                                        <path fill="#61116a"
                                              d="M32.86,11.89a2.46,2.46,0,0,0-2-1.68L22.48,9,18.74,1.41A2.47,2.47,0,0,0,16.52,0h0A2.46,2.46,0,0,0,14.3,1.41L10.55,9,2.18,10.21A2.47,2.47,0,0,0,.81,14.43l6.06,5.91L5.43,28.72a2.48,2.48,0,0,0,2.44,2.9A2.49,2.49,0,0,0,9,31.35l7.7-3.9L24,31.29a2.48,2.48,0,0,0,3.6-2.61l-1.43-8.34,6.06-5.91A2.46,2.46,0,0,0,32.86,11.89Z"
                                              transform="translate(-0.06 -0.03)"/>
                                    </SvgIcon>
                                    <SvgIcon style={{height: '1rem', width: '1rem', marginRight: '.1rem'}}
                                             viewBox="0 0 32.93 31.59">
                                        <title>star</title>
                                        <path fill="#61116a"
                                              d="M32.86,11.89a2.46,2.46,0,0,0-2-1.68L22.48,9,18.74,1.41A2.47,2.47,0,0,0,16.52,0h0A2.46,2.46,0,0,0,14.3,1.41L10.55,9,2.18,10.21A2.47,2.47,0,0,0,.81,14.43l6.06,5.91L5.43,28.72a2.48,2.48,0,0,0,2.44,2.9A2.49,2.49,0,0,0,9,31.35l7.7-3.9L24,31.29a2.48,2.48,0,0,0,3.6-2.61l-1.43-8.34,6.06-5.91A2.46,2.46,0,0,0,32.86,11.89Z"
                                              transform="translate(-0.06 -0.03)"/>
                                    </SvgIcon>
                                    <SvgIcon style={{height: '1rem', width: '1rem', marginRight: '.1rem'}}
                                             viewBox="0 0 32.93 31.59">
                                        <title>star</title>
                                        <path fill="#61116a"
                                              d="M32.86,11.89a2.46,2.46,0,0,0-2-1.68L22.48,9,18.74,1.41A2.47,2.47,0,0,0,16.52,0h0A2.46,2.46,0,0,0,14.3,1.41L10.55,9,2.18,10.21A2.47,2.47,0,0,0,.81,14.43l6.06,5.91L5.43,28.72a2.48,2.48,0,0,0,2.44,2.9A2.49,2.49,0,0,0,9,31.35l7.7-3.9L24,31.29a2.48,2.48,0,0,0,3.6-2.61l-1.43-8.34,6.06-5.91A2.46,2.46,0,0,0,32.86,11.89Z"
                                              transform="translate(-0.06 -0.03)"/>
                                    </SvgIcon>
                                    <p>5.0/2 gigs</p>
                                </div>
                            </div>
                        </div>
                        <div className={"gig-info"}>
                            <div className={'gig-card-header'}>
                                <h5><span style={{color: "#000"}}>1256 $</span> total budget</h5>
                            </div>
                            <div className={"gig-card-name"}>
                                <h4 className={'yellow'}>TV Commercial</h4>
                            </div>
                            <div className={"gig-card-date"}>
                                <SvgIcon style={{
                                    height: "1.8rem",
                                    width: "1.8rem",
                                    position: "relative",
                                    top: "-0.3rem",
                                    marginRight: "0.8rem"
                                }} viewBox={"0 0 24 24"}>
                                    <path fill={"none"} d="M0 0h24v24H0V0z"/>
                                    <path fill={"rgba(128,128,128, 0.5)"}
                                          d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z"/>
                                </SvgIcon>
                                <h5>{getDateGig('9-14-2018')}</h5>
                            </div>
                            <div className={"gig-card-location"}>
                                <SvgIcon style={{
                                    height: "2rem",
                                    width: "2rem",
                                    position: "relative",
                                    top: "-0.3rem",
                                    marginRight: "0.8rem"
                                }} viewBox={"0 0 24 24"}>
                                    <path fill={"none"} d={"M0 0h24v24H0V0z"}/>
                                    <path fill={"rgba(128,128,128, 0.5)"}
                                          d={"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"}/>
                                    <circle fill={"rgba(128,128,128, 0.5)"} cx={"12"} cy={"9"} r={"2.5"}/>
                                </SvgIcon>
                                <h5>
                                    Longnan, China
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className={"emotions-block"}>
                        <h4>Arrived on time<span>*</span></h4>
                        <div className={'pills-picker'}>
                            <span className={this.state.time === 'Yes' ? 'active' : ''}
                                  onClick={this.handleClick.bind(this, 'time', 'Yes')}>Yes</span>
                            <span className={this.state.time === 'No' ? 'active' : ''}
                                  onClick={this.handleClick.bind(this, 'time', 'No')}>No</span>
                        </div>
                        <h4>Accurate presentation materials<span>*</span></h4>
                        <div className={'pills-picker'}>
                            <span className={this.state.amount === 'Yes' ? 'active' : ''}
                                  onClick={this.handleClick.bind(this, 'amount', 'Yes')}>Yes</span>
                            <span className={this.state.amount === 'No' ? 'active' : ''}
                                  onClick={this.handleClick.bind(this, 'amount', 'No')}>No</span>
                        </div>
                        <h4>Performed well<span>*</span></h4>
                        <div className={"smiles"}>
                            <div className={this.state.support === 'Awful' ? 'active' : ''}
                                 onClick={this.handleClick.bind(this, 'support', 'Awful')}>
                                <img src="/static/img/005-confused.svg" alt=""/>
                                <h6>Awful</h6>
                            </div>
                            <div className={this.state.support === 'Bad' ? 'active' : ''}
                                 onClick={this.handleClick.bind(this, 'support', 'Bad')}>
                                <img src="/static/img/003-sad.svg" alt=""/>
                                <h6>Bad</h6>
                            </div>
                            <div className={this.state.support === 'Normally' ? 'active' : ''}
                                 onClick={this.handleClick.bind(this, 'support', 'Normally')}>
                                <img src="/static/img/002-neutral.svg" alt=""/>
                                <h6>Normally</h6>
                            </div>
                            <div className={this.state.support === 'Fine' ? 'active' : ''}
                                 onClick={this.handleClick.bind(this, 'support', 'Fine')}>
                                <img src="/static/img/004-grinning.svg" alt=""/>
                                <h6>Fine</h6>
                            </div>
                            <div className={this.state.support === 'Super' ? 'active' : ''}
                                 onClick={this.handleClick.bind(this, 'support', 'Super')}>
                                <img src="/static/img/001-in-love.svg" alt=""/>
                                <h6>Super</h6>
                            </div>
                        </div>
                        <h4>Behaved well<span>*</span></h4>
                        <div className={"smiles"} style={{marginBottom: '3rem'}}>
                            <div className={this.state.conditions === 'Awful' ? 'active' : ''}
                                 onClick={this.handleClick.bind(this, 'conditions', 'Awful')}>
                                <img src="/static/img/005-confused.svg" alt=""/>
                                <h6>Awful</h6>
                            </div>
                            <div className={this.state.conditions === 'Bad' ? 'active' : ''}
                                 onClick={this.handleClick.bind(this, 'conditions', 'Bad')}>
                                <img src="/static/img/003-sad.svg" alt=""/>
                                <h6>Bad</h6>
                            </div>
                            <div className={this.state.conditions === 'Normally' ? 'active' : ''}
                                 onClick={this.handleClick.bind(this, 'conditions', 'Normally')}>
                                <img src="/static/img/002-neutral.svg" alt=""/>
                                <h6>Normally</h6>
                            </div>
                            <div className={this.state.conditions === 'Fine' ? 'active' : ''}
                                 onClick={this.handleClick.bind(this, 'conditions', 'Fine')}>
                                <img src="/static/img/004-grinning.svg" alt=""/>
                                <h6>Fine</h6>
                            </div>
                            <div className={this.state.conditions === 'Super' ? 'active' : ''}
                                 onClick={this.handleClick.bind(this, 'conditions', 'Super')}>
                                <img src="/static/img/001-in-love.svg" alt=""/>
                                <h6>Super</h6>
                            </div>
                        </div>
                    </div>
                    <div className={"feedback-field-block"}>
                        <h6>Additional feedback</h6>
                        <TextField
                            multiLine={true}
                            fullWidth={true}
                            underlineFocusStyle={{
                                borderColor: "#61116a"
                            }}
                        />
                    </div>
                    <div className={"submit-button-block"}>
                        <span>Submit</span>
                    </div>
                </div>
            </Col>
        )
    }
}

export default BookerFeedback;