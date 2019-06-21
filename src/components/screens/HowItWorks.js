import React from 'react';

import {ROAD_POINTS} from 'constants/content';

export default function HowItWorks() {

    const points = [];

    for (let [index, point] of ROAD_POINTS.entries()) {
        points.push(
            <div className='road-point' key={`point-${index}`}>

                <div className='road-point__icon'>
                    <img src={point.img.src} alt={point.img.alt}/>
                </div>

                <h2 className='road-point__title'>{point.label}</h2>

                <p className='road-point__description'>{point.text}</p>

            </div>
        )
    }

    return (
        <section className='screen'>
            <div className='screen__header screen__header_bg-how-it-works'/>

            <div className='screen__body screen__body_bg-how-it-works how-it-works'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-lg-6 how-it-works__about'>
                            <h3 className='how-it-works__about__label'>
                                Jak Działamy <br/> dla <br/> Poszukujących Opieki
                            </h3>
                            <button className='btn btn_size_lg btn_outline how-it-works__about__button'> ZNAJDŹ OPIEKUNKĘ </button>
                        </div>

                        <div className='col-lg-6 how-it-works__road'>
                            <div>
                                { points }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
