import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';

import { LoginUser } from "../actions/doctoraction";
import { LoginDocUserReducer } from "../reducers/doctorreducer";

import Loader from "../component/loader";


const DoctorLogin = () => {


  
    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')


    const loginreducer = useSelector(state=>state.LoginDocUserReducer)

    const {loading , error} = loginreducer

    const [name , setname] = useState('')
    const [email , setemail] = useState('')
    const [password , setpassword] = useState('')
    

    const dispatch = useDispatch()

    const login=(e)=>{

        e.preventDefault()

        const user ={
            name : name , 
            email:email ,
            password:password
        }


      dispatch(LoginUser(user))
      if(error)
      {
        document.getElementById('Message').innerHTML=error
      }
      
    }

    const meta = {
        title: 'Doctrap',
        description: 'Doctor Signup ',
        canonical: 'http://example.com/path/to/page',
        meta: {
            charset: 'utf-8',
            name: {
                keywords:  `react,meta,document,html,tags,signup , register , doctrap , docrap , practo , doctorbooking , illness
                
                
                `
            }
        }
    };


    useEffect( ()=>{

        if(localStorage.getItem('doctor'))
        {
            window.location.href='/drpage'
        }

        else  if( (localStorage.getItem('currentuser')) ||   (localStorage.getItem('compounder')) ||  (localStorage.getItem('admin')) )
        {
          window.location.href='/'
    

        }

    


    } ,[])








    return (
      

            <DocumentMeta {...meta}>


{
        bengali ? ( <p>

<div>


<br/> <br/> <br/>


<div id="loginbox" >
<form onSubmit={login}   >
<h1> ????????????????????? ????????????</h1>
<h5> ??????????????? ???????????? ? <a href="/drsignup"> 
??????????????? ????????????????????? ???????????? </a>  </h5>
<hr/>

<label className="formtext" >??????????????? ?????????????????? ????????????</label>
<input type="text"

value={email} 
  required

  onChange={ (e)=>{ setemail(e.target.value) } }   
  placeholder='??????????????? ?????????????????? ????????????' />



<label className="formtext" >
?????????????????????????????? ???????????????</label>
<input type="password"
value={password}
 
  required

  onChange={ (e)=>{ setpassword(e.target.value) } } 


  placeholder='?????????????????????????????? ???????????????' />   




<button  type='submit' className='box1' id="signupbtn"

style={{marginTop:'10px' , marginLeft:'40%' , marginRight:'40%'  }}


>?????????????????? ????????????
</button>

{loading && <Loader/>}
<p id='Message'   ></p>


<br/>
<p>
???????????? ?????? ?????????????????????????????????? <a href='/compounderlogin'>??????????????? ???????????? ????????????</a> </p>

</form>

<h6>?????????????????????????????? ???????????? ???????????????

 <a href='/drforgetpassword'>??????????????? ??????????????? ????????????
</a> </h6>

</div>








</div>

        </p> ) : ( <p>
          {
            english ? (
              <p>
   <div>


<br/> <br/> <br/>


<div id="loginbox" >
<form onSubmit={login}   >
<h1> Doctor Login </h1>
<h5> New Here ? <a href="/drsignup"> Registere Here </a>  </h5>
<hr/>

<label className="formtext" >Enter Email</label>
<input type="text"

value={email} 
  required

  onChange={ (e)=>{ setemail(e.target.value) } }   
  placeholder='Enter Email' />



<label className="formtext" >Enter Password</label>
<input type="password"
value={password}
 
  required

  onChange={ (e)=>{ setpassword(e.target.value) } } 


  placeholder='Enter Password' />   




<button  type='submit' className='box1' id="signupbtn"

style={{marginTop:'10px' , marginLeft:'40%' , marginRight:'40%'  }}


>LOGIN</button>

{loading && <Loader/>}
<p id='Message'   ></p>
<h5>Forgot Password? <a href='/drforgetpassword'>Click Here</a> </h5>
<p>Are you compounder ? <a href='/compounderlogin'>Login Here</a> </p>

</form>

</div>








</div>

              </p>
            ) : (
              <p>
   <div>


<br/> <br/> <br/>


<div id="loginbox" >
<form onSubmit={login}   >
<h1> Doctor Login </h1>
<h5> New Here ? <a href="/drsignup"> Registere Here </a>  </h5>
<hr/>

<label className="formtext" >Enter Email</label>
<input type="text"

value={email} 
  required

  onChange={ (e)=>{ setemail(e.target.value) } }   
  placeholder='Enter Email' />



<label className="formtext" >Enter Password</label>
<input type="password"
value={password}
 
  required

  onChange={ (e)=>{ setpassword(e.target.value) } } 


  placeholder='Enter Password' />   




<button  type='submit' className='box1' id="signupbtn"

style={{marginTop:'10px' , marginLeft:'40%' , marginRight:'40%'  }}


>LOGIN</button>

{loading && <Loader/>}
<p id='Message'   ></p>
<h5>Forgot Password? <a href='/drforgetpassword'>Click Here</a> </h5>
<p>Are you compounder ? <a href='/compounderlogin'>Login Here</a> </p>

</form>

</div>








</div>

                </p>
            )
          }
        </p> )
      }




               
             </DocumentMeta>


        
    )




}


export default DoctorLogin;