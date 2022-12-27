import React, { Component, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./helpCenter.css";
import Navbar from '../Components/Navbar2';


const HelpCenter = () => {
  // const [show, setShow] = useState(false);
  // const handlehide = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [service, setService] = useState(1);

  function handleService1() {
    setService(1);
  }

  function handleService2() {
    setService(2);
  }

  function handleService3() {
    setService(3);
  }

  function handleService4() {
    setService(4);
  }

  return (
    <>
    <Navbar/>
      <div className="container text-align-center">
        <div>
          <div className="header">
            <img
              src="https://static.jumia.com.eg/cms/JPages-Revamp/Help-Center/Banners/1170_295_EN.jpg"
              alt=""
            />
          </div>

          <div className="text-center col-sm-10 mx-5 ">
            <div className="my-3">How can we help you?</div>

            <div className="input-group pl-5 ml-5 col-sm-10 bg-transparent text-center">
              <div className="input-group-append">
                <button className="btn btn-light">
                  <FaSearch />
                </button>
              </div>

              <input
                type="search"
                id="form12"
                class="form-control"
                placeholder="Descripe your issue"
              />
            </div>
          </div>

          <div className="row py-5 d-flex justify-content-center">
            <div className="col-sm-2">
              <a href="#">
                <img
                  className="m-4"
                  id="place"
                  src="https://eg.jumia.is/cms/JPages-Revamp/Help-Center/place-track-order.png"
                  alt=""
                  width={"50px"}
                  height={"50px"}
                />
              </a>
              <div className="cat-txt">Place & Track Order</div>
            </div>

            <div className="col-sm-2">
              <a href="#">
                <img
                  className="m-4"
                  id="cancel"
                  src="https://eg.jumia.is/cms/JPages-Revamp/Help-Center/cancelation.png"
                  alt=""
                  width={"50px"}
                  height={"50px"}
                />
              </a>

              <div className="cat-txt">Order Cancellation</div>
            </div>

            <div className="col-sm-2">
              <a href="#">
                <img
                  className="m-4"
                  id="Returns"
                  src="https://eg.jumia.is/cms/JPages-Revamp/Help-Center/returns.png"
                  alt=""
                  width={"50px"}
                  height={"50px"}
                />
              </a>
              <div className="cat-txt">Returns & Refunds</div>
            </div>

            <div className="col-sm-2">
              <a href="#">
                <img
                  className="ml-5 my-4"
                  id="payment"
                  src="https://eg.jumia.is/cms/JPages-Revamp/Help-Center/payment.png"
                  alt=""
                  width={"50px"}
                  height={"50px"}
                />
              </a>
              <div className="cat-txt">Payment & Jumia Account</div>
            </div>
          </div>
        </div>

        <div>
          <div className="py-5">
            <h2>Choose Your Desired Services</h2>
          </div>

          <div>
            <div className="row bg-white border rounded-4">
              <div className=" col-3  border rounded-4">
                <div className="vertical-menu">
                  <a onMouseOver={() => handleService1()} href="#">
                    Place & Track Order &gt;&gt;
                  </a>
                </div>
                <div className="vertical-menu">
                  <a onMouseOver={() => handleService2()} href="#">
                    Order Cancellation &gt;&gt;
                  </a>
                </div>
                <div className="vertical-menu">
                  <a onMouseOver={() => handleService3()} href="#">
                    Returns & Refunds &gt;&gt;
                  </a>
                </div>
                <div className="vertical-menu">
                  <a onMouseOver={() => handleService4()} href="#">
                    Payment & Jumia Account &gt;&gt;
                  </a>
                </div>
              </div>

              <div className="Services col-6">
                {service == 1 ? (
                  <div className="service">
                    <h3>Place & Track Order</h3>

                    <div>
                      <a href="">How to Shop on Jumia?</a>
                    </div>
                    <div>
                      <a href="">How to track your order?</a>
                    </div>
                    <div>
                      <a href="">Delivery Timelines</a>
                    </div>
                  </div>
                ) : service == 2 ? (
                  <div className="service">
                    <h3>Order Cancelation</h3>
                    <div>
                      <a href="">FAQS</a>
                    </div>
                    <div>
                      <a href="">Steps to cancel your order</a>
                    </div>
                  </div>
                ) : service == 3 ? (
                  <div className="service">
                    <h3>Returns & Refunds</h3>

                    <div>
                      <a href="">Return Policy</a>
                    </div>
                    <div>
                      <a href="">How to Return your oder?</a>
                    </div>
                    <div>
                      <a href="">Refund Policy</a>
                    </div>
                    <div>
                      <a href="">FAQS</a>
                    </div>
                    <div>
                      <a href="">Warranty & Service Center</a>
                    </div>
                  </div>
                ) : (
                  service == 4 && (
                    <div className="service">
                      <h3>Payment & Jumia Account</h3>

                      <div>
                        <a href="">Jumia Pay</a>
                      </div>
                      <div>
                        <a href="">Cash on delivery</a>
                      </div>
                      <div>
                        <a href="">Vouchers</a>
                      </div>
                      <div>
                        <a href="">How to choose your payment?</a>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="my-4">
              <h2 className="my-3">Other Services</h2>
            </div>

            <div className="row col-sm-12 py-5">
              <div className="col-sm-3">
                <a
                  href="https://www.jumia.com.eg/sp-international-product-policy/"
                  class="-category -inlineblock -vatop"
                >
                  <img
                    src="https://eg.jumia.is/cms/JPages-Revamp/Help-Center/jumia-global.png"
                    alt=""
                  />

                  <div class="-cta">
                    <button className="btn btn-light">learn more</button>
                  </div>
                </a>
              </div>

              <div className="col-sm-3">
                <a
                  href="https://www.jumia.com.eg/sp-international-product-policy/"
                  class="-category -inlineblock -vatop"
                >
                  <img
                    src="https://eg.jumia.is/cms/JPages-Revamp/Help-Center/jumia-pay.png"
                    alt=""
                  />

                  <div class="-cta">
                    <button className="btn btn-light">learn more</button>
                  </div>
                </a>
              </div>

              <div className="col-sm-3">
                <a
                  href="https://www.jumia.com.eg/sp-international-product-policy/"
                  class="-category -inlineblock -vatop"
                >
                  <img
                    src="https://eg.jumia.is/cms/JPages-Revamp/Help-Center/jumia-express.png"
                    alt=""
                  />

                  <div class="-cta">
                    <button className="btn btn-light">learn more</button>
                  </div>
                </a>
              </div>

              <div className="col-sm-3">
                <a
                  href="https://www.jumia.com.eg/sp-international-product-policy/"
                  class="-category -inlineblock -vatop"
                >
                  <img
                    src="https://eg.jumia.is/cms/JPages-Revamp/Help-Center/official-stores.png"
                    alt=""
                  />

                  <div class="-cta">
                    <button className="btn btn-light">learn more</button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpCenter;
