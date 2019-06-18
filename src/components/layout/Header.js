import React from 'react';

import logo from 'img/logo.png';

export default function Header() {

    window.onscroll = function() {
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;
        const topMenu = document.getElementById('top-menu');
        topMenu.style.backgroundColor = scrolled === 0 ? 'transparent' : 'rgba(0, 0, 0, 0.7)';
    };

    return (
        <header id='top-menu' className='header'>
            <nav className='h-100'>
                <div className='container h-100'>
                    <div className='row h-100'>
                        <div className='col-12 header__nav'>

                            <div>
                                <img src={logo} alt='geriana'/>
                                <button className='btn btn_md btn_outline btn_help_center'>
                                    <i className='fas fa-question-circle'/>
                                    HELP CENTER
                                </button>
                                <button className='btn btn_md btn_outline'> CALL US </button>
                            </div>

                            <div className='nav__links'>
                                <div className='link'> Sing Up </div>
                                <div className='link'> Log in </div>
                                <div className='link link__menu'>
                                    <i className='fas fa-bars bars'/>
                                    Menu
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
