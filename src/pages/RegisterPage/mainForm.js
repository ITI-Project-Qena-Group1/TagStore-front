import React, { useState } from "react";
import './RegisterForm.css'
import FirstRegisterForm from './firstRegisterForm'
import PersInfo from "./personalInformation";
import PersDetails from "./personalDetails";
import CreatedAcc from "./CreatedAccount";
import { GrFacebookOption } from 'react-icons/gr'
import Password from "./password";
import langContext from "../../context/LangContext"; 



export default function MainForm() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        middleName: "",
        lastName: "",
        perfixNumber: "",
        phoneNumber: "",
        dateOfBirth: "",
        gender: ""
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

    const value = React.useContext(langContext);
    let { selectedLang } = value.state;
    let {
        continueBTN,
        submit,
        goToHome,
        logByFaceBook,
        forSupport
    } = value.state.lang;

    return (
        <>
            <div className="form">
                <div className="form-container">
                    <div className="container col-8">
                        {displayPage()}
                        <div className="d-flex justify-content-center mt-5">
                            {page < 3 ? <button onClick={() => {
                                setPage((currentPage) => currentPage + 1)
                            }}
                                className="btn mt-2 f-btn" style={{ width: "470px" }}>{continueBTN}
                            </button>

                                : page == 3 ? <button onClick={() => {
                                    setPage((currentPage) => currentPage + 1)
                                    console.log(formData);
                                }}
                                    className="btn mt-2 f-btn" style={{ width: "470px" }}>{submit}
                                </button>
                                    : page > 3 && <button onClick={() => {
                                        setPage((currentPage) => currentPage + 1)
                                    }}
                                        className="btn mt-2 f-btn" style={{ width: "470px" }}>{goToHome}
                                    </button>
                            }
                        </div>
                        {page == 0 && <div className="d-flex justify-content-center mt-5" >
                            <button className="btn btn-primary face-btn" style={{ width: "470px" }}>
                                <GrFacebookOption className="face-icon" /> {logByFaceBook}
                            </button>
                        </div>}
                        {page <=3 &&<div className="mt-5 container d-flex justify-content-center">
                            <div className="col-6">
                                <p className="text-center">{forSupport}</p>
                            </div>
                    </div>}
                    </div>
                </div>
            </div>
        </>
    );
}

