import React from 'react';
import './Header.scss';

import logo from 'img/logo.png';
import {REACT_APP_NAME} from 'constants/constants';

export default function Header() {

    window.onscroll = function() {
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;
        const topMenu = document.getElementById('top-menu');
        topMenu.style.backgroundColor = scrolled === 0 ? 'transparent' : 'rgba(0, 0, 0, 0.7)';
    };

    return (
        <header id='top-menu' className='header'>

            <nav className='h-100'>
                <div className='container h-100 top-menu'>
                    <div className="row h-100">
                        <div className="col-12 d-flex align-items-center justify-content-between">

                            <div>
                                <img src={logo} alt={REACT_APP_NAME} className='top-menu-logo'/>

                                <button className='btn btn_size_md btn_outline top-menu-btn'>
                                    <i className='fa fa-question-circle top-menu-btn-icon-question-circle'/>
                                    Help center
                                </button>
                                <button className='btn btn_size_md btn_outline top-menu-btn'>
                                    Call us
                                </button>
                            </div>

                            <div className='top-menu-block-links'>
                                <a href='/#/sing-in' className='link top-menu-link hidden-md'> Sing Up </a>
                                <a href='/#/log-in' className='link top-menu-link hidden-md'> Log in </a>
                                <a href='/#/menu' className='link top-menu-link'>
                                    <i className='fa fa-bars bars top-menu-link-icon-bars'/>
                                    Menu
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>

        </header>
    )
}
