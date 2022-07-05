import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar'

import browseIcon from "../../assets/img/browse-icon.svg"
import userIcon from "../../assets/img/user-icon.svg"
import $ from 'jquery'
import { useCookie, useTitle } from 'react-use'
import { ffdRegistration } from '../../services/comp_registration'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spinner'

import mandiri from '../../assets/img/mandiri-logo.png'
import paypal from '../../assets/img/paypal-logo.png'
import chevronDown from '../../assets/img/chevron-down.svg'

const FFDRegistration = () => {
  useTitle('Register to Fracturing Fluid Design Competition | Petrolida 2022')
  const [token] = useCookie('token')
  const navigate = useNavigate()
  useEffect(() => {
    if(!token){
      navigate('/account/sign_in')
    }
  }, [])
  
  const [form, setForm] = useState({
    first: true,
    second: false,
    third: false
  }) 
  $('#firstToSecond').on('click', function () {
    $('#firstForm').fadeOut("3000", function () {
      $(this).css({ display: "none" });
      $('#secondForm').fadeIn("3000", function () {
        $(this).css({ display: "block" });
      });
    });
  });
  $('#secondToDocument').on('click', function () {
    $('.indicator-image').removeClass('active');
    $('#documentsIndicator').addClass('active');
    $('#informationForm').fadeOut("3000", function () {
      $(this).css({ display: "none" });
      $('#documentForm').fadeIn("3000", function () {
        $(this).css({ display: "block" });
      });
    });
  });
  $('#informationIndicator').on('click', function() {
    $('#firstForm').css({ display: "block" });
    $('#secondForm').css({ display: "none" });
    $('.indicator-image').removeClass('active');
    $('#informationIndicator').addClass('active');
    $('#documentForm').fadeOut("3000", function () {
      $(this).css({ display: "none" });
      $('#informationForm').fadeIn("3000", function () {
        $(this).css({ display: "block" });
      });
    });
  });
  $('#documentsIndicator').on('click', function() {
    $('.indicator-image').removeClass('active');
    $('#documentsIndicator').addClass('active');
    $('#informationForm').fadeOut("3000", function () {
      $(this).css({ display: "none" });
      $('#documentForm').fadeIn("3000", function () {
        $(this).css({ display: "block" });
      });
    });
  });


  const [data, setData] = useState({
    leader_name:'',
    leader_email: '',
    team_name: '',
    university: '',
    phone: '',
    member1_name: '',
    member1_email:'',
    member2_name: '',
    member2_email: '',
    member1_phone: '',
    member2_phone: '',
    leader_file: '',
    member1_file: '',
    member2_file: ''
  })

  const dataForm = new FormData()

    // const [leaderFile, setLeaderFile] =
  const [loading, setLoading] = useState(false) 
  
  const handleSubmit = e => {
    setLoading(true)
    e.preventDefault()
    
    for (const k in data) {
      dataForm.append(k, data[k])
    }
    
    ffdRegistration(token, dataForm)
      .then(res => {
        if(res === 'Form was Submited created successfully.'){
          setLoading(false)
          navigate('/finish_registration')
        } else {
          let errorText = []
          for (const error in res) {
            const temp = res[error] + '<br/>'
            errorText.push(temp)
          }
          const errno = errorText.join('')
          Swal.fire(({
            icon: "error",
            title: "Error",
            html: errno
          }))
          setLoading(false)
        }
      })
      .catch(err => {
        for (const error in err) {
          console.log(err[error])
        }
      })
  }

  return (
    <div className='body'>
      <Navbar/>
      <header id="regis-header" style={{marginTop: '100px'}}>
        <div className="container">
          <h1 className="header-title my-2">Register for Fracturing Fluid Design Competition</h1>
          <p className="header-desc">Follow the simple steps to complete your registration</p>
          <hr className="header-line"/>
        </div>
      </header>

      <section id="regis-container">
        <div className="container my-5">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-2 col-3">
              <div className="form-indicator">
                <div className="indicator d-flex align-items-center">
                  <div className="flex-grow-1 d-none d-md-block">
                    <h4 className="text-end indicator-name">Information</h4>
                    <p className="text-end indicator-desc">Team Information</p>
                  </div>
                  <div id="informationIndicator" className="indicator-image ms-md-4 mx-auto active">
                    <img className="d-block" src={userIcon} alt=""/>
                  </div>
                </div>
                <div className="indicator d-flex align-items-center">
                  <div className="flex-grow-1 d-none d-md-block">
                    <h4 className="text-end indicator-name">Documents</h4>
                    <p className="text-end indicator-desc">Browse and Upload</p>
                  </div>
                  <div id="documentsIndicator" className="indicator-image ms-md-4 mx-auto">
                    <img className="d-block" src={browseIcon} alt=""/>
                  </div>
                </div>
                <div className="indicator-dashed"></div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8 col-md-7 col-sm-10 col-9">
              <form onSubmit={e => handleSubmit(e)} noValidate>
                {/* <!-- Information Form --> */}
                <div id="informationForm" className="form-container">
                  <span className="form-step body4">Step 1/2</span>
                  <h2 className="form-title h6">Let's start with your team</h2>
                  <p className="form-instruction body4">Please fill in the details below</p>
                  <hr className="form-line"/>
                  {/* <!-- First Form --> */}
                  <div id="firstForm" style={{display: 'block'}}>
                    <h3 className="form-section h7">Team Leader*</h3>
                    <div className="my-3">
                      <label htmlFor="leader_name" className="form-label">Full Name</label>
                      <input required type="text" className="form-input" id="leader_name" name="leader_name" onChange={e => setData({...data, leader_name: e.target.value})} tabIndex="1" autoFocus placeholder="Enter your full name"/>
                    </div>
                    <div className="my-3">
                      <label htmlFor="leader_email" className="form-label">Email</label>
                      <input required type="email" className="form-input" id="leader_email" onChange={e => setData({...data, leader_email: e.target.value})} name="leader_email" tabIndex="2" placeholder="Enter your email"/>
                    </div>
                    <div className="my-3">
                      <label htmlFor="team_name" className="form-label">Team Name</label>
                      <input required type="text" className="form-input" id="team_name" onChange={e => setData({...data, team_name: e.target.value})} name="team_name" tabIndex="3" placeholder="Enter your team name"/>
                    </div>
                    <div className="my-3">
                      <label htmlFor="university" className="form-label">University</label>
                      <input required type="text" className="form-input" id="university" onChange={e => setData({...data, university: e.target.value})} name="university" tabIndex="4" placeholder="Enter your university"/>
                    </div>
                    <div className="my-3">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input required type="text" className="form-input" onChange={e => setData({...data, phone: e.target.value})} id="phone" name="phone" tabIndex="5" placeholder="Enter your phone number"/>
                    </div>
                    <button type="button" id="firstToSecond" tabIndex="6" className="form-button d-block ms-auto" onClick={() => setForm({...form, first: false, second: true})}>Next Step</button>
                  </div>
                  {/* <!-- End of First Form -->

                  <!-- Second Form --> */}
                  <div id="secondForm" style={{display: 'none'}}>
                    <h3 className="form-section h7">Team Member 1*</h3>
                    <div className="my-3">
                      <label htmlFor="member1_name" className="form-label">Full Name</label>
                      <input required type="text" className="form-input" id="member1_name" name="member1_name" onChange={e => setData({...data, member1_name: e.target.value})} tabIndex="7" placeholder="Enter your full name"/>
                    </div>
                    <div className="my-3">
                      <label htmlFor="member1_email" className="form-label">Email</label>
                      <input required type="email" className="form-input" id="member1_email" onChange={e => setData({...data, member1_email: e.target.value})} name="member1_email" tabIndex="8" placeholder="Enter your email"/>
                    </div>
                    <div className="my-3">
                      <label htmlFor="member1_phone" className="form-label">Phone Number</label>
                      <input required type="text" className="form-input" id="member1_phone" name="member1_phone" tabIndex="9" onChange={e => setData({...data, member1_phone: e.target.value})} placeholder="Enter your phone number"/>
                    </div>
                    <h3 className="form-section h7">Team Member 2*</h3>
                    <div className="my-3">
                      <label htmlFor="member2_name" className="form-label">Full Name</label>
                      <input required type="text" className="form-input" id="member2_name" onChange={e => setData({...data, member2_name: e.target.value})} name="member2_name" tabIndex="10" placeholder="Enter your full name"/>
                    </div>
                    <div className="my-3">
                      <label htmlFor="member2_email" className="form-label">Email</label>
                      <input required type="email" className="form-input" id="member2_email" onChange={e => setData({...data, member2_email: e.target.value})} name="member2_email" tabIndex="11" placeholder="Enter your email"/>
                    </div>
                    <div className="my-3">
                      <label htmlFor="member2_phone" className="form-label">Phone Number</label>
                      <input required type="text" className="form-input" onChange={e => setData({...data, member2_phone: e.target.value})} id="member2_phone" name="member2_phone" tabIndex="12" placeholder="Enter your phone number"/>
                    </div>
                    <button type="button" id="secondToDocument" tabIndex="13" className="form-button d-block ms-auto" onClick={() => setForm({...form, second: false, third: true})}>Next Step</button>
                  </div>
                </div>

                <div id="documentForm" className="form-container" style={{display: 'none'}}>
                  <span className="form-step body4">Step 2/2</span>
                  <h2 className="form-title h6">Complete Submission</h2>
                  <p className="form-instruction body4">Thanks for taking the time to complete this form</p>
                  <hr className="form-line"/>
                  <h3 className="form-section h7">Upload your identity</h3>
                  <p className='form-instruction  body4'>Please submit your ID card and student card in zip or rar format</p>
                  <div className="my-3">
                    <label htmlFor="leader_file" className="form-label">Team leader*</label>
                    <input required className="form-control" type="file" id="leader_file" name="leader_file" tabIndex="14" accept=".zip,.rar" onChange={e => setData({...data, leader_file: e.target.files[0]})}/>
                    <small class="text-danger body4">Max 5MB Format zip/rar</small>
                  </div>
                  <div className="my-3">
                    <label htmlFor="member1_file" className="form-label">Team member 1*</label>
                    <input required className="form-control" type="file" id="member1_file" name="member1_file" tabIndex="15" accept=".zip,.rar" onChange={e => setData({...data, member1_file: e.target.files[0]})}/>
                    <small class="text-danger body4">Max 5MB Format zip/rar</small>
                  </div>
                  <div className="my-3">
                    <label htmlFor="member2_file" className="form-label">Team member 2*</label>
                    <input required className="form-control" type="file" id="member2_file" name="member2_file" tabIndex="16" accept=".zip,.rar" onChange={e => setData({...data, member2_file: e.target.files[0]})}/>
                    <small class="text-danger body4">Max 5MB Format zip/rar</small>
                  </div>
                  <h3 className="form-section h7 mt-4">Upload your Payment</h3>
                  <a className="payment-button body2 collapsed d-flex align-items-center mt-2" data-bs-toggle="collapse" href="#paymentDestination" role="button" aria-expanded="false" aria-controls="paymentDestination">
                    <img src={chevronDown} className="payment-chevron d-block me-2" alt=""/>
                    Payment Options
                  </a>
                  <div className="collapse" id="paymentDestination">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="payment my-3 d-flex flex-column justify-content-center align-items-center">
                          <img src={mandiri} className="payment-logo" alt=""/>
                          <p className="payment-target mt-3 mb-2">1400018470352</p>
                          <p className="payment-name">a.n Elysha Mundisari</p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="payment my-3 d-flex flex-column justify-content-center align-items-center">
                          <img src={paypal} className="payment-logo" alt=""/>
                          <p className="payment-target mt-3 mb-2">www.paypal.me/elyshamundisari</p>
                          <p className="payment-name">a.n Elysha Mundisari</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-3">
                    <label for="payment" className="form-label">Payment Receipt*</label>
                    <input required className="form-control" type="file" id="payment" name="payment" tabindex="17" accept=".png,.jpg,.jpeg" onChange={e => setData({...data, payment: e.target.files[0]})}/>
                    <small class="text-danger body4">Max 1MB Format jpg/jpeg/png</small>
                  </div>
                  <button type="submit" tabIndex="17" className="form-button d-block ms-auto" >{loading ? <Spinner/> : 'Complete Submission'}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FFDRegistration