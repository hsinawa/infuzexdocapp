
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { GetBookingsByUserIdAction } from '../actions/bookingaction';
import { GetBookingsByUserIdReducer } from '../reducers/bookingreducer';
import { GetAllDoctorAction } from '../actions/doctoraction';
import { GetAllDoctorReducer } from '../reducers/doctorreducer';
import { useEffect } from 'react';
import Loader from '../component/loader'
import './tstyle.css'

const TableStyle=({i})=>{

    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')

return(
    <div>
     {
         bengali ? ( <p>


{
            i.checkif==='false'?(<p >



<div>

<p style={{ marginLeft: 'auto', marginRight: 'auto' }} >



  
</p>


<div id='bookingbox'  >

    <h4 id='heading' style={{backgroundColor:'#7C0A02'}}  >  {i.slot} &nbsp; চালু &nbsp;  {i.date} </h4>


    <div id='containerbox' style={{ textAlign: 'justify' }} >
       
       
      
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > 
নাম: </span>{i.name} {i.lname} </p>



                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > যোগাযোগের ঠিকানা
 : </span> {i.contactnumber} </p>



                                    <p
                                    
                                    style={{color:'#7C0A02'}}
                                    
                                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > স্ট্যাটাস : </span> বিচারাধীন </p>
                               

                                         
                                    <p  >
                                    <a href={`/bookings/${i._id}`}  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content'
                                    
                                    style={{border:'1px solid black' , padding:'5px' , borderRadius:'5px' , backgroundColor:'#7C0A02' , color:'white' }}
                                    
                                    > বিস্তারিত দেখুন :   &nbsp;   <i class="fas fa-file-invoice" style={{ color: 'white', border: 'none' }} ></i> </span>
                                    
                                    
                                                           
                                   
                                                            
                                                        </a>
                                    
                                    </p>

                                  



     


    </div>






</div>

<br />





</div>
                
               
                
                
                
                </p>):( <p >



<div>

<p style={{ marginLeft: 'auto', marginRight: 'auto' }} >



  
</p>


<div id='bookingbox'  >

    <h4 id='heading' style={{backgroundColor:'#008000'}}  >  {i.slot} &nbsp; চালু  {i.date}  </h4>


    <div id='containerbox' style={{ textAlign: 'justify' }} >
       
       
      
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > নাম: </span>{i.name} {i.lname} </p>



                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > যোগাযোগের ঠিকানা : </span> {i.contactnumber} </p>



                                    <p
                                    
                                    style={{color:'#008000'}}
                                    
                                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > স্ট্যাটাস : </span> সম্পন্ন </p>
                     










                                    <p  >
                                    <a href={`/bookings/${i._id}`}  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content'
                                    
                                    style={{border:'1px solid black' , padding:'5px' , borderRadius:'5px' , backgroundColor:'#008000' , color:'white' }}
                                    
                                    > বিস্তারিত দেখুন :
                                    &nbsp;   <i class="fas fa-file-invoice" style={{ color: 'white', border: 'none' }} ></i> </span>
                                    </a>
                                    
                                    </p>







     


    </div>






</div>

<br />





</div>
                
               
                
                
                
                </p> )
        }




         </p> ) : ( <p >
             
        {
            i.checkif==='false'?(<p >



<div>

<p style={{ marginLeft: 'auto', marginRight: 'auto' }} >



  
</p>


<div id='bookingbox'  >

    <h4 id='heading' style={{backgroundColor:'#7C0A02'}}  >  {i.slot} &nbsp; on &nbsp;  {i.date} </h4>


    <div id='containerbox' style={{ textAlign: 'justify' }} >
       
       
      
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Name : </span>{i.name} {i.lname} </p>



                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Contact Details : </span> {i.contactnumber} </p>



                                    <p
                                    
                                    style={{color:'#7C0A02'}}
                                    
                                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Status : </span> Pending </p>
                                   
                                   
                                    <p  >
                                    <a href={`/bookings/${i._id}`}  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content'
                                    
                                    style={{border:'1px solid black' , padding:'5px' , borderRadius:'5px' , backgroundColor:'#7C0A02' , color:'white' }}
                                    
                                    > View Details :   &nbsp;   <i class="fas fa-file-invoice" style={{ color: 'white', border: 'none' }} ></i> </span>
                                    
                                    
                                                           
                                   
                                                            
                                                        </a>
                                    
                                    </p>

                                  



     


    </div>






</div>

<br />





</div>
                
               
                
                
                
                </p>):( <p >



<div>

<p style={{ marginLeft: 'auto', marginRight: 'auto' }} >



  
</p>


<div id='bookingbox'  >

    <h4 id='heading' style={{backgroundColor:'#008000'}}  >  {i.slot} &nbsp; on  {i.date}  </h4>


    <div id='containerbox' style={{ textAlign: 'justify' }} >
       
       
      
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Name : </span>{i.name} {i.lname} </p>



                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Contact Details : </span> {i.contactnumber} </p>



                                    <p
                                    
                                    style={{color:'#008000'}}
                                    
                                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Status : </span> Completed </p>
                                    
                                    <p  >
                                    <a href={`/bookings/${i._id}`}  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content'
                                    
                                    style={{border:'1px solid black' , padding:'5px' , borderRadius:'5px' , backgroundColor:'#008000' , color:'white' }}
                                    
                                    > View Details :   &nbsp;   <i class="fas fa-file-invoice" style={{ color: 'white', border: 'none' }} ></i> </span>
                                    </a>
                                    
                                    </p>

                                  



     


    </div>






</div>

<br />





</div>
                
               
                
                
                
                </p> )
        }    
             
             
             </p> )
     }
    </div>
)

}
export default TableStyle;