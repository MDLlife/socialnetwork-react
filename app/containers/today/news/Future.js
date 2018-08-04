import React, {Component} from 'react';
import {connect} from 'react-redux';
import Date from "components/Date"
import Avatar from 'material-ui/Avatar';

class Future extends Component {
    render() {
        return [
            <div className='future-post'>
                <div className='future-header'>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <Avatar src={this.props.article.author_avatarurl} size={36} style={{
                                borderRadius: '50%',
                                border: '2px solid white'
                            }}/>
                        <div
                            className='post-author'
                        >
                            Written by: <span style={{fontWeight: 'bolder'}}>{this.props.article.author}</span>
                        </div>
                    </div>
                    <div
                        className='post-date'
                    >
                        Posted: <span style={{fontWeight: 'bolder'}}><Date date={this.props.article.date}/></span>
                    </div>
                </div>
                <div className='future-content'>
                    <p className='future-content-text'>
                        {this.props.article.summary}
                    </p>
                </div>
            </div>
        ]
    }
}

export default connect()(Future);