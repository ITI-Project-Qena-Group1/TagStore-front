import React from 'react'
import './Home.css';
import { useState } from 'react';
import { Main } from '../Components/Main';
import { Offers } from '../Components/Offers';
import { TopSelling } from '../Components/TopSelling';
import {IoIosFlash} from 'react-icons/io';
import { OneDayOffer } from '../Components/OneDayOffer';
import Navbar from '../Components/Navbar';
import TopNav from '../Components/TopNav';

export const Home = () => {
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
  const [showBtn, setShowBtn] = useState(true);
  const [paraHeight, setParaHeight] = useState('400px')

  function showMore(){
    setParaHeight('100%');
    setShowBtn(false);
  }

  function showLess(){
    setParaHeight('400px');
    setShowBtn(true);
  }

  return (
    <>
    <TopNav/>
    <Navbar/>
      <Main />
      <Offers offersCardsArr={offerCards}/>
      <TopSelling id={'cardContainer1'} title={<h4 className='d-flex justify-content-between px-2 py-1 align-items-center'>Top Selling Items</h4>} titleBg={'inherit'} productsCard1={productsCards}/>
      <h4 className='text-center text-light'>DISCOUNT & CASHBACK OFFERS</h4>
      <div className='container p-2 bg-light rounded'>
        <img className='w-100 rounded' src="https://eg.jumia.is/cms/bf-22-live-2/1152x252_-EN_copy_6-(1).png" alt="" />
      </div>
      <TopSelling id={'cardContainer2'} title={<div className='d-flex justify-content-between text-light px-2 py-1 rounded-top align-items-center' style={{backgroundColor: '#e61601'}}>
        <h4><IoIosFlash className='text-warning'/> Flash Sales Every Day</h4>
        <h5>Time Left: <span className="fs-bold">00h : 00m : 00s</span></h5>
        <h6>
          <a href='#' className='text-decoration-none text-light'>SEE All &gt;</a>
        </h6>
      </div>} titleBg={'inherit'} productsCard1={productsCards}/>

      <h4 className='text-center mt-2 text-light'>AMAZING DEALS!</h4>
      <div className='container bg-light rounded my-2'>
        <div className='row'>
          <div className='col-12 d-flex justify-content-even flex-wrap p-0'>
          <img className='col-6' style={{padding: '5px 2.5px 5px 5px'}} src="https://eg.jumia.is/cms/bf-22-live-2/OPT-24/UG/edit/P/UG-(2).png" alt="" />
          <img  className='col-6' style={{padding: '5px 5px 5px 2.5px'}} src="https://eg.jumia.is/cms/bf-22-live-2/OPT-17/Sokany/Blue/Sokany____-_Floor-Desktop_-EN_-(1).png" alt="" />
          {/* <img className='col-12 d-md-none' style={{padding: '5px 5px 2.5px 5px'}} src="https://eg.jumia.is/cms/bf-22-live-2/OPT-24/UG/edit/P/UG-(2).png" alt="" />
          <img  className='col-12 d-md-none' style={{padding: '2.5px 5px 5px 5px'}} src="https://eg.jumia.is/cms/bf-22-live-2/OPT-17/Sokany/Blue/Sokany____-_Floor-Desktop_-EN_-(1).png" alt="" /> */}
          </div>
        </div>
      </div>

      <div className='container bg-light rounded my-2'>
        <div className='row'>
          <div className='col-12 d-flex justify-content-center flex-wrap p-0'>
          <img className='col-6' style={{padding: '5px 2.5px 5px 5px'}} src="https://eg.jumia.is/cms/bf-22-live/-Deals/supermarket/Maxtella/Maxtella------Floor-Desktop--EN_.jpg" alt="" />
          <img className='col-6' style={{padding: '5px 5px 5px 2.5px'}} src="https://eg.jumia.is/cms/bf-22-live-2/OPT-24/Nivea/P/Maybelline---Floor-Desktop--EN_.jpg" alt="" />
          {/* <img className='col-12 d-md-none' style={{padding: '5px 5px 2.5px 5px'}} src="https://eg.jumia.is/cms/bf-22-live/-Deals/supermarket/Maxtella/Maxtella------Floor-Desktop--EN_.jpg" alt="" />
          <img className='col-12 d-md-none' style={{padding: '2.5px 5px 5px 5px'}} src="https://eg.jumia.is/cms/bf-22-live-2/OPT-24/Nivea/P/Maybelline---Floor-Desktop--EN_.jpg" alt="" /> */}
          </div>
        </div>
      </div>

      <h4 className='text-center mt-4 text-light'>NEW OFFERS EVERYDAY ON EVERYTHING!</h4>
      <div class="container bg-light rounded">
        <div class="row">
          <div className="col-md-12 d-flex flex-wrap justify-content-center">
            {offerCards.map((card,index) => {
              return(
                  <img className='p-2' width="150px" src={card} alt="" />
              )
            })}
          </div>

        </div>
      </div>

      <h4 className='text-center mt-4 text-light'>DAILY SURPRISES!</h4>
      <OneDayOffer />

      <h4 className='text-center mt-4 text-light'>TOP BRANDS</h4>
      <div className="container d-flex flex-wrap justify-content-center p-1 bg-light rounded">
        <img className='p-1 brand bg-light rounded shadow' style={{width: '158px'}} src="https://eg.jumia.is/cms/icons-21/10-10-Icons/Kady.png" alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{width: '158px'}} src="https://eg.jumia.is/cms/icons-21/10-10-Icons/Andora.png" alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{width: '158px'}} src="https://eg.jumia.is/cms/icons-21/10-10-Icons/Defacto_260_x_144_.png" alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{width: '158px'}} src="https://eg.jumia.is/cms/bf-22-live/sponsors/260_x_144_copy_2.png" alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{width: '158px'}} src="https://eg.jumia.is/cms/icons-21/10-10-Icons/AEO_Egypt_260_x_144_.png" alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{width: '158px'}} src="https://eg.jumia.is/cms/bf-22-live/sponsors/260_x_144.png" alt="" />
      </div>

      <h4 className='text-center mt-4 text-light'>WINTER OUTFITS HOT DEALS!</h4>
      <div className="container d-flex justify-content-center p-1 rounded-bottom bg-light">
        <img className='p-1 brand bg-light shadow' style={{width:"33%"}} src="https://eg.jumia.is/cms/Dec-22/UNs-Triple/TB_-_0__Installments_copy_51-2.png" alt="" />
        <img className='p-1 brand bg-light shadow' style={{width:"33%"}} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Kids-Winter-Outfits/Kids_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{width:"33%"}} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Baby%E2%80%99s-Winter-Outfits/new/Baby_s_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
      </div>

      <TopSelling id={'cardContainer1'} title={<h4 className='d-flex justify-content-between px-2 py-1 align-items-center'>Top Selling</h4>} titleBg={'inherit'} productsCard1={productsCards}/>

      <h4 className='text-center mt-4 text-light'>WINTER OUTFITS HOT DEALS!</h4>
      <div className="container d-flex justify-content-center p-1 rounded-bottom bg-light">
        <img className='p-1 brand bg-light shadow' style={{width:"33%"}} src="https://eg.jumia.is/cms/Dec-22/UNs-Triple/TB_-_0__Installments_copy_51-2.png" alt="" />
        <img className='p-1 brand bg-light shadow' style={{width:"33%"}} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Kids-Winter-Outfits/Kids_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{width:"33%"}} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Baby%E2%80%99s-Winter-Outfits/new/Baby_s_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
      </div>

      <TopSelling id={'cardContainer1'} title={<h4 className='d-flex justify-content-between px-2 py-1 align-items-center'>Top Selling</h4>} titleBg={'inherit'} productsCard1={productsCards}/>

      <h4 className='text-center mt-4 text-light'>WINTER OUTFITS HOT DEALS!</h4>
      <div className="container d-flex justify-content-center p-1 rounded-bottom bg-light">
        <img className='p-1 brand bg-light shadow' style={{width:"33%"}} src="https://eg.jumia.is/cms/Dec-22/UNs-Triple/TB_-_0__Installments_copy_51-2.png" alt="" />
        <img className='p-1 brand bg-light shadow' style={{width:"33%"}} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Kids-Winter-Outfits/Kids_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{width:"33%"}} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Baby%E2%80%99s-Winter-Outfits/new/Baby_s_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
      </div>

      <TopSelling id={'cardContainer1'} title={<h4 className='d-flex justify-content-between px-2 py-1 align-items-center'>Top Selling</h4>} titleBg={'inherit'} productsCard1={productsCards}/>

      <h4 className='text-center mt-4 text-light'>WINTER OUTFITS HOT DEALS!</h4>
      <div className="container d-flex justify-content-center p-1 rounded-bottom bg-light">
        <img className='p-1 brand bg-light shadow' style={{width:"33%"}} src="https://eg.jumia.is/cms/Dec-22/UNs-Triple/TB_-_0__Installments_copy_51-2.png" alt="" />
        <img className='p-1 brand bg-light shadow' style={{width:"33%"}} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Kids-Winter-Outfits/Kids_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{width:"33%"}} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Baby%E2%80%99s-Winter-Outfits/new/Baby_s_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
      </div>

      <TopSelling id={'cardContainer1'} title={<h4 className='d-flex justify-content-between px-2 py-1 align-items-center'>Top Selling</h4>} titleBg={'inherit'} productsCard1={productsCards}/>

      <h4 className='text-center mt-4 text-light'>WINTER OUTFITS HOT DEALS!</h4>
      <div className="container d-flex justify-content-center p-1 rounded-bottom bg-light">
        <img className='p-1 brand bg-light shadow' style={{width:"33%"}} src="https://eg.jumia.is/cms/Dec-22/UNs-Triple/TB_-_0__Installments_copy_51-2.png" alt="" />
        <img className='p-1 brand bg-light shadow' style={{width:"33%"}} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Kids-Winter-Outfits/Kids_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
        <img className='p-1 brand bg-light rounded shadow' style={{width:"33%"}} src="https://eg.jumia.is/cms/Dec-22/UN-Deals/winter-outfits/Baby%E2%80%99s-Winter-Outfits/new/Baby_s_Winter_Outfits_-_Triple_Floor_378_px_x_252_EN_Curved.png" alt="" />
      </div>

      <TopSelling id={'cardContainer1'} title={<h4 className='d-flex justify-content-between px-2 py-1 align-items-center'>Top Selling</h4>} titleBg={'inherit'} productsCard1={productsCards}/>
    
      <div className='container bg-light rounded mb-5'>
      <div className="container d-block d-md-none bg-light p-2 para" style={{height: paraHeight, overflowY: 'hidden'}}>
        <h5><strong>Tag Store – Biggest Online Shopping Website</strong></h5>
        <p>Online shopping sites are now part of our everyday lives, because everyone enjoys the possibility of being able to buy whatever they need, whether it’s <strong><a href="https://www.tagstore.com.eg/category-fashion-by-tagstore/">clothing</a></strong> or <a href="https://www.tagstore.com.eg/electronics/"><strong>electronics</strong></a>, without having to move an inch. It’s even better when you can buy everything you’re looking for, all from the same store. This is what Tag Store offers and that’s what makes it one of the best online shopping websites in Egypt.</p>
        <h5><strong>Enjoy Endless Deals &amp; Discounts</strong></h5>
        <p>tagstore is an easy platform to use when you’re online shopping for any type of products you’re looking for. Even if you’re just browsing, we assure you that you will find something you like in our catalog. Our <strong>clothing store</strong> provides you with over one million products and variations to choose from! You can shop for anything you need from women fashion to <strong><a href="https://www.tagstore.com.eg/babies-clothing/">baby clothes</a></strong> and get the latest <a href="https://www.tagstore.com.eg/category-fashion-by-tagstore/"><strong>fashion</strong></a>. Tag Store is one of the biggest online shopping sites because we always try to expand our catalog to provide any possible products or gadgets our customer could be searching to buy online!</p>
        <h5><strong>Shop Now for All Products Online</strong></h5>
        <h5><strong>Order Electronics &amp; Appliances Here</strong></h5>
        <p>Check off your <strong>grocery</strong> list with our <a href="https://www.tagstore.com.eg/groceries/"><strong>online supermarket</strong></a> which is filled with all the canned goods and fresh foods you could possibly think of. You can easily shop for all variations of <a href="https://www.tagstore.com.eg/home-office-appliances/"><strong>appliances</strong></a> for your home from a large selection which include appliances such as a <a href="https://www.tagstore.com.eg/appliances-fridges-freezers/"><strong>fridge</strong></a>, washing machine or <a href="https://www.tagstore.com.eg/air-conditioning/"><strong>air conditioner</strong></a>, for example.</p>
        <p>Our catalog for electronics offers you the highest quality products from trusted sellers and brands; you can show for a new <a href="https://www.tagstore.com.eg/televisions/"><strong>television</strong></a> for your living room, your favorite <a href="https://www.tagstore.com.eg/smartphones/"><strong>smartphone</strong></a> or even a new <a href="https://www.tagstore.com.eg/playstation4-consoles/"><strong>PlayStation 4</strong></a>or<a href="https://www.tagstore.com.eg/5/"><strong>PS5</strong></a>, for example. Get the latest releases of <strong>mobiles and tablets</strong> before anyone else in town, whether you want to buy a new phone from <a href="https://www.tagstore.com.eg/phones-tablets/apple/"><strong>Apple</strong></a>, Infinix, Xiaomi, Realme or <a href="https://www.tagstore.com.eg/phones-tablets/samsung/"><strong>Samsung</strong></a>, for example. Another amazing category available is one dedicated to computers, <a href="https://www.tagstore.com.eg/laptops/"><strong>laptops</strong></a> and all their accessories. Shop for <a href="https://www.tagstore.com.eg/printers/"><strong>printers</strong></a>, scanners, computer components and monitors to enhance your computer or laptop experience to the max! All these products are provided in <strong>Tag Store</strong> for you to discover and buy, and enjoy the fastest delivery anywhere in Egypt.</p>
        <h5><strong>Indulge in a Selection of Beauty Products</strong></h5>
        <p>Our onlinestore also offers you the best beauty products from world-wide known brands. Anything related to <a href="https://www.tagstore.com.eg/health-beauty/"><strong>health and beauty</strong></a>, cosmetics and <a href="https://www.tagstore.com.eg/fragrances-allgenders/"><strong>fragrances</strong></a> can be found at our online store. Discover our <a href="https://www.tagstore.com.eg/baby-products/"><strong>baby shop</strong></a> for all baby essentials from food and diapers to toys and education games. Start online shopping for furniture and home décor for each and every room in your house.</p>
        <p>Order our <a href="https://www.tagstore.com.eg/all-products/?shop_premium_services=shop_express"><strong>tagstore Express</strong></a> products, which are stocked in tagstore’s warehouse, which means you will enjoy express shipping and have your products delivered to you in no time! There are endless categories and subcategories of products available to help you reach the products you’re looking for at <strong>Tag Store</strong>. Also, many of our products are shipped from overseas under the <a href="https://www.tagstore.com.eg/mlp-tagstore-global/"><strong>tagstore Global</strong></a> catalog, which will all be shipped to your doorstep, wherever you are.</p>
        <h5><strong>Discover the Online Shopping World</strong></h5>
        <p>Tag Store offers <strong>deals and discounts</strong> and never ceases to form campaigns all year around, all for the satisfaction and joy of our customers. Our newsletter subscribers and Facebook fans get to know all of our offers before anyone else such as Mobile &amp; Tech Week, Ramadan, tagstore Anniversary, <a href="https://www.tagstore.com.eg/mlp-mother-day/"><strong>Mother's Day</strong></a> Also, You can buy tickets for concerts and important events online @ tagstore. We have a dedicated team who will answer your questions instantly on social media and customer service is available through the week to help solve any issues and answer all inquiries, simply reach us as <strong>19586</strong>. Moreover, you can join tagstore’s partnership team to open your shop on Tag Store and sell your products to our customers. Tag Store promises to provide you with the best service and <strong>100% genuine</strong> products. We deliver your order at your doorstep as fast as possible, offer you safe and secure payments and also provide free returns, which you can read more about in our refund and return policy. Stay tuned and get the best prices in Egypt on all your favorite products all over the year!</p>
        <h5><strong>What are the <a href="http://www.tagstore.com.eg/sp-how-to-pay/">payment methods</a> available on tagstore?</strong></h5>
        <p>Cash on delivery, Mastercard, Visa &amp; Fawry.</p>
        <p>&nbsp;</p>
        </div>
        <div className="container d-none d-md-block bg-light p-2 para">
        <h5><strong>Tag Store – Biggest Online Shopping Website</strong></h5>
        <p>Online shopping sites are now part of our everyday lives, because everyone enjoys the possibility of being able to buy whatever they need, whether it’s <strong><a href="https://www.tagstore.com.eg/category-fashion-by-tagstore/">clothing</a></strong> or <a href="https://www.tagstore.com.eg/electronics/"><strong>electronics</strong></a>, without having to move an inch. It’s even better when you can buy everything you’re looking for, all from the same store. This is what Tag Store offers and that’s what makes it one of the best online shopping websites in Egypt.</p>
        <h5><strong>Enjoy Endless Deals &amp; Discounts</strong></h5>
        <p>tagstore is an easy platform to use when you’re online shopping for any type of products you’re looking for. Even if you’re just browsing, we assure you that you will find something you like in our catalog. Our <strong>clothing store</strong> provides you with over one million products and variations to choose from! You can shop for anything you need from women fashion to <strong><a href="https://www.tagstore.com.eg/babies-clothing/">baby clothes</a></strong> and get the latest <a href="https://www.tagstore.com.eg/category-fashion-by-tagstore/"><strong>fashion</strong></a>. Tag Store is one of the biggest online shopping sites because we always try to expand our catalog to provide any possible products or gadgets our customer could be searching to buy online!</p>
        <h5><strong>Shop Now for All Products Online</strong></h5>
        <h5><strong>Order Electronics &amp; Appliances Here</strong></h5>
        <p>Check off your <strong>grocery</strong> list with our <a href="https://www.tagstore.com.eg/groceries/"><strong>online supermarket</strong></a> which is filled with all the canned goods and fresh foods you could possibly think of. You can easily shop for all variations of <a href="https://www.tagstore.com.eg/home-office-appliances/"><strong>appliances</strong></a> for your home from a large selection which include appliances such as a <a href="https://www.tagstore.com.eg/appliances-fridges-freezers/"><strong>fridge</strong></a>, washing machine or <a href="https://www.tagstore.com.eg/air-conditioning/"><strong>air conditioner</strong></a>, for example.</p>
        <p>Our catalog for electronics offers you the highest quality products from trusted sellers and brands; you can show for a new <a href="https://www.tagstore.com.eg/televisions/"><strong>television</strong></a> for your living room, your favorite <a href="https://www.tagstore.com.eg/smartphones/"><strong>smartphone</strong></a> or even a new <a href="https://www.tagstore.com.eg/playstation4-consoles/"><strong>PlayStation 4</strong></a>or<a href="https://www.tagstore.com.eg/5/"><strong>PS5</strong></a>, for example. Get the latest releases of <strong>mobiles and tablets</strong> before anyone else in town, whether you want to buy a new phone from <a href="https://www.tagstore.com.eg/phones-tablets/apple/"><strong>Apple</strong></a>, Infinix, Xiaomi, Realme or <a href="https://www.tagstore.com.eg/phones-tablets/samsung/"><strong>Samsung</strong></a>, for example. Another amazing category available is one dedicated to computers, <a href="https://www.tagstore.com.eg/laptops/"><strong>laptops</strong></a> and all their accessories. Shop for <a href="https://www.tagstore.com.eg/printers/"><strong>printers</strong></a>, scanners, computer components and monitors to enhance your computer or laptop experience to the max! All these products are provided in <strong>Tag Store</strong> for you to discover and buy, and enjoy the fastest delivery anywhere in Egypt.</p>
        <h5><strong>Indulge in a Selection of Beauty Products</strong></h5>
        <p>Our onlinestore also offers you the best beauty products from world-wide known brands. Anything related to <a href="https://www.tagstore.com.eg/health-beauty/"><strong>health and beauty</strong></a>, cosmetics and <a href="https://www.tagstore.com.eg/fragrances-allgenders/"><strong>fragrances</strong></a> can be found at our online store. Discover our <a href="https://www.tagstore.com.eg/baby-products/"><strong>baby shop</strong></a> for all baby essentials from food and diapers to toys and education games. Start online shopping for furniture and home décor for each and every room in your house.</p>
        <p>Order our <a href="https://www.tagstore.com.eg/all-products/?shop_premium_services=shop_express"><strong>tagstore Express</strong></a> products, which are stocked in tagstore’s warehouse, which means you will enjoy express shipping and have your products delivered to you in no time! There are endless categories and subcategories of products available to help you reach the products you’re looking for at <strong>Tag Store</strong>. Also, many of our products are shipped from overseas under the <a href="https://www.tagstore.com.eg/mlp-tagstore-global/"><strong>tagstore Global</strong></a> catalog, which will all be shipped to your doorstep, wherever you are.</p>
        <h5><strong>Discover the Online Shopping World</strong></h5>
        <p>Tag Store offers <strong>deals and discounts</strong> and never ceases to form campaigns all year around, all for the satisfaction and joy of our customers. Our newsletter subscribers and Facebook fans get to know all of our offers before anyone else such as Mobile &amp; Tech Week, Ramadan, tagstore Anniversary, <a href="https://www.tagstore.com.eg/mlp-mother-day/"><strong>Mother's Day</strong></a> Also, You can buy tickets for concerts and important events online @ tagstore. We have a dedicated team who will answer your questions instantly on social media and customer service is available through the week to help solve any issues and answer all inquiries, simply reach us as <strong>19586</strong>. Moreover, you can join tagstore’s partnership team to open your shop on Tag Store and sell your products to our customers. Tag Store promises to provide you with the best service and <strong>100% genuine</strong> products. We deliver your order at your doorstep as fast as possible, offer you safe and secure payments and also provide free returns, which you can read more about in our refund and return policy. Stay tuned and get the best prices in Egypt on all your favorite products all over the year!</p>
        <h5><strong>What are the <a href="http://www.tagstore.com.eg/sp-how-to-pay/">payment methods</a> available on tagstore?</strong></h5>
        <p>Cash on delivery, Mastercard, Visa &amp; Fawry.</p>
        <p>&nbsp;</p>
        </div>
        {showBtn?<h6 className='d-md-none text-center mt-1' style={{cursor: 'pointer'}} onClick={()=>showMore()}>show more</h6>:
        <h6 className='d-md-none text-center mt-2' style={{cursor: 'pointer'}} onClick={()=>showLess()}>show Less</h6>}
      </div>
    </>
  )
}
