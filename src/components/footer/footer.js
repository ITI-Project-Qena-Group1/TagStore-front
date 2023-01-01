import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { Container, Form, Row } from "react-bootstrap";
import { FaGooglePlay, FaCcMastercard } from "react-icons/fa"
import { BsApple, BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs"
import { GiAlliedStar } from 'react-icons/gi'
import {GrFacebookOption} from 'react-icons/gr'
import { SiVisa } from "react-icons/si"
import langContext from '../../context/LangContext';


export default function Footer() {
    const value = React.useContext(langContext);
    let { selectedLang } = value.state;
    let {
        customerService,
        helpCenter,
        contactUs,
        shopOnJumia,
        payOnJumia,
        deliveryTimelines,
        report,
        disputePolicy,
        returnPolicy,
        aboutJumia,
        jumiaLogistics,
        jumiaCareer,
        terms,
        privacyPolicy,
        jumiaExpress,
        jumiaMall,
        flashSales,
        DAcademy,
        blackFriday,
        makeMoney,
        sellOnJumia,
        logisticsService,
        jForce,
        jumiaInterNational,
        Algeria,
        Ghana,
        Kenya,
        Morocco,
        Nigeria,
        Senegal,
        Tunisia,
        Uganda,
        joinUs,
        payment,
        newToJumia,
        subscribeToNewsletter,
        enterEmail,
        downloadApp,
        getAccess,
        submit
    } = value.state.lang;

    function chooseArLang() {
        value.setSelectedLang("ar");
    }
    function chooseEnLang() {
        value.setSelectedLang("en");
    }

    return (
        <>
            <div className="bg-darker" {...(selectedLang=='en' ? {dir: 'ltr'} : {dir: 'rtl'})}>
                <Container>
                    <Row className="py-3">
                        <Container className="col-md-2 col-sm-6">
                            <img src={require('../../images/logo.png')} style={{width: '150px'}} alt="logo"/>
                        </Container>
                        <Container className="col-md-4 col-sm-6">
                            <h6>
                                <b>{newToJumia}</b>
                            </h6>
                            <p>
                                <small>
                                {subscribeToNewsletter}
                                </small>
                            </p>
                            <Form className="form-inline my-lg-0">
                                <input
                                    className=" search form-control mr-sm-2 col-8"
                                    type="search"
                                    placeholder={enterEmail}
                                    aria-label="Search"
                                />
                                <button className="btn btn-dark btn-outline-light mt-3">{submit}</button>
                            </Form>
                        </Container>

                        <Container className="col-md-4 col-sm-6 mt-2">
                            <Container className="d-flex">
                                <div>
                                    <h1><img src={require('../../images/logo (1).png')} style={{width: '40px'}} alt="logo"/></h1>
                                </div>
                                <div className="mx-4 mt-1">
                                    <h6>
                                        <b>{downloadApp}</b>
                                    </h6>
                                    <p>
                                        <small>{getAccess}</small>
                                    </p>
                                </div>
                            </Container>

                            <div className="mx-3 d-flex" >
                                <a target="_blank" href="https://apps.apple.com/app/id925015459?mt=8" className="btn btn-outline-light rounded">
                                    <h4 className="mx-2"><BsApple /> <small>APP STORE</small> </h4>
                                </a>
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.TAG.android&referrer=adjust_reftag%3DcdTxOjM" className="btn btn-outline-light rounded mx-2 ">
                                    <h4 className="mx-2"><FaGooglePlay /> <small>Google Play</small> </h4>
                                </a>
                            </div>
                        </Container>
                    </Row>
                </Container>
            </div>
            <div className="bg-darke text-white">
                <Container>
                    <Row className="py-3">
                        <Container className="col-md-3 col-sm-6">
                            <h6>
                                <b>{customerService}</b>
                            </h6>
                            <ul className="p-0">
                                <li className="f-li"><Link to="#">{helpCenter} </Link></li>
                                <li className="f-li"><Link to="#"> {contactUs} </Link></li>
                                <li className="f-li"><Link to="#"> {shopOnJumia}</Link></li>
                                <li className="f-li"><Link to="#">{payOnJumia}</Link></li>
                                <li className="f-li"><Link to="#"> {deliveryTimelines}  </Link></li>
                                <li className="f-li"><Link to="#"> {report}  </Link></li>
                                <li className="f-li"><Link to="#"> {disputePolicy}  </Link></li>
                                <li className="f-li"><Link to="#"> {returnPolicy}  </Link></li>
                            </ul>
                        </Container>

                        <Container className="col-md-3 col-sm-6">
                            <h6>
                                <b>{aboutJumia}</b>
                            </h6>
                            <ul className="p-0">
                                <li className="f-li"><Link to="#">{jumiaLogistics}</Link></li>
                                <li className="f-li"><Link to="#">{jumiaCareer}</Link></li>
                                <li className="f-li"><Link to="#">{terms}</Link></li>
                                <li className="f-li"><Link to="#">{privacyPolicy}</Link></li>
                                <li className="f-li"><Link to="#">{jumiaExpress}</Link></li>
                                <li className="f-li"><Link to="#">{jumiaMall}</Link></li>
                                <li className="f-li"><Link to="#">{flashSales}</Link></li>
                                <li className="f-li"><Link to="#">{DAcademy}</Link></li>
                                <li className="f-li"><Link to="#">{blackFriday}</Link></li>
                            </ul>
                        </Container>

                        <Container className="col-md-3 col-sm-6">
                            <h6>
                                <b>{makeMoney}</b>
                            </h6>
                            <ul className="p-0">
                                <li className="f-li"><Link to="#">{sellOnJumia}</Link></li>
                                <li className="f-li"><Link to="#">{logisticsService}</Link></li>
                                <li className="f-li"><Link to="#">{jForce}</Link></li>
                            </ul>
                        </Container>

                        <Container className="col-md-3 col-sm-6">
                            <h6>
                                <b>  {jumiaInterNational}  </b>
                            </h6>
                            <div className="d-flex col-md-3 col-sm-6">
                                <div className="col-md-3 col-sm-6">
                                    <ul className="p-0">
                                        <li className="f-li"><Link to="#">{Algeria}</Link></li>
                                        <li className="f-li"><Link to="#">{Ghana}</Link></li>
                                        <li className="f-li"><Link to="#">{Kenya}</Link></li>
                                        <li className="f-li"><Link to="#">{Morocco}</Link></li>
                                    </ul>
                                </div>

                                <div className="col-md-3 col-sm-6 mx-5">
                                    <ul className="p-0">
                                        <li className="f-li"><Link to="#">{Nigeria}</Link> </li>
                                        <li className="f-li"><Link to="#">{Senegal}</Link></li>
                                        <li className="f-li"><Link to="#">{Tunisia}</Link></li>
                                        <li className="f-li"><Link to="#">{Uganda}</Link> </li>
                                    </ul>
                                </div>
                            </div>
                        </Container>
                        <div className="col-md-3 col-sm-6">
                            <h6>
                                <b> {joinUs} </b>
                            </h6>
                            <p>
                                <h4><BsFacebook className="icon" /> <BsTwitter className="icon mx-2" /> <BsInstagram className="icon" /> <BsYoutube className="icon mx-2" /></h4>
                            </p>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <h6>
                                <b>{payment}</b>
                            </h6>
                            <p>
                                <h4><FaCcMastercard className="icon" /> <SiVisa className="icon mx-2" /> <small className="icon">Fawry</small></h4>
                            </p>
                        </div>
                    </Row>
                    <Row>
                        <Container className="col-md-2 col-sm-6">
                            <ul className="p-0">
                                <li className="f-li"><Link to="#">Activ</Link></li>
                                <li className="f-li"><Link to="#">ADIDAS</Link></li>
                                <li className="f-li"><Link to="#">American Eagle</Link></li>
                                <li className="f-li"><Link to="#">Andora</Link></li>
                            </ul>
                        </Container>

                        <Container className="col-md-2 col-sm-6">
                            <ul className="p-0">
                                <li className="f-li"><Link to="#">Apple</Link></li>
                                <li className="f-li"><Link to="#">Braun</Link></li>
                                <li className="f-li"><Link to="#">Casio</Link></li>
                                <li className="f-li"><Link to="#">Cottonil</Link></li>
                            </ul>
                        </Container>

                        <Container className="col-md-2 col-sm-6">
                            <ul className="p-0">
                                <li className="f-li"><Link to="#">Defacto</Link></li>
                                <li className="f-li"><Link to="#">Dejavu</Link></li>
                                <li className="f-li"><Link to="#">Dice</Link></li>
                                <li className="f-li"><Link to="#">Fresh</Link></li>
                            </ul>
                        </Container>

                        <Container className="col-md-2 col-sm-6">
                            <ul className="p-0">
                                <li className="f-li"><Link to="#">Garnier</Link></li>
                                <li className="f-li"><Link to="#">HP</Link></li>
                                <li className="f-li"><Link to="#">lazor</Link></li>
                                <li className="f-li"><Link to="#">Kady</Link></li>
                            </ul>
                        </Container>

                        <Container className="col-md-2 col-sm-6">
                            <ul className="p-0">
                                <li className="f-li"><Link to="#">L'Oreal</Link></li>
                                <li className="f-li"><Link to="#">Lenovo</Link></li>
                                <li className="f-li"><Link to="#">Maybelline</Link></li>
                                <li className="f-li"><Link to="#">LC Waikiki</Link></li>
                            </ul>
                        </Container>

                        <Container className="col-md-2 col-sm-6">
                            <ul className="p-0">
                                <li className="f-li"><Link to="#">Mesery</Link></li>
                                <li className="f-li"><Link to="#">Mothercare</Link></li>
                                <li className="f-li"><Link to="#">NIVEA</Link></li>
                                <li className="f-li"><Link to="#">Nokia</Link></li>
                            </ul>
                        </Container>
                    </Row>
                </Container>
                <div className="container d-flex justify-content-start border-top border-1 pt-2 pb-4" {...(selectedLang=="en" ? {dir: 'ltr'} : {dir: 'rtl'})}>
                <div className="text-light">
                    <button style={{ backgroundColor: 'transparent', border: '0', color: '#ccc' }} onClick={()=>chooseEnLang()} {...(selectedLang=="en"? {disabled:true} : {disabled:false})}>
                    <svg className={selectedLang=='en'?'me-2':'ms-2'} opacity={selectedLang=='en'?'0.3':'1'} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"><mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="m0 0 8 22-8 23v23l32 54-32 54v32l32 48-32 48v32l32 54-32 54v68l22-8 23 8h23l54-32 54 32h32l48-32 48 32h32l54-32 54 32h68l-8-22 8-23v-23l-32-54 32-54v-32l-32-48 32-48v-32l-32-54 32-54V0l-22 8-23-8h-23l-54 32-54-32h-32l-48 32-48-32h-32l-54 32L68 0H0z"/><path fill="#0052b4" d="M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z"/><path fill="#d80027" d="M0 0v45l131 131h45L0 0zm208 0v208H0v96h208v208h96V304h208v-96H304V0h-96zm259 0L336 131v45L512 0h-45zM176 336 0 512h45l131-131v-45zm160 0 176 176v-45L381 336h-45z"/></g></svg>
                        English
                    </button>
                    |
                    <button style={{ backgroundColor: 'transparent', border: '0', color: '#ccc' }} onClick={()=>chooseArLang()} {...(selectedLang=="ar"? {disabled:true} : {disabled:false})}>
                    <svg className={selectedLang=='en'?'me-2':'ms-2'} opacity={selectedLang=='ar'?'0.3':'1'} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"><mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="m0 144 256-32 256 32v224l-256 32L0 368Z"/><path fill="#d80027" d="M0 0h512v144H0Z"/><path fill="#333" d="M0 368h512v144H0Z"/><path fill="#ff9811" d="M250 191c-8 0-17 4-22 14 5-3 16-1 16 13 0 4-2 8-5 10-8 0-14-14-29-14-10 0-19 7-19 17v69l46-7-14 27h66l-14-27 46 7v-69c0-10-9-17-19-17-15 0-21 14-29 14 8-23-7-37-23-37z"/></g></svg>
                        عربي
                    </button>
                </div>
                </div>
            </div>
        </>
    );
}