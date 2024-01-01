import { useParams } from "react-router-dom";
import s2 from "../../../assets/img/blogThum.png";
import PageTitle from "../../../components/PageTitle/PageTitle";
import { useSelector } from "react-redux";
import { getserviceInfo } from "../../../fetures/service/serviceSlice";

const SingleServices = () => {
  const { services } = useSelector(getserviceInfo);
  const { id } = useParams();

  const singleServiceData = services?.find((data) => data._id === id);
  return (
    <>
      <PageTitle title="Surgicare Service Details" />
      <section className="py-5 mb-3 mt-5" id="surgicareService">
        <div className="container mt-5">
          <div className="row pb-4 d-flex align-items-center">
            <div className="col-lg-6 col-md-12">
              <img
                src={singleServiceData?.photo ? singleServiceData.photo : s2}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 col-md-12">
              <div>
                <h5 className="mt-4 mt-lg-0">{singleServiceData?.title}</h5>
                <p>
                  {singleServiceData.subTitle} {singleServiceData?.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleServices;
