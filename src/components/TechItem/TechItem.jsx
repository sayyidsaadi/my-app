import { Link } from "react-router-dom";
import tech1 from "../../assets/img/blogThum.png";
import { timeAgo } from "../../helper/helper";
const TechItem = ({ tectData }) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 mt-5">
        <div className="card">
          <img
            src={tectData.photo ? tectData.photo : tech1}
            alt=""
            className="card-img img-fluid"
          />
          <div className="card-body">
            <h5 className="card-title">{tectData?.title}</h5>
            <p className="card-text">
              {tectData?.shortDesc}{" "}
              <span
                className="text-secondary ms-2 fst-italic"
                style={{ fontSize: "13px" }}
              >
                [ published: {timeAgo(tectData?.createdAt)} ]
              </span>
            </p>
            <Link
              to={`/technologies/${tectData._id}`}
              className="btn btn-danger btn-sm text-capitalize"
            >
              read more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechItem;
