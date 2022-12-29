import Head from 'next/head';
import '../styles/globals.css'
import '../styles/hero.css'
import '../styles/video.css'
import '../styles/features.css'
import '../styles/tutorial.css'
import '../styles/box.css'
import '../styles/event.css'
import '../styles/footer.css'
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
      </Head>
    <Component {...pageProps} />
    </>
 )
  
}
