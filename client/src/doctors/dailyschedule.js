import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Rating from 'react-rating'
import './tablestyle.css'
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { GetPatientsByUserIdAction } from "../actions/bookingaction";
import { GetPatientsByUserIdReducer } from "../reducers/bookingreducer";
import DoctorTableStyle from './drnewtable'

const DailySchedule = () => {

    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')

    



    const dispatch = useDispatch()


    const patientstate = useSelector(state => state.GetPatientsByUserIdReducer)

    const { orders, error, loading } = patientstate


    const doc = localStorage.getItem('doctor')
    const dr = JSON.parse(localStorage.getItem('doctor'))
    useEffect(() => {

        if (localStorage.getItem('doctor')) {
            dispatch(GetPatientsByUserIdAction())
        }
        else {
            window.location.href = '/drlogin'
        }



    }, [dispatch])


    const today = new Date()

    var checkdate = today.toString().substring(0, 15)

   

    return (
        <div>


{
        bengali ? ( <p>





<div className="error" id='customers'  >


<br></br>

<h1 style={{ textAlign: 'center' }} >
ডাঃ {dr.name} আজকের সূচি ড</h1>

{
    orders&&( orders.map((i,k)=>{
        if (i.date === checkdate)
        return <DoctorTableStyle i={i} />
    }) )
}


{/* <table   className='table' id="customers" 
>



   
        <tr>
            <th scope="col"  >বুকিং আইডি</th>
            <th scope="col" > রোগীর নাম </th>


            <th scope="col" > 
যোগাযোগের ঠিকানা  </th>
            <th scope="col"  > অ্যাপয়েন্টমেন্ট বুক করা হয়েছে  </th>
            <th scope="col" >স্লট
</th>
            <th scope="col" >দ্বারা বুক করা হয়েছে</th>
            <th scope="col" >অবস্থা</th>
        </tr>
  


   
    {orders && (
        orders.map(ord => {

            if (ord.date === checkdate) {
                return  <tr>
<td data-label="বুকিং আইডি" >{ord._id}</td>
                    <td data-label="রোগীর নাম" > {ord.name} {ord.lname} </td>



                    <td data-label="
যোগাযোগের ঠিকানা" >{ord.contactnumber}
                        <br /> {ord.email}
                    </td>
                   
                    <td data-label="অ্যাপয়েন্টমেন্ট বুক করা হয়েছে" > {ord.date} </td>
                    <td data-label="স্লট
" >{ord.slot}</td>
                    <td data-label="দ্বারা বুক করা হয়েছে" >{ord.status}</td>

                    <Link to={`/bookings/${ord._id}`} >
                                                                <td data-label="অবস্থা" >
                                                                <i class="fa fa-pencil-square-o" aria-hidden="true"  ></i>

 

                                                                </td>
                                                                </Link>


</tr>


                   

                 
            }


        })
    )}






</table> */}

</div>






        </p> ) : ( <p>
          {
            english ? (
              <p>








<div className="error" id='customers'  >


<br></br>

<h1 style={{ textAlign: 'center' }} >Dr {dr.name} Today's Schedule</h1>

{
    orders&&( orders.map((i,k)=>{
        if (i.date === checkdate)
        return <DoctorTableStyle i={i} />
    }) )
}



{/* <table   className='table' id="customers" 
>



   
        <tr>
            <th scope="col"  >Booking Id</th>
            <th scope="col" > Patient's Name </th>


            <th scope="col" > Contact Details  </th>
            <th scope="col"  > Appointment Booked For  </th>
            <th scope="col" >Slot</th>
            <th scope="col" >Booked By</th>
            <th scope="col" >Status</th>
        </tr>
  


    
    {orders && (
        orders.map(ord => {

            if (ord.date === checkdate) {
                return  <tr>
<td data-label="Booking Id" >{ord._id}</td>
                    <td data-label="Patient's Name" > {ord.name} {ord.lname} </td>



                    <td data-label="Contact Details" >{ord.contactnumber}
                        <br /> {ord.email}
                    </td>
                   
                    <td data-label="Appointment Booked For" > {ord.date} </td>
                    <td data-label="Slot" >{ord.slot}</td>
                    <td data-label="Booked By" >{ord.status}</td>
                    <Link to={`/bookings/${ord._id}`} >
                                                                <td data-label="Status" >
                                                                <i class="fa fa-pencil-square-o" aria-hidden="true"  ></i>

 

                                                                </td>
                                                                </Link>


                                                                
</tr>


                   

                 
            }


        })
    )}






</table> */}

</div>





              </p>
            ) : (
              <p>







<div className="error" id='customers'  >


<br></br>

<h1 style={{ textAlign: 'center' }} >Dr {dr.name} Today's Schedule</h1>

<table   className='table' id="customers" 
>



   
        <tr>
            <th scope="col"  >Booking Id</th>
            <th scope="col" > Patient's Name </th>


            <th scope="col" > Contact Details  </th>
            <th scope="col"  > Appointment Booked For  </th>
            <th scope="col" >Slot</th>
            <th scope="col" >Booked By</th>
            <th scope="col" >Status</th>
        </tr>
  


    {/* {loading && ( <Loading/> ) }   */}
    {orders && (
        orders.map(ord => {

            if (ord.date === checkdate) {
                return  <tr>
<td data-label="Booking Id" >{ord._id}</td>
                    <td data-label="Patient's Name" > {ord.name} {ord.lname} </td>



                    <td data-label="Contact Details" >{ord.contactnumber}
                        <br /> {ord.email}
                    </td>
                    {/* <td>{ord.createdAt.substr(0,10)}</td> */}
                    <td data-label="Appointment Booked For" > {ord.date} </td>
                    <td data-label="Slot" >{ord.slot}</td>
                    <td data-label="Booked By" >{ord.status}</td>
                    <Link to={`/bookings/${ord._id}`} >
                                                                <td data-label="Status" >
                                                                <i class="fa fa-pencil-square-o" aria-hidden="true"  ></i>

 

                                                                </td>
                                                                </Link>


                                                                
</tr>


                   

                 
            }


        })
    )}






</table>

</div>





                </p>
            )
          }
        </p> )
      }




        </div>
    )
}

export default DailySchedule