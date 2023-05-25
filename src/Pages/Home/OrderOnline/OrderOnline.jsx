
import { Swiper, SwiperSlide } from "swiper/react";
// import styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
import img4 from "../../../assets/home/slide4.jpg"
import img5 from "../../../assets/home/slide5.jpg"
import SecHeading from "../../../Components/SecHeading";

const OrderOnline = () => {
    return (
        <section>
            <section>
                <SecHeading
                heading={"Order online"}
                subHeading={"Form 11:00am to 10:00pm"}
                >
                </SecHeading>
            </section>
            <div className="my-10 text-white ">

                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img1} alt="" />
                        <h3 className="text-4xl font-bold -mt-12 text-center ">Salad</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="" />
                        <h3 className="text-4xl font-bold -mt-12 text-center">Pasta</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="" />
                        <h3 className="text-4xl font-bold -mt-12 text-center">Soup</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="" />
                        <h3 className="text-4xl font-bold -mt-12 text-center">Deserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="" />
                        <h3 className="text-4xl font-bold -mt-12 text-center">Salad</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="" />
                        <h3 className="text-4xl font-bold -mt-12 text-center">Pasta</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="" />
                        <h3 className="text-4xl font-bold -mt-12 text-center">Deserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="" />
                        <h3 className="text-4xl font-bold -mt-12 text-center">Soup</h3>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default OrderOnline;