import React ,{useState} from "react";
import './RegisterForm.css'
import { GiAlliedStar } from 'react-icons/gi'
import langContext from "../../context/LangContext";



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
        if(evt.target.name === 'gender'){
            setFormData({...formData , gender:evt.target.value})
        }
    }

    const value = React.useContext(langContext);
    let { selectedLang } = value.state;
    let {
        alomstThere,
        gender,
        male,
        female,
        terms,
        personalDetails
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
                                    <p style={{fontSize:"18px"}}>{alomstThere}</p>
                                </div>
                            </div>
                            <div className="input-group input-group-lg col mt-5">
                                <select required className="btn btn-light col" name="gender" value={formData.gender} onChange={(e)=>handleChange(e)}>
                                    <option value="none" selected>{gender}</option>
                                    <option value="male">{male}</option>
                                    <option value="female">{female}</option>
                                </select>
                            </div>
                            <div className="input-group-lg fr-btn mt-5 col d-block">
                                <input type="text" className={`form-control ${(error.dateError ? "border-danger shadow-none":"shadow-none")}`} placeholder="mm/dd/yy" value={formData.dateOfBirth} name="dateOfBirth" onChange={(e)=>handleChange(e)}/>
                                <p className='text-danger mt-2 mx-2'>{error.dateError}</p>
                            </div>

                            <div class="container mt-5 d-flex text-align-center">
                                <input required type="checkbox" id="acceptTC" name="acceptTC" className="mx-2"/>{terms}<a href="/interaction/jwBBNyXSN92SM20UjSRig/en-eg/terms-and-conditions" target="_blank"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

