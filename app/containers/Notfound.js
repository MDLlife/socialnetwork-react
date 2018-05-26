import React, { Component,ReactClass } from 'util/safe-react';
import { connect } from 'react-redux';



class Notfound extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="col-xs-6">
                        <h3>The page you are looking for might have been removed, had its name
                            changed, or is
                            temporarily unavailable.</h3>
                        <div className="image">
                            <img className="img img-responsive"
                                 src="/static/img/404notfound.jpeg"/>
                        </div>
                        <div className="text-404">

                            <p> </p>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
                <footer className="footer bg-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <p className="copyright">© 2018 MDL.live</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Notfound);
