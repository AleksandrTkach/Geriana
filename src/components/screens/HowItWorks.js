import React from 'react';

import {ROAD_POINTS} from "constants/content";

export default function HowItWorks() {
    const points = [];

    for (let [index, point] of ROAD_POINTS.entries()) {


        points.push(
            <div className="road-points">
                <div className="road-points__item">

                    <div className="road-points__icon">
                        <img src={point.img.src} alt={point.img.alt}/>
                    </div>

                    <h2 className="road-points__title">{point.label}</h2>


                    <p className="road-points__description">{point.text}</p>

                </div>
            </div>
        )
    }

    return (
        <section className='screen'>
            <div className='screen__header screen__header_bg-how-it-works'/>

            <div className='screen__body screen__body_bg-how-it-works how-it-works'>
                <div className="container h-100">
                    <div className="row h-100">

                        <div className="col-lg-6 how-it-works__about h-100">
                            <h3>
                                Jak Działamy <br/> dla <br/> Poszukujących Opieki
                            </h3>
                            <button className="btn btn_lg btn_outline"> ZNAJDŹ OPIEKUNKĘ </button>
                        </div>

                        <div className="col-lg-6">{ points }</div>

                    </div>
                </div>
            </div>
        </section>
    )
}
