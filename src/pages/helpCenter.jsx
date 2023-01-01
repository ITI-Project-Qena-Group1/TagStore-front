import React, { Component, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./helpCenter.css";
import Navbar from "../Components/Navbar2";
import langContext from "../context/LangContext";
import TopNav from "../Components/TopNav";

const HelpCenter = () => {
  const value = React.useContext(langContext);
  let { selectedLang } = value.state;
  let {
    howCanWeHelpYou,
    descibeYourIssue,
    PlaceTrackOrder,
    OrderCancellation,
    ReturnsRefunds,
    PaymentJumiaAccount,
    ChooseYourDesiredServices,
    HowtoShoponJumia,
    Howtotrackyourorder,
    DeliveryTimelines,
    FAQS,
    Stepstocancelyourorder,
    ReturnPolicy,
    HowtoReturnyourorder,
    WarrantyServiceCenter,
    JumiaPay,
    Cashondelivery,
    Vouchers,
    Howtochooseyourpayment,
    OtherServices,
    learnmore,
  } = value.state.lang;

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
      <Navbar />
      <div className="container text-align-center">
        <div>
          <div className="header">
            <img
              src="https://static.jumia.com.eg/cms/JPages-Revamp/Help-Center/Banners/1170_295_EN.jpg"
              alt=""
            />
          </div>

          <div className="text-center col-sm-10 mx-5 ">
            <div className="my-3">{howCanWeHelpYou}</div>

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
                placeholder={descibeYourIssue}
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
              <div className="cat-txt">{PlaceTrackOrder}</div>
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

              <div className="cat-txt">{OrderCancellation}</div>
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
              <div className="cat-txt">{ReturnsRefunds}</div>
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
              <div className="cat-txt">{PaymentJumiaAccount}</div>
            </div>
          </div>
        </div>

        <div>
          <div className="py-5">
            <h2>{ChooseYourDesiredServices}</h2>
          </div>

          <div>
            <div className="row bg-white border rounded-4">
              <div className=" col-3  border rounded-4">
                <div className="vertical-menu">
                  <a onMouseOver={() => handleService1()} href="#">
                    {PlaceTrackOrder} &gt;&gt;
                  </a>
                </div>
                <div className="vertical-menu">
                  <a onMouseOver={() => handleService2()} href="#">
                    {OrderCancellation} &gt;&gt;
                  </a>
                </div>
                <div className="vertical-menu">
                  <a onMouseOver={() => handleService3()} href="#">
                    {ReturnsRefunds} &gt;&gt;
                  </a>
                </div>
                <div className="vertical-menu">
                  <a onMouseOver={() => handleService4()} href="#">
                    {PaymentJumiaAccount} &gt;&gt;
                  </a>
                </div>
              </div>

              <div className="Services col-6">
                {service == 1 ? (
                  <div className="service">
                    <h3>{PlaceTrackOrder}</h3>

                    <div>
                      <a href="">{HowtoShoponJumia}</a>
                    </div>
                    <div>
                      <a href="">{Howtotrackyourorder}</a>
                    </div>
                    <div>
                      <a href="">{DeliveryTimelines}</a>
                    </div>
                  </div>
                ) : service == 2 ? (
                  <div className="service">
                    <h3>{{ OrderCancellation }}</h3>
                    <div>
                      <a href="">{FAQS}</a>
                    </div>
                    <div>
                      <a href="">{Stepstocancelyourorder}</a>
                    </div>
                  </div>
                ) : service == 3 ? (
                  <div className="service">
                    <h3>{ReturnPolicy}</h3>

                    <div>
                      <a href="">{ReturnPolicy}</a>
                    </div>
                    <div>
                      <a href="">{HowtoReturnyourorder}</a>
                    </div>
                    <div>
                      <a href="">{ReturnPolicy}</a>
                    </div>
                    <div>
                      <a href="">{FAQS}</a>
                    </div>
                    <div>
                      <a href="">{WarrantyServiceCenter}</a>
                    </div>
                  </div>
                ) : (
                  service == 4 && (
                    <div className="service">
                      <h3>{PaymentJumiaAccount}</h3>

                      <div>
                        <a href="">{JumiaPay}</a>
                      </div>
                      <div>
                        <a href="">{Cashondelivery}</a>
                      </div>
                      <div>
                        <a href="">{Vouchers}</a>
                      </div>
                      <div>
                        <a href="">{Howtochooseyourpayment}</a>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="my-4">
              <h2 className="my-3">{OtherServices}</h2>
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
                    <button className="btn btn-light">{learnmore}</button>
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
                    <button className="btn btn-light">{learnmore}</button>
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
                    <button className="btn btn-light">{learnmore}</button>
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
                    <button className="btn btn-light">{learnmore}</button>
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
