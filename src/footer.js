import React from 'react'
import {FaGithub,FaInstagram,FaTwitter} from "react-icons/fa";
import './footer.css';
export default function footer() {
  return (
    <footer>
        <div className='container'>
            <div className='social'>
                <div className='soci'><FaGithub/></div>
                <div className='soci'><FaInstagram/></div>
                <div className='soci'><FaTwitter/></div>
            </div>
<div className='copyright'>
Copyright &copy; 2023,Cemgo
</div>
        </div>
    </footer>
  )
}
