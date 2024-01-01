import { useParams } from "react-router-dom";
import s2 from "../../../assets/img/s2.jpg";
import PageTitle from "../../../components/PageTitle/PageTitle";
import { useSelector } from "react-redux";
import { gettechnologyInfo } from "../../../fetures/tech/techSlice";
const SingleTechnologies = () => {
  const { id } = useParams();
  const { technologies } = useSelector(gettechnologyInfo);
  const singleTech = technologies?.find((data) => data._id === id);
  return (
    <>
      <PageTitle title="Surgicare Technology Details" />
      <section className="py-5 mb-3 mt-5" id="surgicareService">
        <div className="container mt-5">
          <div className="row pb-4 d-flex align-items-center">
            <div className="col-lg-6 col-md-12">
              <img
                src={singleTech?.photo ? singleTech.photo : s2}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 col-md-12">
              <div>
                <h5 className="mt-4 mt-lg-0">{singleTech?.title}</h5>
                <p>
                  {singleTech?.shortDesc} {singleTech?.longDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleTechnologies;
