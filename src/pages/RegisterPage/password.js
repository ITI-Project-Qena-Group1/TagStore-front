import React , {useState} from "react";
import './RegisterForm.css'
import { GiAlliedStar } from 'react-icons/gi'
import { Link } from "react-router-dom";


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
    return (
        <>
            <section className="mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                            <div className="row">
                                <div className="col text-center">
                                    <h1><GiAlliedStar className="r-icon" /></h1>
                                    <h4>Create your account</h4>
                                    <p style={{fontSize:"18px"}}>Let's get started by creating your account. <br /> To keep your account safe, we need a strong password</p>
                                </div>
                            </div>
                            <div class="input-group input-group-lg col mb-3">
                                <input type="text" className="form-control" value={formData.email} disabled />
                                <div class="input-group-append input-group-lg">
                                    <Link class="input-group-text" id="basic-addon2">edit</Link>
                                </div>
                            </div>
                            <div className="input-group-lg fr-btn mt-3 col d-block">
                                <input type="text" className={`form-control ${(error.passwordError ? "border-danger shadow-none":"shadow-none")}`} placeholder="Password" value={formData.password} name="password" onChange={(e)=>handleChange(e)}/>
                                <p className='text-danger mt-2 mx-2'>{error.passwordError}</p>
                            </div>
                            <div className="input-group-lg fr-btn mt-3 col d-block">
                                <input type="text" className={`form-control ${(error.confirmPasswordError ? "border-danger shadow-none":"shadow-none")}`} placeholder="Confirm Password" value={formData.confirmPassword} name="confirmPassword" onChange={(e)=>handleChange(e)}/>
                                <p className='text-danger mt-2 mx-2'>{error.confirmPasswordError}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

