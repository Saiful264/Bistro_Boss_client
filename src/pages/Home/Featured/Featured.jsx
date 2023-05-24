import SectionTilte from "../../../components/SectionTitle/SectionTilte";
import fetcherImg from "../../../assets/home/featured.jpg";
import "./Fertured.css"

const Featured = () => {
  return (
    <div className="featured-item bg-fixed  text-white pt-8 my-20">
      <SectionTilte subHadding="Check it out" headding="FROM OUR MENU" />
      <div className="md:flex justify-center items-center bg-slate-800 opacity-60 pb-10 pt-12 px-16 
       ">
        <div>
          <img src={fetcherImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercasepp">Where can i get some?</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
            corrupti illo officiis facilis? Provident voluptatem qui assumenda
            itaque voluptatum necessitatibus, atque perferendis ipsam vitae
            earum enim optio rem deleniti, ipsa voluptatibus blanditiis
            eligendi. Similique ea incidunt asperiores non a labore, ratione vel
            omnis consequatur suscipit, alias tenetur molestias unde nam.
          </p>
          <button className="btn btn-outline border-0 border-b-4 text-white">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
