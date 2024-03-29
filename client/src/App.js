
import './App.css';
import Navbar from './Header/Navbar';
import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/Loginscreen';
import SignUpScreen from './screen/signupscreen';
import UserWelcomeScreen from './screen/userscreen';
import DoctorWelcomeScreen from './screen/doctorscreen';
import DrSignUp from './screen/drsignup';
import DoctorLogin from './screen/drlogin';
 import DoctorDescription from './screen/drdescription';
 import AllDoctorSearch from './screen/drallget';
import { BrowserRouter , Route } from "react-router-dom";
import AllDoctors from './screen/alldoctor';
import DoctorBySpecialization from './screen/doctorbyspec';
import IndividualDrSpecialization from './screen/drbyspecialization';
import AdminLogin from './admin/adminlogin';
import AdminRegistration from './admin/adminreg';
import AdminScreen from './admin/adminscreen';
import  DoctorPage  from './doctors/drpage';
import CompounderLogin from './compounder/compounderlogin';
import { route } from 'fontawesome';
import Compounder from './compounder/compounder';
import AllDoctorIllness from './screen/alldrillness';
import FilterDoctorIllness from './component/drfiltersearch';
import ForgotPassword from './users/forgotpass';

// For Doctors
import Dermatologist from './doctors/acnedr';
import Nephrologist from './doctors/nephrologist';
import ENTSpeacialist from './doctors/entdoc';
import OrthopaedicDr from './doctors/orthopaedicdr';
import Cardiologist from './doctors/drcardiologist';
import Gynecologist from './doctors/drgynecologist';
import Pummonologist from './doctors/drpummonologist';
import Neurologist from './doctors/drneurologist';
import Endocrenologist from './screen/drendocreno';
import Paediatrician from './doctors/drpaeditric';
import Physician from './doctors/drphysician';
import Dentist from './doctors/drdentist';
import Diabetes from './doctors/drdiabetes';
import Opthamologist from './doctors/drophthamologist';
import Sexologist from './doctors/drsexologist';
import Nutrition from './doctors/drnutrition';
import Psychiatrist from './doctors/drpsych';
import Gastro from './doctors/drgastro';
import Oncologist from './doctors/droncologist';
import Urologist from './doctors/drurologist';
import Obstetric from './doctors/drobstetric';




//For Users
import UpdateUser from './screen/updateuser';
import AddTiming from './component/addtiming';
import ConfirmationPage from './component/confirmation';
import ResetPassword from './users/resetpassword';
import DoctorForgotPassword from './doctors/drforgetpass';
import DoctorResetPassword from './doctors/drresetpass';
import IndividualBooking from './doctors/individualpatient';
import LanguageSelector from './language';
import Invoice from './users/invoice';
import MakeChoice from './makechoice';
import AmbulanceService from './screen/ambulance';
import UserAdminBookingList from './admin/useradmin';
import AdminGetCompounder from './admin/compounderadminlist';
import AdminPatientsList from './admin/docbookinglist';
import AdminCompounderHistory from './admin/compounderhistory';





