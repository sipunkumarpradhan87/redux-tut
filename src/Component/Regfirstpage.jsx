import { useState } from "react";
import React, { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
import './Reg.css';
function Regfirstpage() {


let [passwordvisible,setpasswordvisible]=useState(true);
let [password,setpassword]=useState();       
const [checker,setchecker]=useState(0)
let [flat,setflat]=useState("");
let [at,setat]=useState("");
let [country,setcountry]=useState("");
let [state,setstate]=useState("");
let [dist,setdist]=useState("");
let [pin,setpin]=useState("");
let [flat2,setflat2]=useState("");
let [at2,setat2]=useState("");
let [country2,setcountry2]=useState("");
let [state2,setstate2]=useState("");
let [dist2,setdist2]=useState("");
let [pin2,setpin2]=useState("");

const FlatInput=(event)=>{
  setflat(event.target.value);
  if(checker)
  {
    setflat2(event.target.value)
  }
}

const AtInput=(e)=>{
setat(e.target.value);
if(checker)
{
  setat2(e.target.value);
}
}

const CountryInput=(e)=>{
 setcountry(e.target.value);
 if(checker)
 {
  setcountry2(e.target.value);
 }
}

const StateInput=(e)=>{
   setstate(e.target.value);
   if(checker)
   {
    setstate2(e.target.value);
   }
}

const DistInput=(e)=>{
  setdist(e.target.value);
  if(checker){
    setdist2(e.target.value)
  }
}
const PinInput=(e)=>{
  setpin(e.target.value);
  if(checker){
    setpin2(e.target.value)
  }
}
// ........................
const AtInput2=(e)=>{
  setat2(e.target.value);
}

const FlatInput2=(event)=>{
  setflat2(event.target.value);
}

const CountryInput2=(e)=>{
   setcountry2(e.target.value);
}

const StateInput2=(e)=>{
  setstate2(e.target.value)
}

const DistInput2=(e)=>{
  setdist2(e.target.value);
}

const PinInput2=(e)=>{
 setpin2(e.target.value);
}
// ..........................
const CheckBox=()=>{
  setchecker(!checker);
  
  if(!checker)
  {
    setflat2(flat);
    setat2(at);
    setcountry2(country);
    setstate2(state);
    setdist2(dist);
    setpin2(pin);
  }
  else{
    setflat2("");
    setat2("");
    setcountry2("");
    setstate2("");
    setdist2("");
    setpin2("");
  }
}

let[SelectOption,setSelectOption]=useState();
let PanAdhar=()=>{
  if(SelectOption==='option1')
  {
    return <div className="form-floating mb-0 mt-0 col-md-5">
    <input type="Adhar" className={`form-control input-group-text ${errors.Adhar &&'is-invalid'}`}
    {...register('Adhar',{required:true})} placeholder="name@example.com"
    style={{height:10}} required/> 
    <label>Aadhar number</label>
    <small className="form-text text-danger">{errors.Adhar &&'Please enter your Adhar'}</small>
    </div>
  }
  else if(SelectOption==='option2')
  {
return <div className="form-floating mb-0 mt-0 col-md-5">
<input type="Pan" className={`form-control input-group-text ${errors.Pan && 'is-invalid'}`}
{...register('Pan',{required:true})} placeholder="name@example.com"
style={{height:10}} required/> 
<label>Pancard number</label>
<small className="form-text text-danger">{errors.Pan &&'Please enter your pan'}</small>
</div>
  }
 
}

let passwords=()=>{
  setpasswordvisible(!passwordvisible);
}
// let [Qualificaion,setQualification]=useState([" ",'Btec', 'Mtec', 'Bsc.cs', 'BCA', 'Mca', 'Mba'])
  let Qualification = [" ",'Btec', 'Mtec', 'Bsc.cs', 'BCA', 'Mca', 'Mba'];
  let Experience = [ " ",'fresher', '0-1', '1-2', '2-3', '3-4', '5'];
  let Skills = [" ","java", ' mern'];
  let Gender=["","Male","Female",'Third Gender'];
  // let [files, setfiles] = useState()

  const { register,
    handleSubmit,
    formState: { errors },
    // reset,
    trigger,
    getValues
  } = useForm({mode:"all"});
  let onsubmit=(on)=>{
    console.log(on);
  }

  // const SubmitForm = (e) => {
  //   e.preventDefault();
  //   let url = 'https://mockend.com/api/mockend/demo/posts?createdAt_order=desc';
  //   let formdata = new FormData();
  //   formdata.append('files', files)
  //   axios.post(url, formdata).then((res) => {
  //     console.log(res);


  //   })
  // }
  return (
   

      <div className="ContainerRegs mt-3"  >
    
    
        {/* <div className="Cloud-Quantum"> */}
          {/* <div className="Image">
            <img src={clouQ} alt="" style={{
              width: 190,
              height: 50, marginLeft: 609, marginTop: -50, borderRadius: 20
            }} />
          </div> */}
        {/* </div> */}
        {/* <div className=""> */}
            <form onSubmit={handleSubmit(onsubmit)}>
          <h4 style={{color:'blue',fontFamily:'#a71f1f', marginLeft:100}}>User Registration Form:-</h4>


          <div className="firstform">
            <div className="form-floating mb-0 mt-2 col-md-5 " >
              <input type="text" className={`form-control  input-group-text ${errors.email && "is-invalid"}`}
                {...register("email", {
                  required: true, pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  // message: "Invalid email address",
                  }
                })}
                placeholder="name@example.com"/>
              <label> Email</label>
              {/* {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )} */}
              <small className="form-text text-danger">{errors.email?.type === 'required'
              &&'Invalid email'}</small>
             
              <small className="form-text text-danger">{errors.email
              && 'Please enter your email id'}</small>
            </div>
     
          
          {/* ....................... */}
          <div className="form-floating mb-0 mt-2 col-md-5" >
        <input type={passwordvisible? 'password':"text"} value={password} 
        onChange={(e)=>{setpassword(e.target.value)}} 
       name="password" className={`form-control  input-group-text ${errors.password &&
         "is-invalid"}`}
          {...register("password", { required: true,pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}$/,
            
            minLength:8,
          }})}
       placeholder="name@example.com" />
       <div className="Font" style={{position:'absolute'  ,marginTop:-41,marginLeft:330}}>
        {passwordvisible? <FontAwesomeIcon icon={faEyeSlash} onClick={passwords}/>
        :<FontAwesomeIcon icon={faEye}  onClick={passwords}/>
       }
         </div>
        <label>Password</label>
      <small className="form-text text-danger">{errors.password?.type==='required'&& 
      'Password field is required'}</small>
     <small className="form-text text-danger">{errors.password &&
      "Password need only 8 character with uppercase | Lowercase | one special character | numeric digit "}</small>
        </div>
         
          {/* .......................... */}
          
          <div className="form-floating mb-0 mt-2 col-md-5" >
        <input type="confirmpassword" name="confirmpassword" className={`form-control  input-group-text
         ${errors.confirmpassword && "is-invalid"}`}
          {...register("confirmpassword", { required: true ,
          validate:(value)=>value===getValues('password')||'ddss'
          })}
       placeholder="name@example.com" />
        <label>Confirm Password</label>
        </div>
      <small className="form-text text-danger">{errors.confirmpassword && 'Password do not match'}</small>
               
        {/* ................... */}
        
            <div className="form-floating mb-0 mt-2 col-md-5  ">
              <input type="text" className={`form-control  input-group-text ${errors.name && "is-invalid"}`}
                {...register("name", { required: true ,
                  minLength:4,                                                                             
              
              })}
                placeholder="name@example.com" />
              <label> Name</label>
              <small className="form-text text-danger">{errors.name?.type==='required'
              && 'invalid name'}</small>
            <small className="form-text text-danger">{errors.name?.type==='minLength' &&
            'please eneter minimum 4 character'}</small>  
            </div>

          {/* .................. */}

          <div className="form-floating mb-0 mt-2 col-md-5  ">
              <input type="text" className={`form-control  input-group-text ${errors.fathersname && "is-invalid"}`}
                {...register("fathersname", { required: true,
             minLength:4
            })}
             placeholder="name@example.com" />
              <label> FathersName</label>
             <small className="form-text text-danger">{errors.fathersname?.type==="required"
             && 'Invalid name'}</small>
             <small className="form-text text-danger">{errors.fathersname?.type==='minLength'
             && 'please enter minimum 4 character'}</small>
            </div>
            {/* ................................. */}
          
            <div className="form-floating mb-0 mt-2 col-md-5">
              <input type="Number" className={`form-control  input-group-text ${errors.phone && "is-invalid"}`}
                {...register("phone", {
                  required: "Phone is Required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Phone number should be 10 digit"
                  },
                })}
                onKeyUp={() => {
                  trigger("phone");
                }} placeholder="name@example.com"   />
              <label> Mobile.</label>
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
                )}
            </div>
        
          {/* ....................... */}

          
            <div className="form-floating mb-0 mt-2 col-md-5 ">
              <input type="email" className={`form-control  input-group-text ${errors.personalemail && "is-invalid"}`}
                {...register("personalemail", {
                  required: "Email is Required", pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  }
                })}
                onKeyUp={() => {
                  trigger("personalemail");
                }} placeholder="name@example.com" />
              <label> Personal email</label>
              {errors.personalemail && (
                <small className="text-danger">{errors.personalemail.message}</small>
                )}
                <small className="form-text text-danger">{errors.personalemail?.type==="value" &&
                "please enter valid email address"}</small>
            </div>
        
        {/* ......................... */}
  

         
            <div className="form-floating mb-0 mt-2 col-md-5">
              <input type="text" className={`form-control  input-group-text ${errors.companyname && "is-invalid"}`}
                {...register("companyname", { required: "name is Required" })}
                onKeyUp={() => {
                  trigger("companyname");
                }} placeholder="name@example.com"   />
              <label> Company name</label>
              {errors.companyname && (
                <small className="text-danger">{errors.companyname.message}</small>
                )}
            </div>
         
          {/* .................... */}
          <div className="form-floating mb-0 mt-2 col-md-5">
              <input type="date" className={`form-control input-group-text ${errors.date &&'is-invalid'}`}
              {...register('date',{required:true})} placeholder="name@example.com"
                />
              <label>Date of Birth</label>
              <small className="form-text text-danger">{errors.date &&"please enter your Dob"}</small>
        </div>
          
          {/* ................... */}
         


            <div className=' form-floating mt-2 mb-0 col-md-5 '>
           
           <select name="Qualificaions" className={`form-control input-group-text 
              ${errors.Qualificaions && 'is-invalid'}`} 
              {...register('Qualificaions',{required:true})}
              >
                {/* <option value=" ">...Select your Qualificaion... </option> */}
               {Qualification.map((value,index)=>{
              return  <option  key={index}>{value}</option>
               })}
                
              </select>
              <label>Qualification</label>
              <small className="form-text text-danger">{errors.Qualificaions &&"please enter your Qualification"}</small>
            </div>

         
       
      

          <div className=' form-floating mt-2 mb-0 col-md-5 '>

            <select name="exp" className={`form-control input-group-text ${errors.exp &&'is-invalid' }`}placeholder="name@example.com"  
            {...register('exp',{required:true})}>
              {/* <option >No.of Experience </option> */}
              {Experience.map((ex, index) => {
                return <option key={index}>{ex}</option>
              })}
            </select>
            <label>No.of Experience</label>
            <small className="form-text text-danger">{errors.exp &&'Please enter your experience'}</small>
          </div>
              

          {/* ....................... */}
          


          <div className=' form-floating mt-2 mb-0 col-md-5  '>

            < select name="skill" className={`form-control input-group-text ${errors.skill &&'is-invalid' }`} placeholder="name@example.com" 
            {...register('skill',{required:true})} >
              {/* <option >Skills </option> */}
              {Skills.map((ex, index) => {
                return <option key={index}>{ex}</option>
              })}
            </select>
            <label>Skills</label>
            <small className="form-text text-danger">{errors.skill &&'Please enter your skill'}</small>
          </div>
          {/* ...................... */}
          <div className=' form-floating mt-2 mb-0 col-md-5  '>

         < select name="gender" className={`form-control input-group-text ${errors.gender&&'is-invalid'}`} placeholder="name@example.com" 
         {...register('gender',{required:true})} >
          
                         {Gender.map((ex, index) => {
           return <option key={index}>{ex}</option>
                })}
         </select>
         <label>Gender</label>
         <small className="form-text text-danger">{errors.gender &&'Please enter your gender'}</small>
             </div>  
            {/* ................................. */}
        <div className=" col-md-5 mt-3">
  <label for="formFile" class="form-label" >Upload your Cv/Resume:</label>
  <input type="file" name="pdf" className={`form-control input-group-text ${errors.pdf&& 'is-invalid'}`} 
  {...register('pdf',{required:true})} id="formFile"  style={{height:50}}/>
  <label >Allowed Type(s): .pdf, .doc, .docx</label>
  <br />
