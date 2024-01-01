import { Link } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";

const GetAll = ({ getAllTitle, getLink }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div className="row mt-4" data-aos="fade-up">
        <div className="col-lg-4 mx-auto text-center">
          <Link to={getLink} className="btn btn-danger text-capitalize btn-sm">
            {getAllTitle}
          </Link>
        </div>
      </div>
    </>
  );
};

export default GetAll;