function App() {
  const user = JSON.parse(localStorage.getItem('currentuser'))
  const admin=JSON.parse(localStorage.getItem('admin'))
  const doctor = JSON.parse(localStorage.getItem('doctor'))
  const compounder = JSON.parse(localStorage.getItem('compounder'))


  return (
    <div className="App">

      <Navbar/>
    
      <hr id="spacing" />











   <BrowserRouter>

{
  user?( <p>
    
   <Route path="/homescreen" exact component={HomeScreen} ><HomeScreen/></Route>
   <Route path="/ambulance-list" exact component={AmbulanceService} ></Route>
   <Route path='/alldoctors' component={AllDoctorSearch} ></Route>
 <Route path="/doctors/:id" component = { DoctorDescription} ></Route>
 <Route path="/dr-by-specialization" component={IndividualDrSpecialization} ></Route>
<Route path='/doctor-by-symptom' component={FilterDoctorIllness}  ></Route>
<Route path='/bookingconfirmation' component={ConfirmationPage}  ></Route>


  </p> ) : (
    <p>
      {
        doctor?(<p>
           
   <Route path="/homescreen" exact component={HomeScreen} ><HomeScreen/></Route>
   <Route path="/ambulance-list" exact component={AmbulanceService} ></Route>
   <Route path='/alldoctors' component={AllDoctorSearch} ></Route>
 <Route path="/doctors/:id" component = { DoctorDescription} ></Route>
 <Route path="/dr-by-specialization" component={IndividualDrSpecialization} ></Route>
<Route path='/doctor-by-symptom' component={FilterDoctorIllness}  ></Route>
<Route path='/bookingconfirmation' component={ConfirmationPage}  ></Route>



        </p>) : (
          <p>
            {
              compounder?( <p>
                
   <Route path="/homescreen" exact component={HomeScreen} ><HomeScreen/></Route>
   <Route path="/ambulance-list" exact component={AmbulanceService} ></Route>
   <Route path='/alldoctors' component={AllDoctorSearch} ></Route>
 <Route path="/doctors/:id" component = { DoctorDescription} ></Route>
 <Route path="/dr-by-specialization" component={IndividualDrSpecialization} ></Route>
<Route path='/doctor-by-symptom' component={FilterDoctorIllness}  ></Route>
<Route path='/bookingconfirmation' component={ConfirmationPage}  ></Route>



              </p> ):
              (<p>
               {
                 null
               }
              </p>)
            }
            </p>
        )
      }
    </p>
  )
}
   
   <Route exact path='/' component={LanguageSelector} />
   <Route  path='/makechoice' component={MakeChoice} />


   {/* <Route path="/homescreen" exact component={HomeScreen} ><HomeScreen/></Route> */}
<Route path="/login" component={LoginScreen} ><LoginScreen/></Route>

<Route path="/signup" component={SignUpScreen} ><SignUpScreen/></Route>
<Route path="/user" component={UserWelcomeScreen} ><UserWelcomeScreen/></Route>
 <Route path="/doctor" component={DoctorWelcomeScreen} ><DoctorWelcomeScreen/></Route>
<Route path="/drsignup" component={DrSignUp} ><DrSignUp/></Route>
<Route path="/drlogin" component={DoctorLogin} ><DoctorLogin/></Route>

 { doctor ? ( <Route  path='/drpage' component={DoctorPage}  />) : null }




<Route path='/adminlogin' component={AdminLogin} ><AdminLogin/></Route>
<Route path='/compounderlogin' component={CompounderLogin} ></Route>
{ compounder ? <Route path='/compounder' component={Compounder} ></Route> : null }

<Route  path='/addtiming' component={AddTiming} />
{/* <Route path='/admin/registration' component={AdminRegistration} ></Route> */}

 <Route path='/updateuser' component={UpdateUser} ></Route>

 <Route path='/forgotpass' component={ForgotPassword} ></Route>
<Route path='/resetpassword' component={ResetPassword} ></Route>
<Route path='/drforgetpassword' component={DoctorForgotPassword} />



    <Route path='/drresetpassword' component={DoctorResetPassword} />
    {
      doctor?(
        <Route path='/bookings/:id' component={IndividualBooking} ></Route>
      ):(
        <p>
          {
            compounder ? (
              <Route path='/bookings/:id' component={IndividualBooking} ></Route>
            ) : (
              <p>
                {
                  admin?(
                    <Route path='/bookings/:id' component={IndividualBooking} ></Route>
                  ) : (<div>
                    {
                      user ? (
                        <Route path='/bookings/:id' component={Invoice} ></Route>
                      ):null
                    } </div>
                  )
                }
                </p>
            )
          }
          </p>
      )
    }

    {
      admin?(
<div>
<Route path='/adminuserbookings/:id' component ={UserAdminBookingList}></Route>
<Route path='/admincompounder/:id' component ={AdminGetCompounder}></Route>
<Route path='/admindoctorbookings/:id' component ={AdminPatientsList}></Route>
<Route path='/compounderhistory/:id/:id' component ={AdminCompounderHistory}></Route>

  </div>
      ):null
    }

   </BrowserRouter>






   {/* For Doctors */} 

   <BrowserRouter>
   
{
  user?( <p>


<Route path='/acne-issues' component={Dermatologist} ></Route>
   <Route path='/kidney-issues' component={Nephrologist} ></Route>
   <Route path='/ENT-specialist' component={ENTSpeacialist} ></Route>
   <Route path='/cancer' component={Oncologist} ></Route>
   <Route path='/urinary-issues' component={Urologist} ></Route>
   <Route path='/eye-related-issues' component={Opthamologist} ></Route>
   <Route path='/stomach-pain' component={Gastro} ></Route>
   <Route path='/gynecological-issues' component={Gynecologist} ></Route>
   <Route path='/diabetes' component={Diabetes} ></Route>
   <Route path='/bones-issues' component={OrthopaedicDr} ></Route>
   <Route path='/brain-issues' component={Neurologist} ></Route>
   <Route path='/diet-nutrition' component={Nutrition} ></Route>
   <Route path='/lungs-breathing' component={Pummonologist} ></Route>
   <Route path='/heart-issues' component={Cardiologist} ></Route>
   <Route path='/performance-issues' component={Sexologist} ></Route>
   <Route path='/periods-issues' component={Obstetric} ></Route>
   <Route path='/dental-issues' component={Dentist} ></Route>
   <Route path='/depression' component={Psychiatrist} ></Route>
   <Route path='/child-not-feelingwell' component={Paediatrician} ></Route>
   <Route path='/cold-cough' component={Physician} ></Route>
   







  {/*part2*/}



  <Route path='/dermatologist' component={Dermatologist} ></Route>
   <Route path='/nephrologist' component={Nephrologist} ></Route>
   <Route path='/otolaryngologist' component={ENTSpeacialist} ></Route>
   <Route path='/oncologist' component={Oncologist} ></Route>
   <Route path='/urologist' component={Urologist} ></Route>
   <Route path='/opthamologist' component={Opthamologist} ></Route>
   <Route path='/gastrologist' component={Gastro} ></Route>
   <Route path='/gynecologist' component={Gynecologist} ></Route>
   <Route path='/endocrinologist' component={Diabetes} ></Route>
   <Route path='/orthopedic' component={OrthopaedicDr} ></Route>
   <Route path='/neurologist' component={Neurologist} ></Route>
   <Route path='/nutritionist' component={Nutrition} ></Route>
   <Route path='/pummonologist' component={Pummonologist} ></Route>
   <Route path='/cardiologist' component={Cardiologist} ></Route>
   <Route path='/sexologist' component={Sexologist} ></Route>
   <Route path='/obstetric' component={Obstetric} ></Route>
   <Route path='/dentist' component={Dentist} ></Route>
   <Route path='/psychiatrist' component={Psychiatrist} ></Route>
   <Route path='/paediatrician' component={Paediatrician} ></Route>
   <Route path='/physician' component={Physician} ></Route>


    
 

  </p> ) : (
    <p>
      {
        doctor?(<p>

<Route path='/acne-issues' component={Dermatologist} ></Route>
   <Route path='/kidney-issues' component={Nephrologist} ></Route>
   <Route path='/ENT-specialist' component={ENTSpeacialist} ></Route>
   <Route path='/cancer' component={Oncologist} ></Route>
   <Route path='/urinary-issues' component={Urologist} ></Route>
   <Route path='/eye-related-issues' component={Opthamologist} ></Route>
   <Route path='/stomach-pain' component={Gastro} ></Route>
   <Route path='/gynecological-issues' component={Gynecologist} ></Route>
   <Route path='/diabetes' component={Diabetes} ></Route>
   <Route path='/bones-issues' component={OrthopaedicDr} ></Route>
   <Route path='/brain-issues' component={Neurologist} ></Route>
   <Route path='/diet-nutrition' component={Nutrition} ></Route>
   <Route path='/lungs-breathing' component={Pummonologist} ></Route>
   <Route path='/heart-issues' component={Cardiologist} ></Route>
   <Route path='/performance-issues' component={Sexologist} ></Route>
   <Route path='/periods-issues' component={Obstetric} ></Route>
   <Route path='/dental-issues' component={Dentist} ></Route>
   <Route path='/depression' component={Psychiatrist} ></Route>
   <Route path='/child-not-feelingwell' component={Paediatrician} ></Route>
   <Route path='/cold-cough' component={Physician} ></Route>
   







  {/*part2*/}



  <Route path='/dermatologist' component={Dermatologist} ></Route>
   <Route path='/nephrologist' component={Nephrologist} ></Route>
   <Route path='/otolaryngologist' component={ENTSpeacialist} ></Route>
   <Route path='/oncologist' component={Oncologist} ></Route>
   <Route path='/urologist' component={Urologist} ></Route>
   <Route path='/opthamologist' component={Opthamologist} ></Route>
   <Route path='/gastrologist' component={Gastro} ></Route>
   <Route path='/gynecologist' component={Gynecologist} ></Route>
   <Route path='/endocrinologist' component={Diabetes} ></Route>
   <Route path='/orthopedic' component={OrthopaedicDr} ></Route>
   <Route path='/neurologist' component={Neurologist} ></Route>
   <Route path='/nutritionist' component={Nutrition} ></Route>
   <Route path='/pummonologist' component={Pummonologist} ></Route>
   <Route path='/cardiologist' component={Cardiologist} ></Route>
   <Route path='/sexologist' component={Sexologist} ></Route>
   <Route path='/obstetric' component={Obstetric} ></Route>
   <Route path='/dentist' component={Dentist} ></Route>
   <Route path='/psychiatrist' component={Psychiatrist} ></Route>
   <Route path='/paediatrician' component={Paediatrician} ></Route>
   <Route path='/physician' component={Physician} ></Route>


           


        </p>) : (
          <p>
            {
              compounder?( <p>

<Route path='/acne-issues' component={Dermatologist} ></Route>
   <Route path='/kidney-issues' component={Nephrologist} ></Route>
   <Route path='/ENT-specialist' component={ENTSpeacialist} ></Route>
   <Route path='/cancer' component={Oncologist} ></Route>
   <Route path='/urinary-issues' component={Urologist} ></Route>
   <Route path='/eye-related-issues' component={Opthamologist} ></Route>
   <Route path='/stomach-pain' component={Gastro} ></Route>
   <Route path='/gynecological-issues' component={Gynecologist} ></Route>
   <Route path='/diabetes' component={Diabetes} ></Route>
   <Route path='/bones-issues' component={OrthopaedicDr} ></Route>
   <Route path='/brain-issues' component={Neurologist} ></Route>
   <Route path='/diet-nutrition' component={Nutrition} ></Route>
   <Route path='/lungs-breathing' component={Pummonologist} ></Route>
   <Route path='/heart-issues' component={Cardiologist} ></Route>
   <Route path='/performance-issues' component={Sexologist} ></Route>
   <Route path='/periods-issues' component={Obstetric} ></Route>
   <Route path='/dental-issues' component={Dentist} ></Route>
   <Route path='/depression' component={Psychiatrist} ></Route>
   <Route path='/child-not-feelingwell' component={Paediatrician} ></Route>
   <Route path='/cold-cough' component={Physician} ></Route>
   







  {/*part2*/}



  <Route path='/dermatologist' component={Dermatologist} ></Route>
   <Route path='/nephrologist' component={Nephrologist} ></Route>
   <Route path='/otolaryngologist' component={ENTSpeacialist} ></Route>
   <Route path='/oncologist' component={Oncologist} ></Route>
   <Route path='/urologist' component={Urologist} ></Route>
   <Route path='/opthamologist' component={Opthamologist} ></Route>
   <Route path='/gastrologist' component={Gastro} ></Route>
   <Route path='/gynecologist' component={Gynecologist} ></Route>
   <Route path='/endocrinologist' component={Diabetes} ></Route>
   <Route path='/orthopedic' component={OrthopaedicDr} ></Route>
   <Route path='/neurologist' component={Neurologist} ></Route>
   <Route path='/nutritionist' component={Nutrition} ></Route>
   <Route path='/pummonologist' component={Pummonologist} ></Route>
   <Route path='/cardiologist' component={Cardiologist} ></Route>
   <Route path='/sexologist' component={Sexologist} ></Route>
   <Route path='/obstetric' component={Obstetric} ></Route>
   <Route path='/dentist' component={Dentist} ></Route>
   <Route path='/psychiatrist' component={Psychiatrist} ></Route>
   <Route path='/paediatrician' component={Paediatrician} ></Route>
   <Route path='/physician' component={Physician} ></Route>


                


              </p> ):
              (<p>
               {
                 null
               }
              </p>)
            }
            </p>
        )
      }
    </p>
  )
}

 






   </BrowserRouter>



   {/* For Admin */}




   <BrowserRouter>
  <Route path='/admin' component={AdminScreen} ></Route> 
   </BrowserRouter>








    </div>
  );
}

export default App;






