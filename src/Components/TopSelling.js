import React from 'react';
import { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './TopSelling.css';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi';

export const TopSelling = (props) => {
    // const [productsCards, setProductsCards] = useState([
    //     {
    //         img: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/861813/1.jpg?7309",
    //         title: "NIVEA Pack of 2- Fresh Aloe Shower Gel - Natural Aloe Vera & Fresh Scent - 250ml",
    //         price: "EGP 205.00",
    //         oldPrice: "EGP 305.00",
    //         leftItems: "48"
    //     },
    //     {
    //         img: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/667123/1.jpg?8443",
    //         title: "L'Oreal Paris Hyaluron Expert 1.5% Hyaluronic Acid Face Serum 30ml + FREE Hyaluron Expert 24H Repluming Moisturizing Tissue Mask",
    //         price: "EGP 205.00",
    //         oldPrice: "EGP 305.00",
    //         leftItems: "47"
    //     },
    //     {
    //         img: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/861813/1.jpg?7309",
    //         title: "NIVEA Pack of 2- Fresh Aloe Shower Gel - Natural Aloe Vera & Fresh Scent - 250ml",
    //         price: "EGP 205.00",
    //         oldPrice: "EGP 305.00",
    //         leftItems: "48"
    //     },
    //     {
    //         img: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/667123/1.jpg?8443",
    //         title: "L'Oreal Paris Hyaluron Expert 1.5% Hyaluronic Acid Face Serum 30ml + FREE Hyaluron Expert 24H Repluming Moisturizing Tissue Mask",
    //         price: "EGP 205.00",
    //         oldPrice: "EGP 305.00",
    //         leftItems: "47"
    //     },
    //     {
    //         img: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/861813/1.jpg?7309",
    //         title: "NIVEA Pack of 2- Fresh Aloe Shower Gel - Natural Aloe Vera & Fresh Scent - 250ml",
    //         price: "EGP 205.00",
    //         oldPrice: "EGP 305.00",
    //         leftItems: "48"
    //     },
    //     {
    //         img: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/667123/1.jpg?8443",
    //         title: "L'Oreal Paris Hyaluron Expert 1.5% Hyaluronic Acid Face Serum 30ml + FREE Hyaluron Expert 24H Repluming Moisturizing Tissue Mask",
    //         price: "EGP 205.00",
    //         oldPrice: "EGP 305.00",
    //         leftItems: "47"
    //     },
    //     {
    //         img: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/861813/1.jpg?7309",
    //         title: "NIVEA Pack of 2- Fresh Aloe Shower Gel - Natural Aloe Vera & Fresh Scent - 250ml",
    //         price: "EGP 205.00",
    //         oldPrice: "EGP 305.00",
    //         leftItems: "48"
    //     },
    //     {
    //         img: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/667123/1.jpg?8443",
    //         title: "L'Oreal Paris Hyaluron Expert 1.5% Hyaluronic Acid Face Serum 30ml + FREE Hyaluron Expert 24H Repluming Moisturizing Tissue Mask",
    //         price: "EGP 205.00",
    //         oldPrice: "EGP 305.00",
    //         leftItems: "47"
    //     }

    // ])
   

    function slideRight() {
      document.getElementById(props.id).scrollLeft += document.getElementById(props.id).offsetWidth;
    };
    function slideLeft() {
      document.getElementById(props.id).scrollLeft -= document.getElementById(props.id).offsetWidth;
    };

  return (
    <div className=''>
        <div className='container p-2 my-2 rounded'>
            <div className='row rounded p-0'>
            <div className='col-12 px-0 pb-2 bg-light rounded'>
                {props.title}
                <div className='col-12 mt-1 p-0 d-flex flex-nowrap rounded position-relative'>
                <button className='btn btn-block rounded-left fs-3 bg-opacity-10  position-absolute top-50 start-0" cBtn' style={{width: 'fit-content', zIndex: '1000'}} onClick={() => slideLeft()}><TfiArrowCircleLeft/></button>
                <div className='d-flex overflow-hidden flex-nowrap bg-light rounded' id={props.id} style={{scrollBehavior: 'smooth'}}>
                    {props.productsCard1.map((card, index) => {
                        return(
                            <Card className='col-6 col-sm-4 col-md-3 border-0 prodCard' key={index}>
                            <div className="p-3 d-flex justify-content-center align-items-center"><Card.Img variant="top" src={card.img} /></div>
                            <Card.Body>
                                <Card.Title style={{width: '90%',clear: 'both', display: 'inline-block', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>{card.title}</Card.Title>
                                <Card.Text className='fw-bold'>{card.price}</Card.Text>
                                <Card.Text className='text-decoration-line-through'>{card.oldPrice}</Card.Text>
                                <span>{card.leftItems} Items Left</span><ProgressBar variant="warning" now={card.leftItems} style={{height: '10px'}}/>
                            </Card.Body>
                            </Card>
                        )
                    })}
                </div>
                <button className='btn btn-block bg-light rounded-right fs-3 bg-opacity-10 position-absolute top-50 end-0 cBtn' style={{width: 'fit-content', zIndex: '1000'}} onClick={() => slideRight()}><TfiArrowCircleRight/></button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
