import Error from './pages/Error';
import Home from './pages/Home';
// import ComingSoon from './pages/ComingSoon';
import About from './pages/About';
import BusinessCase from './pages/BusinessCase';
import Paper from './pages/Paper'
import Petrosmart from './pages/Petrosmart'
import './assets/css/style.css'

import {
  Routes,
  Route
} from 'react-router-dom'
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import OilRigDesign from './pages/OilRigDesign';
import FractureDesign from './pages/FractureDesign';
import StockTrading from './pages/StockTrading';
import AwardingNight from './pages/AwardingNight';
import CityTour from './pages/CityTour';
import StudyCase from './pages/StudyCase';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp';
import BCCRegistration from './pages/Registration/BCCRegistration';
import FinishRegistration from './components/FinishRegistration';
import CSRegistration from './pages/Registration/CSRegistration';
import FFDRegistration from './pages/Registration/FFDRegistration';
import ORDRegistration from './pages/Registration/ORDRegistration';
import PSRegistration from './pages/Registration/PSRegistration';
import STCRegistration from './pages/Registration/STCRegistration';
import PaperRegistration from './pages/Registration/PaperRegistration';
import ComingSoon from './pages/ComingSoon';

function App() {
  const { pathname, hash} = useLocation()
  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0)
    } else{
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) element.scrollIntoView()
      }, 0)
    }
    
  }, [pathname, hash])
  return (
    <Routes>
      <Route path='*' element={<Error/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>} />
      <Route path='competitions/business_case' element={<BusinessCase/>}/>
      <Route path='competitions/paper' element={<Paper/>}/>
      <Route path='competitions/petrosmart' element={<Petrosmart/>}/>
      <Route path='competitions/oil_rig_design' element={<OilRigDesign/>} />
      <Route path='competitions/fracturing_fluid_design' element={<FractureDesign/>} />
      <Route path='competitions/stock_trading' element={<StockTrading/>}/>
      <Route path='competitions/case_study' element={<StudyCase/>} />
      <Route path='non_competitions/city_tour' element={<CityTour/>} />

      <Route path='competitions/business_case/register' element={<BCCRegistration/>} />
      <Route path='competitions/case_study/register' element={<CSRegistration/>} />
      <Route path='competitions/fracturing_fluid_design/register' element={<FFDRegistration/>} />
      <Route path='competitions/oil_rig_design/register' element={<ORDRegistration/>} />
      <Route path='competitions/petrosmart/register' element={<PSRegistration/>} />
      <Route path='competitions/stock_trading/register' element={<STCRegistration/>} />
      <Route path='competitions/paper/register' element={<PaperRegistration/>} />

      <Route path='finish_registration' element={<FinishRegistration/>} />
 
      <Route path='account/sign_in' element={<SignIn/>} />
      <Route path='account/sign_up' element={<SignUp/>} />
      <Route path='coming_soon' element={<ComingSoon/>} />

      <Route path='awarding_night' element={<AwardingNight/>} />
    </Routes>
  );
}

export default App;
