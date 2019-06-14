import React from 'react';

import {FOOTER_COLUMNS} from 'constants/content';

import logo from 'img/logo.png';
import FB from 'img/social/fb-icon.svg';
import IN from 'img/social/in-icon.svg';
import TW from 'img/social/tw-icon.svg';

export default function Footer() {

    const columns = [];

    for (const [index, column] of FOOTER_COLUMNS.entries()) {
        columns.push(
            <div className='col-lg-2 footer__column' key={`info-${index}`}>
                <div className='footer__column_label'>{ column.label }</div>
                <div>{ column.text }</div>
            </div>
        )
    }

    return (
        <section className='footer'>
            <div className='container'>
                <div className='row'>

                    <div className='col-lg-5 footer__logo'>
                        <img src={logo} alt='geriana'/>
                        <div className='footer__follow-us'>
                            Follow Us
                            <img src={FB} alt='facebook'/>
                            <img src={TW} alt='twitter'/>
                            <img src={IN} alt='in'/>
                        </div>
                        <span className='footer__copyright'>
                            &copy; 2018 Geriana. All rights reserved.
                        </span>
                    </div>

                    {columns}

                </div>
            </div>
        </section>
    )
}
