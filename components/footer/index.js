import React from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import moment from 'moment';
import { Icon } from '@iconify/react';

function Footer() {
  const router = useRouter();
  var year = moment().format('YYYY');

  return (
    <footer>
        <div className="container footerContainer pt-5">
            <div className='row justify-content-center'>
                <div className="col-lg-11 col-12 p-md-2 px-4 py-2">
                    <img className='footer-img' src='/images/logo.png'></img>
                </div>
            </div>
            <div className='row justify-content-center pt-4'>
                <div className="col-lg-2 col-md-3 col-12 p-md-2 px-4 py-2">
                    <h3 className='footer-title'>Perusahaan</h3>
                    <Link href="/about-us"><p className='footer-text'>About Us</p></Link>
                    <Link href="/features"><p className='footer-text'>Features</p></Link>
                    <Link href="/event"><p className='footer-text'>Event</p></Link>
                    <Link href="/article"><p className='footer-text'>Article</p></Link>
                </div>
                <div className="col-lg-2 col-md-3 col-12 p-md-2 px-4 py-2">
                    <h3 className='footer-title'>Product</h3>
                    <p className='footer-text'>PetaNetra</p>
                </div>
                <div className="col-lg-2 col-md-3 col-12 p-md-2 px-4 py-2">
                    <h3 className='footer-title'>Kerjasama</h3>
                    <p className='footer-text'>Pemilik Gedung</p>
                    <p className='footer-text'>Komunitas</p>
                </div>
                <div className="col-lg-2 col-md-3 col-12 p-md-2 px-4 py-2">
                    <h3 className='footer-title'>Hubungi Kami</h3>
                    <p className='footer-text'>admin@petanetra.id</p>
                </div>
                <div className="col-lg-3 col-md-5 col-12 p-md-2 px-4 py-2">
                    <h3 className='footer-title'>Ikuti perkembangan kami </h3>
                    <a className="social" target="_blank" href='https://facebook.com/' rel="noreferrer">
                        <Icon icon="ic:baseline-facebook" className='' style={{cursor:'pointer', marginTop:'-20px'}}/>
                    </a>
                    <a className="social" target="_blank" href='https://www.linkedin.com/' rel="noreferrer">
                        <Icon icon="mdi:linkedin" className='' style={{cursor:'pointer', marginTop:'-20px'}}/>
                    </a>
                    <a className="social" target="_blank" href='https://instagram.com/' rel="noreferrer">
                        <Icon icon="ph:instagram-logo-fill" className='' style={{cursor:'pointer', marginTop:'-20px'}}/>
                    </a>
                    <a className="social" target="_blank" href='https://twitter.com/' rel="noreferrer">
                    <Icon icon="ph:youtube-logo-fill" className='' style={{cursor:'pointer', marginTop:'-20px'}}/>
                    </a>

                    <h3 className='footer-title pt-3'>Unduh Aplikasi</h3>  
                    <a className="social" target="_blank" href='#' rel="noreferrer">
                        <Icon icon="ic:baseline-apple" className='' style={{cursor:'pointer', marginTop:'-20px'}}/>
                    </a>          
                </div>
                
            </div>
            <div className='row justify-content-center'>
                <div className="col-12 text-center py-4">
                    <span className="copyright">© Copyright {year} by PetaNetra Team | Made by WebsiteSimple.id</span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;