import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, delFromCart } from '../redux/action/productsAction';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { FaCartPlus } from 'react-icons/fa';
import './RegisterPage/RegisterForm.css';

export default function ProductCard(props) {
    const cartProducts = useSelector(state => state.cart);
    const [cart, setCart] = useState()

    useEffect(() => {
        for (let prd of cartProducts) {
            var x;
            if (prd.id === props.id) {
                x = 1
            }
        }
        if (x === 1) {
            setCart(true)
        } else {
            setCart(false)
        }
    }, [cartProducts, cart, props.id]);


    const dispatch = useDispatch()

    const addtocart = () => {
        dispatch((addToCart({ id: props.id, title: props.title, image: props.image, price: props.price, rate: props.rating })))
        setCart(true);
        props.changed(false)
    }

    return <>
        <div className="mx-1" style={{ width: '15rem' }}>
            <Card className="productlist mt-3">
                {/* <Card.Img variant="top" src={props.image}/> */}
                <div className='w-100 text-center d-flex flex-column justify-content-between' style={{ minHeight: '28rem' }}>
                    <div className="w-100 d-flex jusify-items-center" >
                        <img src={props.image} className="p-3 w-100 mx-auto" style={{height:"250px"}} alt="" />
                    </div>
                    <Card.Body>
                        <div className="d-flex flex-column justify-content-between">
                            <div>
                                <Card.Title>
                                    <h6 className="fw-bold mb-2" style={{ width: '90%', clear: 'both', display: 'inline-block', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                                        <Link to={`/details/${props.id}`} className="text-dark text-decoration-none mb-2 " data-abc="true">{props.title}</Link>
                                    </h6>
                                </Card.Title>
                                <Card.Text>
                                    <h6 className="mb-0 font-weight-semibold">{props.price} EGP</h6>
                                </Card.Text>
                                <Card.Text>
                                    {props.rating.rate <= 1 ? <div>
                                        <AiFillStar style={{ color: "#f68b1e" }} />
                                        <AiOutlineStar style={{ color: "gray" }} />
                                        <AiOutlineStar style={{ color: "gray" }} />
                                        <AiOutlineStar style={{ color: "gray" }} />
                                        <AiOutlineStar style={{ color: "gray" }} />
                                        ({props.rating.count})
                                    </div>
                                        : props.rating.rate <= 2 ? <div>
                                            <AiFillStar style={{ color: "#f68b1e" }} />
                                            <AiFillStar style={{ color: "#f68b1e" }} />
                                            <AiOutlineStar style={{ color: "gray" }} />
                                            <AiOutlineStar style={{ color: "gray" }} />
                                            <AiOutlineStar style={{ color: "gray" }} />
                                            ({props.rating.count})
                                        </div>
                                            : props.rating.rate <= 3 ? <div>
                                                <AiFillStar style={{ color: "#f68b1e" }} />
                                                <AiFillStar style={{ color: "#f68b1e" }} />
                                                <AiFillStar style={{ color: "#f68b1e" }} />
                                                <AiOutlineStar style={{ color: "gray" }} />
                                                <AiOutlineStar style={{ color: "gray" }} />
                                                ({props.rating.count})
                                            </div>
                                                : props.rating.rate <= 4 ? <div>
                                                    <AiFillStar style={{ color: "#f68b1e" }} />
                                                    <AiFillStar style={{ color: "#f68b1e" }} />
                                                    <AiFillStar style={{ color: "#f68b1e" }} />
                                                    <AiFillStar style={{ color: "#f68b1e" }} />
                                                    <AiOutlineStar style={{ color: "gray" }} />
                                                    ({props.rating.count})
                                                </div>
                                                    : props.rating.rate <= 5 && <div>
                                                        <AiFillStar style={{ color: "#f68b1e" }} />
                                                        <AiFillStar style={{ color: "#f68b1e" }} />
                                                        <AiFillStar style={{ color: "#f68b1e" }} />
                                                        <AiFillStar style={{ color: "#f68b1e" }} />
                                                        <AiFillStar style={{ color: "#f68b1e" }} />
                                                        ({props.rating.count})
                                                    </div>
                                    }
                                </Card.Text>
                            </div>
                        </div>
                    </Card.Body>
                    <div className="mb-2">
                        {/* {cart === 0 ? <button onClick={cart ? delfromcart : addtocart} type="button" className="btn r-btn w-100"><FaCartPlus clasName="me-2 text-light" style={{ color: cart ? "black" : "white" }} /> Add to cart</button>
                        :<div>
                        <button type="button" className="btn r-btn fs-3"> + </button>
                        <span> 1 </span>
                        <button type="button" className="btn r-btn fs-3"> - </button>
                    </div>} */}
                    <button onClick={addtocart} type="button" className="btn r-btn w-100"><FaCartPlus clasName="me-2 text-light" style={{ color: cart ? "black" : "white" }} /> Add to cart</button>
                    </div>
                </div>
            </Card>
        </div>
    </>
}