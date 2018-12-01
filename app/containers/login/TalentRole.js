import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

class TalentRole extends Component {
    onClickTalent(){
         if (typeof window !== 'undefined') {
            window.location.href = '/login/select-talents'
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
            <Row style={{ marginTop: 40 }}>
                <Col xs={12} sm={12} md={3} lg={3} style={{textAlign: 'center'}}>
                    <img src="/static/img/Step1.png" alt=""/>
                    <p className='step' style={{fontSize: 16, marginTop: 32}}>{t('setup_a_profile')}</p>
                </Col>
                <Col xs={12} sm={12} md={3} lg={3} style={{textAlign: 'center'}}>
                    <img src="/static/img/Step2.png" alt=""/>
                    <p className='step' style={{fontSize: 16, marginTop: 32}}>{t('expose_talent')}</p>
                </Col>
                <Col xs={12} sm={12} md={3} lg={3} style={{textAlign: 'center'}}>
                    <img src="/static/img/Step3.png" alt=""/>
                    <p className='step' style={{fontSize: 16, marginTop: 32}}>{t('grow_fame')}</p>
                </Col>
                <Col xs={12} sm={12} md={3} lg={3} style={{textAlign: 'center'}}>
                    <img src="/static/img/Step4.png" alt=""/>
                    <p className='step' style={{fontSize: 16, marginTop: 32}}>{t('connect_with_brands')}</p>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center'>
                    <button onClick={this.onClickTalent}  style={{ width: 200, marginTop: 56, marginBottom: 50 }}
                            className='main-button radius-button clear-button'>
                        {t('next')}
                    </button>
                </Col>
            </Row>
        ]
    }
}

export default connect()(TalentRole);