
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { RegisterDoctorReducer , LoginDocUserReducer , DoctorTimingReducer } from './reducers/doctorreducer';
import { LoginUserReducer , UpdateUserReducer , DeleteUserReducer , GetAllUserReducer , RegisterUserReducer , UserResetPasswordReducer , UserForgotPasswordReducer , GetUserByIdReducer } from '../src/reducers/userreducer'
import { GetAllDoctorReducer , GetDoctorByIdReducer , ReviewReducer , GetAllReqDoctorReducer , ApproveDrReducer  , DoctorForgotPasswordReducer , DoctorResetPasswordReducer } from './reducers/doctorreducer';
import {LoginAdminReducer ,RegisterAdminReducer} from './reducers/adminred'
import { UpdateDoctorReducer } from './reducers/doctorreducer';
import {RegisterCompounderReducer , LoginCompounderReducer  , GetCompounderByIdReducer , CompounderDeleteReducer

} from './reducers/compounderreducer'

import {GetPatientsByUserIdReducer , GetPatientsByOnlyIdReducer ,GetAllPatientsReducer , GetBookingsByUserIdReducer , GetBookingsByBookingIdReducer , UpdateBookingReducer , BookingDeleteReducer} from './reducers/bookingreducer'

import thunk from 'redux-thunk'


const FinalReducer = combineReducers(
  { LoginUserReducer : LoginUserReducer ,
    UpdateUserReducer : UpdateUserReducer ,

    DeleteUserReducer : DeleteUserReducer ,

    GetAllUserReducer : GetAllUserReducer  ,
    RegisterUserReducer : RegisterUserReducer ,
    LoginDocUserReducer:LoginDocUserReducer ,
    RegisterDoctorReducer:RegisterDoctorReducer ,
    GetAllDoctorReducer:GetAllDoctorReducer,
    LoginDocUserReducer:LoginDocUserReducer,
    RegisterDoctorReducer:RegisterDoctorReducer ,
    GetDoctorByIdReducer:GetDoctorByIdReducer ,
    ReviewReducer:ReviewReducer ,
    LoginAdminReducer : LoginAdminReducer ,
    RegisterAdminReducer:RegisterAdminReducer ,
    GetAllReqDoctorReducer:GetAllReqDoctorReducer ,
    ApproveDrReducer:ApproveDrReducer ,
    UpdateDoctorReducer:UpdateDoctorReducer ,
    RegisterCompounderReducer:RegisterCompounderReducer ,
    LoginCompounderReducer:LoginCompounderReducer ,
    GetCompounderByIdReducer:GetCompounderByIdReducer ,
    CompounderDeleteReducer:CompounderDeleteReducer ,
    GetPatientsByUserIdReducer:GetPatientsByUserIdReducer ,
    GetPatientsByOnlyIdReducer:GetPatientsByOnlyIdReducer ,
    GetAllPatientsReducer:GetAllPatientsReducer ,
    DoctorTimingReducer:DoctorTimingReducer , 
    GetBookingsByUserIdReducer:GetBookingsByUserIdReducer ,
   
    UserResetPasswordReducer:UserResetPasswordReducer ,
    GetBookingsByBookingIdReducer:GetBookingsByBookingIdReducer ,
    UpdateBookingReducer:UpdateBookingReducer , 
    UserForgotPasswordReducer:UserForgotPasswordReducer ,
    GetUserByIdReducer:GetUserByIdReducer ,
    DoctorForgotPasswordReducer:DoctorForgotPasswordReducer , 
    DoctorResetPasswordReducer:DoctorResetPasswordReducer ,
    BookingDeleteReducer:BookingDeleteReducer

   


  }
)



const currentuser = localStorage.getItem('currentuser') ? JSON.parse(localStorage.getItem('currentuser')) : null
const admin=localStorage.getItem('admin') ? JSON.parse(localStorage.getItem('admin')) : null
const doctor = localStorage.getItem('doctor') ? JSON.parse(localStorage.getItem('doctor')) : null
const compounder  = localStorage.getItem('compounder') ? JSON.parse(localStorage.getItem('compounder')) : null
const book = sessionStorage.getItem('bookingdetails') ? JSON.parse(sessionStorage.getItem('bookingdetails')) : null
const resetpass = sessionStorage.getItem('passdetails')? JSON.parse(sessionStorage.getItem('passdetails')):null
//const bengali = localStorage.getItem('bengali')? JSON.parse(localStorage.getItem('bengali') ) : null 

const InitialState = {
  LoginUserReducer: { currentuser: currentuser } ,
  LoginAdminReducer:{admin:admin} ,
  LoginDocUserReducer : { doctor:doctor } ,
  RegisterDoctorReducer:{doctor:doctor} ,
  RegisterUserReducer:{currentuser:currentuser} ,
  LoginCompounderReducer : { compounder:compounder }
}



const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(FinalReducer, InitialState, composeWithDevTools(
  applyMiddleware(thunk)

))


export default store;