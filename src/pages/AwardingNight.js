import React from 'react'
import '../assets/css/style.css'
import Navbar from '../components/Navbar'
import { useTitle } from 'react-use'
import Footer from '../components/Footer'

const AwardingNight = () => {
  useTitle('Awarding Night | Petrolida')
  return (
    <div className='body' style={{position: 'relative'}}>
      <Navbar/>

      <section className="heroawarding hero">
        <div className="container">
          <div className="hero-title">
            <h1 className="">Awarding Night</h1>
            <p className="hero-desc body2 cc68">Each Petrolida’s competition will come to an end. After a long journey, there will come the awaited Awarding Night of Petrolida 2022 to honor the survival. For a merrier night, competitors will celebrate altogether accompanied by the performances from ITS’ best talent.</p>
          </div> 
        </div>
        <div className="container timer">
          <div className="information">
            <p className='text-white'>Open Registration</p>
            <div className="timer-container d-flex align-items-baseline">
              <div className="col-3 days">
                <span id="days-number" className="d-block text-center">00</span>
                <span className="d-block text-center timer-name">DAYS</span>
              </div>
              <span className="d-block text-center timer-separator">:</span>
              <div className="col-3  hours">
                <span id="hours-number" className="d-block text-center">00</span>
                <span className="d-block text-center timer-name">HOURS</span>
              </div>
              <span className="d-block text-center timer-separator">:</span>
              <div className="col-3  mins">
                <span id="mins-number" className="d-block text-center">00</span>
                <span className="d-block text-center timer-name">MINUTES</span>
              </div>
              <span className="d-block text-center timer-separator">:</span>
              <div className="col-3  secs">
                <span id="secs-number" className="d-block text-center">00</span>
                <span className="d-block text-center timer-name">SECONDS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="regist-anounce text-center">
        <h3 className="cc87">Don’t Forget to Register!</h3>
        <p className="cc68">Don’t miss the ultimate opportunity to showcase your ideas and innovation in reinforcing the future of our energy industry</p>
        <button className="buttonrgster" data-bs-toggle="modal" data-bs-target="#feedbackModal">
          <span className=" align-items-center">
              <span >Register</span>
          </span>
        </button>
      </section>

      <Footer/>
    </div>
  )
}

export default AwardingNight