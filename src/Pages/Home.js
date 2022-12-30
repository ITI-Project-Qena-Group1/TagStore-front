import React from 'react'
import './Home.css';
import { useState } from 'react';
import { Main } from '../Components/Main2';
import { Offers } from '../Components/Offers';
import { TopSelling } from '../Components/TopSelling';
import { IoIosFlash } from 'react-icons/io';
import { OneDayOffer } from '../Components/OneDayOffer';
import Navbar from '../Components/Navbar';
import TopNav from '../Components/TopNav';
import langContext from '../context/LangContext';

export const Home = () => {
  const value = React.useContext(langContext);
  let { selectedLang } = value.state;
  let {
    homePageProductsCarouselTitle1,
    homePageProductsOffersTitle1,
    homePageProductsOffersTime1,
    homePageProductsCarouselSeeAll,
    homePageProductsAdsTitle1,
    homePageProductsCarouselTitle2,
    homePageProductsAdsTitle2,
    homePageProductsAdsTitle3,
    homePageProductsAdsTitle4,
    homPageProductsBrandsTitle1,
    homePageProductsAdsTitle5,
    homePageProductsCarouselTitle3,
    homePageProductsAdsTitle6,
    homePageProductsCarouselTitle4,
    homePageProductsAdsTitle7,
    homePageProductsAdsTitle8,
    homePageDescription,
  } = value.state.lang;

  const [offerCards, setOfferCards] = useState([
    'https://eg.jumia.is/cms/bf-22-live/Thumbnails/Initiatives/new/44.png',
    'https://eg.jumia.is/cms/bf-22-live/Thumbnails/Initiatives/new/33.png',
    'https://eg.jumia.is/cms/bf-22-live/Thumbnails/Initiatives/Jumai_Tower_copy_2.png',
    'https://eg.jumia.is/cms/bf-22-live/Thumbnails/Initiatives/new/11.png',
    'https://eg.jumia.is/cms/bf-22-live/Thumbnails/Initiatives/Jumai-Tower.gif',
    'https://eg.jumia.is/cms/bf-22-live/Thumbnails/Women_s_Fashion___220_220_copy_9-(1).png',
    'https://eg.jumia.is/cms/bf-22-live/Thumbnails/Men_s_Fashion___220_220_copy_10-(1).png',
    'https://eg.jumia.is/cms/bf-22-live/Thumbnails/Supermarket___220_220_copy_6-(1).png',
    'https://eg.jumia.is/cms/bf-22-live/Thumbnails/Beauty_&_Perfumes___220_220_copy_8-(1).png',
    'https://eg.jumia.is/cms/bf-22-live/Thumbnails/Home_&_Appliances___220_220-(1).png'
  ])
  const [productsCards, setProductsCards] = useState([
    {
      img: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/861813/1.jpg?7309",
      title: "NIVEA Pack of 2- Fresh Aloe Shower Gel - Natural Aloe Vera & Fresh Scent - 250ml",
      price: "EGP 205.00",
      oldPrice: "EGP 305.00",
      leftItems: "48"
    },
    {
      img: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/667123/1.jpg?8443",
      title: "L'Oreal Paris Hyaluron Expert 1.5% Hyaluronic Acid Face Serum 30ml + FREE Hyaluron Expert 24H Repluming Moisturizing Tissue Mask",
      price: "EGP 205.00",
      oldPrice: "EGP 305.00",
      leftItems: "47"
    },
    {
      img: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/861813/1.jpg?7309",
      title: "NIVEA Pack of 2- Fresh Aloe Shower Gel - Natural Aloe Vera & Fresh Scent - 250ml",
      price: "EGP 205.00",
      oldPrice: "EGP 305.00",
      leftItems: "48"
    },
    {
      img: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/667123/1.jpg?8443",
      title: "L'Oreal Paris Hyaluron Expert 1.5% Hyaluronic Acid Face Serum 30ml + FREE Hyaluron Expert 24H Repluming Moisturizing Tissue Mask",
      price: "EGP 205.00",
      oldPrice: "EGP 305.00",
      leftItems: "47"
    },
    {
      img: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/861813/1.jpg?7309",
      title: "NIVEA Pack of 2- Fresh Aloe Shower Gel - Natural Aloe Vera & Fresh Scent - 250ml",
      price: "EGP 205.00",
      oldPrice: "EGP 305.00",
      leftItems: "48"
    },
    {
      img: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/667123/1.jpg?8443",
      title: "L'Oreal Paris Hyaluron Expert 1.5% Hyaluronic Acid Face Serum 30ml + FREE Hyaluron Expert 24H Repluming Moisturizing Tissue Mask",
      price: "EGP 205.00",
      oldPrice: "EGP 305.00",
      leftItems: "47"
    },
    {
      img: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/861813/1.jpg?7309",
      title: "NIVEA Pack of 2- Fresh Aloe Shower Gel - Natural Aloe Vera & Fresh Scent - 250ml",
      price: "EGP 205.00",
      oldPrice: "EGP 305.00",
      leftItems: "48"
    },
    {
      img: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/667123/1.jpg?8443",
      title: "L'Oreal Paris Hyaluron Expert 1.5% Hyaluronic Acid Face Serum 30ml + FREE Hyaluron Expert 24H Repluming Moisturizing Tissue Mask",
      price: "EGP 205.00",
      oldPrice: "EGP 305.00",
      leftItems: "47"
    }

  ])
  
  const [titleCo1, setTitle1Co] = useState(['#282828','#fefefe'])
  const [titleBg1, setTitle1Bg] = useState(['#FCE7BB','#E1BEE7'])

  const [liveChatDiv, setLiveChatDiv] = useState(false);
  const [showBtn, setShowBtn] = useState(true);
  const [paraHeight, setParaHeight] = useState('400px')

  function showMore() {
    setParaHeight('100%');
    setShowBtn(false);
  }

  function showLess() {
    setParaHeight('400px');
    setShowBtn(true);
  }

  return (
    <>
      <TopNav setLiveChatDiv={setLiveChatDiv} />
      <Navbar />
      <Main />
      <Offers offersCardsArr={offerCards} />
      <TopSelling id={'cardContainer1'} title={<h4 className="d-flex justify-content-between px-2 py-1 align-items-center" {...(selectedLang=='en' ? {dir: 'ltr'} : {dir: 'rtl'})}>{homePageProductsCarouselTitle1}</h4>} titleBg={'inherit'} productsCard1={productsCards} />
      <h4 className='text-center text-light'>{homePageProductsAdsTitle3}</h4>
      <div className='container p-2 bg-light rounded'>
        <img className='w-100 rounded' src="https://eg.jumia.is/cms/bf-22-live-2/1152x252_-EN_copy_6-(1).png" alt="" />
      </div>
      <TopSelling id={'cardContainer2'} title={<div className='d-flex justify-content-between text-light px-2 py-1 rounded-top align-items-center' style={{ backgroundColor: '#e61601' }}>
        <h4><IoIosFlash className='text-warning' /> {homePageProductsOffersTitle1}</h4>
        <h5>Time Left: <span className="fs-bold">{homePageProductsOffersTime1}</span></h5>
        <h6>
          <a href='#' className='text-decoration-none text-light'>{homePageProductsCarouselSeeAll}</a>
        </h6>
      </div>} titleBg={'inherit'} productsCard1={productsCards} />

      <h4 className='text-center mt-2 text-light'>{homePageProductsAdsTitle1}</h4>
      <div className='container bg-light rounded my-2'>
        <div className='row'>
          <div className='col-12 d-flex justify-content-even flex-wrap p-0'>
            <img className='col-6' style={{ padding: '5px 2.5px 5px 5px' }} src="https://eg.jumia.is/cms/bf-22-live-2/OPT-24/UG/edit/P/UG-(2).png" alt="" />
            <img className='col-6' style={{ padding: '5px 5px 5px 2.5px' }} src="https://eg.jumia.is/cms/bf-22-live-2/OPT-17/Sokany/Blue/Sokany____-_Floor-Desktop_-EN_-(1).png" alt="" />
            {/* <img className='col-12 d-md-none' style={{padding: '5px 5px 2.5px 5px'}} src="https://eg.jumia.is/cms/bf-22-live-2/OPT-24/UG/edit/P/UG-(2).png" alt="" />
          <img  className='col-12 d-md-none' style={{padding: '2.5px 5px 5px 5px'}} src="https://eg.jumia.is/cms/bf-22-live-2/OPT-17/Sokany/Blue/Sokany____-_Floor-Desktop_-EN_-(1).png" alt="" /> */}
          </div>
        </div>
      </div>

      <div className='container bg-light rounded my-2'>
        <div className='row'>
          <div className='col-12 d-flex justify-content-center flex-wrap p-0'>
            <img className='col-6' style={{ padding: '5px 2.5px 5px 5px' }} src="https://eg.jumia.is/cms/bf-22-live/-Deals/supermarket/Maxtella/Maxtella------Floor-Desktop--EN_.jpg" alt="" />
            <img className='col-6' style={{ padding: '5px 5px 5px 2.5px' }} src="https://eg.jumia.is/cms/bf-22-live-2/OPT-24/Nivea/P/Maybelline---Floor-Desktop--EN_.jpg" alt="" />
            {/* <img className='col-12 d-md-none' style={{padding: '5px 5px 2.5px 5px'}} src="https://eg.jumia.is/cms/bf-22-live/-Deals/supermarket/Maxtella/Maxtella------Floor-Desktop--EN_.jpg" alt="" />
          <img className='col-12 d-md-none' style={{padding: '2.5px 5px 5px 5px'}} src="https://eg.jumia.is/cms/bf-22-live-2/OPT-24/Nivea/P/Maybelline---Floor-Desktop--EN_.jpg" alt="" /> */}
          </div>
        </div>
      </div>

      <h4 className='text-center mt-4 text-light'>{homePageProductsAdsTitle3}</h4>
      <div class="container bg-light rounded">
        <div class="row">
          <div className="col-md-12 d-flex flex-wrap justify-content-center">
            {offerCards.map((card, index) => {
              return (
                <img className='p-2' width="150px" src={card} alt="" />
              )
            })}
          </div>

        </div>
      </div>

      <h4 className='text-center mt-4 text-light'>{homePageProductsAdsTitle4}</h4>
      <OneDayOffer />

      <h4 className='text-center mt-4 text-light'>{homPageProductsBrandsTitle1}</h4>
      <div className="container d-flex flex-wrap justify-content-center p-1 bg-light rounded">
        <img className='p-1 brand bg-light rounded shadow' style={{ width: '158px' }} src="https://eg.jumia.is/cms/icons-21/10-10-Icons/Kady.png" alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{ width: '158px' }} src="https://eg.jumia.is/cms/icons-21/10-10-Icons/Andora.png" alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{ width: '158px' }} src="https://eg.jumia.is/cms/icons-21/10-10-Icons/Defacto_260_x_144_.png" alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{ width: '158px' }} src="https://eg.jumia.is/cms/bf-22-live/sponsors/260_x_144_copy_2.png" alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{ width: '158px' }} src="https://eg.jumia.is/cms/icons-21/10-10-Icons/AEO_Egypt_260_x_144_.png" alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{ width: '158px' }} src="https://eg.jumia.is/cms/bf-22-live/sponsors/260_x_144.png" alt="" />
      </div>

      <h4 className='text-center mt-4 text-light'>{homePageProductsAdsTitle5}</h4>
      <div className="container d-flex justify-content-center p-1 rounded-bottom bg-light">
        <img className='p-1 brand bg-light shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UNs-Triple/TB_-_0__Installments_copy_51-2.png" alt="" />
        <img className='p-1 brand bg-light shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Kids-Winter-Outfits/Kids_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Baby%E2%80%99s-Winter-Outfits/new/Baby_s_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
      </div>

      <TopSelling id={'cardContainer1'} title={<h4 className='d-flex justify-content-between px-2 py-1 align-items-center'>Top Selling</h4>} titleBg={'inherit'} productsCard1={productsCards} />

      <h4 className='text-center mt-4 text-light'>{homePageProductsAdsTitle6}</h4>
      <div className="container d-flex justify-content-center p-1 rounded-bottom bg-light">
        <img className='p-1 brand bg-light shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UNs-Triple/TB_-_0__Installments_copy_51-2.png" alt="" />
        <img className='p-1 brand bg-light shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Kids-Winter-Outfits/Kids_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Baby%E2%80%99s-Winter-Outfits/new/Baby_s_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
      </div>

      <TopSelling id={'cardContainer1'} title={<h4 className='d-flex justify-content-between px-2 py-1 align-items-center'>Top Selling</h4>} titleBg={'inherit'} productsCard1={productsCards} />

      <h4 className='text-center mt-4 text-light'>{homePageProductsAdsTitle7}</h4>
      <div className="container d-flex justify-content-center p-1 rounded-bottom bg-light">
        <img className='p-1 brand bg-light shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UNs-Triple/TB_-_0__Installments_copy_51-2.png" alt="" />
        <img className='p-1 brand bg-light shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Kids-Winter-Outfits/Kids_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Baby%E2%80%99s-Winter-Outfits/new/Baby_s_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
      </div>

      <TopSelling id={'cardContainer1'} title={<h4 className='d-flex justify-content-between px-2 py-1 align-items-center'>Top Selling</h4>} titleBg={'inherit'} productsCard1={productsCards} />

      <h4 className='text-center mt-4 text-light'>{homePageProductsAdsTitle8}</h4>
      <div className="container d-flex justify-content-center p-1 rounded-bottom bg-light">
        <img className='p-1 brand bg-light shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UNs-Triple/TB_-_0__Installments_copy_51-2.png" alt="" />
        <img className='p-1 brand bg-light shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Kids-Winter-Outfits/Kids_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Baby%E2%80%99s-Winter-Outfits/new/Baby_s_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
      </div>

      <TopSelling id={'cardContainer1'} title={<h4 className='d-flex justify-content-between px-2 py-1 align-items-center'>Top Selling</h4>} titleBg={'inherit'} productsCard1={productsCards} />

      <h4 className='text-center mt-4 text-light'>{homePageProductsAdsTitle8}</h4>
      <div className="container d-flex justify-content-center p-1 rounded-bottom bg-light">
        <img className='p-1 brand bg-light shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UNs-Triple/TB_-_0__Installments_copy_51-2.png" alt="" />
        <img className='p-1 brand bg-light shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Kids-Winter-Outfits/Kids_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Baby%E2%80%99s-Winter-Outfits/new/Baby_s_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
      </div>

      <TopSelling id={'cardContainer1'} title={<h4 className='d-flex justify-content-between px-2 py-1 align-items-center'>Top Selling</h4>} titleBg={'inherit'} productsCard1={productsCards} />

      <div className='container bg-light rounded mb-5'>
        <div className="container d-block d-md-none bg-light p-2 para" style={{ height: paraHeight, overflowY: 'hidden' }}>
        <div dangerouslySetInnerHTML={{ __html:homePageDescription}} />
        </div>
        <div className="container d-none d-md-block bg-light p-2 para">
        <div dangerouslySetInnerHTML={{ __html:homePageDescription}} />
        </div>
        {showBtn ? <h6 className='d-md-none text-center mt-1' style={{ cursor: 'pointer' }} onClick={() => showMore()}>show more</h6> :
          <h6 className='d-md-none text-center mt-2' style={{ cursor: 'pointer' }} onClick={() => showLess()}>show Less</h6>}
        {liveChatDiv && <div style={{ width: '40%', height: '80%', position: 'fixed', bottom: '0', right: '8%', zIndex: '1000', backgroundColor: '#fff' }}>
          live chat div
        </div>}
      </div>
    </>
  )
}
