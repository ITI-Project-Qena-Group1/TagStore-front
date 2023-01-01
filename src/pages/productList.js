import React from "react";
import Navbar from "../Components/Navbar2"
import { useState, useEffect } from "react";
import {Container} from "react-bootstrap";
import SideNavbar from "../Components/footer/sideNavbar";
import './RegisterPage/RegisterForm.css';
import ProductCard from "./productCard";
import axiosInstance from "../axiosConfig/axiosInstance";
import Footer from "../Components/footer/footer";

export default function ProductList() {
    const [brand, setBrand] = useState({
        a: "Aldoha",
        b: "El Maleka",
        c: "Free",
        d: "Gawaher",
        e: "Generic",
        f: "italiano",
        g: "Kellogg's",
        h: "Leno",
        i: "Mr. Foods",
        j: "Nabtah",
        k: "Ottima",
        l: "Regina",
        m: "Rich Diet",
        n: "Royal"
    });
    const [cat, setCat] = useState({
        a: "Food CupBoard",
        b: "Beverages",
        c: "CANNED, JARRED & PACKAGED FOODS"
    });

    const [change, setchange] = useState([])
    const [products , setProducts]  = useState([])

    useEffect(() => {
        axiosInstance.get("/products").then((res)=>{
            console.log(res.data);
            setProducts(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[]);

    function handleChange(evt) {
        setchange([...change, evt])
    }

    return (
        <>  
            <Navbar/>
            <div className="bg-light container">
                <div className="container-fluid">
                    <div className="container-fluid mt-4 d-flex justify-content-evenly">
                        <div className="col-3 bg-white"> <SideNavbar className="" brandProp={brand} catProp={cat} /> </div>
                        <div className="col-9 mx-3 bg-white">
                            <div className="container d-flex justify-content-between mt-3"> <h5>{cat.a}</h5> </div>
                            <Container> <hr /> </Container>
                            <div className="d-flex justify-content-center p-1 flex-wrap">
                                {products.map((prd) => {
                                    return <>
                                        <ProductCard changed={(evt) => handleChange(evt)} cart={false} key={prd.id} id={prd.id} title={prd.title} image={prd.image} price={prd.price} rating={prd.rating} />
                                    </>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

