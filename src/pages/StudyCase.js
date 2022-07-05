import React from 'react'
import '../assets/css/style.css'
import emojioneImg from "../assets/img/business-case/emojione-monotone_trophy.svg"
import foldImg from "../assets/img/business-case/fold.svg"
import anounceImg from "../assets/img/business-case/anounce.svg"
import wrImg from "../assets/img/business-case/wr1.png"
import tmImg from "../assets/img/business-case/technicalmeeting.svg"
import documentImg from "../assets/img/business-case/document.svg"
import finalImg from"../assets/img/business-case/final.svg"
import goldImg from "../assets/img/business-case/Gold.svg"
import silverImg from "../assets/img/business-case/Silver.svg"
import bronzeImg from "../assets/img/business-case/Bronze.svg"
import accordionImg from "../assets/img/business-case/accordion.svg"
import pptIcon from "../assets/img/powerpoint.svg"
import Navbar from '../components/Navbar'
import { useTitle } from 'react-use'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const StudyCase = () => {
  AOS.init()
  useTitle('Case Study | Petrolida')
  return (
    <div className='body' style={{position: 'relative'}}>
      <Navbar/>

      <section className="herostudycase hero">
        <div className="container">
          <div className="hero-title">
            <h1 className="">Case Study</h1>
            <p className="hero-desc body2 cc68">Participating teams of the competition will be challenged with a case problem statement given by a panel of petroleum experts representing various disciplines within oil and gas companies.</p>
          </div>
          <div className="row competition-status cc87">
            <div className="col-7">
              <p className="cc87">Competition Status</p>
              <p className="body5 cc87 status-desc"><span className="dot"></span>   Active</p>
            </div>
            <div className="col-5">
              <p className="cc87">Prize Pool</p>
              <p className="body5 cc87"><img src={emojioneImg} alt="Thropy"/>   IDR 6,000,000</p>
            </div>
          </div>
          <div className="row button-info">
            <div className="col-6">
              <a href="https://bit.ly/InvitationLetterPETROLIDA2022" target="_blank" rel="noopener noreferrer">
                <button className="button" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                  <span className=" align-items-center">
                      <span className=" align-items-center">Guide Book</span>
                  </span>
                </button>
              </a>
            </div>
            <div className="col-6">
              <Link to="register">
                <button className="buttonrgster" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                  <span className=" align-items-center">
                      <span >Register</span>
                  </span>
                </button>
              </Link>
            </div>
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

      <section className="row about" data-aos="fade-up">
        <h3 className="cc87">About The Competition</h3>
        <p className="cc68">Case Study Competition that will be held online, enables undergraduate students to demonstrate their critical thinking abilities, determination to address complex issues, and competence to work in teams in order to solve oil and gas industry-related cases.  
        <br/><br/>
        Participating teams of the competition will be challenged with a case problem statement given by a panel of petroleum experts representing various disciplines within oil and gas companies. Moreover, participating teams must also be able to examine case resolution using an appropriate problem approach in a solution report and presentation in front of the honorable judges.</p>
      </section>

      <section className="tl" data-aos="fade-up">
        <div className="container stage text-center">
          <h3> Competition Stage</h3>
          <p className="text-center">This competition will be divided into two stages: Preliminary Round and Final Round</p>
        </div>
        <div className="timeline container">
          <div className="vlbusinesscase"></div>
          <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-end padding-top-2x padding-bottom-1x">
            <div className="step completed">
              <div className="step-icon-wrap">
                <div className="step-icon"><img src={foldImg} alt="folder"/></div>
              </div>
              <div className="information">
                <p className="body4 cc68 " style={{fontWeight: "normal"}}>February 27th - March 26th 2022</p>
                <p className="body4 cc87" style={{fontWeight: '500px'}}>Open Registration</p>
              </div>
            </div>
            <div className="step">
              <div className="step-icon-wrap">
                <div className="step-icon "><img src={documentImg} alt="mail"/></div>
              </div>
              <div className="information">
                <p className="body4 cc68" style={{fontWeight: 'normal'}}>April 3rd 2022</p>
                <p className="body4 cc87" style={{fontWeight: "500px"}}>Abstract
                  Submission</p>
              </div>
            </div>
            <div className="step">
              <div className="step-icon-wrap">
                <div className="step-icon "><img src={anounceImg} alt="anounce"/></div>
              </div>
              <div className="information">
                <p className="body4 cc68" style={{fontWeight: 'normal'}}>April 23rd 2022</p>
                <p className="body4 cc87" style={{fontWeight: '500px'}}>Finalist 
                  Announcement</p>
              </div>
            </div>
            <div className="wraperright "><img src={wrImg} alt='wrap'/></div>
          </div>
          <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-end padding-bottom-1x">
            <div className="wraperleft "><img src={wrImg} alt='wrap'/></div>
            <div className="step olast">
              <div className="step-icon-wrap ">
                <div className="step-icon olast"><img src={pptIcon} alt="final"/></div>
              </div>
              <div className="information">
                <p className="body4 cc68" style={{fontWeight: 'normal'}}>May 15th 2022</p>
                <p className="body4 cc87" style={{fontWeight: '500px'}}>Presentation Deck Submission</p>
              </div>
            </div>
            <div className="step">
              <div className="step-icon-wrap">
                <div className="step-icon"><img src={tmImg} alt="final"/></div>
              </div>
              <div className="information">
                <p className="body4 cc68" style={{fontWeight: 'normal'}}>May 14th 2022</p>
                <p className="body4 cc87" style={{fontWeight: '500px'}}>Technical Meeting</p>
              </div>
            </div>
            <div className="step ofirst">
              <div className="step-icon-wrap ">
                <div className="step-icon"><img src={documentImg} alt="technicalmeeting"/></div>
              </div>
              <div className="information">
                <p className="body4 cc68" style={{fontWeight: 'normal'}}>May 13th 2022 </p>
                <p className="body4 cc87" style={{fontWeight: '500px'}}>Solution Report
                  Submission</p>
              </div>
            </div>
            <div className="wraperrightdwn"><img src={wrImg} alt='wrap'/></div>
          </div>
          <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-start padding-top-2x padding-bottom-1x">
            <div className="wraperleftdwn "><img src={wrImg} alt='wrap'/></div>
            <div className="step">
              <div className="step-icon-wrap">
                <div className="step-icon "><img src={finalImg} alt="mail"/></div>
              </div>
              <div className="information">
                <p className="body4 cc68" style={{fontWeight: 'normal'}}>May 21st 2022</p>
                <p className="body4 cc87" style={{fontWeight: '500px'}}>Competition Day</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="competition-price" data-aos="fade-up">
        <div className="container-sm mx-auto">
          <div className="text-center">
            <h3 className="title cc87">Competition Prize</h3>
            <p className="desc body3 cc68">Winners have a chance to win the prize pool of Rp. 6,000,000, consist of</p>
          </div>
          <div className="price-detail row ">
            <div className="col-xl-6">
              <div className="icon-box">
                <img src={goldImg} alt="testing"/>
                <div className="col">
                  <h6>1st Place</h6>
                  <p className="body2">Rp 3.000.000</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="icon-box">
                <img src={silverImg} alt="testing"/>
                <div className="col">
                  <h6>2nd Place</h6>
                  <p className="body2">Rp 2.000.000</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="icon-box">
                <img src={bronzeImg} alt="testing"/>
                <div className="col">
                  <h6>3rd Place</h6>
                  <p className="body2">Rp 1.000.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                      How much is the registration and finalist fee?
                      <span><img src={accordionImg} alt='wrap'/></span>
                    </button>
                  </h6>
                  <div id="faq-content-1" className="accordion-collapse collapse show" data-bs-parent="#faqlist1">
                    <div className="accordion-body">
                      
                    </div>
                  </div>
                  <hr/>
                </div>
                <div className="accordion-item">
                  <h6 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                      Can I join as an individually?
                      <span><img src={accordionImg} alt='wrap'/></span>
                    </button>
                  </h6>
                  <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                    <div className="accordion-body">
                      
                    </div>
                  </div>
                  <hr/>
                </div>
                <div className="accordion-item">
                  <h6 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                      Can a team member consist of different universities and majors?
                      <span><img src={accordionImg} alt='wrap'/></span>
                    </button>
                  </h6>
                  <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                    <div className="accordion-body">
                      
                    </div>
                  </div>
                  <hr/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="regist-anounce text-center">
        <h3 className="cc87">Don’t Forget to Register!</h3>
        <p className="cc68">Don’t miss the ultimate opportunity to showcase your ideas and innovation in reinforcing the future of our energy industry</p>
        <Link to="register">
          <button className="buttonrgster" data-bs-toggle="modal" data-bs-target="#feedbackModal">
            <span className=" align-items-center">
                <span >Register</span>
            </span>
          </button>
        </Link>
      </section>

      <Footer/>
    </div>
  )
}

export default StudyCase