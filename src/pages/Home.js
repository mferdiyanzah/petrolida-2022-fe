import React, { useState } from 'react';
import '../assets/css/main.scss'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import arrowRight from "../assets/img/home/long-arrow-right.svg"
import sliderEnterpreneur from "../assets/img/home/slider/slider_entrepreneurship.png"
// import sliderOilGas from "../assets/img/home/slider/slide_oil_gas.png" 
// import sliderTech from "../assets/img/home/slider/slider_technology.png"
import skkMigas from '../assets/img/Partnership/1280px-Logo_of_SKK_Migas.png'
import ditjenMigas from '../assets/img/Partnership/Direktorat Jenderal Migas.png'
import kmi from '../assets/img/Partnership/KMI Logo.jpg'
import itsJazz from '../assets/img/Partnership/logo ITS Jazz.png'
import studio31 from '../assets/img/Partnership/logo Studio 31.png'
import sponsor from "../assets/img/home/sponsors.svg"

import badakLng from '../assets/img/Sponsorship/Badak LNG (S).png'
import exxon from '../assets/img/Sponsorship/EXXON (L).png'
import indoRayaTenaga from '../assets/img/Sponsorship/Indo Raya Tenaga (S).jpeg'
import indonesiaPower from '../assets/img/Sponsorship/Indonesia power (S).png'
import phr from '../assets/img/Sponsorship/Logo PHR_Horizontal (XL).png'
import pkt from '../assets/img/Sponsorship/LOGO PKT (S).png'
import pln from '../assets/img/Sponsorship/Logo_PLN (L).png'
import kisi from '../assets/img/Sponsorship/logo-kisi (L).png'
import drilling from '../assets/img/Sponsorship/Pertamina drlling (M).jpeg'
import petronas from '../assets/img/Sponsorship/PETRONAS Logo for Light Background (M).png'
import petrokimia from '../assets/img/Sponsorship/Petrokimia_Gresik_logo (S).png'
import pgn from '../assets/img/Sponsorship/PGN saka (M).png'
import pos from '../assets/img/Sponsorship/POS INDONESIA_logo (S).jpeg'
import premier from '../assets/img/Sponsorship/Premier Oil (S).png'
import tppi from '../assets/img/Sponsorship/TPPI Logo 2 (M).jpg.png'
import tristar from '../assets/img/Sponsorship/Tristar Marine (S).jpeg'

import homeSponsor from '../assets/img/home-sponsor.png'

import Slider from "react-slick"

import video1 from "../assets/videos/coor_talkshow_2021.mp4"
import video2 from "../assets/videos/po_2021.mp4"
import video3 from "../assets/videos/staf_oilrig_2021.mp4"

import poster1 from "../assets/img/home/poster/poster_coor_talkshow_2021.png"
import poster2 from "../assets/img/home/poster/poster_po_2021.png"
import poster3 from "../assets/img/home/poster/poster_staf_oilrig_2021.png"

import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '../components/Footer';
import { useTitle } from 'react-use';
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useCookie } from 'react-use';

