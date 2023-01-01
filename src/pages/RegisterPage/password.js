import React , {useState} from "react";
import './RegisterForm.css'
import { GiAlliedStar } from 'react-icons/gi'
import { Link } from "react-router-dom";
import langContext from "../../context/LangContext"; 


export default function Password({ formData, setFormData }) {

    const [error , setError] = useState({
        passwordError:"",
        confirmPasswordError:""
    })

    const handleChange = (evt) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if(evt.target.name === 'password'){
            setFormData({...formData , password:evt.target.value})
            setError({...error,passwordError:(evt.target.value.length == 0)?" Please type a Strong password": passwordRegex.test(evt.target.value)?"":"Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"})
        }

        if(evt.target.name === 'confirmPassword'){
            const confirmPassword = evt.target.value
            setFormData({...formData,confirmPassword:evt.target.value})
            setError({...error,confirmPasswordError:(evt.target.value.length == 0)?"this field is required": confirmPassword === formData.password ?"":"password not match"})
        }
    }

    const value = React.useContext(langContext);
    let { selectedLang } = value.state;
    let {
        CreateAccount,
        startToCreateAccount,
        password,
        confirmPassword,
        edit
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
                                    <h4>{CreateAccount}</h4>
                                    <p style={{fontSize:"18px"}}>{startToCreateAccount}</p>
                                </div>
                            </div>
                            <div class="input-group input-group-lg col mb-3">
                                <input type="text" class="form-control" value={formData.email} disabled />
                                <div class="input-group-lg">
                                    <Link class="input-group-text" id="basic-addon2" to={"/register"}>{edit}</Link>
                                </div>
                            </div>
                            <div className="input-group-lg fr-btn mt-3 col d-block">
                                <input type="text" className={`${selectedLang=="en"?"text-start ps-2":"text-end pe-2"} form-control ${(error.passwordError ? "border-danger shadow-none":"shadow-none")}`} placeholder={password} value={formData.password} name="password" onChange={(e)=>handleChange(e)}/>
                                <p className='text-danger mt-2 mx-2'>{error.passwordError}</p>
                            </div>
                            <div className="input-group-lg fr-btn mt-3 col d-block">
                                <input type="text" className={`${selectedLang=="en"?"text-start ps-2":"text-end pe-2"} form-control ${(error.confirmPasswordError ? "border-danger shadow-none":"shadow-none")}`} placeholder={confirmPassword} value={formData.confirmPassword} name="confirmPassword" onChange={(e)=>handleChange(e)}/>
                                <p className='text-danger mt-2 mx-2'>{error.confirmPasswordError}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