</div>
  <small className="form-text text-danger">{errors.pdf&&"enter your's pdf file"}</small>
{/* ................................. */}
<div className="Check mt-3">
<div>
  <input type="radio" 
  value="option1"
  name="id"
  checked={SelectOption==='option1'}
    onClick={(e)=>{setSelectOption(e.target.value)}} />
 
  <label>Adharcard</label>
</div>

<div>
  <input type="radio" 
  value="option2"
 name="id"
  checked={SelectOption==='option2'}
    onClick={(e)=>{setSelectOption(e.target.value)}} />

  <label>pancard</label>
</div>
{PanAdhar()}
</div>
   {/* ..................     */}

  
   </div> {/* for submit div..................... */}
   

  
              <hr/>
       {/* ...... End First form....... */}

      <h4 style={{marginLeft:100 , color:"#a71f1f",fontFamily:'sans-serif'}}>Current Address:-</h4>
       <div className="secondform">
        <div>
       </div>

       <div className="form-floating mb-0 mt-2 col-md-5">
              <input type="Number" 
               className={`form-control  input-group-text ${errors.Flat && "is-invalid"}`}
               {...register("Flat", {
                  required: true,
                 
                })} 
                onKeyUp={() => {
                  trigger("Flat");
                }} placeholder="name@example.com" value={flat} onChangeCapture={FlatInput}/>
              <label> Flat/House no</label>
             
                <small className="form-text text-danger">{errors.Flat && 'First flat is required'}</small>
            </div>

            <div className="form-floating mb-0 mt-2 col-md-5">
              <input type="text" className={`form-control  input-group-text ${errors.at && "is-invalid"}`}
                {...register("at", { required: "At is Required" })}
                 placeholder="name@example.com"   value={at} onChangeCapture={AtInput}/>
              <label>At</label>
              {errors.at && (
                <small className="text-danger">{errors.at.message}</small>
                )}
            </div>

            <div className="form-floating mb-0 mt-2 col-md-5">
              <input type="text" className={`form-control  input-group-text ${errors.Country && "is-invalid"}`}
                {...register("Country", { required: "Country is Required" })}
               placeholder="name@example.com" value={country}  onChangeCapture={CountryInput}  />
              <label>Country</label>
              {errors.Country && (
                <small className="text-danger">{errors.Country.message}</small>
                )}
            </div>

            <div className="form-floating mb-0 mt-2 col-md-5">
              <input type="text" className={`form-control  input-group-text ${errors.State && "is-invalid"}`}
                {...register("State", { required: "State is Required" })}
               placeholder="name@example.com" value={state} onChangeCapture={StateInput}   />
              <label>State</label>
              {errors.State && (
                <small className="text-danger">{errors.State.message}</small>
                )}
            </div>
            
            <div className="form-floating mb-0 mt-2 col-md-5">
              <input type="text" className={`form-control  input-group-text ${errors.District && "is-invalid"}`}
                {...register("District", { required: "District is Required" })}
                 placeholder="name@example.com"  value={dist} onChangeCapture={DistInput} />
              <label>District</label>
              {errors.District && (
                <small className="text-danger">{errors.District.message}</small>
                )}
            </div>

            <div className="form-floating mb-0 mt-2 col-md-5">
              <input type="Number" className={`form-control  input-group-text ${errors.Pin && "is-invalid"}`}
                {...register("Pin", {
                  required: "Pin is Required",
                  pattern: {
                    value: /^\s*(?:\+?(\d{1,2}))?[-. (]*(\d{3})[-. )]*(\d{2})[-. ]*(\d{1})(?: *x(\d+))?\s*$/,
                    message: "Minimum required 6-8 digit no",
                  },
                })}
                 placeholder="name@example.com" value={pin} onChange={PinInput} />
              <label> PinNo.</label>
              {errors.Pin && (
                <small className="text-danger">{errors.Pin.message}</small>
                )}
            </div>
            

       </div>
       {/* .............End- second-strip............ */}
        <hr />




        <input type="checkbox" onClick={CheckBox}/> 
        <h4  style={{marginLeft:100,color:"#a71f1f", fontFamily:'sans-serif'}}>Permanent Address:-</h4>
       <div className="thirdform">
       <div className="form-floating mb-0 mt-2 col-md-5">
              <input type="Number"   className={`form-control  input-group-text ${errors.Flat1 && "is-invalid"}`}
                {...register("Flat1", {
                  required: true,
                })}
                placeholder="name@example.com" value={flat2}  checked={flat2} onChange={FlatInput2}/>
              <label> Flat/House no</label>
            <small className="form-text text-danger">{errors.Flat1 &&'Flat is required'}</small>
            </div>

            <div className="form-floating mb-0 mt-2 col-md-5">
              <input type="text" className={`form-control  input-group-text ${errors.at1 && "is-invalid"}`}
                {...register("at1", { required:true})}
               placeholder="name@example.com"  value={at2} onChange={AtInput2}  />
              <label>At</label>
               <small className="form-text text-danger">{errors.at1 &&'At is required'}</small>
            </div>

            <div className="form-floating mb-0 mt-2 col-md-5">
              <input type="text"    className={`form-control  input-group-text ${errors.Country1 && "is-invalid"}`}
                {...register("Country1", { required: "Country is Required" })}
                 placeholder="name@example.com" checked={country2} value={country2} onChange={CountryInput2}/>
              <label>Country</label>
              {errors.Country1 && (
                <small className="text-danger">{errors.Country1.message}</small>
                )}
            </div>

            <div className="form-floating mb-0 mt-2 col-md-5">
              <input type="text" className={`form-control  input-group-text ${errors.State1 && "is-invalid"}`}
                {...register("State1", { required: "State is Required" })}
                 placeholder="name@example.com" checked={state2} value={state2} onChange={StateInput2}   />
              <label>State</label>
              {errors.State1 && (
                <small className="text-danger">{errors.State1.message}</small>
                )}
            </div>
            
            <div className="form-floating mb-0 mt-2 col-md-5">
              <input type="text" className={`form-control  input-group-text ${errors.District1 && "is-invalid"}`}
                {...register("District1", { required: "District is Required" })}
                placeholder="name@example.com" checked={dist2} value={dist2} onChange={DistInput2}  />
              <label>District</label>
              {errors.District1 && (
                <small className="text-danger">{errors.District1.message}</small>
                )}
            </div>

            <div className="form-floating mb-0 mt-2 col-md-5">
              <input type="Number" className={`form-control  input-group-text ${errors.Pin1 && "is-invalid"}`}
                {...register("Pin1", {
                  required: "Pin is Required",
                  pattern: {
                    value: /^\s*(?:\+?(\d{1,2}))?[-. (]*(\d{3})[-. )]*(\d{2})[-. ]*(\d{1})(?: *x(\d+))?\s*$/,
                    message: "Invalid Pin no",
                  },
                })}
                placeholder="name@example.com"  value={pin2} checked={pin2} onChange={PinInput2} />
              <label> PinNo.</label>
              {errors.Pin1 && (
                <small className="text-danger">{errors.Pin1.message}</small>
                )}
            </div>
            
            </div> 
 {/* ................End thirdform ....       */}
 <div  className="lastbtn mt-3 mb-4">
   <button type="submit" >submit</button>
   </div>
 
   </form>
           
      </div>

  )
}
export default Regfirstpage;