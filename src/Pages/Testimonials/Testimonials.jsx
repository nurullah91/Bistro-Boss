import SecHeading from "../../Components/SecHeading";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import '@smastrom/react-rating/style.css'
// import required modules
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section>
            <SecHeading subHeading='What Our clients Say' heading='Testimonials'></SecHeading>

            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="m-24 flex flex-col items-center justify-between">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="my-8">{review.details}</p>
                                <h3 className="text-3xl text-orange-500">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;