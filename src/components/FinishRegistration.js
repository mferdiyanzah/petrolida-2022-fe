import React from 'react'

import style from '../assets/css/finish.module.css'
import ceklist from '../assets/img/ceklis.svg'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const FinishRegistration = () => {

  return (
    <div className='body' style={{height: '100vh'}}>
      <Navbar/>
      <section id="finish-regist" class="d-flex align-items-center h-100">
        <div class={`${style.container} container p-5 text-center w-50`}>
          <img src={ceklist} alt="Success Regist Illustration" class="img-fluid mb-3" />
          <h6 class="mb-3 text-white">Submitted Succesfully</h6>
          <p class={`mb-4 white2 ${style.white2}`}>Yay, you have completed the registration stage. Please kindly check your email for further information.</p>
          <Link to="/">
            <button class={` ${style.button} btn shadow-none`}>Okay</button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default FinishRegistration