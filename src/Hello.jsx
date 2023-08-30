// import React, { useState } from "react";

// function Hello()
// {
//     let [checktype,setchecktype]=useState('password');
//     let [showhidetext,setshowhidetext]=useState('show')
// let ShowHiddenButton=(e)=>{
//    let getbtn=e.target.value;
//    if(getbtn==='password')
//    {
//     setchecktype('text');
//     setshowhidetext('show')
//    }
//    else
//    {
//     setchecktype('password')
//     setshowhidetext('hide')
//    }
// }
//     return(
//         <>
//         <h1>Hello   World</h1>
//         {/* <div className="input">
//             Gmail:<input type="text"  />
//         </div> */}
//         <div className="Password">
//            Password:<input type={checktype}/> 
//            <button   value={checktype} onClick={(e)=>ShowHiddenButton(e)}>{showhidetext}</button>
//         </div>
//         </>
//     )
// }
// export default Hello;

import React from 'react';
import { useForm } from 'react-hook-form';

function PasswordForm() {
  const { register, handleSubmit, formState:{errors},getValues } = useForm();
  const onSubmit = (data) => {
    console.log(data); 
  };

  return (
    <>
  
    <form onSubmit={handleSubmit(onSubmit)}>
        
        <div className='form-floating col-md-4 mx-5 mt-4'>
        <label>Password</label> 
       <input
        type="password"
        name="password"
       className={`form-control input-group-text ${errors.password && 'is-invalid'}`}
       {...register('password',{required:true,pattern:{

         value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}$/,
             
         minLength:8,
       }
      })}
      />
      </div>
     <small className='form-text text-danger'>
     {errors.password?.type==='required' && <p>Password is required and must be at least 8 characters long.</p>}
     </small> 
      {errors.password && 'urremkmvklmmkdfmkmdfjijf'}
             

      <div className='form-floating col-md-4 mx-5 mt-4'>
      <label>Confirm Password</label>
      <input
        type="confirmpassword"
        name="confirmPassword"
       className={`form-control input-group-text ${errors.confirmpassword && 'is-invalid'}`}
       {...register("confirmpassword",{required:true,
        validate:(value)=>value===getValues('password') || 'password do not match'
      
      })}
       
      />
      </div>
      {/* {errors.confirmpassword &&{errors.confirmpassword.message}} */}
      {errors.confirmpassword && 'password do not match'}
      {/* {errors.confirmpassword?.type==='validate' && 'password do not match'} */}
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default PasswordForm;




 
{/* 


    //   <div className="form-floating mb-3 mt-3 col-md-4 ml-5"  style={{marginLeft:100}} id="email">
    //   <input type="email" className={`form-control  input-group-text ${errors.email && "invalid"}`} 
    //    {...register("email", { required: true,pattern: {
    //      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    //  }})}
    //   placeholder="name@example.com"/>
    //  <label> Email</label>
    //  {/* <small className="form-text text-success">{errors.email?.type==="required" && 'This field is required'}</small><br />
    //  <small className="form-text text-danger">{errors.email?.type==='value' && 'Invalid Email'}</small> */}
     
      
     
    //    </div>