import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Categories = props => {
    const {t} = props;

    return (
        <div style={{
            marginTop: 20,
            borderRadius: '5px',
            padding: 10,
            backgroundColor: 'white'
        }}>
            <div>
                <h4 
                    style={{
                        margin: 0,
                        fontFamily: 'Gilroy Medium'
                    }}
                >
                    {t('categories')}
                </h4>
            </div>
            <div style={{marginTop: 30}}>
                <div>

                    <h5 style={{color: '#999999'}}>{t('work_areas')}</h5>
                </div>
                <div>
                    <ul
                        style={{
                            listStyle: 'none',
                            padding: 0
                        }}
                    >
                        {
                            props.categories &&
                                props.categories.map((elem, index) => {
                                    return <li key={index} className='list-item-preview'>
                                                {elem.charAt(0).toUpperCase() + elem.slice(1)}
                                            </li>
                                })
                        }
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <h5 style={{color: '#999999'}}>{t('styles')}</h5>
                </div>
                <div>
                    <ul
                        style={{
                            listStyle: 'none',
                            padding: 0
                        }}
                    >
                        {
                            props.styles &&
                            props.styles.map((elem, index) => {
                                return <li key={index} className='list-item-preview'>
                                        {elem.charAt(0).toUpperCase() + elem.slice(1)}
                                        </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Categories;