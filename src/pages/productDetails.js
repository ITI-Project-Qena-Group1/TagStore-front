import React, { useEffect, useState } from 'react';
import mainNavbar from "../Components/Navbar2"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineHeart, AiOutlineStar, AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai"
import { RiErrorWarningFill } from "react-icons/ri"
import { FaPaperPlane } from "react-icons/fa"
import { GiAlliedStar } from "react-icons/gi"
import { RiSecurePaymentLine , RiShieldStarFill } from "react-icons/ri"
import { TbTruckDelivery , TbTruckReturn } from "react-icons/tb"
import {FaTruckPickup} from "react-icons/fa"
import { useParams } from 'react-router-dom';
import axiosInstance from "../axiosConfig/axiosInstance";

export default function ProductDetails() {

    const params = useParams()
    const [product , setProduct] = useState({})
    
    useEffect(()=>{
        axiosInstance.get(`/products/${params.id}`).then((res)=>{
            console.log(res);
            setProduct(res.data)
        },[])
    })

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <mainNavbar />
            <div className="bg-light container">
                <div className="d-md-flex d-sm-block">
                    <div className="col col-md-9">
                        <section className="d-md-flex d-sm-block bg-white">
                            <div>
                                <img src="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/710733/1.jpg?0045" style={{ width: "350px", height: "auto" }} />
                            </div>
                            <div className="mt-3">
                                <div className="d-flex">
                                    <h3 className="">{product.title}</h3>
                                    <AiOutlineHeart style={{ color: "#f68b1e", fontSize: "30px" }} />
                                </div>
                                <div className="">
                                    <h6>Brand: <a href="#">XIAOMI</a> | <a href="#">Similar products from XIAOMI</a> </h6>
                                </div>
                                <div className="stars">
                                    <AiOutlineStar style={{ color: "#f68b1e", fontSize: "25px" }} /> <AiOutlineStar style={{ color: "#f68b1e", fontSize: "25px" }} /> <AiOutlineStar style={{ color: "#f68b1e", fontSize: "25px" }} /> <AiOutlineStar style={{ color: "#f68b1e", fontSize: "25px" }} /> <AiOutlineStar style={{ color: "#f68b1e", fontSize: "25px" }} />
                                </div>
                                <hr />
                                <div className="">
                                    <h2>EGP 15,999.00</h2>
                                    <p className="text-danger"><RiErrorWarningFill /> 1 units left</p>
                                </div>
                                <div className="">
                                    <a><AiFillPlusSquare style={{ fontSize: "40px", color: "#f68b1e", cursor: "pointer" }} /></a> 2 {" "} <a><AiFillMinusSquare style={{ fontSize: "40px", color: "#f68b1e", cursor: "pointer" }} /></a>
                                </div>
                                <button style={{backgroundColor: "#f68b1e" , color:"white" , fontSize:"18px"}} className='btn mt-3 col-4'>Add to cart</button>
                                <hr />
                                <div>
                                    <h5>PORMOTIONS</h5>
                                    <h6><FaPaperPlane style={{ color: "#f68b1e", fontSize: "20px" }} /> <a href="#">Free Shipping Nationwide, on orders above 75 EGP</a></h6>
                                    <h6><GiAlliedStar style={{ color: "#f68b1e", fontSize: "20px" }} /> <a href="#">Enjoy installments from 6 months to 60 months with valU.</a></h6>
                                    <h6><RiSecurePaymentLine style={{ color: "#f68b1e", fontSize: "20px" }} /> <a href="#">Your landline bill is available now, pay it from here in seconds!</a></h6>
                                </div>
                            </div>
                        </section>
                        <section className="product-Details mt-3 bg-white col d-none d-md-block">
                            <h2>Product Details</h2>
                            <hr />
                            <img src="https://eg.jumia.is/cms/external/pet/XI606MP1A9LZHNAFAMZ/9ec8fce78d86bdc7ea4ad5b2eb4da58b.jpg" style={{ width: "100%", height: "auto" }} />
                            <img className="mt-3" src="https://eg.jumia.is/cms/external/pet/XI606MP1A9LZHNAFAMZ/9fb61b77ee5f836d8241d21dbff5235b.jpg" style={{ width: "100%", height: "auto" }} />
                            <img className="mt-3" src="https://eg.jumia.is/cms/external/pet/XI606MP1A9LZHNAFAMZ/a2a0fb29ef2c2ce506cd067333610346.jpg" style={{ width: "100%", height: "auto" }} />
                            <img className="mt-3" src="https://eg.jumia.is/cms/external/pet/XI606MP1A9LZHNAFAMZ/31508e95b4ae6bfd24111853aa87642d.jpg" style={{ width: "100%", height: "auto" }} />
                            <img className="mt-3" src="https://eg.jumia.is/cms/external/pet/XI606MP1A9LZHNAFAMZ/de3729a7449dddaaf60760afa5d919a8.jpg" style={{ width: "100%", height: "auto" }} />
                            <img className="mt-3" src="https://eg.jumia.is/cms/external/pet/XI606MP1A9LZHNAFAMZ/656d4d1cc1af7b44077fb1f96b122de7.jpg" style={{ width: "100%", height: "auto" }} />
                            <img className="mt-3" src="https://eg.jumia.is/cms/external/pet/XI606MP1A9LZHNAFAMZ/507d55e93394008d833a42ec39c6beaa.jpg" style={{ width: "100%", height: "auto" }} />
                            <img className="mt-3" src="https://eg.jumia.is/cms/external/pet/XI606MP1A9LZHNAFAMZ/819e792687e78752f63870f6c93009fa.jpg" style={{ width: "100%", height: "auto" }} />
                            <img className="mt-3" src="https://eg.jumia.is/cms/external/pet/XI606MP1A9LZHNAFAMZ/16c54c51ea32101955bfe9245887e3f3.jpg" style={{ width: "100%", height: "auto" }} />
                            <img className="mt-3" src="https://eg.jumia.is/cms/external/pet/XI606MP1A9LZHNAFAMZ/b190aeb7944a8b922fdf8be18e9232b8.jpg" style={{ width: "100%", height: "auto" }} />
                            <img className="mt-3" src="https://eg.jumia.is/cms/external/pet/XI606MP1A9LZHNAFAMZ/b82af0708c6aea8f70a1fcdbd648e876.jpg" style={{ width: "100%", height: "auto" }} />
                        </section>
                        <section className="specifications mt-3 bg-white col">
                            <h2>Specifications</h2>
                            <hr />
                            <div className="d-flex">
                                <div className="col-6">
                                    <ul class="list-group">
                                        <li class="list-group-item">KEY FEATURES</li>
                                        <ul class="list-group-item">
                                            <li style={{ listStyle: "square" }}>Brand : Xiaomi</li>
                                            <li style={{ listStyle: "square" }}>Color :  Meteorite Gray</li>
                                            <li style={{ listStyle: "square" }}>Network 2G : GSM 900 / 1800 / 1900</li>
                                            <li style={{ listStyle: "square" }}>Network 3G : HSDPA 900 / 1900 / 2100</li>
                                            <li style={{ listStyle: "square" }}>4G Network : LTE / 5G Network</li>
                                            <li style={{ listStyle: "square" }}>SIM card : Dual SIM (Nano-SIM, dual stand-by)</li>
                                            <li style={{ listStyle: "square" }}>SIM card : Dual SIM</li>
                                            <li style={{ listStyle: "square" }}>Chipset : MediaTek MT6893 Dimensity 1200 5G (6 nm)</li>
                                            <li style={{ listStyle: "square" }}>CPU (Processor) : Octa Core</li>
                                            <li style={{ listStyle: "square" }}>CPU : Speed (GHz) Octa-core (1x2.84 GHz Kryo 680 & 3x2.42 GHz Kryo 680 & 4x1.80 GHz Kryo 680)</li>
                                            <li style={{ listStyle: "square" }}>GPU : Mali-G77 MC9</li>
                                            <li style={{ listStyle: "square" }}>RAM : 8 GB</li>
                                            <li style={{ listStyle: "square" }}>Display Size : 6.67 inches</li>
                                            <li style={{ listStyle: "square" }}>Display Type : 6.67 inches, 1080 x 2400 pixels, AMOLED, Dolby Vision, 1B colors, 120Hz, HDR10+, 800 nits (typ), 1000 nits (peak), Corning Gorilla Glass Victus</li>
                                        </ul>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul class="list-group">
                                        <li class="list-group-item">SPECIFICATIONS</li>
                                        <ul class="list-group-item">
                                            <li> <span style={{ fontWeight: "bolder" }}>SKU:</span> XI606MP1A9LZHNAFAMZ</li>
                                            <li> <span style={{ fontWeight: "bolder" }}>Model:</span> 11T Pro</li>
                                            <li> <span style={{ fontWeight: "bolder" }}>Size (L x W x H cm):</span> 164.1 x 76.9 x 8.8 mm</li>
                                            <li> <span style={{ fontWeight: "bolder" }}>Color:</span>  Meteorite Gray</li>
                                            <li> <span style={{ fontWeight: "bolder" }}>Main Material:</span> Glass front (Gorilla Glass Victus), aluminum frame, glass back</li>

                                        </ul>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col col-md-3 bg-white">
                        <h5 className='mt-3' style={{ fontWeight: "bold" }}>DELIVERY & RETURNS</h5>
                        <hr />
                        <label><h5>Choose your location</h5></label>
                        <select name="gender" className="form-control shadow-none text-center">
                            <option value="Giza" >Giza</option>
                            <option value="Cairo" >Cairo</option>
                            <option value="Mansourah" >Mansourah</option>
                            <option value="Qena" >Qena</option>
                            <option value="Sohag" >Sohag</option>
                            <option value="Luxor" >Luxor</option>
                            <option value="Assiut" >Assiut</option>
                            <option value="Aswan" >Aswan</option>
                            <option value="Ismailia" >Ismailia</option>
                            <option value="Portsaied" >Portsaied</option>
                            <option value="Alexandria" >Alexandria</option>
                        </select>
                        <div className="mt-3">
                            <div className='mt-3 d-flex'>
                                <div className="mx-2"><TbTruckDelivery style={{ fontSize: "50px" }} /></div>
                                <div>
                                    <div className='d-flex justify-content-between'>
                                        <p style={{ fontWeight: "bold" }}>Door Delivery</p>
                                        <a variant="primary" onMouseOver={()=>handleShow()}>
                                            Details
                                        </a>
                                    </div>
                                    <div>
                                        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Delivery & Shipping</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div>
                                                    Delivery time starts from the day you place your order to the day one of our associates makes a first attempt to deliver to you.
                                                    Delivery will be attempted 2 times over 5 days (9.00 am to 6.00 pm) after which the item will be cancelled, if you are unreachable or unable to receive the order.
                                                </div>
                                                <p className='mt-3' style={{ fontWeight: "bold", color: "gray" }}>DELIVERY FEE DETAILS</p>
                                                <div className='d-flex justify-content-between'>
                                                    <p style={{ fontWeight: "bold" }}>Total Delivery Amount</p>
                                                    <p style={{ fontWeight: "bold" }}>EGP 22.23</p>
                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                    <p>Delivery EGP 22.23</p>
                                    <p>Delivery by 12 December when you order within next 15hrs 55mins</p>
                                </div>
                            </div>

                            <div className='mt-3 d-flex'>
                                <div className="mx-2"><FaTruckPickup style={{ fontSize: "50px" }} /></div>
                                <div>
                                    <div className='d-flex justify-content-between'>
                                        <p style={{ fontWeight: "bold" }}>Pickup Station</p>
                                        <a variant="primary" onClick={()=>handleShow()}>
                                            Details
                                        </a>
                                    </div>
                                    <div>
                                        <Modal
                                            show={show}
                                            onHide={handleClose}
                                            backdrop="static"
                                            keyboard={false}
                                        >
                                            <Modal.Header closeButton>
                                                <Modal.Title>Delivery & Shipping</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <p className='mt-3' style={{ fontWeight: "bold", color: "gray" }}>PICKUP STATION</p>
                                                <div>
                                                    Delivery time starts from the day you place your order to the day your order arrives at the pickup station. You will be notified of your order's arrival, and you have to retrieve it within 5 days. If the order is not picked up, it will be automatically cancelled.
                                                </div>
                                                <p className='mt-3' style={{ fontWeight: "bold", color: "gray" }}>DELIVERY FEE DETAILS</p>
                                                <div className='d-flex justify-content-between'>
                                                    <p style={{ fontWeight: "bold" }}>Total Delivery Amount</p>
                                                    <p style={{ fontWeight: "bold" }}>EGP 10.83</p>
                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                    <p>Delivery EGP 10.83</p>
                                    <p>Pickup by 12 December when you order within next 15hrs 55mins</p>
                                </div>
                            </div>

                            <div className='mt-3 d-flex'>
                                <div className="mx-2"><TbTruckReturn style={{ fontSize: "50px" }} /></div>
                                <div>
                                    <div className='d-flex justify-content-between'>
                                        <p style={{ fontWeight: "bold" }}>Return Policy</p>
                                    </div>
                                    <p>Free return within the legal return period from 14 to 30 days, and if they meet the terms & conditions, For more details about return policy.<a href='#'>See more</a> </p>
                                </div>
                            </div>

                            <div className='mt-3 d-flex'>
                                <div className="mx-2"><RiShieldStarFill style={{ fontSize: "50px" }} /></div>
                                <div>
                                    <div className='d-flex justify-content-between'>
                                        <p style={{ fontWeight: "bolder" }}>Warranty</p>
                                    </div>
                                    <p>Without Warranty</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

