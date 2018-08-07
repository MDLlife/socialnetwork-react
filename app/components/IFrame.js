import React from 'util/safe-react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {iframeResizer} from 'iframe-resizer'

class IFrame extends React.Component {

    static propTypes = {
        style: PropTypes.object,
        head: PropTypes.node,
        initialContent: PropTypes.string,
        mountTarget: PropTypes.string,
        contentDidMount: PropTypes.func,
        contentDidUpdate: PropTypes.func,
        children: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.arrayOf(PropTypes.element),
        ]),
    }

    constructor(props, context) {
        super(props, context)
        this._isMounted = false
    }

    componentDidMount() {
        this._isMounted = true
        this.renderFrameContents()
    }

    componentWillUpdate() {
        console.log(parent.location.href, location.href, location.href.indexOf("?session=") !== -1, this._isMounted, this._setInitialContent)

        if (location.href && location.href.indexOf("?session=") !== -1) {
            console.log("IFrame same parent window :O :O, will refresh parent")
            parent.window.location.reload()
        }
    }

    componentDidUpdate() {


        this.renderFrameContents()
    }

    getDoc() {
        return ReactDOM.findDOMNode(this).contentDocument
    }

    renderFrameContents() {
        if (!this._isMounted) {
            return
        }

        const doc = this.getDoc()
        if (doc && doc.readyState === 'complete') {
            if (doc.querySelector('div') === null) {
                this._setInitialContent = false
            }

            const initialRender = !this._setInitialContent

            if (initialRender) {
                doc.open('text/html', 'replace')
                doc.write(this.props.initialContent)
                doc.close()
                this._setInitialContent = true
                setTimeout(function () {
                    iframeResizer({
                        minHeight: '600',
                        minWidth: '400',
                        // log: true,
                        checkOrigin: false,
                    }, "#comentarismo-iframe")
                }, 1000)
            }

        } else {
            setTimeout(this.renderFrameContents.bind(this), 0)
        }
    }

    render() {
        const props = {
            ...this.props,
            children: undefined,
        }
        delete props.head
        delete props.initialContent
        delete props.mountTarget
        delete props.contentDidMount
        delete props.contentDidUpdate
        var iframe = <iframe {...props} />
        return (iframe)
    }
}

export {IFrame}