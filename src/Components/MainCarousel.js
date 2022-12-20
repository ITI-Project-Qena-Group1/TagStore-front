import React from 'react';
import './MainCarousel.css'
import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const MainCarousel = () => {
    const [offerCards, setOfferCards] = React.useState([
        'https://eg.jumia.is/cms/Dec-22/Banks/Attijariwaffa/NEW/Rice_&_Pasta_-_Desktop-EN__copy_2.png',
        'https://eg.jumia.is/cms/Dec-22/Opt-4-dec/AEO/Christmas_Tree_-_Desktop-EN__copy_2-(2).png',
        'https://eg.jumia.is/cms/Dec-22/ADS/Nivea/Nivea.png',
        'https://eg.jumia.is/cms/Dec-22/UNs/end-of-year-clearance/NEW/Clearance.jpg',
        'https://eg.jumia.is/cms/Dec-22/UNs/-hp-sliders/Kids-Winter-Outfits---Desktop-EN--copy-2.gif',
        'https://eg.jumia.is/cms/Dec-22/UNs/makeup/NEW/M4.png',

    ])


    const [btncolor, setBtncolor] = React.useState({
        img1: "#f68b1e",
        img2: "gray",
        img3: "gray",
        img4: "gray",
        img5: "gray",
        img6: "gray",
    });

    // function carouselAuto(){
    //     let i = 0;
    //     setInterval(() => { 
    //         switch (i){
    //             case 0:
    //                     selectCarouselImg1()
    //                 break;
    //             case 1:
    //                     selectCarouselImg2()
    //                 break;
    //             case 2:
    //                     selectCarouselImg3()
    //                 break;
    //             case 3:
    //                     selectCarouselImg4()
    //                 break;
    //             case 4:
    //                     selectCarouselImg5()
    //                 break;
    //             case 5:
    //                     selectCarouselImg6()
    //                 break;
    //             default:
    //                     selectCarouselImg1()

    //         }
    //         i++;
            
    //         }, 30000)
    // }

    const [carouselImgNo, setCarouselImgNo] = React.useState(0)

        function selectCarouselImg1(){
            setCarouselImgNo(0);
            setBtncolor({img1: "#f68b1e",img2: "gray",img3: "gray",img4: "gray",img5: "gray",img6: "gray",});
        }
        function selectCarouselImg2(){
            setCarouselImgNo(1)
            setBtncolor({img1: "gray",img2: "#f68b1e",img3: "gray",img4: "gray",img5: "gray",img6: "gray",});
        }
        function selectCarouselImg3(){
            setCarouselImgNo(2)
            setBtncolor({img1: "gray",img2: "gray",img3: "#f68b1e",img4: "gray",img5: "gray",img6: "gray",});
        }
        function selectCarouselImg4(){
            setCarouselImgNo(3)
            setBtncolor({img1: "gray",img2: "gray",img3: "gray",img4: "#f68b1e",img5: "gray",img6: "gray",});
        }
        function selectCarouselImg5(){
            setCarouselImgNo(4)
            setBtncolor({img1: "gray",img2: "gray",img3: "gray",img4: "gray",img5: "#f68b1e",img6: "gray",});
        }
        function selectCarouselImg6(){
            setCarouselImgNo(5)
            setBtncolor({img1: "gray",img2: "gray",img3: "gray",img4: "gray",img5: "gray",img6: "#f68b1e",});
        }

  return (
        
        <div className='bg-black p-0' style={{borderRadius: '5px'}}>
            {/* {carouselAuto()} */}
            <div className='row p-0' style={{borderRadius: '5px'}}>
            <div className='col-12 d-flex flex-nowrap bg-light p-0' style={{position: 'relative', borderRadius: '5px'}}>
                <img src={offerCards[carouselImgNo]} className=" col-12 imgAd" alt="" style={{borderRadius: '5px'}}/>
                <div style={{position: 'absolute', top: '90%', left: '40%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <button style={{width: '7px', height: '7px', padding: '5px', margin: '0 5px', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '0', backgroundColor: `${btncolor.img1}`}} onClick={()=>selectCarouselImg1()}></button>
                    <button style={{width: '7px', height: '7px', padding: '5px', margin: '0 5px', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '0', backgroundColor: `${btncolor.img2}`}} onClick={()=>selectCarouselImg2()}></button>
                    <button style={{width: '7px', height: '7px', padding: '5px', margin: '0 5px', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '0', backgroundColor: `${btncolor.img3}`}} onClick={()=>selectCarouselImg3()}></button>
                    <button style={{width: '7px', height: '7px', padding: '5px', margin: '0 5px', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '0', backgroundColor: `${btncolor.img4}`}} onClick={()=>selectCarouselImg4()}></button>
                    <button style={{width: '7px', height: '7px', padding: '5px', margin: '0 5px', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '0', backgroundColor: `${btncolor.img5}`}} onClick={()=>selectCarouselImg5()}></button>
                    <button style={{width: '7px', height: '7px', padding: '5px', margin: '0 5px', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '0', backgroundColor: `${btncolor.img6}`}} onClick={()=>selectCarouselImg6()}></button>
                </div>
            </div>
            </div>
        </div>

  )
}

export default MainCarousel