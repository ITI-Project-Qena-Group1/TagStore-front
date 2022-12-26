import React ,{useState} from "react";
import './RegisterForm.css'
import { GiAlliedStar } from 'react-icons/gi'



export default function PersDetails({formData , setFormData}) {

    const [error , setError] = useState({
        dateError:""
    })  

    const handleChange = (evt) => {
        const dateRegex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
        if(evt.target.name === 'dateOfBirth'){
            setFormData({...formData , dateOfBirth:evt.target.value})
            setError({...error,dateError:(evt.target.value.length == 0)?" Please type your Date of birth": dateRegex.test(evt.target.value)?"":" format must be MM/DD/YYYY"})
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
                                    <h4>Personal details</h4>
                                    <p style={{fontSize:"18px"}}>Almost there... Just a few more details.</p>
                                </div>
                            </div>
                            <div className="input-group input-group-lg col mt-5">
                                <select className="btn btn-light col" value={formData.gender}>
                                    <option value="none" selected>Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="input-group input-group-lg fr-btn mt-5 col d-block">
                                <input type="text" className={`form-control ${(error.dateError ? "border-danger shadow-none":"shadow-none")}`} placeholder="mm/dd/yy" value={formData.dateOfBirth} name="dateOfBirth" onChange={(e)=>handleChange(e)}/>
                                <p className='text-danger mt-2 mx-2'>{error.dateError}</p>
                            </div>

                            <div class="container mt-5 text-align-center">
                                <input type="checkbox" id="acceptTC" name="acceptTC"/> I read and consented to the <a href="/interaction/jwBBNyXSN92SM20UjSRig/en-eg/terms-and-conditions" target="_blank">Terms and Conditions</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

