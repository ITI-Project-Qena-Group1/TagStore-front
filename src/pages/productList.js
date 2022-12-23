import React from "react";
import { useState, useEffect } from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import SideNavbar from "../components/footer/sideNavbar";
import '../pages/RegisterPage/RegisterForm.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setProducts } from "../redux/action/productsAction";
import ProductCard from "./productCard";
import axios from "axios"
import axiosInstance from "../axiosConfig/axiosInstance";

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
            setProducts(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    },[]);

    function handleChange(evt) {
        setchange([...change, evt])
    }

    return (
        <>
            <div className="bg-light">
                <div className="container-fluid">
                    <div className="container-fluid mt-4 d-flex justify-content-evenly">
                        <div className="col-3 bg-white"> <SideNavbar className="" brandProp={brand} catProp={cat} /> </div>

                        <div className="col-9 mx-3 bg-white">
                            <div className="container d-flex justify-content-between mt-3"> <h5>{cat.a}</h5> <h5>Sort by:</h5> </div>
                            <Container> <hr /> </Container>
                            <Row className="mt-50" lg={5}>
                                {products.map((prd) => {
                                    return <>
                                        <ProductCard changed={(evt) => handleChange(evt)} cart={false} key={prd.id} id={prd.id} title={prd.title} image={prd.image} price={prd.price} />
                                    </>
                                })}
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

