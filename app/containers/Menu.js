import React, {Component} from 'react';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class ProfileMenu extends Component {

     onClickSignout(){
         if (typeof window !== 'undefined') {
            window.location.href = '/logout'
        }
    }

    render(){

        return (
            <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                {/*<MenuItem primaryText="Refresh"/>*/}
                {/*<MenuItem primaryText="Send feedback"/>*/}
                {/*<MenuItem primaryText="Settings"/>*/}
                {/*<MenuItem primaryText="Help"/>*/}
                <MenuItem onClick={this.onClickSignout} primaryText="Logout"/>
            </IconMenu>
        )
    }


}
ProfileMenu.propTypes = {
};


export default ProfileMenu
