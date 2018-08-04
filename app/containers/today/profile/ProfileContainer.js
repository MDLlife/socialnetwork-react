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
        var targetProfile = <ProfileFan/>
        if(this.props.index === 'talent'){
            targetProfile = <ProfileTalent/>
        } else if (this.props.index === 'booker'){
          targetProfile = <ProfileBooker/>
        }

        var targetComponent = this.state.edit === true ? <EditProfile/> : targetProfile;

        return targetComponent;
    }
}

export default ProfileContainer;