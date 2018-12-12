import React, {Component} from 'react';
import EditProfile from './EditProfile';


import ProfileFan from './ProfileFan';
import ProfileBooker from './ProfileBooker';
import ProfileTalent from './ProfileTalent';

class ProfileContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            edit: false
        }
    }

    render() {
        const {t, i18n} = this.props;
        const translateProps = {
            t: t,
            i18n: i18n,
        };

        var targetProfile = <ProfileFan {...translateProps}/>
        if(this.props.index === 'talent'){
            targetProfile = <ProfileTalent {...translateProps}/>
        } else if (this.props.index === 'booker'){
          targetProfile = <ProfileBooker {...translateProps}/>
        }

        var targetComponent = this.state.edit === true ? <EditProfile/> : targetProfile;

        return targetComponent;
    }
}

export default ProfileContainer;