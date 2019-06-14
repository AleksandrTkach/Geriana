import React from 'react';

import {FOOTER_COLUMNS} from 'constants/content';

import logo from 'img/logo.png';

export default function Header() {

    return (
        <header className='header'>
            <nav className='h-100'>
                <div className='container h-100'>
                    <div className='row h-100'>
                        <div className='col-12 header__nav'>
                            <img src={logo} alt='geriana'/>

                            <button className='btn btn_md btn_outline'> HELP CENTER </button>
                            <button className='btn btn_md btn_outline'> CALL US </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
