import React, { useEffect } from "react";
import { useState } from "react";
import { Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md"
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar2";
import { addToCart, delFromCart } from '../redux/action/productsAction';

export default function Cart() {

    const cartProducts = useSelector(state => state.cart);
    const [cart, setCart] = useState()
    const [quantity, setQuantity]=useState(1)

    useEffect(() => {
        
    }, [cartProducts, cart]);


    const dispatch = useDispatch()

    const addtocart = () => {
        dispatch((addToCart()))
    }

    const delfromcart = (id) => {
        dispatch((delFromCart(id)));
    }
    return (
        <>
        <Navbar/>
        <div className="bg-light container mt-4">
            {cartProducts<1?<div className='bg-white'>
                <div className="">
                    <div className="col-12 d-flex justify-content-center">
                        <img src="https://www.jumia.com.eg/assets_he/images/cart.668e6453.svg" alt="" />
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col-12 justify-content-center d-flex text-muted">
                        <h2>EMPTY CART</h2>
                    </div>
                </div>
                <div className="row mt-3 ">
                    <div className="col-12 d-flex justify-content-center">
                        <Button
                            type="button"
                            style={{
                                backgroundColor: "#f68b1e",
                                color: "#ffff",
                                fontWeight: "bold",
                                width: '300px',
                                marginLeft: '10px'
                            }}
                            variant="contained"
                        >
                            {" "}
                            Start Shopping
                        </Button>
                    </div>
                </div>
            </div>
            :
            <div className=" d-md-flex d-sm-block mt-3 justify-content-between">
                <div className="container col-md-8 col-sm-12 mt-2 bg-white">
                    <h3>Cart ({cartProducts.length})</h3>
                    <hr />
                    {cartProducts.map((item)=>{
                        return (<div className="cartItems" >
                        <div className="d-md-flex d-sm-block justify-content-between">
                            <div className="col-10" style={{ fontSize: "16px", wordWrap: "break-word", OTextOverflow: "ellipsis"}}>
                                <div className="d-flex">
                                    <div className="">
                                        <div className="d-flex">
                                            <div className="col-3">
                                                <img src={item.image} className="w-100 d-block" />
                                            </div>
                                            <div >
                                                {" "}
                                                <Link style={{ textDecoration: 'none', color: 'black' }}>
                                                    {item.title}
                                                </Link>
                                                <div className="mt-3" style={{ fontSize: "1.25rem", fontWeight: "bolder" }}>
                                                    {item.price}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="m-3 d-flex justify-content-start" style={{ display: "flex", justifyContent: "space-around" }}>
                                            <div className="btn text-center" style={{ color: "#f68b1e", cursor: "pointer" }}>
                                                <MdDeleteOutline style={{ fontSize: "30px" }} onClick={()=>delfromcart(item.id)}/> <span style={{ fontSize: "18px" }}>REMOVE</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-5">
                                <div className="d-flex align-items-center">
                                    <a><AiFillPlusSquare style={{ fontSize: "40px", color: "#f68b1e", cursor: "pointer" }} /></a> {quantity}{" "} <a><AiFillMinusSquare style={{ fontSize: "40px", color: "#f68b1e", cursor: "pointer" }} /></a>
                                </div>
                            </div>
                        </div>
                    </div>)
                    })}
                </div>
                <div className="container col-md-3 col-sm-12 bg-white mt-2">
                    <h5>CART SUMMARY</h5>
                    <hr />
                    <div className=" d-flex justify-content-between">
                        <div>
                            <h6>SubTotal</h6>
                        </div>
                        <div>
                            <p style={{ fontWeight: "bold" }}>
                                EGP<span> {cartProducts.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</span>
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="">
                        <Button type="button" style={{ backgroundColor: "#f68b1e", color: "#ffff", fontWeight: "bold", }} variant="contained">
                            CHECKOUT (EGP 15.999)
                        </Button>
                    </div>
                </div>
            </div>}
        </div>
        </>
    );
}

