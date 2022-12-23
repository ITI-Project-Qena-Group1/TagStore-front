import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import RangeSlider from 'react-bootstrap-range-slider';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

import "./footer.css";



export default function SideNavbar(props) {
    const [value, setValue] = useState(0);

    return (
        <>
            <Container className=" mt-3">
                <h4> <a>Category</a> </h4>
                <div>
                    <h5> <a>{props.catProp.a}</a> </h5>
                    <div>
                        <h6> <a>Grains & Rice</a> </h6>
                        <ul>
                            <li className=""> <a>Grains & Pulses</a> </li>
                            <li className=""> <a>Basmati Rice</a> </li>
                            <li className=""> <a>Rice</a> </li>
                        </ul>
                    </div>
                </div>
                
                <hr />

                <div>
                    <h6>BRAND</h6>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                        {props.brandProp.a}
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                        {props.brandProp.b}
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                        {props.brandProp.c}
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                        {props.brandProp.d}
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                        {props.brandProp.e}
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                        {props.brandProp.f}
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                        {props.brandProp.g}
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                        {props.brandProp.h}
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                        {props.brandProp.i}
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                        {props.brandProp.j}
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                        {props.brandProp.k}
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                        {props.brandProp.l}
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                        {props.brandProp.m}
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                        {props.brandProp.n}
                        </label>
                    </div>
                </div>
                <hr />
                <div>
                    <h6>DISCOUNT</h6>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Show only discounted items
                        </label>
                    </div>
                </div>
                <hr />
                <div>
                    <div className="d-flex justify-content-between">
                        <p>PRICE (EGP)</p>
                        <p> <a style={{color:"#f68b1e"}}> APPLY </a> </p>
                    </div>
                    <RangeSlider
                        value={value}
                        onChange={changeEvent => setValue(changeEvent.target.value)}
                        style={{color:"#f68b1e"}}
                    />
                </div>
                <hr />
                <div>
                    <h6>PRODUCT RATING</h6>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            <div>
                                <AiFillStar style={{color:"#f68b1e"}}/>
                                <AiFillStar style={{color:"#f68b1e"}}/>
                                <AiFillStar style={{color:"#f68b1e"}}/>
                                <AiFillStar style={{color:"#f68b1e"}}/>
                                <AiOutlineStar style={{color:"gray"}}/>
                                & Above
                            </div>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            <div>
                                <AiFillStar style={{color:"#f68b1e"}}/>
                                <AiFillStar style={{color:"#f68b1e"}}/>
                                <AiFillStar style={{color:"#f68b1e"}}/>
                                <AiOutlineStar style={{color:"gray"}}/>
                                <AiOutlineStar style={{color:"gray"}}/>
                                & Above
                            </div>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            <div>
                                <AiFillStar style={{color:"#f68b1e"}}/>
                                <AiFillStar style={{color:"#f68b1e"}}/>
                                <AiOutlineStar style={{color:"gray"}}/>
                                <AiOutlineStar style={{color:"gray"}}/>
                                <AiOutlineStar style={{color:"gray"}}/>
                                & Above
                            </div>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            <div>
                                <AiFillStar style={{color:"#f68b1e"}}/>
                                <AiOutlineStar style={{color:"gray"}}/>
                                <AiOutlineStar style={{color:"gray"}}/>
                                <AiOutlineStar style={{color:"gray"}}/>
                                <AiOutlineStar style={{color:"gray"}}/>
                                & Above
                            </div>
                        </label>
                    </div>
                </div>
                <hr/>
                <div>
                    <h6>EXPRESS DELIVERY</h6>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Jumia Express
                        </label>
                    </div>
                </div>
                <hr/>
                <div>
                    <h6>DISCOUNT PERCENTAGE</h6>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            50% or more
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            30% or more
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            20% or more
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            10% or more
                        </label>
                    </div>
                </div>
                <hr/>
                <div>
                    <h6>SHIPPED FROM</h6>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                        Shipped from Egypt
                        </label>
                    </div>
                </div>
            </Container>
        </>
    );
}