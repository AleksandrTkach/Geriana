import React from 'react';
import './Footer.scss';

import {FOOTER_COLUMNS} from 'constants/content';

import logo from 'img/logo.png';
import FB from './img/fb-icon.svg';
import IN from './img/in-icon.svg';
import TW from './img/tw-icon.svg';

export default function Footer() {

    const columns = [];

    for (const [index, column] of FOOTER_COLUMNS.entries()) {
      columns.push(
        <div className='col-lg-2 col-md-2 col-sm-2 footer__column' key={`info-${index}`}>
          <div className='footer__column_label'>{ column.label }</div>
          <div>{ column.text }</div>
        </div>
      )
    }

    return (
      <footer className='footer'>
        <div className='container'>
          <div className='row'>

            <div className='col-lg-5 col-md-5 col-sm-5 footer__column'>
              <img src={logo} alt={process.env.REACT_APP_NAME} className='footer__logo' />
              <div className='footer__follow-us'>
                            Follow Us
                <img className='footer__follow-us_size' src={FB} alt='facebook' />
                <img className='footer__follow-us_size' src={TW} alt='twitter' />
                <img className='footer__follow-us_size' src={IN} alt='in' />
              </div>
              <span className='footer__copyright'>
                            &copy; 2018 Geriana. All rights reserved.
              </span>
            </div>

            {columns}

          </div>
        </div>
      </footer>
    )
}
