import React from "react";
import "./orderCancellation.css";
import Navbar from '../Components/Navbar2';
import TopNav from '../Components/TopNav';

const OrderCancellation = () => {
  return (
    <>
    <TopNav/>
    <Navbar/>
      <div className="container">
        <div className="container">
          <div className="fluid d-flex justify-content-center">
            How to cancel your order
          </div>

          <div className="row">
            <div className="col-sm-6">
              <iframe
                width="560"
                height="330"
                src="https://www.youtube.com/embed/3iD2Zl2BVF8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col-sm-6 questions">
              <h5>Frequently Asked Questions</h5>
              <h7>Can I cancel my order?</h7>

              <ul>
                <li>
                  Yes, you can cancel the order if the order is "Confirmed and
                  Processing".
                </li>
                <li>
                  You can't cancel an order if the status is "Shipped", but you
                  can reject receiving the package when the courier contacts
                  you.
                </li>
                <li>
                  You can create a return from your account if the order status
                  is "Delivered".
                </li>
              </ul>

              <h7>My order was prepaid, how will I get a refund?</h7>
              <ul>
                <li>
                  If you cancel your order online, you will receive a refund in
                  your JumiaPay wallet within 24 hours
                </li>
                <li>
                  If you reject the delivery of the order, your refund will be
                  processed as soon as the order is updated to the delivery
                  failure within 48 hours.
                </li>
              </ul>

              <h7>My order has been shipped but I still want to cancel it.</h7>
              <ul>
                <li>
                  If the status of the order is "Shipped", you can reject the
                  package when the courier contacts you to deliver the order.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="d-flex justify-content-center cancellation">
            Steps To Cancel Your Order
          </div>
          <div className="row">
            <div className="col-sm-4 step">
              <div class="text">
                <strong>1.</strong> From the list of Orders in your Jumia
                Account, Click
                <strong> See Details</strong> in front of the order you wish to
                cancel.
              </div>

              <div>
                <img
                  src="https://static.jumia.com.eg/cms/JPages-Revamp/Cancellation/EN/Desk/Desk-EN-1.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="col-sm-4 step">
              <div class="text">
                <strong>2.</strong> Click the <strong> Cancel Item</strong>{" "}
                button.
              </div>
              <div>
                <img
                  src="https://static.jumia.com.eg/cms/JPages-Revamp/Cancellation/EN/Desk/Desk-EN-3.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="col-sm-4 step">
              <div class="text">
                <strong>3.</strong> Select the right quantity and cancellation
                reason from the drop-down list, and submit.
              </div>
              <div>
                <img
                  src="https://static.jumia.com.eg/cms/JPages-Revamp/Cancellation/EN/Desk/Desk-EN-2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="note">
            <p>
              <strong> Note: </strong> For prepaid orders, you will be refunded
              to your{" "}
              <a href="https://www.jumia.com.eg/customer/account/index/">
                {" "}
                Jumia store credit
              </a>{" "}
              within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderCancellation;
