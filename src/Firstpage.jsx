import React from "react";
import './Firstpage.css';
import clouQ from './Assest/clouQ.jpeg';
// import Type from "./Type";
import {Link} from 'react-router-dom';
function Firstpage()
{

  
    return(
        <>
        <div className="container">

        <div className="logo d-flex mt-5 ">
        <div>
             <h3 className="abc text-primary">
            
            
              Cloud Quantum
             </h3>
        </div>
        <div className="image"><img src={clouQ} alt="" />
        </div>
           
        </div>
       
          <div className="User ">
        <Link to="/Regsecondpage"> 
         <button type="button" class="btn btn-secondary" style={{marginLeft:100,width:200}}>Existing User</button>
         </Link>
          <Link to="/Regfirstpage" >
            <button type="button" class="btn btn-secondary mx-4" style={{marginLeft:100,width:200}}>New User Register</button>
            </Link>
          </div>
        </div>
        </>
    )
}
export default Firstpage;