import PageTitle from "../../components/PageTitle/PageTitle";
import ServiceItem from "../../components/ServiceItem/ServiceItem";
import SingleBanner from "../../components/SingleBanner/SingleBanner";
import { useSelector } from "react-redux";
import { getserviceInfo } from "../../fetures/service/serviceSlice";

const Services = () => {
  const { services } = useSelector(getserviceInfo);

  return (
    <>
      <PageTitle title="Surgicare Services" />
      {/* Banner Part */}
      <div className="container-fluid mt-5 mb-3 px-0  mx-0">
        <SingleBanner
          SingleBannerTitle="all services"
          SingleBannerSubtitile="this is our all services list"
        />
      </div>
      <section className="py-5 mb-3" id="surgicareService">
        <div className="container">
          <div className="row pb-4">
            {[...services]?.reverse().map((serviceData, index) => {
              return <ServiceItem key={index} serviceData={serviceData} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
