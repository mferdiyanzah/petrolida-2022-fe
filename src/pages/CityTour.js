import React from 'react'
import '../assets/css/style.css'
import accordionImg from "../assets/img/business-case/accordion.svg"
import Navbar from '../components/Navbar'
import { useTitle } from 'react-use'
import AOS from 'aos'
import 'aos/dist/aos.css'

const CityTour = () => {
  AOS.init()
  useTitle('City Tour | Petrolida')
  return (
    <div className='body'>
      <Navbar/>

      <section className="herocitytour hero">
        <div className="container">
          <div className="hero-title">
            <h1 className="">City of Heroes, Your Journey <br/>Start Here</h1>
            <p className="hero-desc body2 cc68">City Tour is one of Petrolida 2022's post-competition events, with the goal of allowing participants to unwind after the competition by virtually seeing the beauty of Surabaya, the city of heroes.</p>
          </div>
          <div className="row button-info">
            <div className="col-6">
              <button className="button" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                <span className=" align-items-center">
                    <span className=" align-items-center">Learn More</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="row about" data-aos="fade-up">
        <h3 className="cc87">About City Tour</h3>
        <p className="cc68">City Tour is one of Petrolida 2022's post-competition events, with the goal of allowing participants to unwind after the competition by virtually seeing the beauty of Surabaya, the city of heroes. Apart from that, Petrolida's City Tour is an excellent opportunity to bring everyone together, from fellow participants to the rest of the Petrolida 2022 committee.
        <br/><br/>
        Due to the current pandemic condition, which makes it not ideal to hold the City Tour offline, we decided to deliver the history and beauty of Surabaya virtually. In order to give the participants an experience just as interesting as offline, we came up with some ideas that will engage the participants as if they are coming along in the journey together.</p>
      </section>

      

      <section className="faq">
        <div className="container-xl">
          <p className="faq-header">FAQ</p>
          <div className="row">
            <div className="detail col-sm-5 col-lg-5">
              <h6 className="cc87">Frequently Asked Questions</h6>
              <p className="cc68">Still have any questions? Don’t hesitate to 
                reach us</p>
              <button className="button" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                <span className=" align-items-center">
                    <span><div className="body2">Contact Us</div></span>
                </span>
              </button>
            </div>
            <div className="col-sm-7 col-lg-7" >
              <div className="accordion accordion-flush" id="faqlist1">
                <div className="accordion-item">
                  <h6 className="accordion-header">
                    <button className="accordion-button collapsed" aria-expanded="true" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                    Will the City Tour be held online or offline?
                      <span><img src={accordionImg} alt='wrap'/></span>
                    </button>
                  </h6>
                  <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                    <div className="accordion-body">
                    Petrolida 2022 Paper Competition will bring a theme of <strong>"Driving Sustainability in Oil and Gas Industry”</strong>, which will be specified into three sub-themes, as follow :
                    <ol className="list-group-numbered">
                      <li className="d-flex align-items-start"><div className="ms-2">Innovation in Technological Pathways for Decarbonizing Petroleum Refining.</div></li>
                      <li className="d-flex align-items-start"><div className="ms-2">Risk Management and Its Mitigation to Prevent Accident in Oil and Gas Industry.</div></li>
                      <li className="d-flex align-items-start"><div className="ms-2">Utilization of AI and Big Data Management to Maximize Production Planning and Forecasting in Oil and Gas Indust</div></li>
                    </ol>
                    </div>
                  </div>
                  <hr/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default CityTour