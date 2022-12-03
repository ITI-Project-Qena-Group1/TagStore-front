import React, { useState } from 'react'
import './Offers.css';
// import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi';

export const Offers = (props) => {
    // const [offerCards, setOfferCards] = useState([
    //     'https://eg.jumia.is/cms/bf-22-live/Thumbnails/Initiatives/new/44.png',
    //     'https://eg.jumia.is/cms/bf-22-live/Thumbnails/Initiatives/new/33.png',
    //     'https://eg.jumia.is/cms/bf-22-live/Thumbnails/Initiatives/Jumai_Tower_copy_2.png',
    //     'https://eg.jumia.is/cms/bf-22-live/Thumbnails/Initiatives/new/11.png',
    //     'https://eg.jumia.is/cms/bf-22-live/Thumbnails/Initiatives/Jumai-Tower.gif',
    //     'https://eg.jumia.is/cms/bf-22-live/Thumbnails/Women_s_Fashion___220_220_copy_9-(1).png',
    //     'https://eg.jumia.is/cms/bf-22-live/Thumbnails/Men_s_Fashion___220_220_copy_10-(1).png',
    //     'https://eg.jumia.is/cms/bf-22-live/Thumbnails/Supermarket___220_220_copy_6-(1).png',
    //     'https://eg.jumia.is/cms/bf-22-live/Thumbnails/Beauty_&_Perfumes___220_220_copy_8-(1).png',
    //     'https://eg.jumia.is/cms/bf-22-live/Thumbnails/Home_&_Appliances___220_220-(1).png'
    // ])
   

    function slideRight() {
      document.getElementById('container').scrollLeft += 150;
    };
    function slideLeft() {
      document.getElementById('container').scrollLeft -= 150;
    };

  return (
    <div className='bg-black'>
        <div className='container p-2 bg-black my-2 rounded'>
            <div className='row rounded p-0'>
            <div className='d-none col-12 p-0 d-md-flex flex-nowrap bg-light rounded'>
                <button className='btn btn-block bg-light rounded-left fs-3 bg-opacity-10 cBtn' style={{width: 'fit-content'}} onClick={() => slideLeft()}><TfiArrowCircleLeft/></button>
                <div className='d-flex overflow-hidden flex-nowrap bg-light rounded' id='container' style={{scrollBehavior: 'smooth'}}>
                    {props.offersCardsArr.map((card, index) => {
                        return(<img src={card} key={index} className="m-1" style={{maxWidth: "150px"}} alt="" />)
                    })}
                </div>
                <button className='btn btn-block bg-light rounded-right fs-3 bg-opacity-10 cBtn' style={{width: 'fit-content'}} onClick={() => slideRight()}><TfiArrowCircleRight/></button>
            </div>
            <div className='col-12 p-0 d-flex d-md-none flex-nowrap bg-light rounded'>
                <div className='d-flex flex-nowrap bg-light rounded' id='container' style={{scrollBehavior: 'smooth', overflowX: 'scroll'}}>
                    {props.offersCardsArr.map((card, index) => {
                        return(<img src={card} key={index} className="m-1" style={{maxWidth: "150px"}} alt="" />)
                    })}
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
