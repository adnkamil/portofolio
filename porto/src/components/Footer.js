import React from 'react'
import linkedn from '../assets/image/linkedn.png'
import ig from '../assets/image/ig.png'
import github from '../assets/image/github.svg'

export default () => {
    return (
        <div>
            <div className="social-share">
                <ul>
                    <li><a href="https://www.linkedin.com/in/adnkamil/" target="_blank" rel="noopener noreferrer"><img src={linkedn} className="logo-kontak" alt=""/></a></li>
                    <li><a href="https://github.com/adnkamil" target="_blank" rel="noopener noreferrer"><img src={github} className="logo-git" alt=""/></a></li>
                    <li><a href="https://www.instagram.com/adnkamil/" target="_blank" rel="noopener noreferrer"><img src={ig} className="logo-kontak" alt=""/></a></li>
                </ul>
            </div>
            <div className="footer-bawah">
               &copy; 2020 Covid kelar | Created by Muh Adnan Kamil
            </div>
        </div>
    )
}