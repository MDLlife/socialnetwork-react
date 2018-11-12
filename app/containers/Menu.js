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

            <MenuItem primaryText="English" onClick={() => props.changeLanguage('en')}/>

            <MenuItem primaryText="简体" onClick={() => props.changeLanguage('zh')}/>
            <MenuItem primaryText="繁體" onClick={() => props.changeLanguage('zh-hant')}/>

            <MenuItem primaryText="Spanish" onClick={() => props.changeLanguage('es')}/>
            <MenuItem primaryText="Portuguese" onClick={() => props.changeLanguage('pt')}/>

            <MenuItem primaryText="Russian" onClick={() => props.changeLanguage('ru')}/>

            <MenuItem primaryText="عربي" onClick={() => props.changeLanguage('ar')}/>

            <MenuItem primaryText="German" onClick={() => props.changeLanguage('de')}/>

            <MenuItem primaryText="Indonesian" onClick={() => props.changeLanguage('id')}/>

            <MenuItem primaryText="日本語" onClick={() => props.changeLanguage('ja')}/>

            <MenuItem primaryText="한글" onClick={() => props.changeLanguage('kr')}/>
        </IconMenu>
    )
}
ProfileMenu.propTypes = {};


export default ProfileMenu
