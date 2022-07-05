import React from 'react';
import '../assets/css/main.scss'
import Navbar from '../components/Navbar'
import style from '../assets/css/about.module.css'
import Footer from '../components/Footer';

// import { Link } from 'react-router-dom';
import {ImQuotesLeft} from 'react-icons/im'
import { FaPhone } from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'

import bi_line from "../assets/img/business-case/bi_line.svg"
import ig from "../assets/img/business-case/ant-design_instagram-filled.svg"
import linkedin from "../assets/img/business-case/bx_bxl-linkedin.svg" 
import { useTitle } from 'react-use';
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  AOS.init()
  useTitle('About | Petrolida')
  return (
    <div className={style.body}>
      {/* <!-- nav --> */}
      <Navbar currentPage={'about'}/>
      {/* <!-- /end nav --> */}

      {/* Main Section */}
      <section className={`${style.mainSection} container`}>
        <div className={style.h1MainSection}>
          Utilizing <div className={style.bottomBorder}><div className={style.gradientBorder}>sustainable</div></div> ideas & innovations to reinforce the <div className={style.bottomBorder}><div className={style.gradientBorder}>future</div></div> of <div className={style.bottomBorder}><div className={style.gradientBorder}>energy</div></div> industry
        </div>

        <div className={style.h5MainSection}>
        Petroleum Integrated Days (Petrolida) is the biggest annual event held by SPE ITS Student Chapter. This year’s series will be the 10th annual event. Petroleum Integrated Days mainly focuses on several competitions in the energy sector but also provides non-competition events. Petrolida 2022 aims to serve as a platform for university students to explore and disclose their innovation regarding today’s energy challenges through providing them a chance to achieve substantial and competitive experiences to advance their excellence.
        </div>

      </section>

      {/* End of main section */}

      {/* Image section */}
      <div className={`position-relative ${style.imgContainer} container`}>
        <div style={{background:"linear-gradient(to top, rgba(255,255,255,0), #1B2845 85%), url(https://images.unsplash.com/photo-1629540946404-ebe133e99f49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1403&q=80) center"}} className={style.img1} data-aos="fade-right"> 
        </div>
        <div style={{background:"linear-gradient(to top, rgba(255,255,255,0), #1B2845 85%), url(https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80) center"}} className={style.img2} data-aos="fade-right"> 
        </div>

        <div style={{background:"linear-gradient(to top, rgba(255,255,255,0), #1B2845 85%), url(https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80) center"}} className={style.img3} data-aos="fade-right"> 
        </div>
        
        <div style={{background:"linear-gradient(to top, rgba(255,255,255,0), #1B2845 85%), url(https://images.unsplash.com/photo-1624996379671-b4d0837e45cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80) center"}} className={style.img4} data-aos="fade-left"> 
        </div>
        
        <div style={{background:"linear-gradient(to top, rgba(255,255,255,0), #1B2845 85%), url(https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80) center", left: '1040px', top: '80px'}} className={style.img5} data-aos="fade-left"> 
        </div>

      </div>

      <section className={`${style.goalSection} container`}>
        <h3>Our goals</h3>
        <div className='row justify-content-between p-2'>
          <div className={`col-sm mx-2 position-relative ${style.goal}`} data-aos="fade-right">
            <h3>
              01.
            </h3>
            <div className={`position-absolute ${style.white2}`} style={{bottom: '24px', left: '16px', right: '16px'}}>
            To serve as a platform for university undergraduate students to create and innovate regarding today’s energy issues.
            </div>
          </div>
          <div className={`col-sm mx-2 position-relative ${style.goal}`} data-aos="fade-right">
            <h3>
              02.
            </h3>
            <div className={`position-absolute ${style.white2}`} style={{bottom: '24px', left: '16px', right: '16px'}}>
            To give substantial and competitive experience for students to excel and showcase their potential.
            </div>
          </div>
          <div className={`col-sm mx-2 position-relative ${style.goal}`} data-aos="fade-left">
            <h3>
              03.
            </h3>
            <div className={`position-absolute ${style.white2}`} style={{bottom: '24px', left: '16px', right: '16px'}}>
            To preserve relations with another SPE Student Chapter, stakeholders, and companies.
            </div>
          </div>
          <div className={`col-sm mx-2 position-relative ${style.goal}`} data-aos="fade-left">
            <h3>
              04.
            </h3>
            <div className={`position-absolute ${style.white2}`} style={{bottom: '24px', left: '16px', right: '16px'}}>
            To give substantial and competitive experience for students to excel and showcase their potential.
            </div>
          </div>
        </div>
      </section>
      {/* end of section goals */}


      {/* section greetings */}
      <section className={`container ${style.greetingsContainer}`} data-aos="fade-up">
        <div className={`row d-flex justify-content-center ${style.greetings}`}>
          <div className={`${style.mainGreetings} col-sm-auto`}>
          <div className='d-flex justify-content-start'>
            <ImQuotesLeft className={style.quote}/>
            <div className={style.headGreetings}>Greetings to all aspiring students</div>
          </div>
          <span className={style.white2}>
          It has been such a wonderful journey since PETROLIDA was held back then in 2012. So many entities have involved throughout the series, starting from the competition delegates from both local and international universities, experts, practitioners, exceptional people from various industries, until the committees who had contributed to the success of the last nine series of PETROLIDA. Not to mention, with all of the obstacles that compel various changes and/or developments.<br/><br/>
          This year, PETROLIDA is coming back to you in its 10th series with the theme of "Utilizing Sustainable Ideas and Innovations to Reinforce the Future of Energy Industry". Despite the uncertain pandemic condition, it will not stop PETROLIDA to deliver you a tremendous and unforgettable experience.<br/><br/>
          All in all, I, Ezra, on the behalf of PETROLIDA 2022, I invite you all to celebrate the 10th year of PETROLIDA with us. See you!
          </span>
          </div>
        </div>

      </section>
      {/* end of section greetings */}

      {/* section qna */}
      <section className='text-center' style={{ marginTop: '175px'}}>
        <div style={{color: 'rgba(255, 255, 255, 0.68)'}}>
          Question & Answer <br/>
          <h3 className='my-2 text-white'>You still have a question?</h3>
          Browse our faqs below, if you can not find the answer to youre looking for please contact us.
        </div>
        
        <div className={`${style.boxQnAContainer} row justify-content-sm-center my-4`}>
          <div className={`${style.boxQnA} col-sm-4 mx-2 d-flex justify-content-center align-items-center`}>
            <FaPhone className={style.iconQnA}/>
            <div className={style.textBigQnA}>
              Ezra (+6287806780002)<br/>
              Velly (+6282118790722)
            </div>
          </div>
          <div className={`${style.boxQnA} col-sm-4 mx-2 text-center d-flex align-items-center justify-content-center`}>
            <GrMail className={style.iconQnA}/>
            <div className={style.textNormalQnA}>
              petrolida2022@gmail.com<br/>
              <span style={{color: 'rgba(255, 255, 255, 0.68)'}}>The best way to get answer faster.</span>
            </div>
          </div>
        </div>
      </section>
      {/* end of qna section */}

      {/* socmed section */}
      <section className='w-100 d-flex justify-content-center' style={{margin: '100px 0'}}>
        <div className='container row justify-content-center'>
          <div className='col-sm-6'>
            <span style={{fontSize: '38px'}} className='fw-bold'>Follow Us</span>
            <p className={style.followUs}>
            Keep up with us through our social media, let’s connect! Don’t miss the ultimate opportunity to showcase your ideas and innovation in reinforcing the future of our energy industry
            </p>
          </div>
          <div className={`col-sm-4 d-flex align-items-center justify-content-center ${style.socmedIcon}`}>
            <a href="https://lin.ee/BFdB4JM">
              <img src={bi_line} alt="Line"/>
            </a>
            <a href="https://www.instagram.com/petrolida2022/">
              <img src={ig} alt="Instagram"/>
            </a>
            <a href="https://www.linkedin.com/company/petroleum-integrated-days-petrolida/">
              <img src={linkedin} alt="Linkedin"/>
            </a>
          </div>
        </div>
      </section>

      {/* end of socmed section */}

      {/* <!-- footer --> */}
      <Footer/>
      {/* <!-- /end footer --> */}
    </div>
  )
};

export default About
