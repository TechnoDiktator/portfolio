import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { BsFillFileBinaryFill } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>   
        <a href='https://www.linkedin.com/in/tarang-rastogi-667397179/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/TechnoDiktator' target="_blank"><FaGithub/></a>
        <a href='https://www.scaler.com/academy/profile/4a97326189f0/' target="_blank"><BsFillFileBinaryFill/></a>
        
    </div>
  )
}

export default HeaderSocials