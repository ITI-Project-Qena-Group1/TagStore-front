import React from 'react';
import { RiPriceTagFill } from 'react-icons/ri';
import langContext from '../context/LangContext';
import { Link } from 'react-router-dom';

const TopNav = () => {
    const value = React.useContext(langContext)
    let { selectedLang } = value.state;
    let {topNavSellerLink} = value.state.lang
    function chooseArLang() {
        value.setSelectedLang("ar");
    }
    function chooseEnLang() {
        value.setSelectedLang("en");
    }
    return (
        <div style={{ fontSize: '12px' }} {...(selectedLang=='en'? {dir: 'ltr'}:{dir:'rtl'})}>
            <div>
                <img src="https://eg.jumia.is/cms/Dec-22/Sticky-Banner/Flash-Sale/NEW/EN_-_1170x60_.png" style={{ width: '100%', backgroundColor: '#f68b1e' }} alt="" />
            </div>
            <div className='container d-flex justify-content-between'>
                <div className='d-flex justify-content-center align-items-center'>
                    <a className='d-flex justify-content-center align-items-center' style={{ color: "#f68b1e" }} href="http://localhost:3001/"><RiPriceTagFill className={selectedLang=='en'?'me-2':'ms-2'} /><span className="sellerSite">{topNavSellerLink}</span></a>
                </div>
                
                <div>
                    <button style={{ backgroundColor: 'transparent', border: '0' }} onClick={()=>chooseEnLang()} {...(selectedLang=="en"? {disabled:true} : {disabled:false})}>
                    <svg className={selectedLang=='en'?'me-2':'ms-2'} opacity={selectedLang=='en'?'0.3':'1'} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"><mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="m0 0 8 22-8 23v23l32 54-32 54v32l32 48-32 48v32l32 54-32 54v68l22-8 23 8h23l54-32 54 32h32l48-32 48 32h32l54-32 54 32h68l-8-22 8-23v-23l-32-54 32-54v-32l-32-48 32-48v-32l-32-54 32-54V0l-22 8-23-8h-23l-54 32-54-32h-32l-48 32-48-32h-32l-54 32L68 0H0z"/><path fill="#0052b4" d="M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z"/><path fill="#d80027" d="M0 0v45l131 131h45L0 0zm208 0v208H0v96h208v208h96V304h208v-96H304V0h-96zm259 0L336 131v45L512 0h-45zM176 336 0 512h45l131-131v-45zm160 0 176 176v-45L381 336h-45z"/></g></svg>
                        English
                    </button>
                    |
                    <button style={{ backgroundColor: 'transparent', border: '0' }} onClick={()=>chooseArLang()} {...(selectedLang=="ar"? {disabled:true} : {disabled:false})}>
                    <svg className={selectedLang=='en'?'me-2':'ms-2'} opacity={selectedLang=='ar'?'0.3':'1'} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"><mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="m0 144 256-32 256 32v224l-256 32L0 368Z"/><path fill="#d80027" d="M0 0h512v144H0Z"/><path fill="#333" d="M0 368h512v144H0Z"/><path fill="#ff9811" d="M250 191c-8 0-17 4-22 14 5-3 16-1 16 13 0 4-2 8-5 10-8 0-14-14-29-14-10 0-19 7-19 17v69l46-7-14 27h66l-14-27 46 7v-69c0-10-9-17-19-17-15 0-21 14-29 14 8-23-7-37-23-37z"/></g></svg>
                        عربي
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TopNav