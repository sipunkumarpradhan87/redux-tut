import React, { useState } from 'react';
import {useForm} from "react-hook-form";


function Password() {
    // let [password,setpassword]=useState('')
    // let [message,setmessage]=useState('')
    const {
      register,
      // handleSubmit,
      formState: { errors },
      // reset,
      trigger,
    } = useForm();

    // let HandelSignIn=(e)=>{
    //  e.preventDefault();
    //  let RegExp= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$ /

    //  if(RegExp.test(password.length) === " ")
    //  {
    //     setmessage('please enter passsword')
    //     // console.log('please enter password');
       
    //  }
    //  else if(RegExp.test(password))
    //  {
    //     setmessage('password is Valid')
    //     // console.log('password is valid');
    //  }
   
    //  else{
    //     // setmessage('invalid password');
    //     // console.log('invalid password');
    //  }
    // }

  return (
    <div className='container' style={{textAlign:'center'}}>
        <h1>Password</h1>
        {/* <form action="" onSubmit={HandelSignIn}> */}

        <div>
        <div className="form-floating mb-3 mt-3 col-md-6 mx-5" >
        <input type="password" className={`form-control  input-group-text ${errors.password && "invalid"}`}
          {...register("password", { required: "password is Required",pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}$/,
            message: "Invalid password",
          }})}
          onKeyUp={() => {
            trigger("password");
          }} placeholder="name@example.com"/>
        <label>Password</label>
       {errors.password && (
          <small className="text-danger">{errors.password.message}</small>
          
          )} 
         
</div>
        </div>
        

        <div>
            {/* <button onClick={HandelSignI}>sign In</button> */}
        </div>
        {/* </form> */}
        
        </div>
  )
}

export default Password

// import { useState } from "react";


// function Password() {
//   const initialValues = {password: "" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   }
//   const validate = (values) => {
//     const errors = {};
//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length < 8) {
//       errors.password = "Password must be more than 8 characters";
//     } else if (values.password.length > 10) {
//       errors.password = "Password cannot exceed more than 10 characters";
//     }
//     return errors;
//   };

//   return (
//     <div className="containerrrs">
 
//     <form onSubmit={handleSubmit}> 

//           <div className="field">

//             <div className="form-floating mb-0 mt-5 col-md-4 ">
//       <input type="password" className="form-control input-group-text" placeholder="name@example.com" name="password"
//     value={formValues.password}  onChange={handleChange} /> 
//       <label>Password</label>
//       </div>
//           </div>
//           <p style={{color:"red"}}>{formErrors.password}</p>
//           <button className="fluid ui button blue">Submit</button>
//        </form>
//     </div>
//   );
// }

// export default Password;