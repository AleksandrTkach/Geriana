import React from 'react';

import {RECALLS} from 'constants/content';

export default function Recalls() {

    const reviews = [];

    for (let i = 0; i < 3; i++) {
        for (const [index, recall] of RECALLS.entries()) {
            reviews.push(
                <div className='col-lg-6 col-xl-4' key={`recall-${index}-${i}`}>
                    <div className='review'>

                        <div className='review__text'>
                            {recall.text}
                        </div>

                        <div className='review__user'>
                            <div className='user__info'>
                                <div className='info__name'>{recall.name}</div>
                                <div>{recall.type}</div>
                            </div>
                            <img src={recall.img.src} alt={recall.img.alt}/>
                            <div className='rectangle'/>
                        </div>

                    </div>
                </div>
            )
        }
    }

    return (
        <section className='screen'>
            <div className='screen__header screen__header_bg-recalls'/>

            <div className='screen__body screen__body_bg-recalls'>
                <div className='container recalls'>

                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='recalls__label'> What do our Clients Say? </h3>
                        </div>
                    </div>

                    <div className='row'>
                        {reviews}
                    </div>

                </div>
            </div>
        </section>
    )
}
