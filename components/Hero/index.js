import React from 'react'

function Hero() {
  return (
    <section className='hero-wrapper'>
      <div className='container-fluid'>
        <div className='row justify-content-between'>
          <div className='col-lg-7 col-md-6 col-12 align-self-center hero-left'>
            <h3 className='hero-title'>Independence Navigation <br></br>For Everyone</h3>
            <p className='hero-text'>Dengan teknologi Augmented Reality (AR) dan voice-over, PetaNetra bertujuan untuk menjadi mata bagi teman-teman tunanetra agar dapat bernavigasi secara mandiri di ruang publik indoor atau semi-outdoor.</p>
            <div className='mt-4 hero-download-wrapper'>
              <img src='/images/hero-download.png' className="hero-download"></img>
            </div>
          </div>
          <div className='col-lg-5 col-md-6 col-12 align-self-baseline hero-right'>
            <img src='/images/mockup.png' width="100%"></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
