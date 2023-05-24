import SectionTilte from "../../../components/SectionTitle/SectionTilte";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Tastimonials = () => {
  const [reviews, setRevirews] = useState([]);
//   const [rating, setRating] = useState(0);

  useEffect(() => {
    fetch("../../../../public/reviews.json")
      .then((res) => res.json())
      .then((data) => setRevirews(data));
  }, []);

  console.log(reviews);
  return (
    <section>
      <SectionTilte subHadding="What Our Clients Say" headding="TESTIMONIALS" />
      <>
        <Swiper
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center mx-auto my-5 w-10/12">
                <Rating
                  style={{ maxWidth: 250}}
                  value={review.rating}
                  readOnly
                />
                <p>{review.details}</p>
                <h3 className="text-3xl text-yellow-500">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </section>
  );
};

export default Tastimonials;
