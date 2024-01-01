import { FaUserDoctor } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
const ServiceItem = ({ serviceData }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div className="col-lg-4 col-md-6 mt-5" data-aos="fade-up">
        {/* Service Area */}
        <div className="service-area d-flex align-items-center gap-3 justify-content-center justify-content-md-start">
          <div className="service-icon">
            <FaUserDoctor className="h1" />
          </div>
          <div className="service-content">
            <Link
              to={`/services/${serviceData._id}`}
              className="h4 mb-1 text-decoration-none"
            >
              {serviceData?.title}
            </Link>
            <p className="mb-0">{serviceData?.subTitle}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceItem;
