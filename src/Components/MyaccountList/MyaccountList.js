import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MyaccountList.scss";

export default function MyaccountList(props) {
  const [trans]=useState(['My Jumia Account','Orders','Inbox','Pending Reviews','Jumia Credit','Saved Items','Recently Viewed','Details','Address Book','Newsletter Preferences','LOGOUT'])

  return (
    <>
      <div
        className="col-md-3 me-1"
        style={{backgroundColor: "wite",borderRadius: 4,boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",height: "100%",}}>
           
                  {/* /////My Jumia Account */}
        <ul className="nav flex-column align-middle aside-nav p-2 myaccount-a">
          <li className="nav-item ">
            <i className="far fa-user" style={{ fontSize: 20 }} />{" "}
            <NavLink to="/Myaccount">
              <a className="nav-link text-dark active d-inline-block" href>
                {trans[0]}
              </a>
            </NavLink>
          </li>


                   {/* ////Orders */}
          <li className="nav-item">
            <i className="far fa-box" style={{ fontSize: 20 }} />{" "}
            <NavLink to="/orders">
              <a className="nav-link text-dark d-inline-block" href> {trans[1]} </a>
            </NavLink>
          </li>


            {/* //////  Inbox /////// */}
          <li className="nav-item">
            <i className="far fa-envelope" style={{ fontSize: 20 }} />
            <a className="nav-link text-dark d-inline-block" href>
             {trans[2]}
            </a>
          </li>



          {/* /////Pending Reviews */}
          <li className="nav-item">
            <i className="far fa-comment-alt" style={{ fontSize: 20 }} />{" "}
            <a className="nav-link text-dark d-inline-block" href>
              {trans[3]}
            </a>
          </li>

            {/* ////Jumia Credit */}
          <li className="nav-item">
            <i className="far fa-credit-card" style={{ fontSize: 20 }} />{" "}
            <a className="nav-link text-dark d-inline-block" href>
              {trans[4]}
            </a>
          </li>


          {/* ////Saved Items///// */}
          <li className="nav-item">
            <i className="far fa-heart" style={{ fontSize: 20 }} />{" "}
            <a className="nav-link text-dark d-inline-block" href>
              {trans[5]}
            </a>
          </li>

              {/* // Recently Viewed */}
          <li className="nav-item">
            <i className="fas fa-history" style={{ fontSize: 20 }} />{" "}
            <a className="nav-link text-dark d-inline-block " href>
              {trans[6]}
            </a>
          </li>

          {/* ////Details */}
          <hr />
          <li>
            <a className="nav-link text-dark" href>
              {trans[7]}
            </a>
          </li>


          {/* /////Address Book */}
          <li className="nav-item">
            <a className="nav-link text-dark" href>
             {trans[8]}
            </a>
          </li>


          {/* //////Newsletter Preferences */}
          <li className="nav-item">
            <a className="nav-link text-dark" href>
             {trans[9]}
            </a>
          </li>

          {/* ///////LOGOUT/// */}
          <hr />
          <div className="text-center align-middle mb-3 ">
            <a
              href
              className="text-decoration-none myaccount-logout p-1"
              style={{ color: "#f68b1e", fontWeight: 500 }}
              onClick={props.logout}
            >
              {trans[10]}
            </a>
          </div>
        </ul>
      </div>
    </>
  );
}