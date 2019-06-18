import React from 'react';

import {SPECIALISTS} from 'constants/content'

export default function Specialists() {
    return (
        <section className='container specialist'>

            <div className='row'>
                <div className='col-12'>
                    <h3 className='specialist__label'> Specjaliści Różnych Kategorii </h3>
                </div>
            </div>

            <div className="row specialist__body">
                {SPECIALISTS.map((specialist, index) => (
                    <div className="col-md-6 col-lg-3  mb-5 card" key={`${index}-specialist`}>

                        <div className="specialist__img">
                            <img src={specialist.src} alt={specialist.title} />
                        </div>
                        <h5 className="card__label"> {specialist.title} </h5>
                        <p className="card__description"> {specialist.description} </p>

                    </div>
                ))}
            </div>

        </section>
    )
}
