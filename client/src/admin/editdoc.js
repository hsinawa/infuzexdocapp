import React , {useState, useEffect} from 'react'
import {Link , useParams ,  useHistory ,useLocation  } from 'react-router-dom'
import Rating from 'react-rating'
import './admin.css'
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { GetDoctorById } from '../actions/doctoraction';
import { GetDoctorByIdReducer } from '../reducers/doctorreducer';
import Loader from "../component/loader";
import { UpdateDoctorReducer } from '../reducers/doctorreducer';
import { UpdateDoctorAction } from '../actions/doctoraction';

const EditDoctor=({match})=>{

     const params = useParams();
    // const { doctorid } = useParams();
   // const doctorid=match.params.id
    //const dispatch = useDispatch()

    // const dridstate = useSelector(state=>state.GetDoctorByIdReducer)
    // const { loading, doctors ,error} = dridstate

    const [name,setname] = useState('')
    const [lname,setlname] = useState('')
    const [email,setemail] = useState('')
    const [contactnumber,setcontactnumber] = useState()
    const [fees,setfees] = useState()
    const [college,setcollege] = useState('')
    const [experience,setexperience]=useState()
    const [field,setfield] = useState('')
    const [address,setaddress]=useState('')
    const [image,setimage]=useState('')
    const [description,setdescription]=useState('')
    const [status,setstatus] = useState('')
   

     const location = useLocation()

     var testpath = location.pathname

     var doctorid = location.pathname.substr(14,testpath.length)

    const dispatch = useDispatch()

    const dridstate = useSelector(state=>state.GetDoctorByIdReducer)
    const { loading, doctors ,error} = dridstate

    const currentuser = JSON.parse(localStorage.getItem('currentuser'))

   

  
    const updatestate = useSelector(state=> state.UpdateDoctorReducer )

    const {success , update_error , uploading } = updatestate

    useEffect(() => {
        
        
        if( doctors )
        {
            if( doctors._id==doctorid )
            {
                setname(doctors.name)
                setlname(doctors.lname)
                setimage(doctors.image)
                setaddress(doctors.address)
                setcollege(doctors.college)
                setcontactnumber(doctors.contactnumber)
                setdescription(doctors.description)
                setemail(doctors.email)
                setstatus(doctors.status)
                setfees(doctors.fees)
                setexperience(doctors.experience)
                setfield(doctors.field)
                
            }
            else
            {
                dispatch(GetDoctorById( {doctorid} ))

            }
        }

        else
        {
            dispatch(GetDoctorById( {doctorid} ))
        }

        

    }, [dispatch,doctors])


    const editdoctor = (e) => {
        e.preventDefault()
        const updatedproduct = {
            name: name,
            lname:lname ,
            image: image,
            description: description ,
            field:field ,
            status:status ,
            fees:fees ,
            college:college ,
            experience:experience ,
            email : email ,
            contactnumber :contactnumber  ,
            address : address
        }

        dispatch(UpdateDoctorAction(doctorid, updatedproduct))


    }






return(
    <div>

        {loading && <Loader/> }
        {uploading && <Loader/> }
        {update_error && alert('Something Went Wrong') }
        {error && alert('Something Went Wrong')  }
        { success && alert('Updated Successfully')  }




{/* { loading ? (<Loader/>) : error ? ( <h1>There's an error</h1> ) :
           
           (
               <div  >

                   <img src={doctors.image} id="img-docdes"/>

                  <h3 className='docdes-name' > Dr. {doctors.name}  {doctors.lname}  </h3>
                   <p className='docdes-sub' > {doctors.field} </p>
                   <br/>
                   <p className='docdes-sub' style={{fontWeight:'bold'}} > {doctors.experience} Years Exp </p>
                   <br/>
                  <h4 className='docdes-sub'> {doctors.address} </h4>

                  <hr/>

   
               
                

               
                 

                   </div>
           )
           
           
           } */}



          {
              doctors && (
                  <div>

                <h1> {doctors.name} </h1>

                <form onSubmit={editdoctor} >
                <div className="boxgrid"  style={{ width:'95%' , marginLeft:'1%' }}  >

<p  >
    <label className="formtext" >First Name</label>
    <input type="text"

        value={name}
        required
        onChange={(e) => { setname(e.target.value) }}

   

        placeholder='Enter Name' />
</p>

<p style={{ marginLeft: '5px' }}>
    <label className="formtext">Last Name</label>


    <input type="text" placeholder='Enter Last Name'

        value={lname}
        required
        onChange={(e) => { setlname(e.target.value) }}

    />

</p>



<p>
    <label className="formtext"




    >Email Id</label>
    <input type="text"

        value={email}
        required
        onChange={(e) => { setemail(e.target.value) }}

        placeholder='Enter Email Id' />

</p>


<p style={{ marginLeft: '5px' }} >

    <label className="formtext">Contact Number</label>
    <input type="Number"

        value={contactnumber}
        required
        onChange={(e) => { setcontactnumber(e.target.value) }}


        placeholder='Contact Number' />


</p>



<p>
            <label className="formtext">Fees</label>
            <input type="text"

                value={fees}
                required
                onChange={(e) => { setfees(e.target.value) }}


                placeholder='Enter Fees' />

        </p>

        <p style={{ marginLeft: '5px' }} >
            <label className="formtext">College Name</label>
            <input type="text" placeholder='Enter College Name'

                value={college}
                required
                onChange={(e) => { setcollege(e.target.value) }}



            />

        </p>





        
        <p>
<br/>
        <label className="formtext">Field</label>

        
<select value={field} onChange={ (e)=>{ setfield(e.target.value) } }  id='select-doc' style={{marginTop:'50px' , float:'left' }}  >

<option value='all'  >All</option>
<option value='Physician'  >

Physician</option>
<option value='Cardiologist' >Cardiologist</option>
<option value='Orthopaedic' >Orthopaedic</option>
<option value='Gynecologist' >Gynecologist</option>
<option value='Pummonologist' >Pummonologist</option>
<option value='Neurologist' >Neurologist</option>
<option value='Endocrinologist' >Endocrenologist</option>
<option value='Dermatologist' >Dermatologist</option>
<option value='Paediatrician' >Paediatrician</option>
<option value='Dentist' >Dentist</option>
<option value='Diabetologist' >Diabetologist</option>
<option value='Ophthalmologist' >Ophthalmologist</option>
<option value='Sexologist' >Sexologist</option>
<option value='Ophthalmologist' >Ophthalmologist</option>
<option value='Nutrition' >Nutritionist</option>
<option value='ENT-Specialist' >ENT Specialist</option>
<option value='Psychiatrist' >Psychiatrist</option>
<option value='Nephrologist' >Nephrologist</option>
<option value='Oncologist' >Oncologist</option>
<option value='Urologist' >Urologist</option>
<option value='Gastroenterologists' >Gastroenterologists</option>
<option value='Obstetricians' >Obstetricians</option>


</select> 


        
         

        </p>


        <p style={{ marginLeft: '5px' }} >
            <label className="formtext">Clinic Address</label>
            <input type="text" placeholder='Enter Address'

                value={address}
                required
                onChange={(e) => { setaddress(e.target.value) }}



            />

        </p>



        <p style={{ marginLeft: '5px' }}>
            <label className="formtext">Years of Experience</label>


            <input type="Number" placeholder='Years of Experience'

                value={experience}
                required
                onChange={(e) => { setexperience(e.target.value) }}

            />

        </p>

<p></p>

        {/* <p style={{ marginLeft: '5px' }}>
            <label className="formtext">Image File</label>


            <input type="text" placeholder='Enter Image Link'

                value={image}
                required
                onChange={(e) => { setimage(e.target.value) }}

            />

        </p> */}

        <p>

        <label className="formtext">Enter Description</label>
    <input value={description} 
    
    required  placeholder='Enter Description....' 
    onChange={ (e)=>{setdescription(e.target.value)} } 
    
    className='doc-descroption-input'
    
    />

   

            </p>



            <p>
            <label className="formtext" >Do You want to Publish this doc?</label>
           
                <select value={status} onChange={ (e)=>{ setstatus(e.target.value)   } } 
                
                id='show-hide'
                
                >

                    <option value='true' >Show On Screen</option>
                    <option value='false' >Hide </option>

                </select>

</p>
  






</div>





                <button type="submit"  className='docdes-box1' style={{
                    marginLeft:'auto' ,
                    marginRight:'auto'
                }}    id='post-button' > UPDATE </button>

                </form>

                      </div>
              )
          } 


    </div>
)

}

export default EditDoctor