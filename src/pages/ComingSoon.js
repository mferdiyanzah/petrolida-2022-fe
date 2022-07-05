import React, { useState } from 'react';
import comingSoonImg from '../assets/img/coming-soon/comingsoon-image.png'
import { countdown } from '../utils/countdown';

const ComingSoon = () => {
  const timer = countdown()
  const [countDown, setCountDown] = useState({
    days: timer.days,
    hours: timer.hours,
    minutes: timer.minutes,
    seconds: timer.seconds
  })
  setInterval(() => {
    const timer = countdown()
    setCountDown({
      days: timer.days,
      hours: timer.hours,
      minutes: timer.minutes,
      seconds: timer.seconds
    })
  }, 1000);

  return (
    <section id="comingsoon" className="body h-100 d-flex align-items-center justify-content-md-center">
      <div className="ps-5 container text-white" style={{color: 'white'}}>
        <h2 className="comingsoon-title">Petrolida 2022 will be land</h2>
        <p className="comingsoon-desc">Don’t miss the ultimate opportunity to showcase your ideas and innovation in
          reinforcing the future of our
          energy industry</p>
      </div>
      <img src={comingSoonImg} alt="Coming Soon" className="comingsoon-image"/>
    </section>
  )
};

export default ComingSoon;