const Home = () => {
  AOS.init()
  useTitle('Home | Petrolida')
  const [token] = useCookie('token')
  const [index, setIndex] = useState(0)
  const videos = [video1, video2, video3]
  const poster = [poster1, poster2, poster3]

  const leftBtnHandler = () => {
    if (index > 0) {
      setIndex(index-1)
    } else{
      setIndex(2)
    }
  }

  
  const rightBtnHandler = () => {
    if (index < 2) {
      setIndex(index+1)
    } else{
      setIndex(0)
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  }

  return (
    <div className='body'>
      {/* <!-- nav --> */}
      <Navbar/>
      {/* <!-- /end nav --> */}

      {/* <!-- hero --> */}
      <section id="hero" className="d-flex align-items-center text-center mt-5 mt-md-0 position-relative" style={{padding: '150px 0'}}>
        <div className="position-absolute" id="floatingHero1"></div>
        <div className="position-absolute" id="floatingHero2"></div>
        <div className="container text-white">
          <h1 className="mb-3 mb-md-5 fw-bold">Utilizing <span className="text-green">sustainable</span> ideas & innovations to reinforce the <span className="text-green">future</span> of <span className="text-green">energy</span> industry</h1>
          <p className="white-2 mb-5">Explore and disclose innovation regarding today’s energy challenges through providing them a chance to achieve substantial and competitive experiences to advance their excellence.</p>
          <div className="d-md-flex justify-content-center">
            <Link to="#video" className="d-none d-md-block btn-hero-first">Learn More</Link>
            {!token && <Link to="/account/sign_up" className="d-block btn-hero-second">Register</Link>}
            {token && <Link to="/#competition" className="d-block btn-hero-second">Register</Link>}
            <Link to="#" className="d-block d-md-none btn-hero-third">Learn More</Link>
          </div>
        </div>
      </section>
      {/* <!-- /hero --> */}

      {/* <!-- video --> */}
      <section id="video" className="mt-5 mt-md-0 position-relative">
        <div className="position-absolute" id="floatingVideo1"></div>
        <div className="position-absolute" id="floatingVideo2"></div>
        <div className="container text-white" data-aos="fade-up">
          <iframe w="true" src="https://www.youtube.com/embed/zSHrk151CbE" title="YouTube video player" allowFullScreen className="mb-4"></iframe>
          <p className="text-green mb-3">About The Petrolida</p>
          <div className="d-flex justify-content-between container-content-video">
            <div className="left-video" data-aos="fade-right">
              <h2 className="fw-bold">Petroleum<br/>Integrated Days</h2>
            </div>
            <div className="right-video" data-aos="fade-left">
              <Link to="#" className="text-decoration-none text-white" target="_blank">
                <p className="white-2 mb-3">Petroleum Integrated Days (Petrolida) is the biggest annual event held by SPE ITS Student Chapter. This year’s series will be the 10th annual event.</p>
                <p>Read More <img src={arrowRight} alt="Icon"/></p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /video --> */}

      {/* <!-- competitions --> */}
      <section id="competitions" className="pt-5">
        <div className="container text-white pt-5">
          {/* <!-- header --> */}
          <div className="header text-center w-50 mx-auto mb-5">
            <p className="text-green">Competitions</p>
            <h2 className="mb-5 fw-bold">7 Competition Events</h2>
            <p>Meet other participants, let’s show your ideas, innovations and abilities to Petrolida 2022</p>
          </div>
          {/* <!-- /end header --> */}
          {/* <!-- content --> */}
          <div className="container-content-competitions row">
            <div className="p-3 col-12 col-lg-3" data-aos="fade-right">
              <Link to="competitions/oil_rig_design" className="card-competitions">
                <h3>Oil Rig Design</h3>
                <p className='white-2'>Design a semi-submersible platform for a specific offshore oil field</p>
                <p className="read-more">Read More <img src={arrowRight} alt="Icon"/></p>
              </Link>
            </div>
            <div className="p-3 col-12 col-lg-3" data-aos="fade-right">
              <Link to="competitions/fracturing_fluid_design" className="card-competitions">
                <h3>Fracturing Fluid Design</h3>
                <p className='white-2'>Formulate the optimal fracture fluid to solve the problem based on the...</p>
                <p className="read-more">Read More <img src={arrowRight} alt="Icon"/></p>
              </Link>
            </div>
            <div className="p-3 col-12 col-lg-3" data-aos="fade-left">
              <Link to="competitions/petrosmart" className="card-competitions">
                <h3>Petrosmart</h3>
                <p className='white-2'>Challenge your knowledge related to the oil and gas industry by answering quick-fire questions</p>
                <p className="read-more">Read More <img src={arrowRight} alt="Icon"/></p>
              </Link>
            </div>
            <div className="p-3 col-12 col-lg-3" data-aos="fade-left">
              <Link to="competitions/paper" className="card-competitions">
                <h3>Paper</h3>
                <p className='white-2'>Innovate and present your ideas related to oil and gas in a form of research paper</p>
                <p className="read-more">Read More <img src={arrowRight} alt="Icon"/></p>
              </Link>
            </div>
            <div className="p-3 col-12 col-lg-3" data-aos="fade-right">
              <Link to="competitions/stock_trading" className="card-competitions">
                <h3>Stock Trading</h3>
                <p className='white-2'>Obtain the highest profit from online stock trading and participate on the FGD about Indonesia Stock...</p>
                <p className="read-more">Read More <img src={arrowRight} alt="Icon"/></p>
              </Link>
            </div>
            <div className="p-3 col-12 col-lg-3" data-aos="fade-right">
              <Link to="competitions/business_case" className="card-competitions">
                <h3>Business Case</h3>
                <p className='white-2'>Find the most suitable solution to answer a real business case problem</p>
                <p className="read-more">Read More <img src={arrowRight} alt="Icon"/></p>
              </Link>
            </div>
            <div className="p-3 col-12 col-lg-3" data-aos="fade-left">
              <Link to="competitions/case_study" className="card-competitions" >
                <h3>Case Study</h3>
                <p className='white-2'>Challenge your oil and gas knowledge to solve a problem based on the case given</p>
                <p className="read-more">Read More <img src={arrowRight} alt="Icon"/></p>
              </Link>
            </div>
          </div>
          {/* <!-- /end content --> */}
        </div>
      </section>
      {/* <!-- /end competitions --> */}

      {/* <!-- non-competitions --> */}
      <section id="non-competitions" className="pt-5 mb-5" data-aos="fade-up">
        <div className="container text-white pt-5">
          <p className="text-green mb-3">Non-Competitions</p>
          <div className="d-flex justify-content-between container-non-competitions mb-5">
            <h2 className="mb-3" data-aos="fade-right">Sharing, Inspiring,<br/>Networking</h2>
            <p data-aos="fade-left" className='white-2'>Don’t miss the ultimate opportunity to meet and interact with great speakers on Petrolida Career Talks, explore the city of Surabaya virtually, and Awarding Night.</p>
          </div>
          {/* <!-- carousel --> */}
          <Slider {...settings} >

          <div className="col-4 p-4 item-slider">
            <img src={sliderEnterpreneur} className="img-fluid" alt="Slider"/>
            <div className="container-text-item-slider">
              <h4>CV 101 : Nail an Astounding First Impression</h4>
              <p className="text-secondary">Online</p>
              <a href="">See Details <i className="fa-solid fa-chevron-right"></i></a>
            </div>
          </div>

          <div className="col-4 p-4 item-slider">
            <img src={sliderEnterpreneur} className="img-fluid" alt="Slider"/>
            <div className="container-text-item-slider">
              <h4>CV 101 : Nail an Astounding First Impression</h4>
              <p className="text-secondary">Online</p>
              <a href="">See Details <i className="fa-solid fa-chevron-right"></i></a>
            </div>
          </div>

          <div className="col-4 p-4 item-slider">
            <img src={sliderEnterpreneur} className="img-fluid" alt="Slider"/>
            <div className="container-text-item-slider">
              <h4>CV 101 : Nail an Astounding First Impression</h4>
              <p className="text-secondary">Online</p>
              <a href="">See Details <i className="fa-solid fa-chevron-right"></i></a>
            </div>
          </div>

          <div className="col-4 p-4 item-slider">
            <img src={sliderEnterpreneur} className="img-fluid" alt="Slider"/>
            <div className="container-text-item-slider">
              <h4>CV 101 : Nail an Astounding First Impression</h4>
              <p className="text-secondary">Online</p>
              <a href="">See Details <i className="fa-solid fa-chevron-right"></i></a>
            </div>
          </div>

          <div className="col-4 p-4 item-slider">
            <img src={sliderEnterpreneur} className="img-fluid" alt="Slider"/>
            <div className="container-text-item-slider">
              <h4>CV 101 : Nail an Astounding First Impression</h4>
              <p className="text-secondary">Online</p>
              <a href="">See Details <i className="fa-solid fa-chevron-right"></i></a>
            </div>
          </div>

          <div className="col-4 p-4 item-slider">
            <img src={sliderEnterpreneur} className="img-fluid" alt="Slider"/>
            <div className="container-text-item-slider">
              <h4>CV 101 : Nail an Astounding First Impression</h4>
              <p className="text-secondary">Online</p>
              <a href="">See Details <i className="fa-solid fa-chevron-right"></i></a>
            </div>
          </div> 

          </Slider>
          {/* <!-- /end carousel --> */}
        </div>
      </section>
      {/* <!-- /end non-competitions --> */}

      {/* <!-- testimonials --> */}
      <section id="testimonials" className="d-flex align-items-center" style={{marginTop: '150px'}} data-aos="fade-up">
        <div className="background w-100 p-5">
          <div className="container text-white position-relative">
            <p className="text-green mb-3">Testimonials</p>
            <h2 className="mb-5">What They Say<br/>About Us</h2>
            <p className='white-2'>To convince you who are still confused to decide, let's hear what they say about becoming a part of Petrolida's journey</p>
            <button className="btn shadow-none text-dark rounded-circle mt-4" id="btn-left-testi" onClick={leftBtnHandler}><i className="fas fa-arrow-left"></i></button>
            <button className="btn shadow-none text-white rounded-circle mt-4" id="btn-right-testi" onClick={rightBtnHandler}><i className="fas fa-arrow-right"></i></button>
            <video src={videos[index]} poster={poster[index]} controls width="330" height="330" preload="metadata" id="video-testi"></video>
          </div>
        </div>
      </section>
      {/* <!-- /end testimonials --> */}

      {/* <!-- cta --> */}
      <section id="cta">
        <div className="container text-center text-white w-50">
          <h2 className="mb-4 fw-bold">Don't Forget to Register!</h2>
          <p className="mb-4">Don’t miss the ultimate opportunity to showcase your ideas and innovation in reinforcing the future of our energy industry</p>
          <button>Register</button>
        </div>
      </section>
      {/* <!-- /end cta --> */}

      {/* <!-- sponsors & supporting partners --> */}
      <section id="sponsors" className="pt-5 bg-white">
        <div className="container p-3 text-center">
          <h2 className="mb-2 fw-bold">Sponsors & Supporting Partners</h2>
          <div className='d-flex justify-content-center'>
            <img src={homeSponsor} alt="Sponsors & Supporting Partners" className="img-fluid mt-3 d-none d-md-block"/>
            <div className="row d-md-none">
              <div className="col-6">
                <img src={ditjenMigas} className="img-fluid" alt="Sponsors dan Supporting"/>
              </div>
              <div className="col-6">
                <img src={kmi} className="img-fluid"alt="Sponsors dan Supporting"/>
              </div>
              <div className="col-6">
                <img src={pln} className="img-fluid" alt="Sponsors dan Supporting"/>
              </div>
              <div className="col-6">
                <img src={itsJazz} className="img-fluid"alt="Sponsors dan Supporting"/>
              </div>
              <div className="col-6">
                <img src={studio31} className="img-fluid"alt="Sponsors dan Supporting"/>
              </div>
              <div className="col-6">
                <img src={badakLng} className="img-fluid"alt="Sponsors dan Supporting"/>
              </div>
              <div className="col-6">
                <img src={indoRayaTenaga} className="img-fluid"alt="Sponsors dan Supporting"/>
              </div>
              <div className="col-6">
                <img src={indonesiaPower} className="img-fluid" alt="Sponsors dan Supporting"/>
              </div>
              <div className="col-6">
                <img src={skkMigas} className="img-fluid" alt="Sponsors dan Supporting"/>
              </div>
              <div className="col-6">
                <img src={phr} className="img-fluid"alt="Sponsors dan Supporting"/>
              </div>
              <div className="col-6">
                <img src={pkt} className="img-fluid" alt="Sponsors dan Supporting"/>
              </div>
              <div className="col-6">
                <img src={kisi} className="img-fluid" alt="Sponsors dan Supporting"/>
              </div>
              <div className="col-6">
                <img src={drilling} className="img-fluid" alt="Sponsors dan Supporting"/>
              </div>
              <div className="col-6">
                <img src={petronas} className="img-fluid" alt="Sponsors dan Supporting"/>
              </div>
              <div className="col-6">
                <img src={petrokimia} className="img-fluid" alt="Sponsors dan Supporting"/>
              </div>
              <div className="col-6">
                <img src={pgn} className="img-fluid" alt="Sponsors dan Supporting"/>
              </div>
              <div className="col-6">
                <img src={pos} className="img-fluid" alt="Sponsors dan Supporting"/>
              </div>
              <div className="col-6">
                <img src={premier} className="img-fluid" alt="Sponsors dan Supporting"/>
              </div>
              <div className="col-6">
                <img src={tppi} className="img-fluid" alt="Sponsors dan Supporting"/>
              </div>
              <div className="col-6">
                <img src={tristar} className="img-fluid" alt="Sponsors dan Supporting"/>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      {/* <!-- /end sponsors & supporting partners --> */}

      {/* <!-- footer --> */}
      <Footer/>
      {/* <!-- /end footer --> */}
    </div>
  )
};

export default Home;
