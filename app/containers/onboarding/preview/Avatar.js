import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginStore from 'store/LoginStore';
import EditIcon from 'material-ui/svg-icons/content/create';
import AvatarProfile from 'material-ui/Avatar';

class Avatar extends Component {
    render() {
        const {t} = this.props;

        const username = LoginStore.user && LoginStore.user.username ? LoginStore.user.username : '';
        const avatarurl = LoginStore.user && LoginStore.user.avatarurl ? LoginStore.user.avatarurl : '';
        return (
            <div
                style={{
                    background: "url(/static/img/IntroLoginBG.jpg) left center",
                    width: "100%",
                    height: 285,
                    marginRight: 10,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        padding: 10,
                        color: 'white',
                    }}
                >
                    {t('talent')}
                </div>
                <div>
                    <div
                        style={{
                            backgroundColor: "#00C245",
                            height: 20,
                            width: 20,
                            borderRadius: "50%",
                            position: "absolute",
                            left: 75,
                            top: 54,
                            border: "1px solid white"
                        }}
                    />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <AvatarProfile
                        src={avatarurl}
                        alt=""
                        style={{
                            borderRadius: "50%",
                            border: "1px solid blue",
                            height: 156,
                            width: 156
                        }}
                    />
                </div>
            </div>
                <div
                    style={{
                        display: "grid",
                        justifyContent: "center",
                        color: "white",
                        justifyItems: "center"
                    }}
                >
                    <div style={{ fontSize: 24 }}>{username}</div>
                    <div>New York, USA</div>
                    <div>{t('age_category_mature')}</div>
                </div>
            </div>
        )
    }
}

export default Avatar;
