import React, { useEffect } from "react";
import MyaccountList from "../../Component/MyaccountList/MyaccountList";
import DetailsCard from "../../Component/DetailsCard/DetailsCard";
import Carsoual from "../../Component/Carsoual/Carsoual";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Store/actions/ProductActions/getAllProducts";
import './Myaccount.scss'
import { getAllUsers } from "../../Store/actions/UserActions/userActions";
import { signout } from "../../Store/actions/authen/authen";
import { useNavigate } from "react-router";
import { getSingleUser } from "../../Store/actions/UserActions/getSingleUser";

export default function Myaccount() {
 
  
  let  id
  if(JSON.parse(localStorage.getItem("user"))==null){
    id = ""
  } else {
    id = JSON.parse(localStorage.getItem("user")).userId;
  }


 
  let navigate = useNavigate();
  const user = useSelector((state) => state.users);
 
  const products = useSelector((state) => state.AllProducts);
  const items = products.slice(0, 3);

  console.log("products", products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getSingleUser(id));
  }, );

  const users = useSelector((state) => state.users);

 
  const logout = () => {
    dispatch(signout());
    navigate("/");
  };

  return (
    <>
    
      <section className="row container d-flex  m-auto main-sectionFirst mb-5 "
      style={{backgroundColor:""}}>
        <MyaccountList logout={logout} />
        <div
          className="col-md-9 row   ms-2   "
          style={{
            boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
            backgroundColor: "white",
            borderRadius: 4,
          }}
        >
          <header>
            <h3 className="pt-2"> Account Overview </h3>
            <hr />
          </header>
          <div className="row mb-3">
            <DetailsCard
              className="mb-2"
              header= 'ACCOUNT DETAILS'
              main={user.name}
              secondary={user.email}
              orangePart='Change Password'
            />
            <DetailsCard
              className="mb-2"
              header="ADDRESS BOOK"
              main="Your default shipping address"
              secondary="Hala 15 st Aziz antwan Seouf shamaa victoria first floorAl Seyouf, Alexandria+20 1204810748 /"
              orangePart=""
            />
            <DetailsCard
              className="mb-2"
              header="JUMIA PRIMO"
              main="Jumia Primo"
              secondary="Jumia Primo is a loyalty "
              orangePart="SUBSCRIBE JUMIA PRIMO"
            />
            <DetailsCard className="mb-2" main="EGP 0.00" />
          </div>
        </div>
      </section>
      {/* currousel */}

      <div className="container card mt-3 mb-5">
        <div className="row">
          <div className="col-12  pt-2 text-start">
            <p className="fw-bold fs-5 ps-2">'Recommended for you'</p>
          </div>
        </div>

        <div className=" HomePage-img  row p-1">
          <div className="col ">
            <Carsoual products={products} />
          </div>
        </div>
      </div>

      <div className="container card mt-3 mb-5">
        <div className="row">
          <div className="col-12  pt-2 text-start">
            <p className="fw-bold fs-5 ps-2">' Recently Viewed'</p>
          </div>
        </div>

        <div className=" HomePage-img  row p-1">
          <div className="col ">
            <Carsoual products={items} />
          </div>
        </div>
      </div>

     
    </>
  );
}