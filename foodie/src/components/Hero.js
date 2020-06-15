import React,{useState, useEffect} from 'react'
import Slider from "react-slick";
import bg from '../images/bg.jpg';
import bg2 from '../images/bg-2.jpg'
import bg3 from '../images/bg-3.jpg'
import bg4 from '../images/bg-4.jpg'
import bg5 from '../images/bg-5.jpg'


import HeroStyled from './styled'

const images = [bg,bg2,bg3,bg4,bg5]

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" ,fontSize: 34}}
            onClick={onClick}
        />
    );
}

export default function Hero() {
    const [random,setRandom] = useState(0)

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1, 
        arrows: true,
        nextArrow: <SampleNextArrow />
    };

    const arrayList = images.map((image,index) => {
        return(
            <HeroStyled key={index} img={image} className="hero" ></HeroStyled>
        )
    })

    return (
        <>
            <Slider {...settings}>
                {arrayList}
            </Slider>
            <div className="hero-container">
                <h1 className='main-text'>Food <span>doesn't have a religion.</span> It is a Religion.</h1>
                <button className='btn explore-btn'>Explore</button>
            </div>
        </>
    )
}
