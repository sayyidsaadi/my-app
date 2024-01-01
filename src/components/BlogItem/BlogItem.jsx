import { Link } from "react-router-dom";
import blogThumb from "../../assets/img/blogThum.png";
import { timeAgo } from "../../helper/helper";
import AOS from "aos";
import { useEffect } from "react";
const BlogItem = ({ blogData }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div className="col-lg-4 col-md-6 mt-5" data-aos="fade-up">
        <div className="card">
          <img
            src={blogData?.photo ? blogData.photo : blogThumb}
            alt=""
            className="img-fluid card-img"
          />
          <div className="card-body text-center">
            <p className="card-title fw-bold">{blogData?.title}</p>
            <p className="card-text fw-normal blog-text">
              {blogData?.shortDesc}
              <span
                className="text-secondary ms-2 fst-italic"
                style={{ fontSize: "13px" }}
              >
                [ published: {timeAgo(blogData?.createdAt)} ]
              </span>
            </p>{" "}
            <Link
              to={`/blogs/${blogData._id}`}
              className="btn btn-outline-danger btn-sm text-capitalize"
            >
              read more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
