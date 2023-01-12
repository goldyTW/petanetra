import React from 'react'

function Features() {
  return (
    <div className='container py-5'>
        <div className='row justify-content-center'>
            <div className='col-xl-10 col-12' id='features'>
                <div className='row justify-content-center'>
                    <div className='col-lg-4 col-md-6 col-12 p-3'>
                        <div className='features-card text-center p-3'>
                            <img src='/images/features1.png' alt='deteksi lokasi' width="80%"></img>
                            <h3 className='features-title'>Mendeteksi Lokasi</h3>
                            <p className='features-text'>PetaNetra akan mendeteksi lokasi awal Anda berdiri sebelum mengarahkan ke tempat tujuan.</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12 p-3'>
                        <div className='features-card text-center p-3'>
                            <img src='/images/features2.png' alt='navigasi akurat' width="80%"></img>
                            <h3 className='features-title'>Navigasi Akurat</h3>
                            <p className='features-text'>PetaNetra mengarahkan secara akurat dengan menggunakan arah jarum jam dan pemberitahuan jarak dalam satuan meter.</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12 p-3'>
                        <div className='features-card text-center p-3'>
                            <img src='/images/features3.png' alt='instruksi suara' width="70%"></img>
                            <h3 className='features-title'>Instruksi Melalui Suara dan Getaran</h3>
                            <p className='features-text'>PetaNetra menggunakan haptics feedback berupa getaran dan voice-over untuk menginformasikan instruksi-instruksi yang ada di aplikasi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features
