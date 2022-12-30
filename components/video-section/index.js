import React from 'react'

function VideoSection() {
  return (
    <div className='container py-5 my-5'>
      <div className='row justify-content-center text-center'>
        <div className='col-xl-10 col-12'>
          <h1 className='video-title'>PetaNetra #TemanJalanmu</h1>
          <iframe src="https://www.youtube.com/embed/D0UnqGm_miA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default VideoSection
