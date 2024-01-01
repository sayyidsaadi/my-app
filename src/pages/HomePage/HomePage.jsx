import BannerTop from "../../components/BannerTop/BannerTop";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import aboutImg from "../../assets/img/about.jpg";
import GetAll from "../../components/GetAll/GetAll";
import team1 from "../../assets/img/team1.png";
import team2 from "../../assets/img/team2.png";
import ServiceItem from "../../components/ServiceItem/ServiceItem";
import BlogItem from "../../components/BlogItem/BlogItem";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useSelector } from "react-redux";
import { getaboutInfo } from "../../fetures/about/aboutSlice";
import { getserviceInfo } from "../../fetures/service/serviceSlice";
import { getdoctorInfo } from "../../fetures/doctor/doctorSlice";
import { getblogInfo } from "../../fetures/blog/blogSlice";
import { useEffect } from "react";
import AOS from "aos";
import Loader from "../../components/Loader/Loader";
const HomePage = () => {
  const { abouts, loading: aboutLoading } = useSelector(getaboutInfo);
  const { services, loading: serviceLoading } = useSelector(getserviceInfo);
  const { doctors, loading: doctorLoading } = useSelector(getdoctorInfo);
  const { blogs, loading: blogLoading } = useSelector(getblogInfo);

  let doctorSlice = doctors?.slice(0, 3);
  let blogSlice = blogs?.slice(0, 6);
  const aboutSlice = abouts?.slice(0, 1);
  const serviceSlice = services?.slice(0, 6);
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <PageTitle title="Welcome to Surgicare Hospital" />
      {/* Banner Part */}
      <div className="container-fluid mt-5 mb-3 px-0  mx-0">
        <BannerTop />
      </div>

      {/* About */}
      <div className="container py-5 mb-3">
        <SectionHeading title="about" />
        {aboutLoading && (
          <div className="d-flex justify-content-center sadi-loader mt-5">
            <Loader />
          </div>
        )}
        {aboutSlice?.map((about, index) => {
          return (
            <div className="row mt-5 d-flex align-items-center" key={index}>
              <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-up">
                <h5 className="h5 text-capitalize">{about.title}</h5>
                <p className="text-justify about-desc mb-0">{about.desc}</p>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0"
                data-aos="fade-up"
              >
                <img
                  src={about.photo ? about.photo : aboutImg}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Service Part */}
      <section className="py-5 mb-3" id="surgicareService">
        <div className="container">
          <SectionHeading title="our services" />
          <div className="row">
            {serviceLoading && (
              <div className="d-flex justify-content-center sadi-loader mt-5">
                <Loader />
              </div>
            )}
            {serviceSlice?.reverse().map((serviceData, index) => {
              return <ServiceItem key={index} serviceData={serviceData} />;
            })}
          </div>
          {serviceLoading ? (
            ""
          ) : (
            <GetAll getAllTitle=" view all services" getLink={`/services`} />
          )}
        </div>
      </section>

      {/* Our Doctor */}
      <section className="py-5 mb-3">
        <div className="container">
          <SectionHeading title="our doctors" />
          {doctorLoading && (
            <div className="d-flex justify-content-center sadi-loader mt-5">
              <Loader />
            </div>
          )}
          <div className="row d-flex justify-content-center">
            {doctorSlice?.reverse().map((doctorData, index) => {
              return (
                <div
                  className="col-lg-4 col-md-6 mt-5"
                  key={index}
                  data-aos="flip-left"
                >
                  <div className="card">
                    <img
                      src={doctorData.photo ? doctorData.photo : team1}
                      alt=""
                      className="img-fluid card-img"
                    />
                    <div className="card-body text-center">
                      <h4 className="card-title">{doctorData.name}</h4>
                      <p className="card-text">{doctorData.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Blogs */}
      <section className="py-5 mb-3">
        <div className="container">
          <SectionHeading title="blogs" />
          {blogLoading && (
            <div className="d-flex justify-content-center sadi-loader mt-5">
              <Loader />
            </div>
          )}
          <div className="row d-flex justify-content-center">
            {blogSlice?.reverse().map((blogData, index) => {
              return <BlogItem key={index} blogData={blogData} />;
            })}
          </div>
          {blogLoading ? (
            ""
          ) : (
            <GetAll getAllTitle="view all blogs" getLink={`/blogs`} />
          )}
        </div>
      </section>
    </>
  );
};

export default HomePage;
