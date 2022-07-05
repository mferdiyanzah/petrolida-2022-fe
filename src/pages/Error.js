import React from 'react'
import { useTitle } from 'react-use';
import errorImg from '../assets/img/404-image.png'
import logoText from '../assets/img/logo-text.png'
import Navbar from '../components/Navbar';

const Error = () => {
  useTitle('Error | Petrolida')
  return (
    <div className="body" style={{height: '100vh'}}>
      {/* <!-- Navbar --> */}
      <Navbar/>
      {/* <!-- End of Navbar --> */}

      {/* <!-- Error 404 --> */}
      <section id="error-404" className="h-full d-flex flex-column align-items-center justify-content-center">
        <div className="container text-center">
          <img src={errorImg} alt="404" className="error-img"/>
          <h1 className="error-title h4">Oops!, Something went wrong</h1>
          <p className="error-desc body2">The page your are looking for is not available</p>
          <a href="" className="error-button">Go Back</a>
        </div>
      </section>
      {/* <!-- End of Error 404 --> */}
    </div>
  )
};

export default Error;
