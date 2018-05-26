import React from 'util/safe-react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import DashboardIcon from 'material-ui/svg-icons/social/poll';


const Menu = ({resources}) => (
    <Paper style={{
        flex: '0 0 15em', order: -1,
        position: 'fixed',
        zIndex: '1000',
        left: '0px',
        top: '64px',
        transform: 'translate(0px,0px)',
        overflow: 'auto',
        width: '256px',
        height: '100%',

    }}>
        <List>

            <a href={`/`}>
                <ListItem key="home" primaryText="Home"
                          leftIcon={<DashboardIcon/>}/>
            </a>

            <a href={`https://mdllife.on.spiceworks.com/portal`}
               target="_blank">
                <ListItem primaryText="Support" leftIcon={<DashboardIcon/>}/>
            </a>


            <Paper style={{
                flex: '0 0 15em',
                order: -1,
                boxShadow: 'none !important',
                borderTop: '1px solid #919398 !important'
            }}>
                <List style={{padding: 0}}>
                </List>
            </Paper>
            


        </List>
    </Paper>
);

Menu.propTypes = {
    resources: PropTypes.array,
};

export default Menu;