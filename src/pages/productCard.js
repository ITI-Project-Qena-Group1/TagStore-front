import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, delFromCart } from '../redux/action/productsAction';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import {FaCartPlus} from 'react-icons/fa';
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
        dispatch((addToCart({ id: props.id, title: props.title, image: props.image , price: props.price})))
        setCart(true);
        props.changed(false)
    }

    const delfromcart = () => {
        dispatch((delFromCart(props.id)));
        setCart(false);
        props.changed(false)
    }

    return <>
        {/* <div className="card col-md-3 m-3 col-sm-12">
            <div className="card-img-top" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${props.poster_path})` }}>
                <i className="fas  fa-star fa-1x " onClick={cart ? delfromcart : addtocart} style={{ color: cart ? "yellow" : "white" }} ></i>
            </div>
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt="Card img" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text" > {props.vote_average}</p>
            </div>
            <Link to={`/details/${props.id}`} className="btn btn-primary m-2" > Details </Link>
        </div> */}
            <div className="mx-1" style={{width: '15rem'}}>
                <Card className="productlist mt-3">
                    {/* <Card.Img variant="top" src={props.image}/> */}
                    <div className='w-100 text-center d-flex flex-column justify-content-between' style={{minHeight: '33rem'}}>
                    <div className="w-100 d-flex jusify-items-center" >
                        <img src={props.image} className="p-3 w-100 mx-auto" alt="" />
                    </div>
                    <Card.Body>
                        <div className="d-flex flex-column justify-content-between">
                        <div>
                        <Card.Title>
                            <h6 className="fw-bold mb-2"  style={{width: '90%',clear: 'both', display: 'inline-block', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                                <Link to={`/details/${props.id}`} className="text-dark text-decoration-none mb-2 " data-abc="true">{props.title}</Link>
                            </h6>
                        </Card.Title>
                        <Card.Text>
                            <h6 className="mb-0 font-weight-semibold">{props.price} EGP</h6>
                        </Card.Text>
                        <Card.Text>
                        {props.rating.rate<=1?<div>
                                <AiFillStar style={{color:"#f68b1e"}}/>
                                <AiOutlineStar style={{color:"gray"}}/>
                                <AiOutlineStar style={{color:"gray"}}/>
                                <AiOutlineStar style={{color:"gray"}}/>
                                <AiOutlineStar style={{color:"gray"}}/>
                                ({props.rating.count})
                            </div>
                        :props.rating.rate<=2?<div>
                            <AiFillStar style={{color:"#f68b1e"}}/>
                            <AiFillStar style={{color:"#f68b1e"}}/>
                            <AiOutlineStar style={{color:"gray"}}/>
                            <AiOutlineStar style={{color:"gray"}}/>
                            <AiOutlineStar style={{color:"gray"}}/>
                            ({props.rating.count})
                        </div>
                        :props.rating.rate<=3?<div>
                        <AiFillStar style={{color:"#f68b1e"}}/>
                        <AiFillStar style={{color:"#f68b1e"}}/>
                        <AiFillStar style={{color:"#f68b1e"}}/>
                        <AiOutlineStar style={{color:"gray"}}/>
                        <AiOutlineStar style={{color:"gray"}}/>
                        ({props.rating.count})
                        </div>
                        :props.rating.rate<=4?<div>
                        <AiFillStar style={{color:"#f68b1e"}}/>
                        <AiFillStar style={{color:"#f68b1e"}}/>
                        <AiFillStar style={{color:"#f68b1e"}}/>
                        <AiFillStar style={{color:"#f68b1e"}}/>
                        <AiOutlineStar style={{color:"gray"}}/>
                        ({props.rating.count})
                        </div>
                        :props.rating.rate<=5 &&<div>
                        <AiFillStar style={{color:"#f68b1e"}}/>
                        <AiFillStar style={{color:"#f68b1e"}}/>
                        <AiFillStar style={{color:"#f68b1e"}}/>
                        <AiFillStar style={{color:"#f68b1e"}}/>
                        <AiFillStar style={{color:"#f68b1e"}}/>
                        ({props.rating.count})
                        </div>
                        }
                        </Card.Text>
                        </div>
                        <Card.Text>
                            <button onClick={cart ? delfromcart : addtocart} style={{ color: cart ? "yellow" : "white" }} type="button" className="btn bg-cart r-btn w-100"><FaCartPlus clasName="me-2 text-light"/> Add to cart</button>
                        </Card.Text>
                        </div>
                    </Card.Body>
                    </div>
                </Card>
            </div>
    </>
}