import React from 'react';
import './CallUs.scss';

export default function CallUs() {
    return (
      <section className='call-us'>
        <h3 className='call-us__label'> Chcesz wiedziedzieć więcej? </h3>
        <span className='call-us__description'> Odwiedź nasze centrum pomocy lub zadzwoń </span>
        <button type='button' className='btn btn_size_md btn_bg-red'> Call +48 567 365 485 </button>
      </section>
    )
}
