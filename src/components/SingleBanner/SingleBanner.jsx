import singleBanner1 from "../../assets/img/sub-banner.jpg";
const SingleBanner = ({ SingleBannerTitle, SingleBannerSubtitile }) => {
  return (
    <>
      <section
        className="d-flex justify-content-center align-items-center position-relative"
        id="bannerSingle"
        style={{
          backgroundImage: `URL(${singleBanner1})`,
          backgroundSize: "cover",
          height: "300px",
          marginTop: "100px",
        }}
      >
        <div className="z-2 text-center">
          <h3 className="text-light text-capitalize">{SingleBannerTitle}</h3>
          <p className="text-light text-capitalize">{SingleBannerSubtitile}</p>
        </div>
      </section>
    </>
  );
};

export default SingleBanner;
