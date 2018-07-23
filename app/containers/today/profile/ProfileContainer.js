import React, {Component} from 'react';
import PropTypes from 'prop-types';
import EditProfile from './EditProfile';
import Profile from './Profile';

class ProfileContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            edit: true
        }
    }

    render() {
        return this.state.edit === true ? <EditProfile/> : <Profile/>
    }
}

export default ProfileContainer;