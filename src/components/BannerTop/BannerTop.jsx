import banner1 from "../../assets/img/banner.jpg";
import banner2 from "../../assets/img/banner4.jpg";
import banner3 from "../../assets/img/banner3.jpg";
import { useSelector } from "react-redux";
import { getbannerInfo } from "../../fetures/banner/bannerSlice";
const BannerTop = () => {
  const { banners } = useSelector(getbannerInfo);

  return (
    <>
      <div className="banner-top">
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel-fade carousel-dark"
        >
          <div className="carousel-inner">
            <div className={`carousel-item active`}>
              <img src={banner1} className="d-block w-100" alt="..." />
            </div>
            {banners?.map((data, index) => {
              return (
                <div className="carousel-item" key={index}>
                  <img src={data.photo} className="d-block w-100" alt="..." />
                </div>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default BannerTop;
