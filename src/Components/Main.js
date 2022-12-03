import React from 'react'
import './Main.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {CiApple, CiCircleMore} from 'react-icons/ci';
import {GiPoloShirt, GiLipstick} from 'react-icons/gi';
import {MdChildCare} from 'react-icons/md';
import {TfiMobile} from 'react-icons/tfi';
import {FiAirplay} from 'react-icons/fi';
import {SlScreenDesktop} from 'react-icons/sl';
import {CgGym} from 'react-icons/cg';
import {IoGameControllerOutline} from 'react-icons/io5';
import {AiOutlineHome, AiOutlineCar} from 'react-icons/ai';

export const Main = () => {
  const [hide, setHide] = useState(true)
  const [show, setShow] = useState({
    a:false,
    b:false,
    c:false,
    d:false,
    e:false,
    f:false,
    g:false,
    h:false,
    i:false,
    j:false,
    k:false,
    l:false,
});

  function showSec(sec){
    setHide(false);
    setShow(
      {...show, [sec]: true}
    ); 
    console.log(show);
  }
  function hideSec(sec){
    setHide(true);
    setShow(
      {...show, [sec]: false}
    );
     console.log(show);
  }
    return (
      <div style={{fontSize: '13px'}} >
     <div className='d-none d-md-block container rounded shadow p-2'>
        <div className='row mt-0 p-0'>
                    <div className='col-md-3 ps-1 bg-light category' style={{paddingLeft: 0}}>
                        <div className='d-none d-lg-flex flex-column justify-content-between mb-0'>
                          <a href='#' className='menuItem' onMouseOver={() => showSec('a')} onMouseOut={() => hideSec('a')}><CiApple/> Supermarket</a>
                          <a href='#' className='menuItem' onMouseOver={() => showSec('b')} onMouseOut={() => hideSec('b')}><GiPoloShirt/> Fashion</a>
                          <a href='#' className='menuItem' onMouseOver={() => showSec('c')} onMouseOut={() => hideSec('c')}><GiLipstick/> Health & Beauty</a>
                          <a href='#' className='menuItem' onMouseOver={() => showSec('d')} onMouseOut={() => hideSec('d')}><MdChildCare/> Baby Products</a>
                          <a href='#' className='menuItem' onMouseOver={() => showSec('e')} onMouseOut={() => hideSec('e')}><TfiMobile/> Phones & Tablets</a>
                          <a href='#' className='menuItem' onMouseOver={() => showSec('f')} onMouseOut={() => hideSec('f')}><AiOutlineHome/> Home & Office</a>
                          <a href='#' className='menuItem' onMouseOver={() => showSec('g')} onMouseOut={() => hideSec('g')}><FiAirplay/> Electronics</a>
                          <a href='#' className='menuItem' onMouseOver={() => showSec('h')} onMouseOut={() => hideSec('h')}><SlScreenDesktop/> Computing</a>
                          <a href='#' className='menuItem' onMouseOver={() => showSec('i')} onMouseOut={() => hideSec('i')}><CgGym/> Sporting Goods</a>
                          <a href='#' className='menuItem' onMouseOver={() => showSec('j')} onMouseOut={() => hideSec('j')}><IoGameControllerOutline/> Gaming</a>
                          <a href='#' className='menuItem' onMouseOver={() => showSec('k')} onMouseOut={() => hideSec('k')}><AiOutlineCar/> Automobile</a>
                          <a href='#' className='menuItem' onMouseOver={() => showSec('l')} onMouseOut={() => hideSec('l')}><CiCircleMore/> Other Categories</a>
                        </div>
                        <div className='d-lg-none d-md-flex flex-column justify-content-between mb-0' style={{minHeight: '383px'}}>
                          <a href='#' className='menuItem-md' onMouseOver={() => showSec('a')} onMouseOut={() => hideSec('a')}><CiApple/> Supermarket</a>
                          <a href='#' className='menuItem-md' onMouseOver={() => showSec('b')} onMouseOut={() => hideSec('b')}><GiPoloShirt/> Fashion</a>
                          <a href='#' className='menuItem-md' onMouseOver={() => showSec('c')} onMouseOut={() => hideSec('c')}><GiLipstick/> Health & Beauty</a>
                          <a href='#' className='menuItem-md' onMouseOver={() => showSec('d')} onMouseOut={() => hideSec('d')}><MdChildCare/> Baby Products</a>
                          <a href='#' className='menuItem-md' onMouseOver={() => showSec('e')} onMouseOut={() => hideSec('e')}><TfiMobile/> Phones & Tablets</a>
                          <a href='#' className='menuItem-md' onMouseOver={() => showSec('f')} onMouseOut={() => hideSec('f')}><AiOutlineHome/> Home & Office</a>
                          <a href='#' className='menuItem-md' onMouseOver={() => showSec('g')} onMouseOut={() => hideSec('g')}><FiAirplay/> Electronics</a>
                          <a href='#' className='menuItem-md' onMouseOver={() => showSec('h')} onMouseOut={() => hideSec('h')}><SlScreenDesktop/> Computing</a>
                          <a href='#' className='menuItem-md' onMouseOver={() => showSec('i')} onMouseOut={() => hideSec('i')}><CgGym/> Sporting Goods</a>
                          <a href='#' className='menuItem-md' onMouseOver={() => showSec('j')} onMouseOut={() => hideSec('j')}><IoGameControllerOutline/> Gaming</a>
                          <a href='#' className='menuItem-md' onMouseOver={() => showSec('k')} onMouseOut={() => hideSec('k')}><AiOutlineCar/> Automobile</a>
                          <a href='#' className='menuItem-md' onMouseOver={() => showSec('l')} onMouseOut={() => hideSec('l')}><CiCircleMore/> Other Categories</a>
                        </div>
                        
                    </div>
                    {hide ? <div className='col-md p-0 rounded h-100 ms-3 bg-light'>
                    <Carousel variant="dark" fade>
                        <Carousel.Item>
                          <img
                            className="w-100 rounded"
                            src="https://eg.jumia.is/cms/bf-22-live-2/brand-day/AEO/Floor2/AEO_-_General__-Desktop-EN_-(1).png"
                            alt="First slide"
                          />
    
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="w-100 rounded"
                            src="https://eg.jumia.is/cms/bf-22-live-2/OPT-17/Men&Women/Blue/Sweatshirt_&_Jackets_-Desktop-EN_.png"
                            alt="Second slide"
                          />
    
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="w-100 rounded"
                            src="https://eg.jumia.is/cms/bf-22-live-2/OPT-24/Lenovo/Blue/Lenovo----Desktop-EN_.png"
                            alt="Third slide"
                          />
    
                        </Carousel.Item>
                      </Carousel>
                      <div className='d-none d-md-flex justify-content-center d-lg-none row p-0 rounded bg-light' style={{margin: '2.5px 0'}}>
                        <img src="https://eg.jumia.is/cms/bf-22-live-2/1152x252_-EN_copy_6-(1).png"  className='bg-light p-1 rounded' style={{maxHeight: '93px'}} alt="" />
                      </div>
                    </div> : 
                    show['a'] ? <div className="col-md-9 p-2 bg-light rounded-end" onMouseOver={() => showSec('a')} onMouseOut={() => hideSec('a')}>
                      <div className='row'>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>FOOD CUPBOARD</li>
                            <li>Grains & Rice</li>
                            <li>Pasta & Noodles</li>
                            <li>Cooking Oil</li>
                            <li>Vinegar</li>
                            <li>Sauce & Dressings</li>
                            <li>Sugars & Sweeteners</li>
                            <li>Flour</li>
                            <li>Herbs & Spices</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>BEVERAGES</li>
                            <li>Juices</li>
                            <li>Soft Drinks</li>
                            <li>Coffee, Tea & Cocoa</li>
                            <li>Water</li>
                            <li>Powdered Drink Mixes & Flavorings</li>
                          </ul>
                        </div>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                              <li>CANNED, JARRED & PACKAGED FOODS</li>
                              <li>Antipasto</li>
                              <li>Beans & Peas</li>
                              <li>Vegetables</li>
                              <li>Meat, Poultry & Seafood</li>
                            </ul>
                            <ul className='list-unstyled mb-0'>
                              <li>BREAKFAST FOODS</li>
                              <li>Cereal</li>
                              <li>Breakfast Biscuits & Cookies</li>
                              <li>Jams, Jellies & Sweet Spreads</li>
                              <li>Crisps & Chips</li>
                              <li>Nuts & Seeds</li>
                            </ul>
                        </div>
                        <di className='col'>
                        <ul className='list-unstyled mb-0'>
                              <li>Liquid Detergent</li>
                              <li>Powder Detergent</li>
                              <li>Fabric Softener</li>
                              <li>Stain Removal</li>
                              <li>Bleach</li>
                            </ul>
                            <ul className='list-unstyled mb-0'>
                              <li>HOUSEHOLD CLEANING</li>
                              <li>Dishwashing</li>
                              <li>Air Fresheners</li>
                              <li>Kitchen Cleaners</li>
                              <li>Bathroom Cleaners</li>
                              <li>Floor Cleaners</li>
                              <li>Glass Cleaners</li>
                              <li>Disinfectants</li>
                              <li>Cleaning Tools</li>
                              <li>Paper & Plastic</li>
                            </ul>
                        </di>
                      </div>
                      
                    </div> :
                    show['b'] ? <div className="col-md-9 p-2 bg-light rounded-end" onMouseOver={() => showSec('b')} onMouseOut={() => hideSec('b')}>
                    <div className='row'>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                          <li>WOMEN'S FASHION</li>
                          <li>Pullovers</li>
                          <li>Jackets</li>
                          <li>Cardigans</li>
                          <li>Hoodies</li>
                          <li>Sweatshirts</li>
                          <li>Dresses</li>
                          <li>Pants</li>
                          <li>Jeans</li>
                          <li>Homewear</li>
                          <li>Underwear</li>
                          <li>Boots</li>
                          <li>Sneakers</li>
                          <li>Heels</li>
                          <li>Gloves</li>
                          <li>Scarves & Wraps</li>
                          <li>Sunglasses</li>
                          <li>Handbags</li>
                          </ul>
                        </div>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                          <li>MEN'S FASHION</li>
                          <li>Pullovers</li>
                          <li>Jackets</li>
                          <li>Hoodies</li>
                          <li>Sweatshirts</li>
                          <li>Shirts</li>
                          <li>Suits</li>
                          <li>Pants</li>
                          <li>Jeans</li>
                          <li>Shoes</li>
                          <li>Homewear</li>
                          <li>Underwear</li>
                          <li>Sportswear</li>
                          <li>Bags</li>
                          <li>Socks</li>
                          <li>Gloves</li>
                          <li>Scarves</li>
                          <li>Watches</li>
                            </ul>
                        </div>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>BABY</li>
                            <li>Baby Boys</li>
                            <li>Baby Girls</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>KID'S FASHION</li>
                            <li>Boys Fashion</li>
                            <li>Girls Fashion</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>TOP BRANDS</li>
                            <li>American Eagle</li>
                            <li>DeFacto</li>
                            <li>Reebok</li>
                          </ul>
                        </div>
                      </div>
                    </div> :
                    show['c'] ? <div className="col-md-9 p-2 bg-light rounded-end" onMouseOver={() => showSec('c')} onMouseOut={() => hideSec('c')}>
                      <div className='row'>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>BEAUTY & PERSONAL CARE</li>
                            <li>Skin Care</li>
                            <li>Feminine Care</li>
                            <li>Shave & Hair Removal</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>HAIR CARE</li>
                            <li>Styling Tools & Appliances</li>
                            <li>Styling Products</li>
                            <li>Shampoo</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>FRAGRANCE</li>
                            <li>Women's</li>
                            <li>Men's</li>
                          </ul>
                        </div>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>MAKEUP</li>
                            <li>Foundation</li>
                            <li>Powder</li>
                            <li>Concealers & Neutralizers</li>
                            <li>Lipstick</li>
                            <li>Lip Liners</li>
                            <li>Lip Glosses</li>
                            <li>Mascara</li>
                            <li>Eyeliner</li>
                            <li>Eyeshadow</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>HEALTH CARE</li>
                            <li>Wellness & Relaxation</li>
                            <li>Sexual Wellness</li>
                            <li>Medical Supplies & Equipment</li>
                          </ul>
                        </div>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>TOP BRANDS</li>
                            <li>Braun</li>
                            <li>L'oreal</li>
                            <li>Durex</li>
                            <li>Maybelline</li>
                            <li>Veet</li>
                            <li>The Body Shop</li>
                            <li>Nivea</li>
                            <li>P&G</li>
                            <li>Johnson's</li>
                            <li>GSK</li>
                          </ul>
                        </div>
                      </div>
                    </div> :
                    show['d'] ? <div className="col-md-9 p-2 bg-light rounded-end" onMouseOver={() => showSec('d')} onMouseOut={() => hideSec('d')}>
                      <div className='row'>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>DIAPERING</li>
                            <li>Diapers</li>
                            <li>Baby Wipes</li>
                            <li>Diaper bags</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>BABY FEEDING</li>
                            <li>Bottle Feeding</li>
                            <li>Breast feeding</li>
                            <li>Baby Food</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>BATH & SKIN CARE</li>
                            <li>Baby Creams & Lotions</li>
                            <li>Baby Shampoo</li>
                            <li>Baby Soaps</li>
                            <li>Baby Conditioners</li>
                          </ul>
                        </div>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>BABY SAFETY</li>
                            <li>Rails & Rail Guards</li>
                            <li>Kitchen Safety</li>
                            <li>Monitors</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>STROLLERS & ACCESSORIES</li>
                            <li>Strollers Accessories</li>
                            <li>Strollers</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>GEAR</li>
                            <li>Swings, Jumpers & Bouncers</li>
                            <li>Backpacks & Carriers</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>NURSERY</li>
                            <li>Beds, Cribs & Bedding</li>
                            <li>Nursery Decor</li>
                          </ul>
                        </div>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>BABY & TODDLER TOYS</li>
                            <li>Toy Gift Sets</li>
                            <li>Blocks</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>TOYS & GAMES</li>
                            <li>Dolls & Accessories</li>
                            <li>Learning & Education</li>
                            <li>Action Figures & Statues</li>
                            <li>Arts & Crafts</li>
                            <li>Dress Up & Pretend Play</li>
                            <li>Puzzles</li>
                            <li>Toy Remote Control & Play Vehicles</li>
                          </ul>
                        </div>
                      </div>
                    </div> :
                    show['e'] ? <div className="col-md-9 p-2 bg-light rounded-end" onMouseOver={() => showSec('e')} onMouseOut={() => hideSec('e')}>
                      <div className='row'>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>MOBILE PHONES</li>
                            <li>Smartphones</li>
                            <li>Cell Phones</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>TABLETS</li>
                            <li>iPad Tablets</li>
                            <li>Tablet Accessories</li>
                            <li>Bags & Cases</li>
                          </ul>
                        </div>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>MOBILE ACCESSORIES</li>
                            <li>Phone Cases</li>
                            <li>Screen Protectors</li>
                            <li>Bluetooth Headsets</li>
                            <li>Corded Headsets</li>
                            <li>Cables</li>
                            <li>Portable Power Banks</li>
                            <li>Smart Watches</li>
                            <li>Memory Cards</li>
                            <li>Chargers</li>
                            <li>Car Accessories</li>
                            <li>Mounts & Stands</li>
                            <li>Selfie Sticks & Tripods</li>
                          </ul>
                        </div>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>TOP BRANDS</li>
                            <li>Realme</li>
                            <li>Samsung</li>
                            <li>Huawei</li>
                            <li>Xiaomi</li>
                            <li>Lenovo</li>
                            <li>Tecno</li>
                            <li>Infinix</li>
                          </ul>
                        </div>
                      </div>
                    </div> :
                    show['f'] ? <div className="col-md-9 p-2 bg-light rounded-end" onMouseOver={() => showSec('f')} onMouseOut={() => hideSec('f')}>
                      <div className='row'>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>HOME & KITCHEN</li>
                            <li>Bedding</li>
                            <li>Bath</li>
                            <li>Storage & Organization</li>
                            <li>Kitchen & Dining</li>
                            <li>Furniture</li>
                            <li>Home Decor</li>
                            <li>Lighting</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>TOOLS & HOME IMPROVEMENT</li>
                            <li>Building Supplies</li>
                            <li>Electrical</li>
                            <li>Hardware</li>
                            <li>Light Bulbs</li>
                            <li>Power & Hand Tools</li>
                            <li>Painting Supplies & Wall Treatments</li>
                          </ul>
                        </div>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>OFFICE PRODUCTS</li>
                            <li>Office Electronics</li>
                            <li>Office Furniture & Lighting</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>SMALL APPLIANCES</li>
                            <li>Blenders</li>
                            <li>Mixers</li>
                            <li>Ovens & Toasters</li>
                            <li>Microwave Ovens</li>
                            <li>Food Processors</li>
                            <li>Deep Fryers</li>
                            <li>Juicers</li>
                            <li>Coffee, Tea & Espresso Appliances</li>
                          </ul>
                        </div>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>HEATING, COOLING & AIR QUALITY</li>
                            <li>Air Conditioners</li>
                            <li>Household Fans</li>
                            <li>Space Heaters</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>APPLIANCES</li>
                            <li>Dishwashers</li>
                            <li>Freezers</li>
                            <li>Refrigerators</li>
                            <li>Washers & Dryers</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>COOKING APPLIANCES</li>
                            <li>Cookers</li>
                            <li>Cook Top</li>
                          </ul>
                        </div>
                      </div>
                    </div> :
                    show['g'] ? <div className="col-md-9 p-2 bg-light rounded-end" onMouseOver={() => showSec('g')} onMouseOut={() => hideSec('g')}>
                      <div className='row'>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>TELEVISION & VIDEO</li>
                            <li>LED & LCD TVs</li>
                            <li>Receiver</li>
                            <li>Streaming Media Players</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>CAMERAS</li>
                            <li>Digital Cameras</li>
                            <li>Wearable & Action cameras</li>
                          </ul>
                        </div>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>HOME AUDIO</li>
                            <li>Home Theater Systems</li>
                            <li>Speakers</li>
                            <li>Portable Speakers & Docks</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>HEADPHONES</li>
                            <li>Over-Ear Headphones</li>
                            <li>Earbud Headphones</li>
                            <li>On-Ear Headphones</li>
                          </ul>
                        </div>
                      </div>
                    </div> :
                    show['h'] ? <div className="col-md-9 p-2 bg-light rounded-end" onMouseOver={() => showSec('h')} onMouseOut={() => hideSec('h')}>
                      <div className='row'>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>LAPTOPS</li>
                            <li>2 in 1 Laptops</li>
                            <li>Gaming Laptops</li>
                            <li>Traditional Laptops</li>
                            <li>Macbooks</li>
                            <li>DATA STORAGE</li>
                            <li>USB Flash Drives</li>
                            <li>External Hard Drives</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>COMPUTERS & ACCESSORIES</li>
                            <li>Laptop Accessories</li>
                            <li>Desktops</li>
                            <li>Monitors</li>
                            <li>Printers</li>
                            <li>Scanners</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>COMPUTER COMPONENTS</li>
                            <li>Internal Hard Drives</li>
                            <li>Graphics Cards</li>
                            <li>Fans & Cooling</li>
                          </ul>
                        </div>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>COMPUTER ACCESSORIES</li>
                            <li>Audio & Video Accessories</li>
                            <li>Computer Cable Adapters</li>
                            <li>Keyboards, Mice & Accessories</li>
                            <li>Printer Ink & Toner</li>
                            <li>USP Gadgets</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>NETWORKING PRODUCTS</li>
                            <li>Routers</li>
                            <li>Wireless Access Points</li>
                          </ul>
                        </div>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>TOP BRANDS</li>
                            <li>HP</li>
                            <li>Lenovo</li>
                            <li>Dell</li>
                            <li>Apple</li>
                          </ul>
                        </div>
                      </div>
                    </div> :
                    show['i'] ? <div className="col-md-9 p-2 bg-light rounded-end" onMouseOver={() => showSec('i')} onMouseOut={() => hideSec('i')}>
                      <div className='row'>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>CARDIO TRAINING</li>
                            <li>Treadmills</li>
                            <li>Exercise Bike</li>
                            <li>Elliptical Trainers</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>STRENGTH TRAINING EQUIPMENT</li>
                            <li>Dumbbells</li>
                            <li>Bars</li>
                            <li>Core & Abdominal Trainers</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>ACCESSORIES</li>
                            <li>Exercise Bands</li>
                            <li>Jump Ropes</li>
                            <li>Exercise Mats</li>
                          </ul>
                        </div>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>SPORTS & FITNESS</li>
                            <li>Accessories</li>
                            <li>Swimming</li>
                            <li>Team Sports</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>OUTDOOR & ADVENTURE</li>
                            <li>Cycling</li>
                            <li>Running</li>
                          </ul>
                        </div>
                      </div>
                    </div> :
                    show['j'] ? <div className="col-md-9 p-2 bg-light rounded-end" onMouseOver={() => showSec('j')} onMouseOut={() => hideSec('j')}>
                      <div className='row'>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>PLAYSTATION 5</li>
                            <li>Consoles</li>
                            <li>Games</li>
                            <li>Controllers</li>
                            <li>Cards</li>
                            <li>Accessories</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>PLAYSTATION 4</li>
                            <li>PS4</li>
                            <li>PS4 Games</li>
                            <li>PS4 Controllers</li>
                            <li>Cards</li>
                            <li>Accessories</li>
                            <li>PS4 Cases</li>
                          </ul>
                        </div>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>XBOX</li>
                            <li>Games</li>
                            <li>Controllers</li>
                            <li>Accessories</li>
                            <li>Nintendo Switch</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>PC GAMING</li>
                            <li>Gaming Laptops</li>
                            <li>Headsets</li>
                            <li>Keyboards</li>
                            <li>Mouse</li>
                            <li>Gaming Chairs</li>
                            <li>Monitors</li>
                          </ul>
                        </div>
                      </div>
                    </div> :
                    show['k'] ? <div className="col-md-9 p-2 bg-light rounded-end" onMouseOver={() => showSec('k')} onMouseOut={() => hideSec('k')}>
                      <div className='row'>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>CAR CARE</li>
                            <li>Cleaning Kits</li>
                            <li>Exterior Care</li>
                            <li>Interior Care</li>
                            <li>Finishing</li>
                            <li>Glass Care</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>CAR ELECTRONICS & ACCESSORIES</li>
                            <li>Car Electronics</li>
                            <li>Car Electronics Accessories</li>
                          </ul>
                          <ul className='list-unstyled'>
                            <li>LIGHTS & LIGHTING ACCESSORIES</li>
                            <li>Light Covers</li>
                            <li>Bulbs</li>
                            <li>Accent & Off Road Lighting</li>
                          </ul>
                        </div>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>OILS &S</li>
                            <li>Brake Fluids</li>
                            <li>Flushes</li>
                            <li>Greases & Lubricants</li>
                            <li>Oils</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>EXTERIOR ACCESSORIES</li>
                            <li>Car Covers</li>
                            <li>Mirrors</li>
                            <li>Bumper Stickers, Decals & Magnets</li>
                          </ul>
                        </div>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>INTERIOR ACCESSORIES</li>
                            <li>Air Fresheners</li>
                            <li>Consoles & Organizers</li>
                            <li>Covers</li>
                            <li>Cup Holders</li>
                            <li>Mirrors</li>
                            <li>Key Chains</li>
                            <li>Floor Mats & Cargo Liners</li>
                            <li>Sun Protection</li>
                            <li>Seat Covers & Accessories</li>
                          </ul>
                        </div>
                      </div>
                    </div> :
                    show['l'] ? <div className="col-md-9 p-2 bg-light rounded-end" onMouseOver={() => showSec('l')} onMouseOut={() => hideSec('l')}>
                      <div className='row'>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>GARDEN & OUTDOORS</li>
                            <li>Outdoor Decor</li>
                            <li>Outdoor Furniture & Accessories</li>
                            <li>Grills & Outdoor Cooking</li>
                            <li>Gardening & Lawn Care</li>
                            <li>Watering Equipment</li>
                            <li>Farm & Ranch</li>
                          </ul>
                        </div>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>BOOKS, MOVIES AND MUSIC</li>
                            <li>Art & Humanities</li>
                            <li>Bestselling Books</li>
                            <li>Biography & Autobiography Books</li>
                            <li>Business & Finance Books</li>
                            <li>Education & Learning</li>
                            <li>Entertainment Books</li>
                            <li>Family & Lifestyle Books</li>
                            <li>Fiction Books</li>
                            <li>Journals & Planners</li>
                            <li>Magazines</li>
                            <li>Motivational & Self-Help Books</li>
                            <li>Religion Books</li>
                            <li>Science & Technology Books</li>
                          </ul>
                        </div>
                        <div className='col'>
                          <ul className='list-unstyled mb-0'>
                            <li>HAND CRAFTED</li>
                            <li>Women Accessories</li>
                            <li>Baby Products</li>
                            <li>Bags</li>
                            <li>Bedding</li>
                            <li>Home Décor</li>
                            <li>Jewelry & Accessories</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>INDUSTRIAL & SCIENTIFIC</li>
                          </ul>
                          <ul className='list-unstyled mb-0'>
                            <li>PET SUPPLIES</li>
                            <li>Dogs</li>
                            <li>Cats</li>
                            <li>Birds</li>
                          </ul>
                        </div>
                      </div>
                    </div> : ''}
        </div>
  
      </div>
      <div className='d-flex d-md-none container p-1 rounded bg-light' style={{overflowX: 'scroll'}}>

                        <img
                          className="d-block w-100"
                          src="https://eg.jumia.is/cms/bf-22-live-2/brand-day/AEO/Floor2/AEO_-_General__-Desktop-EN_-(1).png"
                          alt="First slide"
                        />

                        <img
                          className="d-block w-100"
                          src="https://eg.jumia.is/cms/bf-22-live-2/OPT-17/Men&Women/Blue/Sweatshirt_&_Jackets_-Desktop-EN_.png"
                          alt="Second slide"
                        />
  
                        <img
                          className="d-block w-100"
                          src="https://eg.jumia.is/cms/bf-22-live-2/OPT-24/Lenovo/Blue/Lenovo----Desktop-EN_.png"
                          alt="Third slide"
                        />
  

                  </div>
      
      </div>
          )
}
