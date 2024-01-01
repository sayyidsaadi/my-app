import { Link, useParams } from "react-router-dom";
import RecentPostItem from "../../../components/RecentPostItem/RecentPostItem";
import s2 from "../../../assets/img/blogThum.png";
import PageTitle from "../../../components/PageTitle/PageTitle";
import { useSelector } from "react-redux";
import { getblogInfo } from "../../../fetures/blog/blogSlice";

const SingleBlog = () => {
  const { id } = useParams();

  const { blogs } = useSelector(getblogInfo);
  let recentBlog = blogs?.slice(0, 6);
  let popularBlog = blogs?.slice(4, 9);
  console.log(recentBlog);
  const singleBlogData = blogs?.find((data) => data._id === id);

  return (
    <>
      <PageTitle title="Surgicare Blog Post Details" />
      <section className="py-5 mb-3 mt-5" id="surgicareService">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-3 shadow-sm col-md-3 order-2 mt-4 mt-lg-0 order-md-0 mt-md-0">
              <h5 className="text-capitalize border-start border-5 border-danger p-2 bg-dark text-light">
                recent post
              </h5>
              {recentBlog?.map((item, index) => {
                return <RecentPostItem key={index} item={item} />;
              })}
            </div>
            <div className="col-lg-6 col-md-6 order-1 order-md-0">
              <img
                src={singleBlogData?.photo ? singleBlogData.photo : s2}
                alt=""
                className="img-fluid"
              />
              <p className="h5 mt-3 fw-bold">{singleBlogData?.title}</p>
              <p>
                {singleBlogData?.shortDesc} {singleBlogData?.longDesc}
              </p>
            </div>
            <div className="col-lg-3 col-md-3 shadow-sm order-3 mt-4 mt-lg-0 order-md-0 mt-md-0">
              <h5 className="text-capitalize border-start border-5 border-danger p-2 bg-dark text-light">
                popular post
              </h5>
              {popularBlog?.map((item, index) => {
                return <RecentPostItem key={index} item={item} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlog;
