import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, delFromCart } from '../redux/action/productsAction';

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
        dispatch((addToCart({ id: props.id, title: props.title, img: props.image , price: props.price})))
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
                <i class="fas  fa-star fa-1x " onClick={cart ? delfromcart : addtocart} style={{ color: cart ? "yellow" : "white" }} ></i>
            </div>
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt="Card img" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text" > {props.vote_average}</p>
            </div>
            <Link to={`/details/${props.id}`} className="btn btn-primary m-2" > Details </Link>
        </div> */}
            <Col lg={3} md={4} sm={6}>
                <Card className="productlist">
                    <Card.Img variant="top" src={props.image}/>
                    <Card.Body>
                        <Card.Title>
                            <h6 class="font-weight-semibold mb-2">
                                <Link to={`/details/${props.id}`} class="text-default mb-2" data-abc="true">{props.title}</Link>
                            </h6>
                        </Card.Title>
                        <Card.Text>
                            <h6 class="mb-0 font-weight-semibold">{props.price} EGP</h6>
                        </Card.Text>
                        <Card.Text>
                            <div>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                (43)
                            </div>
                        </Card.Text>
                        <Card.Text>
                            <button onClick={cart ? delfromcart : addtocart} style={{ color: cart ? "yellow" : "white" }} type="button" class="btn bg-cart r-btn w-100"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
    </>
}