import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

class SelectTalents extends Component {
    onClickActor(){
         if (typeof window !== 'undefined') {
            window.location.href = '/onboarding?role=actor'
        }
    }

    onClickModel(){
         if (typeof window !== 'undefined') {
            window.location.href = '/onboarding?role=model'
         }
    }

    onClickDancer(){
         if (typeof window !== 'undefined') {
            window.location.href = '/onboarding?role=dancer'
         }
    }

    onClickFan(){
         if (typeof window !== 'undefined') {
            window.location.href = '/onboarding/fan'
         }
    }

    render() {
        const {t} = this.props;

        return [
            <Row>
                <Col xs={12}>
                    <h1 className='log-in-with text-center login-header-margin'>{t('talent')}</h1>
                    <img className='center-line' src="/static/img/Line.png" alt=""/>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center'>
                    <h2 dangerouslySetInnerHTML={{__html: t("please_select_you_role") }}/>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} sm={12} md={4} lg={4} style={{textAlign: 'center'}}>
                    <img src="/static/img/actor.png" alt="" style={{ width: 150, height: 150 }}/>
                    <p style={{fontSize: 20, marginTop: 20}}><b>{t('actor')}</b></p>
                    <p>{t('i_am_looking_for_actor_gigs')}</p>
                    <button onClick={this.onClickActor} style={{ width: 200, marginTop: 10 }}
                            className='main-button radius-button clear-button'>
                        {t('select')}
                    </button>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} style={{textAlign: 'center'}}>
                    <img src="/static/img/model.png" alt="" style={{ width: 150, height: 150 }}/>
                    <p style={{fontSize: 20, marginTop: 20}}><b>{t('model')}</b></p>
                    <p>{t('i_am_looking_for_model_gigs')}</p>
                    <button onClick={this.onClickModel} style={{ width: 200, marginTop: 10 }}
                            className='main-button radius-button clear-button'>
                        {t('select')}
                    </button>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} style={{textAlign: 'center'}}>
                    <img src="/static/img/dancer.png" alt="" style={{ width: 150, height: 150 }}/>
                    <p style={{fontSize: 20, marginTop: 20}}><b>{t('dancer')}</b></p>
                    <p>{t('i_am_looking_for_dancer_gigs')}</p>
                    <button onClick={this.onClickDancer} style={{ width: 200, marginTop: 10 }}
                            className='main-button radius-button clear-button'>
                        {t('select')}
                    </button>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center info-panel'>
                    <p style={{fontSize: 18, lineHeight: '68px'}}>{t('other_roles_are_coming_soon')}</p>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center' style={{
                    position: 'relative',
                    top: -57,
                }}>
                    <button onClick={this.onClickFan} style={{border: '2px solid white'}}
                            className='main-button radius-button clear-button'>
                        {t('continue_as_a_fun')}
                    </button>
                </Col>
            </Row>
        ]
    }
}

export default connect()(SelectTalents);