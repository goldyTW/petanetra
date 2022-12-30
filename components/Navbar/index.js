/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-html-link-for-pages */
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/Link'
import React, { useState } from 'react'

function Navbar() {
  const [lang, setlang] = useState('ID');
  return (
    <nav className='navbar navbar-expand-lg navbar-light' id="navbarUtama">
      <div className='container py-3'>
        <Link href="/">
          <img src="/images/logo.png" alt='petanetra'></img>
        </Link>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <Icon icon="charm:menu-hamburger"  
          data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
          style={{cursor:'pointer'}}/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item my-auto mx-1">
              <a className='nav-link' href="/" rel='noreferrer' target="_blank">
                About Us
              </a>
            </li>
            <li className="nav-item my-auto mx-1">
              <a className='nav-link' href="/" rel='noreferrer' target="_blank">
                Features
              </a>
            </li>
            <li className="nav-item my-auto mx-1">
              <a className='nav-link' href="/" rel='noreferrer' target="_blank">
                Partner With Us
              </a>
            </li>
            <li className="nav-item my-auto mx-1">
              <a className='nav-link' href="/" rel='noreferrer' target="_blank">
                Article
              </a>
            </li>
            <a href="" target="_blank">
              <button className="btn-try">Try PetaNetra</button>
            </a>
            
            <li class="nav-item dropdown">
            <button className="btn-lang">{lang}<Icon icon="tabler:chevron-down"/></button>
                <div class="dropdown-content">
                  {
                    lang == 'ID' ? <a onClick={() => setlang('EN')}>EN</a> : <a onClick={() => setlang('ID')}>ID</a>
                  }
                </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
