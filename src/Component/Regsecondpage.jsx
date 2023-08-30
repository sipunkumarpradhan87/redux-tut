// import { useState } from "react";
import React,{useForm} from "react-hook-form";
import './Regsec.css';
import { Link } from "react-router-dom";

function Regsecondpage()
{


  
  // let [Email,setEmail]=useState(' ');
  // let [password,setpassword]=useState(' ');
 
  // const email=document.querySelector('#emai');
  // const password=document.querySelector("#passwo")
  // function Allbox()
  // {

  //   email.addEventListener(onclick,()=>{
  //     if(email===" ")
  //     {
  //       alert('Noemail')
  //     }
  //     else{
  //       alert('email')
  //     }
  //   })
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
    // trigger,
  } = useForm({mode:"all"});

  
 
  // let Signinput=(e)=>{

  //  e.preventDefault();
  //      if(Email==" ")
  //      {
  //       alert('Please fill in the blank"s')
  //      }
  //      else if(password==" ")
  //      {
  //       alert('Please fill in the blanks')
  //      }
 
  //  }



    //   const onSubmit = (data) => {
    //     console.log(data);
    //     reset();
    //   };
    return(
        <div className="Container1 " style={{backgroundColor:'white'}}>
        <form onSubmit={handleSubmit()}>
           <Link></Link>
          <h4 style={{color:"#5126c4", marginLeft:107 ,marginTop:15 ,fontFamily:'cursive'}}>Only Registered Candidates Sign In</h4>
         
          <div className="form-floating mb-3 mt-3 col-md-8 ml-5"  style={{marginLeft:100}} id="emai">
        <input type="email" className={`form-control  input-group-text ${errors.email && "is-invalid"}`}
          {...register("email", { required: true,pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
       
           
          }})}
         placeholder="name@example.com"/>
        <label> Email</label>
       <small className="form-text text-danger">{errors.email?.type==="required" && 'This field is required'}</small><br />
       <small className="form-text text-danger">{errors.email?.type==='value' && 'Invalid Email'}</small>
       
         

          </div>
         
          <div className="form-floating mb-3 mt-3 col-md-8 mx- ml-5" style={{marginLeft:100}}id="passwo">
        <input type="password" className={`form-control  input-group-text ${errors.password && "is-invalid"}`}
          {...register("password", { required: true,pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}$/,
            // message:"Password need uppercase | Lowercase | one special character | numeric digit ",
            minLength:8
          }})}
          placeholder="name@example.com" />
        <label>Password</label>
       <small className="form-text text-danger">{errors.password?.type==='required'&&' Password field is required'}</small>
       <br />
      {/* <small className="form-text text-danger">{errors.password && 
      "Password need only 8 character with uppercase | Lowercase | one special character | numeric digit "}</small> */}
      </div>


        
      <h5 style={{fontSize:13,fontFamily:'Franklin Gothic Medium',marginLeft:400,marginTop:5}}>Forget Password</h5>
      {/* .................. */}
      
     
      <div className="btn">
        <button type="submit"   style={{marginLeft:87,border:"2 solid red"}} >sign in</button> 
        <Link to="http://localhost:3000/"><button type="" style={{marginLeft:190,border:"2 solid red"}} 
          >Back</button> </Link>
        </div>
       <div style={{marginLeft:300,marginBottom:20}}>
      If You want to go Home page 
       </div>
        
         </form>
         </div>
        
    )
}
export default Regsecondpage;