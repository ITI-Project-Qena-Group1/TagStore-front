import React, { useState } from "react";
import '../RegisterPage/RegisterForm.css'
import FirstRegisterForm from './firstRegisterForm'
import PersInfo from "./personalInformation";
import PersDetails from "./personalDetails";
import CreatedAcc from "./CreatedAccount";
import { GrFacebookOption } from 'react-icons/gr'
import Password from "./password";



export default function MainForm() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPasword: "",
        firstName: "",
        middleName: "",
        lastName: "",
        perfixNumber: "",
        phoneNumber: "",
        dateOfBirth: ""
    });

    const displayPage = () => {
        if (page === 0) {
            return <FirstRegisterForm formData={formData} setFormData={setFormData} />
        } else if (page === 1) {
            return <Password formData={formData} setFormData={setFormData} />
        } else if (page === 2) {
            return <PersInfo formData={formData} setFormData={setFormData} />
        } else if (page == 3) {
            return <PersDetails formData={formData} setFormData={setFormData} />
        } else {
            return <CreatedAcc formData={formData} setFormData={setFormData} />
        }
    }

    return (
        <>
            <div className="form">
                <div className="form-container">
                    <div className="body">
                        {displayPage()}
                    </div>
                </div>
                <div className="form-container">
                    <div className="container">
                        <div className="d-flex justify-content-center mt-5">
                            <button onClick={() => {
                                setPage((currentPage) => currentPage + 1)
                            }}
                                className="btn mt-2 f-btn" style={{width:"525px"}}>Continue
                            </button>
                        </div>
                        {page == 0 && <div className="d-flex justify-content-center mt-5" >
                            <button className="btn btn-primary face-btn" style={{width:"525px"}}>
                                <GrFacebookOption className="face-icon"/> Log in With Facebook 
                            </button>
                        </div>}
                    </div>
                    {page <=3 &&<div className="mt-5 container">
                            <div className="col d-flex justify-content-center">
                                <p className="text-center w-50">For further support, you may visit the Help Center or contact our customer service team.</p>
                            </div>
                    </div>}
                </div>
            </div>
        </>
    );
}

