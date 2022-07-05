import React, { useState } from 'react'
import comingSoonImg from '../assets/img/coming-soon/comingsoon-image.png'
import '../assets/css/style.css'
import Navbar from '../components/Navbar'
import { login } from '../services/auth'
import Swal from 'sweetalert2'
import { useTitle, useCookie } from 'react-use'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner'


const SignIn = () => {
  useTitle('Sign In | Petrolida')

  const [loading, setLoading] = useState(false)
  const [token, updateToken] = useCookie('token')
  const navigate = useNavigate()

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleSignIn = (e) => {
    e.preventDefault()
    setLoading(true)
    login(data)
      .then(res => {
        Swal.fire(({
          icon: 'success',
          text: 'Success Login'
        }))
        updateToken(res.access_token)
        navigate('/')
        setLoading(false)
      })
      .catch(err => {
        Swal.fire({
          icon:'error',
          text: 'Your email and password is not mismatch or your account is note exist'
        })
        setLoading(false)
      })
  }

  return (
    <div className='body'>
      <Navbar/>
      <section id="loginPage">
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
              <form className="form mx-auto" onSubmit={e => handleSignIn(e)}>
                <h2 className="h5">Welcome Back</h2>
                <p className="body3 mt-2">Please enter your details</p>
                <div className="my-3">
                  <label for="email" className="form-label">Email address</label>
                  <input type="email" className="form-input" id="email" name="email" onChange={e => setData({...data, email: e.target.value})} autofocus placeholder="Enter email address"/>
                </div>
                <div className="my-3">
                  <label for="password" className="form-label">Password</label>
                  <input type="password" className="form-input" id="password"  onChange={e => setData({...data, password: e.target.value})}  name="password" placeholder="Enter password"/>
                </div>
                <button type="submit" className="form-button d-block ms-auto w-100">{loading ? <Spinner/> : 'Sign In'}</button>
                <p className="body2 text-center mt-4">Don't have an account? <Link to="/account/sign_up" className='primary-color'>Sign Up</Link></p>
              </form>
            </div>
          </div>
        </div>
        <img src={comingSoonImg} className="login-image d-none d-lg-block" alt=""/>
      </section>
    </div>
  )
}

export default SignIn