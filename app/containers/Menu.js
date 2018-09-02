import React, {Component} from 'react';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const ProfileMenu = props => {
    return (
        <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
            <MenuItem primaryText="Log out" onClick={() => {window.location.href = '/logout' }}/>
        </IconMenu>
    )
}
ProfileMenu.propTypes = {
};


export default ProfileMenu
