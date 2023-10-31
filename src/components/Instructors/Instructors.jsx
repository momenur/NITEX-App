import Title from "../Share/Title";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { photos } from "../../assets/galleryPhotos";


const Instructors = () => {
    console.log(photos);
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
                        photos.map(photo => <SwiperSlide key={Math.random(10)}>
                            <img src={photo.src} alt="" />
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Instructors;