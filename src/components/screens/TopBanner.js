import React from 'react';

export default function TopBanner() {
    return (
        <section className='screen screen_bg-top-banner top-banner'>

            <h1 className='top-banner__label'>
                <span className='pick-out-text'> Znajdź opiekuna </span>
                <div> dla swoich najbliższych </div>
            </h1>

            <p className="top-banner__description">
                Skontaktuj się bezpośrednio z jedną z
                <span className="pick-out-text"> 60,000 zarejestrowanych </span>
                <br/> opieklinek
            </p>

            <button className="btn btn_size_lg btn_bg-red"> ZNAJDŹ OPIEKUNKĘ </button>

        </section>
    )
}
