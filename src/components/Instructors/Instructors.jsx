import Title from "../Share/Title";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { instructorData } from "../../assets/instructorData";

const Instructors = () => {
    return (
        <section id="instructors" className="pb-20 border-b-[1px] border-b-gray-100">
            <Title title="Our Instructors" description="Inspired trainers lead your fitness journey" />
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {
                        instructorData.map(photo => <SwiperSlide key={photo._id}>
                            <img className="relative" src={photo.src} alt="" data-aos="zoom-out" />
                            <p className="absolute text-xl font-bold sm:text-2xl left-4 bottom-4">{photo.name}</p>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Instructors;