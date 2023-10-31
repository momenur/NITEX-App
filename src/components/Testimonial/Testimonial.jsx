import Title from "../Share/Title";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import quote from '../../assets/images/otherImages/quote.png'
import { reviews } from "../../assets/reviews";

const Testimonial = () => {
    return (
        <section id="testimonial" className="pb-20 border-b-[1px] border-b-gray-100">
            <Title title="Testimonials" description="What our Member Say?" />
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(item => <SwiperSlide
                            key={item._id}
                        >
                            <div className="flex justify-center mb-2">

                            </div>
                            <div className="flex items-center justify-center">
                                <img className="w-[100px] mb-8 " src={quote} alt="" />
                            </div>
                            <div className="px-32 text-center">
                                <p>{item.details}</p>
                                <h3 className="mt-4 text-3xl text-yellow-500">{item.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;