import React, { Component } from 'util/safe-react';
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer'
import { spacing, typography, zIndex } from 'material-ui/styles'

import Menu from './Menu'

const styles = {
    logo: {
        cursor: 'pointer',
        fontSize: 16,
        color: typography.textFullWhite,
        lineHeight: `${spacing.desktopKeylineIncrement}px`,
        fontWeight: typography.fontWeightLight,
        backgroundColor: '#166e66',
        paddingLeft: spacing.desktopGutter,
        marginBottom: 8,
    },
    version: {
        paddingLeft: spacing.desktopGutterLess,
        fontSize: 14,
    },
}

class AppNavDrawer extends Component {
    static propTypes = {
        docked: PropTypes.bool.isRequired,
        location: PropTypes.object.isRequired,
        onChangeList: PropTypes.func.isRequired,
        onRequestChangeNavDrawer: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired,
        style: PropTypes.object,
    }
    
    static contextTypes = {
        router: PropTypes.object.isRequired,
    }

    showHome () {
        if (typeof window !== 'undefined') {
            window.location.href = '/'
        }
    }
    
    render () {
        const {
            docked,
            onRequestChangeNavDrawer,
            open,
            style,
        } = this.props
        
        return (
            <Drawer
                style={style}
                docked={docked}
                open={open}
                onRequestChange={onRequestChangeNavDrawer}
                containerStyle={{zIndex: zIndex.drawer - 100}}
            >
                <a href="/#" onClick={this.showHome}>
                    <div style={styles.logo}>
                        M D L
                    </div>
                </a>
                <Menu/>
            </Drawer>
        )
    }
}

export default AppNavDrawer
