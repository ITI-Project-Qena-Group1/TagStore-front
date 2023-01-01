import React from 'react';
import './Navbar.css';
import {BsSearch, BsPerson, BsBoxSeam, BsHeart, BsQuestionCircle, BsChatLeftDots, BsCart3} from 'react-icons/bs'
import {IoIosArrowDown} from 'react-icons/io';
import {BiMenu} from 'react-icons/bi';
import {GrFormClose} from 'react-icons/gr';
import {Main} from '../Components/Main';
import {Link} from 'react-router-dom';
import langContext from '../context/LangContext';

const Navbar = (props) => {
    const value = React.useContext(langContext);
    let { selectedLang } = value.state;
    let {
        NavbarSearchPlaceholder,
        NavbarSearchButton,
        NavbarLink1,
        NavbarSubLink1,
        NavbarSubLink2,
        NavbarSubLink3,
        NavbarSubLink4,
        NavbarLink2,
        NavbarSubLink5,
        NavbarSubLink6,
        NavbarSubLink7,
        NavbarSubLink8,
        NavbarSubLink9,
        NavbarSubLink10,
        NavbarLink3,
    } = value.state.lang;
    const [dropMenu, setDropMenu] = React.useState(1);
    function openAccountMenu(){
        dropMenu!==2?setDropMenu(2):setDropMenu(1);
    }
    function openHelpMenu(){
        dropMenu!==3?setDropMenu(3):setDropMenu(1);
    }
    const [catMenu, showCatMenu] = React.useState(false);
  return (
    <div className='sticky-top bg-light py-2'>
        <div className='container d-flex justify-content-between align-items-center' {...(selectedLang=='en'? {dir: 'ltr'}:{dir:'rtl'})}>
        <div className="p-0" style={{position: 'relative'}}>
            <button onClick={()=>{catMenu?showCatMenu(false):showCatMenu(true)}} style={{backgroundColor: 'transparent', borderRadius: '50%', width: '50px', height: '50px', padding: '10px', border: 'none', fontSize: '16px'}}>{catMenu?<GrFormClose/>:<BiMenu/>}</button>
            {catMenu&&<div className='h-100' style={{position: 'absolute', width: '800px', minHeight: "400px"}}>
                <Main />
            </div>}
            <img src={require('../images/logo.png')} style={{width: '140px'}} alt="logo" />
        </div>
        <div className='d-lg-flex d-none justify-content-between align-items-center' {...(selectedLang=='en'? {dir: 'ltr'}:{dir:'rtl'})}>
            <div className='searchBar d-flex justify-content-between align-items-center'>
                <BsSearch className='mx-1' style={{color: '#aaa'}}/>
                <input type="text" className='searchInput bg-light' name='search' placeholder={NavbarSearchPlaceholder} />
            </div>
            <div className={`d-flex justify-content-between align-items-center text-center ${selectedLang=='ar' && 'me-2'}`}>

                <button className='searchBtn'>{NavbarSearchButton}</button>
            </div>
        </div>
        <div className='d-flex justify-content-center align-items-center' style={{fontSize: "16px", fontWeight: "500"}} {...(selectedLang=='en'? {dir: 'ltr'}:{dir:'rtl'})}>
            <div style={{position: 'relative'}} onClick={()=>openAccountMenu()}>

            <div className='navBarList px-1 mt-3'>
                <p href="" className='d-flex justify-content-between align-items-center'><BsPerson className='mx-1' style={{fontSize: "25px", fontWeight: "700"}} /> {NavbarLink1} <IoIosArrowDown  className={selectedLang=='en'? 'ms-2' : 'me-2'}/></p>
            </div>
                {dropMenu===2&&<ul className='dropMenu' style={{position: 'absolute'}}>
                    <li className='d-flex justify-content-center align-items-center'>
                        <button className='generalBtn' style={{width: '100%'}}>{NavbarSubLink1}</button>
                    </li>
                    <hr/>
                    <li>
                    <BsPerson className='mx-1' style={{fontSize: "20px", fontWeight: "700"}} />{NavbarSubLink2}
                    </li>
                    <li>
                    <BsBoxSeam className='mx-1' style={{fontSize: "15px", fontWeight: "700"}} />{NavbarSubLink3}
                    </li>
                    <li>
                    <BsHeart className='mx-1' style={{fontSize: "15px", fontWeight: "700"}} />{NavbarSubLink4}
                    </li>
                </ul>}
            </div>
            <div style={{position: 'relative'}} onClick={()=>openHelpMenu()}>
            <div className='navBarList px-1 mt-3'>
            
                <p href="" className='d-flex justify-content-between align-items-center'><BsQuestionCircle className='mx-1' style={{fontSize: "20px", fontWeight: "700"}} /> {NavbarLink2} <IoIosArrowDown className='ms-2'/></p>
            </div>
            {dropMenu===3&&<ul className='dropMenu' style={{position: 'absolute'}}>
                    <li>
                    {NavbarSubLink5}
                    </li>
                    <li>
                    {NavbarSubLink6}
                    </li>
                    <li>
                    {NavbarSubLink7}
                    </li>
                    <li>
                    {NavbarSubLink8}
                    </li>
                    <hr/>
                    <li className='d-flex justify-content-center align-items-center'>
                        <button className='generalBtn' style={{width: '100%'}} onClick={()=>props.setLiveChatDiv(true)}><BsChatLeftDots className='mx-1' style={{fontSize: "15px", fontWeight: "700"}} />{NavbarSubLink10}</button>
                    </li>
                </ul>}
            </div>
            <div className='navBarList px-1'>
            
                <Link to="/cart" className='d-flex justify-content-between align-items-center'><BsCart3 className='mx-1' style={{fontSize: "20px", fontWeight: "700"}} /> {NavbarLink3}</Link>
            </div>
        </div>
        </div>
        <div className='container d-flex d-lg-none justify-content-center align-items-center'>
            <div className='searchBar w-100 d-flex justify-content-center align-items-center'>
                <BsSearch className='mx-1' style={{color: '#aaa'}}/>
                <input type="text" className='searchInput w-100 bg-light' name='search' placeholder= {...(selectedLang=='en'? {dir: 'ltr'}:{dir:'rtl'})} />
            </div>
            <div className='d-flex justify-content-between align-items-center text-center'>

                <button className='searchBtn'>{NavbarSearchPlaceholder}</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar