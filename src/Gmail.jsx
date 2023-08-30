import { useState } from "react";
import React,{useForm} from "react-hook-form";
// import './Firstpage.css';
// import clouQ from './Assest/clouQ.jpeg';
// import { Link } from "react-router-dom";
function Gmail()
{
  let [password,setpassword]=useState()
  
const {
        register,
        // handleSubmit,
        formState: { errors },
        // reset,
        trigger,
      } = useForm();

    //   const onSubmit = (data) => {
    //     console.log(data);
    //     reset();
    //   };
    let PassWord=(e)=>{
      setpassword(e.target.value);
    }
    return(
        <div className="Container1 ">
{/* 
          <div className="User d-flex ">
          <div className="form-check mx-5">
  <input class="form-check-input" type="radio" name="flexRadio"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Existing User
  </label>
</div>
<div className="form-check mx-3">
  <input class="form-check-input" type="radio" name="flexRadio"  checked/>
  <label class="form-check-label" for="flexRadioDefault2">
      New User Register
  </label>
</div>
          </div> */}
          <div>
            {/* hjkfdlsksjhv */}
          </div>
          <div className="User mx-5 mp-">
        {/* <Link to="./">  */}
         <button type="button" class="btn btn-success">Existing User</button>
         {/* </Link> */}
          {/* <Link to="./RegisterPage" > */}
            <button type="button" class="btn btn-success">New User Register</button>
            {/* </Link> */}
          </div>
          <div className="logo">
            <div>
             <h3 className="abc text-warning-emphasis">CloudQuantum</h3>
            </div>
           {/* <img src={clouQ} alt="" /> */}
          </div>
          <div className="email">
          <div className="form-floating mb-3 mt-3 col-md-4 mx-5" >
        <input type="text" className={`form-control  input-group-text ${errors.email && "invalid"}`}
          {...register("email", { required: "Email is Required",pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          }})}
          onKeyUp={() => {
            trigger("email");
          }} placeholder="name@example.com"/>
        <label> Email</label>
        {errors.email && (
          <small className="text-danger">{errors.email.message}</small>
          )} 
</div>
          </div>
<div className="password ">
      <div className="form-floating mb-0 mt-0 col-md-4 mx-5 ">
      <input type="password" className="form-control input-group-text" placeholder="name@example.com"
        onChange={PassWord}   value={password} /> 
      <label>Password</label>

      <div className="ShowandHide"> 
      <button>show</button> </div>
      </div>
      {/* .................. */}
      
      </div>
      <div className="btn">
        <button type="login">sign in</button> 
        </div>
        
    
        </div>
    )
}
export default Gmail;

