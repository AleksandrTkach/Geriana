import React from 'react';

import {OUR_PREFERENCES} from 'constants/content';

export default function OurPreferences() {

    const preferences = [];

    for (const [index, preference] of OUR_PREFERENCES.entries()) {
        preferences.push(
            <div className='row' key={`preference-${index}`}>
                <div className='offset-lg-0 col-lg-8 offset-md-1 col-md-10'>
                    <div className='our-preferences__text'>
                        {preference}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className='screen'>
            <div className='screen__header screen__header_bg-our-preferences'/>

            <div className='screen__body screen__body_bg-our-preferences our-preferences'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-lg-6'>
                            {preferences}
                        </div>

                        <div className='col-lg-6 our-preferences__about'>
                            <h3>
                                Nasze Mocne Strony
                            </h3>
                            <button className='btn btn_lg btn_outline'> ZNAJDŹ OPIEKUNKĘ </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
