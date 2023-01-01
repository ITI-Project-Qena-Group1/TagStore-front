/* eslint-disable no-undef */
import React from "react";
import { useState } from "react";
// import {link} from "react-router-dom";
import {MdStars} from "react-icons/md"
import langContext from "../../context/LangContext";


const Loginform=()=>{

  const value = React.useContext(langContext);
  let { selectedLang } = value.state;
  let {

    welcomBack,
    LogBackIntoYourJumiaAccount,
    phoneNumber,
    EnterYourPhoneNumber,
    password,
    showpassword,
    login,

  } = value.state.lang;


  const vaildMobilNo=new RegExp("^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$")
   const  [translat]=useState(["Welcome back","Log back into your Jumia account","phone number","Enter Your Phone Number"," password","show password","login"])

    
    const [passtype, setpasstype]=useState("password")
    const[loginform, setloginform]=useState({

        mobilNo :'',
        password :'', 

    })
    const [errors, seterrors] = useState({
        mobilNo :null,
        password : null,
    })
    const submitForm = (e)=>{
        e.preventDefault();
        for (var item in loginform){
          console.log(item)
            
          if (loginform[item] === ''){
            seterrors({
              ...errors , 
              mobilNo : loginform.mobilNo === ''? "this field is required": null,
              password : loginform.password === ''? "this field is required": null
             })
           return 0
          } 
         
      }
    console.log(loginform)
    }
    
    function update(e){
      if (e.target.name === "mobilNo"){
    
         setloginform({...loginform,mobilNo : e.target.value })
         seterrors({ ...errors ,mobilNo : vaildMobilNo.test(e.target.value) === false ? "please write a vaild phone number!" : null }) 
             
        }
         else if (e.target.name === "password"){
    
    
          setloginform({...loginform,password : e.target.value})
            
         seterrors({...errors,password:e.target.value.length < 8 ? "password should have more than 8 charctricts" : null})
                
      }
    }
    
    function showpass(e){
       
        if (e.target.checked === true){
         setpasstype("text")
          console.log(passtype)
        } else {
            setpasstype("password")
        }
    }



    return (
        <>

         
        
          <div className="container d-flex justify-content-center  align-items-center justify-content-center " style={{ height: '80vh' }}>

            <div className="row row-cols-2">
          <div className="text-center col-12 " >
         <h1> <MdStars color="orange" size="70px"/></h1>
          <p className="fs-4"> {welcomBack} !!  </p> 
          <p>{LogBackIntoYourJumiaAccount}</p>
          
          </div>
    
            <form className='col-12 text-center border p-3 rounded' onSubmit={(e) => submitForm(e)}>
              <div>
                <label htmlFor="mobilNo" class="form-label">
                {phoneNumber} 
                </label>
                <input
                  type="mobilNo"
                  className="form-control border border-warning box shadow-none"
                  id="mobilNo"
                 value={loginform.mobilNo}
                  name="mobilNo"
                  placeholder={EnterYourPhoneNumber} 
                  onChange={(e)=> update(e)}
                
                />
                <div class="text-danger text-left mt-1"> {errors.mobilNo} </div>
                  
                <label htmlFor="password" class="form-label mt-2">
                {translat[4]} 
                </label>
                <input
                  type={passtype}
                  className="form-control border border-warning box shadow-none"
                  id="password"
                  name= "password"
                  placeholder={showpassword} 
                  onChange={(e)=> update(e)}
                />
                <div class="text-danger">
                   {errors.password}
                </div>
                <input className='mt-2 m-2' type={'checkbox'}  onChange={ (e)=> showpass(e)} />  
                <label htmlFor="password"> {translat[5]} </label>
              </div>
              <button 
              type='submit'  
              style={{ background:'#f68b1e' }}  
              className='btn btn-warning m-2 p-3 mt-3 col-12' 
              disabled={errors.mobilNo && errors.password == null ? true : false} 
              onClick = {()=> {
                axios.post('http://localhost:4444/user/login', {mobilNo: mobilNo, password:password})
                    .then(res => {
                      console.log(res.data.token)  
                      const { token, user } = res.data;
                      localStorage.setItem("token", token);
                      localStorage.setItem("user", JSON.stringify(user));
                     
                       })
                         .catch(err => console.log(err))
                    }} 
             
             > {login}  </button>
              
                
            </form>
            </div>
          </div>
        </>
      );
}
export default Loginform;