import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = ({ idName, infos }) => (
  <div className="app__social">
    <div>
      <a href={infos?.twitter || `#${idName}`}>
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href={infos?.facebook || `#${idName}`}>
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href={infos?.instagram || `#${idName}`}>
        <BsInstagram />
      </a>
    </div>
  </div>
)

export default SocialMedia
