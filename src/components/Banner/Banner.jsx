import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from '../../assets/images/bannerImages/nitexBanner1.jpg'
import slider2 from '../../assets/images/bannerImages/nitexBanner2.jpg'
import slider3 from '../../assets/images/bannerImages/nitexBanner3.jpg'
import slider4 from '../../assets/images/bannerImages/nitexBanner4.jpg'
import slider5 from '../../assets/images/bannerImages/nitexBanner5.jpg'
const Banner = () => {
    return (
        <div>
            <Carousel showArrows={false} infiniteLoop={true} autoPlay={true}>
                <div>
                    <img src={slider1}/>
                </div>
                <div>
                    <img src={slider2}/>
                </div>
                <div>
                    <img src={slider3}/>
                </div>
                <div>
                    <img src={slider4}/>
                </div>
                <div>
                    <img src={slider5}/>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;