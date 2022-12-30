/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head';
import '../styles/globals.css'
import '../styles/hero.css'
import '../styles/video.css'
import '../styles/features.css'
import '../styles/tutorial.css'
import '../styles/box.css'
import '../styles/event.css'
import '../styles/footer.css'
import '../styles/navbar.css'
// import '../styles/navbar2.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css";
// import "swiper/components/navigation/navigation.min.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"></link>
      
      <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossOrigin="anonymous"
        />
        
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
          crossOrigin="anonymous"
        />

        <link rel="shortcut icon" type="image/x-icon" href="/icon/pilihpartner.svg"></link>
      </Head>
    <Component {...pageProps} />
    </>
 )
  
}
