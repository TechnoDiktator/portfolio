import React from 'react'
import './navbar.css'

import {BiHomeAlt} from 'react-icons/bi'

import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiFillCopy} from 'react-icons/ai'

import { useState } from 'react'






const Navbar = () => {

  const[activeNav , setactiveNav] = useState('#')


  return (
    <nav>

      <a href='#' onClick={  ()=>setactiveNav('#')  }   className={activeNav === '#' ? 'active' : ''}><BiHomeAlt /></a>
      <a href='#about'  onClick={  ()=>setactiveNav('#about')  }   className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience'  onClick={  ()=>setactiveNav('#experience')  }   className={activeNav === '#experience' ? 'active' : ''}   ><BiBook/></a>
      <a href='#services'  onClick={  ()=>setactiveNav('#services')  }   className={activeNav === '#services' ? 'active' : ''} ><RiServiceLine/></a>
      <a href='#portfolio'  onClick={  ()=>setactiveNav('#portfolio')  }   className={activeNav === '#portfolio' ? 'active' : ''} ><AiFillCopy/></a>
      <a href='#contact'   onClick={  ()=>setactiveNav('#contact')  }   className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Navbar