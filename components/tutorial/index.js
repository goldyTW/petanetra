import React from 'react'

function Tutorial() {
  return (
    <section className='tutorial'>
        <div className='container py-5'>
            <div className='row justify-content-center'>
                <div className='col-xl-11 col-12'>
                    <div className='row my-5'>
                        <div className='col-md-4 col-12 text-center'>
                            <img src='/images/tutorial1.png' width="80%"></img>
                        </div>
                        <div className='col-md-7 col-12 align-self-center'>
                            <h2 className='tutorial-title text-center text-md-start'>Persiapkan diri menggunakan aplikasi melalui <span className='tutorial-title-bold'>tutorial interaktif</span></h2>
                            <p className='tutorial-text text-center text-md-start'>Dengan tutorial interaktif pada saat pertama kali penggunaan aplikasi, tunanetra dapat mempelajari terlebih dahulu cara menggunakan PetaNetra. Disini PetaNetra akan mengajarkan jenis penanda dan getaran, tutorial mendeteksi lokasi, tutorial berbelok, serta memberikan tips untuk bisa bernavigasi secara aman dan nyaman.</p>
                        </div>
                    </div>
                    <div className='row justify-content-md-end my-5 tuto2'>
                        <div className='col-md-7 col-12 align-self-center'>
                            <h2 className='tutorial-title text-md-end text-center'><span className='tutorial-title-bold'>Ketahui lokasi awalmu</span> dengan mudah</h2>
                            <p className='tutorial-text text-md-end text-center'>Dengan teknologi AR, PetaNetra dapat mendeteksi dan memberitahukan lokasi awal tunanetra berdiri. Selain itu, tunanetra juga dapat mengetahui area-area dalam gedung yang dapat mereka kunjungi. </p>
                        </div>
                        <div className='col-md-4 col-12 text-center'>
                            <img src='/images/tutorial1.png' width="80%"></img>
                        </div>
                    </div>
                    <div className='row my-5'>
                        <div className='col-md-4 col-12 text-center'>
                            <img src='/images/tutorial1.png' width="80%"></img>
                        </div>
                        <div className='col-md-7 col-12 align-self-center'>
                            <h2 className='tutorial-title text-center text-md-start'>Mulai <span className='tutorial-title-bold'>navigasi mandirimu! </span></h2>
                            <p className='tutorial-text text-center text-md-start'>PetaNetra menggunakan arah jarum jam untuk menginstruksikan belokan agar tunanetra dapat bernavigasi mandiri secara akurat. Bahkan PetaNetra juga dapat memperingatkan adanya halangan atau bahaya di sekitar tunanetra.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tutorial
