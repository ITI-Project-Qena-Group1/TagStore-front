import React , {useState} from "react";
import './RegisterForm.css'
import { GiAlliedStar } from 'react-icons/gi'
import langContext from "../../context/LangContext"; 




export default function PersInfo({formData , setFormData}) {

    const [error , setError] = useState({
        fNameError:"",
        mNameError:"",
        lNameError:"",
        perfixNumberError:"",
        phoneNumberError:"",
        perfixNumber:""
    })  

    const handleChange = (evt) => {
        const firstName = /[a-zA-Z]{2,}/;
        const middleName = /[a-zA-Z]{2,}/;
        const lastName = /[a-zA-Z]{2,}/;
        const phoneNumber = /^01[0-9]{9,}/;
        const perfixNumber = /[0-9]{2,}/;

        if(evt.target.name === 'firstName'){
            setFormData({...formData , firstName:evt.target.value})
            setError({...error,fNameError:(evt.target.value.length == 0)?" Please type your first name as in your national ID": firstName.test(evt.target.value)?"":"Name must have a minimum of 2 characters and maximum of 60"})
        }
        if(evt.target.name === 'middleName'){
            setFormData({...formData , middleName:evt.target.value})
            setError({...error,mNameError:(evt.target.value.length == 0)?"": middleName.test(evt.target.value)?"":"Name must have a minimum of 2 characters and maximum of 60"})
        }
        if(evt.target.name === 'lastName'){
            setFormData({...formData , lastName:evt.target.value})
            setError({...error,lNameError:(evt.target.value.length == 0)?"Please type your Last name as in your national ID": lastName.test(evt.target.value)?"":"Name must have a minimum of 2 characters and maximum of 60"})
        }

        if(evt.target.name === 'phoneNumber'){
            setFormData({...formData , phoneNumber:evt.target.value})
            setError({...error,phoneNumberError:(evt.target.value.length == 0)?"Please type your phone number": phoneNumber.test(evt.target.value)?"":"Wrong Phone number"})
        }

        if(evt.target.name === 'perfixNumber'){
            setFormData({...formData , perfixNumber:evt.target.value})
            setError({...error,perfixNumberError:(evt.target.value.length == 0)?"Required": perfixNumber.test(evt.target.value)?"":"Wrong number"})
        }
    }
    
    const value = React.useContext(langContext);
    let { selectedLang } = value.state;
    let {
        personalDetails,
        NeedPersonalDetails,
        firstName,
        middleName,
        lastName,
        phoneNumber
    } = value.state.lang;

    return (
        <>
            <section className="mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                            <div className="row">
                                <div className="col text-center">
                                    <h1><GiAlliedStar className="r-icon" /></h1>
                                    <h4>{personalDetails}</h4>
                                    <p style={{fontSize:"18px"}}>{NeedPersonalDetails}</p>
                                </div>
                            </div>
                            <div className="input-group-lg fr-btn col d-block">
                                <input type="text"  className={`${selectedLang=="en"?"text-start ps-2":"text-end pe-2"} form-control ${(error.fNameError ? "border-danger shadow-none":"shadow-none")}`} placeholder={firstName} value={formData.firstName}  name="firstName" onChange={(e)=>handleChange(e)}/>
                                <p className='text-danger mt-2 mx-2'>{error.fNameError}</p>
                            </div>
                            <div className="input-group-lg fr-btn mt-4 col d-block">
                                <input type="text"  className={`${selectedLang=="en"?"text-start ps-2":"text-end pe-2"} form-control ${(error.mNameError ? "border-danger shadow-none":"shadow-none")}`} placeholder={middleName} value={formData.middleName} name="middleName" onChange={(e)=>handleChange(e)}/>
                                <p className='text-danger mt-2 mx-2'>{error.mNameError}</p>
                            </div>

                            <div className="input-group-lg fr-btn mt-4 col d-block">
                                <input type="text"  className={`${selectedLang=="en"?"text-start ps-2":"text-end pe-2"} form-control ${(error.lNameError ? "border-danger shadow-none":"shadow-none")}`} placeholder={lastName} value={formData.lastName} name="lastName" onChange={(e)=>handleChange(e)}/>
                                <p className='text-danger mt-2 mx-2'>{error.lNameError}</p>
                            </div>

                            <div className="d-flex">
                                <div className="d-block col-3 input-group-lg fr-btn mt-4 col ">
                                    <input type="text"  className={`form-control ${(error.perfixNumberError ? "border-danger shadow-none":"shadow-none")}`} placeholder="+20" value={formData.perfixNumber} name="perfixNumber" onChange={(e)=>handleChange(e)}/>
                                    <p className='text-danger mt-2 mx-2'>{error.perfixNumberError}</p>
                                </div>

                                <div className="d-block col-9 input-group-lg fr-btn mt-4 col ">
                                    <input type="text"  className={`${selectedLang=="en"?"text-start ps-2":"text-end pe-2"} form-control ${(error.phoneNumberError ? "border-danger shadow-none":"shadow-none")}`} placeholder={phoneNumber} value={formData.phoneNumber} name="phoneNumber" onChange={(e)=>handleChange(e)}/>
                                    <p className='text-danger mt-2 mx-2'>{error.phoneNumberError}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

