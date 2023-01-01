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
    function chooseArLang() {
        value.setSelectedLang("ar");
    }
    function chooseEnLang() {
        value.setSelectedLang("en");
    }
    return (
        <>
            <div className="bg-darker">
                <Container>
                    <Row className="py-3">
                        <Container className="col-md-2 col-sm-6">
                            {/* <svg viewBox="0 0 138 32" id="logo-inv">
                                <g fill="none">
                                    <path
                                        d="M131.366 16.02a28.307 28.307 0 0 1-.685 2.265v.227c-.23.679-.686.905-1.143.905h-.458c-.228 0-.457-.226-.685-.226-.23-.227-.23-.453-.23-.68l.458-2.49c0-.227 0-.453.229-.453-3.658-.906-6.401-4.076-6.401-8.152 0-.68 0-1.132.228-1.812h-10.515c-.686 0-1.143-.452-1.372-.905l-.457-2.038c-.229-.906-.914-1.359-1.829-1.359h-3.2c-.686 0-1.143.453-1.143 1.132 0 .68.457 1.132 1.143 1.132h1.6c.686 0 1.143.453 1.372.906l4.114 16.304c.229.906.915 1.359 1.83 1.359h16.687c.915 0 1.6-.453 1.829-1.36l1.372-5.66c-.915.453-1.83.453-2.744.68v.226zm-18.974-4.528c-.228-.68-.228-1.132-.457-1.812l-.228-.453c0-.226 0-.452.228-.679.229-.226.457-.453.686-.453h1.143c.686 0 1.143.453 1.143 1.132l.457 2.265c0 .226 0 .453-.228.68-.229.226-.458.226-.686.226h-.686c-.686 0-1.143-.227-1.372-.906zm4.115 7.699c-.228.226-.457.453-.686.453h-.228c-.686 0-1.143-.453-1.372-.906v-.226a28.307 28.307 0 0 1-.686-2.265c0-.226 0-.453.229-.68.229-.226.457-.452.686-.452h.686c.685 0 1.143.453 1.143 1.132l.457 2.491s0 .226-.229.453zm4.572-.68c0 .453-.457.906-.914.906s-.915-.453-1.143-.905l-.457-2.718c0-.226 0-.453.228-.68.229-.226.457-.452.686-.452h.457c.686 0 1.143.453 1.143 1.132v2.718zm0-7.02c0 .68-.457 1.133-1.143 1.133h-.914c-.686 0-1.143-.453-1.143-1.132l-.457-2.265c0-.226 0-.452.228-.679.229-.226.457-.453.686-.453h1.372c.685 0 1.143.453 1.143 1.132v2.265h.228zm4.8 4.53l-.456 2.717c0 .453-.458.906-1.143.906-.458 0-.915-.453-.915-.906v-2.49c0-.68.457-1.133 1.143-1.133h.457c.23 0 .458.226.686.453.229 0 .457.226.229.453z"
                                        fill="#FFF"
                                    ></path>
                                    <path
                                        d="M130.854 0c-3.927 0-7.16 3.234-7.16 7.161 0 3.927 3.233 7.161 7.16 7.161 3.928 0 7.162-3.234 7.162-7.16 0-3.928-3.234-7.162-7.162-7.162zm3.466 12.243l-3.697-1.848-3.696 1.848.693-3.927-3.003-2.772 4.158-.693 1.848-3.696 1.849 3.696 4.158.693-3.003 2.772.693 3.927z"
                                        fill="#F90"
                                    ></path>
                                    <path
                                        d="M115.23 24.739a3.244 3.244 0 0 0-3.255 3.255 3.244 3.244 0 0 0 3.255 3.255 3.244 3.244 0 0 0 3.255-3.255c0-1.628-1.502-3.255-3.255-3.255zm15.624 0a3.244 3.244 0 0 0-3.255 3.255 3.244 3.244 0 0 0 3.255 3.255 3.244 3.244 0 0 0 3.256-3.255c0-1.628-1.503-3.255-3.256-3.255zm-95.716-.677c-1.396.937-3.49 1.406-6.748 1.406h-6.05c-.699 0-1.397 0-1.862-.235-.698-.234-1.164-.234-1.862-.468-.698-.235-1.163-.703-1.629-1.172-.465-.469-.698-.938-1.163-1.64-.233-.704-.466-1.407-.466-2.344v-15h3.956v14.765c0 1.64 1.397 2.344 4.422 2.344h5.352c2.792 0 4.189-.703 4.189-2.344V4.61h3.956v15c0 1.875-.698 3.515-2.095 4.453zm31.648 1.64V12.11L58.41 24.765c-.233.468-.698.703-.931.937-.466.235-.698.235-1.164.235-.93 0-1.629-.47-2.327-1.407l-8.61-12.655v13.827h-3.956V6.718c0-.703.233-1.171.698-1.64.466-.469.931-.703 1.397-.703.93 0 1.629.469 2.094 1.172l10.472 15 10.239-15c.465-.703 1.163-1.172 2.094-1.172.698 0 1.164.234 1.629.703.465.469.698.937.698 1.875v18.75h-3.956zm7.679-.234V4.375h3.956v21.093zm30.485.234l-3.258-5.625H89.59l-3.258 5.625H81.68L93.314 6.015c.466-.937 1.397-1.406 2.095-1.406.93 0 1.629.469 2.327 1.406l11.402 19.687h-4.188zM95.409 9.765l-3.724 6.328h7.447l-3.723-6.328zm-83.541 6.328c0 6.328-2.327 9.14-6.516 10.078-3.956.937-5.352.937-5.352.937v-4.453c1.629 0 3.956-.468 5.585-.937 1.396-.469 2.56-1.875 2.327-5.625V4.375h3.956v11.718z"
                                        fill="#FFF"
                                    ></path>
                                </g>
                            </svg> */}
                            <img src={require('../../images/logo.png')} style={{width: '150px'}} alt="logo"/>
                        </Container>
                        <Container className="col-md-4 col-sm-6">
                            <h6>
                                <b>NEW TO TAG</b>
                            </h6>
                            <p>
                                <small>
                                    Subscribe to our newsletter to get updates on our latest offers!
                                </small>
                            </p>
                            <Form className="form-inline my-lg-0">
                                <input
                                    className=" search form-control mr-sm-2 col-8"
                                    type="search"
                                    placeholder='Enter E-Mail Adress'
                                    aria-label="Search"
                                />
                                <button className="btn-dark btn-outline-light">Submit</button>
                            </Form>
                        </Container>

                        <Container className="col-md-4 col-sm-6 mt-2">
                            <Container className="d-flex">
                                <div>
                                    <h1><img src={require('../../images/logo (1).png')} style={{width: '40px'}} alt="logo"/></h1>
                                </div>
                                <div className="mx-4 mt-1">
                                    <h6>
                                        <b>DOWNLOAD TAG FREE APP</b>
                                    </h6>
                                    <p>
                                        <small>Get access to exclusive offers!</small>
                                    </p>
                                </div>
                            </Container>

                            <Row className="d-flex mx-3" >
                                <a target="_blank" href="https://apps.apple.com/app/id925015459?mt=8" className="btn-outline-light rounded">
                                    <h4 className="mx-2"><BsApple /> <small>APP STORE</small> </h4>
                                </a>
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.TAG.android&referrer=adjust_reftag%3DcdTxOjM" className="btn-outline-light rounded mx-2 ">
                                    <h4 className="mx-2"><FaGooglePlay /> <small>Google Play</small> </h4>
                                </a>
                            </Row>
                        </Container>
                    </Row>
                </Container>
            </div>
            <div className="bg-darke text-white">
                <Container>
                    <Row className="py-3">
                        <Container className="col-md-3 col-sm-6">
                            <h6>
                                <b>LET US HELP YOU</b>
                            </h6>
                            <ul className="p-0">
                                <li className="f-li"><Link to="#"> help Center  </Link></li>
                                <li className="f-li"><Link to="#"> contact Us  </Link></li>
                                <li className="f-li"><Link to="#"> How to shop on TAG? </Link></li>
                                <li className="f-li"><Link to="#">How to pay on TAG?</Link></li>
                                <li className="f-li"><Link to="#"> Delivery timelines  </Link></li>
                                <li className="f-li"><Link to="#"> Report a Product  </Link></li>
                                <li className="f-li"><Link to="#"> Dispute Resolution Policy  </Link></li>
                                <li className="f-li"><Link to="#"> Return & Refund Policy  </Link></li>
                            </ul>
                        </Container>

                        <Container className="col-md-3 col-sm-6">
                            <h6>
                                <b>ABOUT TAG EGYPT</b>
                            </h6>
                            <ul className="p-0">
                                <li className="f-li"><Link to="#">TAG Logistics Services</Link></li>
                                <li className="f-li"><Link to="#">TAG Careers</Link></li>
                                <li className="f-li"><Link to="#">Terms and Conditions</Link></li>
                                <li className="f-li"><Link to="#">Privacy Policy</Link></li>
                                <li className="f-li"><Link to="#">TAG Express</Link></li>
                                <li className="f-li"><Link to="#">TAG Mall</Link></li>
                                <li className="f-li"><Link to="#">Flash Sales</Link></li>
                                <li className="f-li"><Link to="#">Join the TAG DA Academy</Link></li>
                                <li className="f-li"><Link to="#">Black Friday 2022</Link></li>
                            </ul>
                        </Container>

                        <Container className="col-md-3 col-sm-6">
                            <h6>
                                <b>MAKE MONEY WITH TAG</b>
                            </h6>
                            <ul className="p-0">
                                <li className="f-li"><Link to="#">Sell on TAG</Link></li>
                                <li className="f-li"><Link to="#">Become a Logistics Service Partner</Link></li>
                                <li className="f-li"><Link to="#">Become a Sales Consultant (J-Force )</Link></li>
                            </ul>
                        </Container>

                        <Container className="col-md-3 col-sm-6">
                            <h6>
                                <b>  TAG INTERNATIONAL  </b>
                            </h6>
                            <div className="d-flex col-md-3 col-sm-6">
                                <div className="col-md-3 col-sm-6">
                                    <ul className="p-0">
                                        <li className="f-li"><Link to="#">Algeria</Link></li>
                                        <li className="f-li"><Link to="#">Ghana</Link></li>
                                        <li className="f-li"><Link to="#">Kenya</Link></li>
                                        <li className="f-li"><Link to="#">Morocco</Link></li>
                                    </ul>
                                </div>

                                <div className="col-md-3 col-sm-6 mx-5">
                                    <ul className="p-0">
                                        <li className="f-li"><Link to="#">Nigeria</Link> </li>
                                        <li className="f-li"><Link to="#">Senegal</Link></li>
                                        <li className="f-li"><Link to="#">Tunisia</Link></li>
                                        <li className="f-li"><Link to="#">Uganda</Link> </li>
                                    </ul>
                                </div>
                            </div>
                        </Container>
                        <div className="col-md-3 col-sm-6">
                            <h6>
                                <b> JOIN US ON </b>
                            </h6>
                            <p>
                                <h4><BsFacebook className="icon" /> <BsTwitter className="icon mx-2" /> <BsInstagram className="icon" /> <BsYoutube className="icon mx-2" /></h4>
                            </p>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <h6>
                                <b>PAYMENT METHODS</b>
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