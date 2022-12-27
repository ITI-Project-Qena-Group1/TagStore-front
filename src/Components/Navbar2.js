import React from 'react';
import './Navbar.css';
import {BsSearch, BsPerson, BsBoxSeam, BsHeart, BsQuestionCircle, BsChatLeftDots, BsCart3} from 'react-icons/bs'
import {IoIosArrowDown} from 'react-icons/io';
import {BiMenu} from 'react-icons/bi';
import {GrFormClose} from 'react-icons/gr';
import {Main} from '../Components/Main'

const Navbar = (props) => {
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
        <div className='container d-flex justify-content-between align-items-center'>
        <div className="p-0" style={{position: 'relative'}}>
            <button onClick={()=>{catMenu?showCatMenu(false):showCatMenu(true)}} style={{backgroundColor: 'transparent', borderRadius: '50%', width: '50px', height: '50px', padding: '10px', border: 'none', fontSize: '16px'}}>{catMenu?<GrFormClose/>:<BiMenu/>}</button>
            {catMenu&&<div className='h-100' style={{position: 'absolute', width: '800px', minHeight: "400px"}}>
                <Main />
            </div>}
            <img src={require('../images/logo.png')} style={{width: '140px'}} alt="logo"/>
        </div>
        <div className='d-lg-flex d-none justify-content-between align-items-center'>
            <div className='searchBar d-flex justify-content-between align-items-center'>
                <BsSearch className='mx-1' style={{color: '#aaa'}}/>
                <input type="text" className='searchInput bg-light' name='search' placeholder='Search products, brands and category' />
            </div>
            <div className='d-flex justify-content-between align-items-center text-center'>

                <button className='searchBtn'>SEARCH</button>
            </div>
        </div>
        <div className='d-flex justify-content-center align-items-center' style={{fontSize: "16px", fontWeight: "500"}}>
            <div style={{position: 'relative'}} onClick={()=>openAccountMenu()}>

            <div className='navBarList px-1 mt-3'>
                <p href="" className='d-flex justify-content-between align-items-center'><BsPerson className='mx-1' style={{fontSize: "25px", fontWeight: "700"}} /> Account <IoIosArrowDown className='ms-2'/></p>
            </div>
                {dropMenu===2&&<ul className='dropMenu' style={{position: 'absolute'}}>
                    <li className='d-flex justify-content-center align-items-center'>
                        <button className='generalBtn' style={{width: '100%'}}>SIGN IN</button>
                    </li>
                    <hr/>
                    <li>
                    <BsPerson className='mx-1' style={{fontSize: "20px", fontWeight: "700"}} />My Account
                    </li>
                    <li>
                    <BsBoxSeam className='mx-1' style={{fontSize: "15px", fontWeight: "700"}} />Orders
                    </li>
                    <li>
                    <BsHeart className='mx-1' style={{fontSize: "15px", fontWeight: "700"}} />Saved Items
                    </li>
                </ul>}
            </div>
            <div style={{position: 'relative'}} onClick={()=>openHelpMenu()}>
            <div className='navBarList px-1 mt-3'>
            
                <p href="" className='d-flex justify-content-between align-items-center'><BsQuestionCircle className='mx-1' style={{fontSize: "20px", fontWeight: "700"}} /> Help <IoIosArrowDown className='ms-2'/></p>
            </div>
            {dropMenu===3&&<ul className='dropMenu' style={{position: 'absolute'}}>
                    <li>
                    Help Center
                    </li>
                    <li>
                    Place & track orders
                    </li>
                    <li>
                    Return & Refunds
                    </li>
                    <li>
                    Payment & Tag Account
                    </li>
                    <hr/>
                    <li className='d-flex justify-content-center align-items-center'>
                        <button className='generalBtn' style={{width: '100%'}} onClick={()=>props.setLiveChatDiv(true)}><BsChatLeftDots className='mx-1' style={{fontSize: "15px", fontWeight: "700"}} />LIVE CHAT</button>
                    </li>
                </ul>}
            </div>
            <div className='navBarList px-1'>
            
                <a href="" className='d-flex justify-content-between align-items-center'><BsCart3 className='mx-1' style={{fontSize: "20px", fontWeight: "700"}} /> Cart</a>
            </div>
        </div>
        </div>
        <div className='container d-flex d-lg-none justify-content-center align-items-center'>
            <div className='searchBar w-100 d-flex justify-content-center align-items-center'>
                <BsSearch className='mx-1' style={{color: '#aaa'}}/>
                <input type="text" className='searchInput w-100 bg-light' name='search' placeholder='Search products, brands and category' />
            </div>
            <div className='d-flex justify-content-between align-items-center text-center'>

                <button className='searchBtn'>SEARCH</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar