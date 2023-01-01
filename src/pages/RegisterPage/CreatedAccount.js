import React from "react";
import './RegisterForm.css'
import { GiAlliedStar } from 'react-icons/gi'
import langContext from "../../context/LangContext";



export default function CreatedAcc({formData , setFormData}) {

    const value = React.useContext(langContext);
    let { selectedLang } = value.state;
    let {
        created
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
                                    <h4>{created}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

