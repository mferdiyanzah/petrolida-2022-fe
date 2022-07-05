import React, { useState } from 'react'
import { useTitle } from 'react-use'
import comingSoonImg from '../assets/img/coming-soon/comingsoon-image.png'
import Navbar from '../components/Navbar'


import { register } from '../services/auth'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'

const SignUp = () => {
  useTitle('Sign Up | Petrolida')
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })


  const handleSignUp = e => {
    e.preventDefault()
    setLoading(true)
    register(data)
      .then(res => {
        setLoading(false)
        if(res?.email){
          Swal.fire({
            icon:'error',
            text: 'The email has already been taken.'
          })
        } else{
          Swal.fire(({
            icon: 'success',
            text: 'Success Register'
          }))
          navigate('/account/sign_in')
        }
      })
      .catch(err => {
        Swal.fire({
          icon:'error',
          text: 'Error'
        })
      })
  }

  return (
    <div className='body'>
      <Navbar/>
      <section id="loginPage" className='mt-5 mb-3'>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-6 d-none d-lg-block">
              <h1 className="h2 login-title">
                Petroleum<br/>
                Integrated Days<br/>
                2022
              </h1>
              <p className="body2 login-desc">Petroleum Integrated Days (Petrolida) is the biggest annual event held by SPE ITS Student Chapter. This year's series will be the 10th annual event.</p>
            </div>
            <div className="col-xl-6 col-lg-6 text-white">
              <form className="form mx-auto" onSubmit={e => handleSignUp(e)}>
                <h2 className="h5">Register Account!</h2>
                <p className="body3 mt-2">Getting closer to us, join now!</p>
                <div className="my-3">
                  <label htmlFor="fullname" className="form-label">Your full name</label>
                  <input type="text" required className="form-input" id="fullname" name="name" onChange={e => setData({...data, name: e.target.value})} autoFocus placeholder="Enter your full name"/>
                </div>
                <div className="my-3">
                  <label htmlFor="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className="form-label">Email address</label>
                  <input type="email" required className="form-input" id="email" name="email" onChange={e => setData({...data, email: e.target.value})} placeholder="Enter email address"/>
                </div>
                <div className="my-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" required className="form-input" id="password" name="password" onChange={e => setData({...data, password: e.target.value})} placeholder="Enter password"/>
                </div>
                <div className="my-3">
                  <input type="checkbox" id="confirm" onChange={e => setIsChecked(e.target.checked)} className="form-checkbox d-inline-block me-2"/>
                  <label htmlFor="confirm" className="form-label">I agree to the terms & conditions</label>
                </div>
                <button type="submit" className={`form-button d-block ms-auto w-100 ${!isChecked && 'disabled'}`} disabled={!isChecked}>{loading ? <Spinner/> : 'Register Account'}</button>
                <p className="body2 text-center mt-4">Already have an account? <Link to="/account/sign_in" className='primary-color'>Sign in</Link></p>
              </form>
            </div>
          </div>
        </div>
        <img src={comingSoonImg} className="login-image d-none d-lg-block" alt=""/>
      </section>
    </div>
  )
}

export default SignUp