import React from 'react';
import { RiPriceTagFill } from 'react-icons/ri';
import langContext from '../context/LangContext';

const TopNav = () => {
    const value = React.useContext(langContext)
    let { selectedLang } = value.state;

    function chooseArLang() {
        value.setSelectedLang("ar");
    }
    function chooseEnLang() {
        value.setSelectedLang("en");
    }
    return (
        <div style={{ fontSize: '12px' }}>
            <div>
                <img src="https://eg.jumia.is/cms/Dec-22/Sticky-Banner/Flash-Sale/NEW/EN_-_1170x60_.png" style={{ width: '100%', backgroundColor: '#f68b1e' }} alt="" />
            </div>
            <div className='container d-flex justify-content-between'>
                <div className='d-flex justify-content-center align-items-center'>
                    <a className='d-flex justify-content-center align-items-center' style={{ color: "#f68b1e" }} href="/"><RiPriceTagFill className='me-2' /><span className="sellerSite">Sell on Tag</span></a>
                </div>
                <div>
                    {/* <svg viewBox="0 0 60 24" class="ic" width="60" height="24"><use xlink:href="https://www.jumia.com.eg/assets_he/images/i-global.cd8c5f0c.svg#venture-pay"></use></svg>
            <svg viewBox="0 0 108 24" class="ic" width="108" height="24"><use xlink:href="https://www.jumia.com.eg/assets_he/images/i-global.cd8c5f0c.svg#venture-logistics"></use></svg> */}
                </div>
                <div>
                    <button style={{ backgroundColor: 'transparent', border: '0' }} onClick={()=>chooseEnLang()}>
                        {/* <svg viewBox="0 0 24 24" class="ic -mrs" width="16" height="16"><use xlink:href="https://www.jumia.com.eg/assets_he/images/i-global.cd8c5f0c.svg#flag-en"></use></svg> */}
                        English
                    </button>
                    |
                    <button style={{ backgroundColor: 'transparent', border: '0' }} onClick={()=>chooseArLang()}>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="m0 144 256-32 256 32v224l-256 32L0 368Z"/><path fill="#d80027" d="M0 0h512v144H0Z"/><path fill="#333" d="M0 368h512v144H0Z"/><path fill="#ff9811" d="M250 191c-8 0-17 4-22 14 5-3 16-1 16 13 0 4-2 8-5 10-8 0-14-14-29-14-10 0-19 7-19 17v69l46-7-14 27h66l-14-27 46 7v-69c0-10-9-17-19-17-15 0-21 14-29 14 8-23-7-37-23-37z"/></g></svg> */}
                        عربي
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TopNav