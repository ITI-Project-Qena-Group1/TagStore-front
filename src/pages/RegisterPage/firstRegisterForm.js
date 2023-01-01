import React, { useState } from "react";
import './RegisterForm.css'
import { GiAlliedStar } from 'react-icons/gi'
import {GrFacebookOption} from 'react-icons/gr'
import { Link } from "react-router-dom";
import ProductCard from "../productList";
import langContext from "../../context/LangContext"; 




export default function FirstRegisterForm({formData , setFormData}) {
    const [error , setError] = useState({emailError:""})

    const handleChange = (evt) => {
        const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if(evt.target.name === 'email'){
            setFormData({...formData , email:evt.target.value})
            setError({...error,emailError:(evt.target.value.length == 0)?" Type your email to login or create an account.": emailRegex.test(evt.target.value)?"":"email invalid"})
        }
    }
    const value = React.useContext(langContext);
    let { selectedLang } = value.state;
    let {
        whatsYourEmailAdress,
        TypeYourEmailToLog,
        email,
        regByPhone
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
                                    <h4>{whatsYourEmailAdress}</h4>
                                    <p style={{fontSize:"18px"}}>{TypeYourEmailToLog}.</p>
                                </div>
                            </div>
                            <div className="d-block input-group-lg fr-btn col">
                                <input type="text" className={`${selectedLang=="en"?"text-start ps-2":"text-end pe-2"} form-control w-100 ${(error.emailError ? "border-danger shadow-none":"shadow-none")}`} placeholder={email} value={formData.email} name="email" onChange={(e)=>handleChange(e)}/>
                                <p className='text-danger mt-2 mx-2'>{error.emailError}</p>
                            </div>
                            <div className="justify-content-center">
                                <div className="col-12">
                                    <button className="btn mt-2 col-12 l-ancor shadow-none"><Link className="btn mt-2 col-12 l-ancor shadow-none">{regByPhone}</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

