import React, {Component, ReactClass } from 'util/safe-react';
import {connect} from 'react-redux';
import Helmet from "react-helmet";
import {loadIntroDetail} from 'actions/intro';

class Intro extends Component {
    static fetchData({store, params}) {
        return store.dispatch(loadIntroDetail({}))
    }

    componentDidMount() {

    }


    render() {

        return (
            <div>
                <Helmet
                    htmlAttributes={{"lang": "en"}} // amp takes no value
                    title="MDL website."
                    titleTemplate="MDL.live - %s"
                    meta={[
                        {"name": "description", "content": "Welcome to MDL"},
                        {"property": "og:type", "content": "article"}
                    ]}
                >
                </Helmet>
                <span className='span-text'>Hello</span>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}

Intro.propTypes = {
};


export {Intro}
export default connect(mapStateToProps, {loadIntroDetail})(Intro)
