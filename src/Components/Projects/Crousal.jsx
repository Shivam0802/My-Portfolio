import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import './project.css';
const Crousal = () => {

    const slides = [
        "/E-waste.png",
        "/img2.png",
        "/img3.png",
        "/img4.png",
        "/img5.png",
        "/img6.png",
        "/img7.png",
        "/img8.png",
        "/img10.png"
    ];

    const time = 3000;

    const [current, setCurrent] = React.useState(0);

    const handlePrev = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const handleNext = () => {
        setCurrent((current + 1) % slides.length);
    };

    React.useEffect(() => {
        const next = (current + 1) % slides.length;
        const id = setTimeout(() => setCurrent(next), time);
        return () => clearTimeout(id);
    }, [current]);

    return (
        <div className="project-image">
            <div className="arrow" onClick={handlePrev}>
                <IoIosArrowDropleftCircle size='30px' style={{ color: 'burlywood' }} />
            </div>
            <div className="project-image-container">
                <img src={slides[current]} alt="project" />
            </div>
            <div className="arrow" onClick={handleNext}>
                <IoIosArrowDroprightCircle size='30px' style={{ color: 'burlywood' }} />
            </div>
        </div>
    );
};

export default Crousal;