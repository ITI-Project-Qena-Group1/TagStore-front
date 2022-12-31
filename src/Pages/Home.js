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

  const [cardsSection, setCardsSection] = useState({
    en: [
      "https://eg.jumia.is/cms/Dec-22/Thumbnails/NEW/_220_220_copy.png",
      "https://eg.jumia.is/cms/Dec-22/Thumbnails/___220_220_copy_4.png",
      "https://eg.jumia.is/cms/Dec-22/Thumbnails/update/___220_220_copy_5-(1).png",
      "https://eg.jumia.is/cms/Dec-22/Thumbnails/Clearance/C2.png",
      "https://eg.jumia.is/cms/Dec-22/Thumbnails/update/____220_220_copy_6-(2).png",
      "https://eg.jumia.is/cms/Dec-22/UNs/Supermarket-2/_220_220_copy.png",
      "https://eg.jumia.is/cms/Dec-22/Thumbnails/Phones/P1.png",
      "https://eg.jumia.is/cms/Dec-22/Thumbnails/update/JPAy_AR.png",
      "https://eg.jumia.is/cms/Dec-22/Thumbnails/update/Orange_Points_EN.png",
      "https://eg.jumia.is/cms/Dec-22/Thumbnails/update/Global_EN_copy.png",
      
    ],

    ar: [
      "https://eg.jumia.is/cms/Dec-22/Thumbnails/NEW/_220_220_copy_2.png",
      "https://eg.jumia.is/cms/Dec-22/Thumbnails/___220_220_copy_6.png",
      "https://eg.jumia.is/cms/Dec-22/Thumbnails/____220_220_copy_6.png",
      "https://eg.jumia.is/cms/Dec-22/Thumbnails/Clearance/C1.png",
      "https://eg.jumia.is/cms/Dec-22/Thumbnails/update/___220_220_copy_5-(2).png",
      "https://eg.jumia.is/cms/Dec-22/UNs/Supermarket-2/_220_220_copy_2.png",
      "https://eg.jumia.is/cms/Dec-22/UNs/Phones/P2.png",
      "https://eg.jumia.is/cms/Dec-22/Thumbnails/update/JPAy_AR.png",
      "https://eg.jumia.is/cms/Dec-22/Thumbnails/update/Orange_Points.png",
      "https://eg.jumia.is/cms/Dec-22/Thumbnails/update/Global_EN_copy.png",
    ]
  })

  const [amazingDeals, setAmazingDeals] = useState({
    en: [
      "https://eg.jumia.is/cms/Dec-22/Opt-18-dec/LC/asfv.png",
      "https://eg.jumia.is/cms/Dec-22/Opt-11-dec/Clearance-Groceries/WEFSS.jpg",
      "https://eg.jumia.is/cms/Dec-22/New-Deals/Beauty/Clearance2.png",
      "https://eg.jumia.is/cms/Dec-22/Opt-11-dec/Phones-Accessories/Phones1.jpg",
    ],
    ar: [
      "https://eg.jumia.is/cms/Dec-22/Opt-18-dec/LC/fgy.png",
      "https://eg.jumia.is/cms/Dec-22/Opt-11-dec/Clearance-Groceries/WERG.jpg",
      "https://eg.jumia.is/cms/Dec-22/New-Deals/Beauty/Clearance9.png",
      "https://eg.jumia.is/cms/Dec-22/Opt-11-dec/Phones-Accessories/Phones3.jpg",
    ]
  })

  const [everydayOffers, setEveryDayOffers] = useState({
    en: [
      "https://eg.jumia.is/cms/Dec-22/Free-links/EN/Women_s_Fashion_300_x_300-EN_copy_13.png",
      "https://eg.jumia.is/cms/Dec-22/Free-links/EN/Men_s_Fashion___300_x_300-EN_copy_14.png",
      "https://eg.jumia.is/cms/Dec-22/Free-links/EN/Supermarket______300_x_300-EN_copy_10.png",
      "https://eg.jumia.is/cms/Dec-22/Free-links/EN/Beauty_&_Perfumes_______300_x_300-EN_copy_11.png",
      "https://eg.jumia.is/cms/Dec-22/Free-links/EN/Phones_&_Accessories__300_x_300-EN.png",
      "https://eg.jumia.is/cms/Dec-22/Free-links/EN/Home_&_Appliances____300_x_300-EN_copy_9.png",
      "https://eg.jumia.is/cms/Dec-22/Free-links/EN/Computing__300_x_300-EN_copy_8.png",
      "https://eg.jumia.is/cms/Dec-22/Free-links/EN/Televisions_&_Electronics___300_x_300-EN_copy_6.png",
      "https://eg.jumia.is/cms/Dec-22/Free-links/EN/Gaming_&_PlayStation____300_x_300-EN_copy_4.png",
      "https://eg.jumia.is/cms/Dec-22/Free-links/EN/Kids_&_Baby___300_x_300-EN_copy.png",
      "https://eg.jumia.is/cms/Dec-22/Free-links/EN/Sports__300_x_300-EN_copy_2.png",
      "https://eg.jumia.is/cms/Dec-22/Free-links/EN/Automotive___300_x_300-EN_copy_3.png"

    ],
    ar: [
      "https://eg.jumia.is/cms/Dec-22/Free-links/AR/Women_s_Fashion_300_x_300-AR__copy_10.png",
      "https://eg.jumia.is/cms/Dec-22/Free-links/AR/Men_s_Fashion__300_x_300-AR__copy_11.png",
      "https://eg.jumia.is/cms/Dec-22/Free-links/AR/Supermarket__300_x_300-AR__copy_8.png",
      "https://eg.jumia.is/cms/Dec-22/Free-links/AR/Beauty_&_Perfumes__300_x_300-AR__copy_9.png",
      "https://eg.jumia.is/cms/Dec-22/Free-links/AR/Phones_&_Accessories_300_x_300-AR_.png",
      "https://eg.jumia.is/cms/Dec-22/Free-links/AR/Home_&_Appliances___300_x_300-AR__copy_7.png",
      "https://eg.jumia.is/cms/Dec-22/Free-links/AR/Computing___300_x_300-AR__copy_6.png",
      "https://eg.jumia.is/cms/Dec-22/Free-links/AR/Televisions_&_Electronics___300_x_300-AR__copy_5.png",
      "https://eg.jumia.is/cms/Dec-22/Free-links/AR/Gaming_&_PlayStation___300_x_300-AR__copy_4.png",
      "https://eg.jumia.is/cms/Dec-22/Free-links/AR/Kids_&_Baby___300_x_300-AR__copy.png",
      "https://eg.jumia.is/cms/Dec-22/Free-links/AR/Sports__300_x_300-AR__copy_2.png",
      "https://eg.jumia.is/cms/Dec-22/Free-links/AR/Automotive__300_x_300-AR__copy_3.png",
    ]
  })

  const [dailySurprises, setDailySurprises] = useState({
    en: [
      "https://eg.jumia.is/cms/Dec-22/1-DAY-OFFER/Dec-29th-Weekend/General2.jpg",
      "https://eg.jumia.is/cms/Dec-22/Pay-App/Utilities/U3.jpg",
    ],
    ar: [
      "https://eg.jumia.is/cms/Dec-22/1-DAY-OFFER/Dec-29th-Weekend/General1.jpg",
      "https://eg.jumia.is/cms/Dec-22/Pay-App/Utilities/U4.jpg",      
    ]
  })

  const [topBrands, setTopBrands] = useState({
    en: [
      "https://eg.jumia.is/cms/bf-22-live/sponsors/260_x_144.png",
      "https://eg.jumia.is/cms/icons-21/10-10-Icons/AEO_Egypt_260_x_144__copy.png",
      "https://eg.jumia.is/cms/bf-22-live/sponsors/260_x_144_copy_2.png",
      "https://eg.jumia.is/cms/icons-21/10-10-Icons/Defacto_260_x_144_.png",
      "https://eg.jumia.is/cms/icons-21/10-10-Icons/Andora.png",
      "https://eg.jumia.is/cms/icons-21/10-10-Icons/Kady.png",
    ],
    ar: [
      "https://eg.jumia.is/cms/bf-22-live/sponsors/260_x_144.png",
      "https://eg.jumia.is/cms/icons-21/10-10-Icons/AEO_Egypt_260_x_144_.png",
      "https://eg.jumia.is/cms/bf-22-live/sponsors/260_x_144_copy_2.png",
      "https://eg.jumia.is/cms/icons-21/10-10-Icons/Defacto_260_x_144_.png",
      "https://eg.jumia.is/cms/icons-21/10-10-Icons/Andora.png",
      "https://eg.jumia.is/cms/icons-21/10-10-Icons/Kady.png",
    ]
  })

  const [clearanceDeal, setClearenceDeal] = useState({
    en: [
      "https://eg.jumia.is/cms/Dec-22/UNs-Triple/TB_-_0__Installments_copy_50-2.png",
      "https://eg.jumia.is/cms/Dec-22/Opt-11-dec/Kitchen-Appliance/ESFDF.png",
      "https://eg.jumia.is/cms/Dec-22/Opt-18-dec/Deodorants/rtuo.png",
    ],
    ar: [
      "https://eg.jumia.is/cms/Dec-22/UNs-Triple/TB_-_0__Installments_copy_50-3.png",
      "https://eg.jumia.is/cms/Dec-22/Opt-11-dec/Kitchen-Appliance/FYJHU.png",
      "https://eg.jumia.is/cms/Dec-22/Opt-18-dec/Deodorants/estc.png",
    ]
  })

  const [supermarketDeal, setSupermarketDeal] = useState({
    en: [
      "https://eg.jumia.is/cms/Dec-22/UNs/Supermarket-2/4SU.png",
      "https://eg.jumia.is/cms/Dec-22/Opt-18-dec/Hot-Beverage/new/sertc.png",
      "https://eg.jumia.is/cms/Dec-22/New-Deals/Rice&Pasta-New/Rice12.png",      
    ],
    ar: [
      "https://eg.jumia.is/cms/Dec-22/UNs/Supermarket-2/1SU.png",
      "https://eg.jumia.is/cms/Dec-22/Opt-18-dec/Hot-Beverage/zcj.png",
      "https://eg.jumia.is/cms/Dec-22/New-Deals/Rice&Pasta-New/Rice11.png",      
    ]
  })

  const [winterDeal, setWinterDeal] = useState({
    en: [
      "https://eg.jumia.is/cms/Dec-22/UNs-Triple/TB_-_0__Installments_copy_51-2.png",
      "https://eg.jumia.is/cms/Dec-22/Opt-25-dec/Mesery/M12.png",
      "https://eg.jumia.is/cms/Dec-22/Opt-11-dec/Defacto/40/Defacto12.png",
    ],
    ar: [
      "https://eg.jumia.is/cms/Dec-22/UNs-Triple/TB_-_0__Installments_copy_51-3.png",
      "https://eg.jumia.is/cms/Dec-22/Opt-25-dec/Mesery/M8.png",
      "https://eg.jumia.is/cms/Dec-22/Opt-11-dec/Defacto/40/Defacto11.png",
    ]
  })

  const [phoneDeal, setPhoneDeal] = useState({
    en: [
      "https://eg.jumia.is/cms/Dec-22/Thumbnails/Phones/PH2.png",
      "https://eg.jumia.is/cms/Dec-22/UN-Deals/-Phones-Electronic/TV/xcvb.png",
      "https://eg.jumia.is/cms/Dec-22/Opt-11-dec/Computing-Accessories/C1.png",
    ],
    ar: [
      "https://eg.jumia.is/cms/Dec-22/Thumbnails/Phones/PH3.png",
      "https://eg.jumia.is/cms/Dec-22/UN-Deals/-Phones-Electronic/TV/erdf.png",
      "https://eg.jumia.is/cms/Dec-22/Opt-11-dec/Computing-Accessories/C2.png",      
    ]
  })
  
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
      <Offers offersCardsArr={selectedLang=='en' ? cardsSection.en : cardsSection.ar} />
      <TopSelling id={'cardContainer1'} title={<h4 className="d-flex justify-content-between px-2 py-1 align-items-center" {...(selectedLang=='en' ? {dir: 'ltr'} : {dir: 'rtl'})}>{homePageProductsCarouselTitle1}</h4>} titleBg={'inherit'} productsCard1={productsCards} />
      {/* <h4 className='text-center text-light'>{homePageProductsAdsTitle3}</h4>
      <div className='container p-2 bg-light rounded'>
        <img className='w-100 rounded' src="https://eg.jumia.is/cms/bf-22-live-2/1152x252_-EN_copy_6-(1).png" alt="" />
      </div> */}
      <TopSelling id={'cardContainer2'} title={<div className='d-flex justify-content-between text-light px-2 py-1 rounded-top align-items-center' style={{ backgroundColor: '#e61601' }} {...(selectedLang=='en' ? {dir: 'ltr'} : {dir: 'rtl'})}>
        <h4><IoIosFlash className='text-warning' /> {homePageProductsOffersTitle1}</h4>
        <h5><span className="fs-bold">{homePageProductsOffersTime1}</span></h5>
        <h6>
          <a href='#' className='text-decoration-none text-light'>{homePageProductsCarouselSeeAll}</a>
        </h6>
      </div>} titleBg={'inherit'} productsCard1={productsCards} />

      <h4 className={`text-center mt-2 mt-4 rounded-top mb-0 container`} style={{backgroundColor:"#FCE7BB", color:"#282828", fontSize: "20px", padding: "10px 0"}}>{homePageProductsAdsTitle1}</h4>
      <div className='container bg-light rounded my-2'>
        <div className='row'>
          <div className='col-12 d-flex justify-content-even flex-wrap p-0'>
            <img className='col-6' style={{ padding: '5px 2.5px 5px 5px' }} src={selectedLang=='en' ? amazingDeals.en[0] : amazingDeals.ar[0]} alt="" />
            <img className='col-6' style={{ padding: '5px 5px 5px 2.5px' }} src={selectedLang=='en' ? amazingDeals.en[1] : amazingDeals.ar[1]} alt="" />
          </div>
        </div>
      </div>

      <div className='container bg-light rounded my-2'>
        <div className='row'>
          <div className='col-12 d-flex justify-content-center flex-wrap p-0'>
            <img className='col-6' style={{ padding: '5px 2.5px 5px 5px' }} src={selectedLang=='en' ? amazingDeals.en[2] : amazingDeals.ar[2]} alt="" />
            <img className='col-6' style={{ padding: '5px 5px 5px 2.5px' }} src={selectedLang=='en' ? amazingDeals.en[3] : amazingDeals.ar[3]} alt="" />
          </div>
        </div>
      </div>

      <h4 className='text-center mt-4 rounded-top mb-0 container' style={{backgroundColor:'#FCE7BB', color:'#282828', fontSize: "20px", padding: "10px 0"}}>{homePageProductsAdsTitle3}</h4>
      <div class="container bg-light rounded">
        <div class="row">
          <div className="col-md-12 d-flex flex-wrap justify-content-center">
            {selectedLang == 'en' ? everydayOffers.en.map((card, index) => {
              return (
                <img className='p-2' width="185px" src={card} alt="" />
              )
            })
          : everydayOffers.ar.map((card, index) => {
            return (
              <img className='p-2' width="184px" src={card} alt="" />
            )
          })
          }
          </div>

        </div>
      </div>

      <h4 className='text-center mt-4 rounded-top mb-0 container' style={{backgroundColor:'#FCE7BB', color:'#282828', fontSize: "20px", padding: "10px 0"}}>{homePageProductsAdsTitle4}</h4>
      <OneDayOffer imgSource = {selectedLang == 'en' ? dailySurprises.en : dailySurprises.ar}/>

      <h4 className='text-center mt-4 rounded-top mb-0 container' style={{backgroundColor:'#FCE7BB', color:'#282828', fontSize: "20px", padding: "10px 0"}}>{homPageProductsBrandsTitle1}</h4>
      <div className="container d-flex flex-wrap justify-content-center p-1 bg-light rounded">
        {selectedLang == 'en' ? topBrands.en.map(brandCard => {
          return (
            <img className='p-1 brand bg-light rounded shadow' style={{ width: '185px' }} src={brandCard} alt="" />
          )
        })
        : topBrands.ar.map(brandCard => {
          return (
            <img className='p-1 brand bg-light rounded shadow' style={{ width: '185px' }} src={brandCard} alt="" />
          )
        })}
      </div>

      {/* <h4 className={`text-center mt-2`} style={{backgroundColor:titleBg1, color:titleCo1}}>{homePageProductsAdsTitle5}</h4>
      <div className='container bg-light rounded my-2'>
        <div className='row'>
          <div className='col-12 d-flex justify-content-even flex-wrap p-0'>
            <img className='col-6' style={{ padding: '5px 2.5px 5px 5px' }} src={selectedLang=='en' ? clearanceDeal.en[0] : clearanceDeal.ar[0]} alt="" />
            <img className='col-6' style={{ padding: '5px 5px 5px 2.5px' }} src={selectedLang=='en' ? clearanceDeal.en[1] : clearanceDeal.ar[1]} alt="" />
          </div>
        </div>
      </div>

      <div className='container bg-light rounded my-2'>
        <div className='row'>
          <div className='col-12 d-flex justify-content-center flex-wrap p-0'>
            <img className='col-6' style={{ padding: '5px 2.5px 5px 5px' }} src={selectedLang=='en' ? clearanceDeal.en[2] : clearanceDeal.ar[2]} alt="" />
            <img className='col-6' style={{ padding: '5px 5px 5px 2.5px' }} src={selectedLang=='en' ? clearanceDeal.en[3] : clearanceDeal.ar[3]} alt="" />
          </div>
        </div> */}
      {/* </div> */}


      <h4 className='text-center mt-4 rounded-top mb-0 container' style={{backgroundColor:'#FCE7BB', color:'#282828', fontSize: "20px", padding: "10px 0"}}>{homePageProductsAdsTitle5}</h4>
      <div className="container d-flex justify-content-center p-1 rounded-bottom bg-light">
        <img className='p-1 brand bg-light shadow' style={{ width: "33%" }} src={selectedLang=='en' ? clearanceDeal.en[0] : clearanceDeal.ar[0]} alt="" />
        <img className='p-1 brand bg-light shadow' style={{ width: "33%" }} src={selectedLang=='en' ? clearanceDeal.en[1] : clearanceDeal.ar[2]} alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{ width: "33%" }} src={selectedLang=='en' ? clearanceDeal.en[2] : clearanceDeal.ar[2]} alt="" />
      </div>

      <TopSelling id={'cardContainer3'} title={<h4 className={`${selectedLang=="en"?"text-start ps-2":"text-end pe-2"} mt-4 rounded-top mb-0 container`} style={{backgroundColor:'#FCE7BB', color:'#282828', fontSize: "20px", padding: "10px 0"}}>{homePageProductsCarouselTitle3}</h4>} titleBg={'inherit'} productsCard1={productsCards} />

      <h4 className='text-center mt-4 rounded-top mb-0 container' style={{backgroundColor:'#FCE7BB', color:'#282828', fontSize: "20px", padding: "10px 0"}}>{homePageProductsAdsTitle6}</h4>
      <div className="container d-flex justify-content-center p-1 rounded-bottom bg-light">
        <img className='p-1 brand bg-light shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UNs-Triple/TB_-_0__Installments_copy_51-2.png" alt="" />
        <img className='p-1 brand bg-light shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Kids-Winter-Outfits/Kids_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Baby%E2%80%99s-Winter-Outfits/new/Baby_s_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
      </div>

      <TopSelling id={'cardContainer4'} title={<h4 className={`${selectedLang=="en"?"text-start ps-2":"text-end pe-2"} mt-4 rounded-top mb-0 container`} style={{backgroundColor:'#FCE7BB', color:'#282828', fontSize: "20px", padding: "10px 0"}}>{homePageProductsCarouselTitle4}</h4>} titleBg={'inherit'} productsCard1={productsCards} />

      <h4 className='text-center mt-4 rounded-top mb-0 container' style={{backgroundColor:'#FCE7BB', color:'#282828', fontSize: "20px", padding: "10px 0"}}>{homePageProductsAdsTitle7}</h4>
      <div className="container d-flex justify-content-center p-1 rounded-bottom bg-light">
        <img className='p-1 brand bg-light shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UNs-Triple/TB_-_0__Installments_copy_51-2.png" alt="" />
        <img className='p-1 brand bg-light shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Kids-Winter-Outfits/Kids_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Baby%E2%80%99s-Winter-Outfits/new/Baby_s_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
      </div>

      <TopSelling id={'cardContainer5'} title={<h4 className={`${selectedLang=="en"?"text-start ps-2":"text-end pe-2"} mt-4 rounded-top mb-0 container`} style={{backgroundColor:'#FCE7BB', color:'#282828', fontSize: "20px", padding: "10px 0"}}>{homePageProductsCarouselTitle4}</h4>} titleBg={'inherit'} productsCard1={productsCards} />

      <h4 className='text-center mt-4 rounded-top mb-0 container' style={{backgroundColor:'#FCE7BB', color:'#282828', fontSize: "20px", padding: "10px 0"}}>{homePageProductsAdsTitle8}</h4>
      <div className="container d-flex justify-content-center p-1 rounded-bottom bg-light">
        <img className='p-1 brand bg-light shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UNs-Triple/TB_-_0__Installments_copy_51-2.png" alt="" />
        <img className='p-1 brand bg-light shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Kids-Winter-Outfits/Kids_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Baby%E2%80%99s-Winter-Outfits/new/Baby_s_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
      </div>

      <TopSelling id={'cardContainer6'} title={<h4 className={`${selectedLang=="en"?"text-start ps-2":"text-end pe-2"} mt-4 rounded-top mb-0 container`} style={{backgroundColor:'#FCE7BB', color:'#282828', fontSize: "20px", padding: "10px 0"}}>{homePageProductsCarouselTitle4}</h4>} titleBg={'inherit'} productsCard1={productsCards} />

      <h4 className='text-center mt-4 text-light'>{homePageProductsAdsTitle8}</h4>
      <div className="container d-flex justify-content-center p-1 rounded-bottom bg-light">
        <img className='p-1 brand bg-light shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UNs-Triple/TB_-_0__Installments_copy_51-2.png" alt="" />
        <img className='p-1 brand bg-light shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Kids-Winter-Outfits/Kids_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{ width: "33%" }} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Baby%E2%80%99s-Winter-Outfits/new/Baby_s_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
      </div>

      <TopSelling id={'cardContainer7'} title={<h4 className={`${selectedLang=="en"?"text-start ps-2":"text-end pe-2"} mt-4 rounded-top mb-0 container`} style={{backgroundColor:'#FCE7BB', color:'#282828', fontSize: "20px", padding: "10px 0"}}>{homePageProductsCarouselTitle4}</h4>} titleBg={'inherit'} productsCard1={productsCards} />

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
