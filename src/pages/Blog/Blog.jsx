import BlogItem from "../../components/BlogItem/BlogItem";
import PageTitle from "../../components/PageTitle/PageTitle";
import SingleBanner from "../../components/SingleBanner/SingleBanner";
import { useSelector } from "react-redux";
import { getblogInfo } from "../../fetures/blog/blogSlice";
const Blog = () => {
  const { blogs } = useSelector(getblogInfo);
  return (
    <>
      <PageTitle title="Surgicare Blogs" />
      {/* Banner Part */}
      <div className="container-fluid mt-5 mb-3 px-0  mx-0">
        <SingleBanner
          SingleBannerTitle="all blogs"
          SingleBannerSubtitile="this is our all blog list"
        />
      </div>
      <section className="py-5 mb-3" id="surgicareService">
        <div className="container">
          <div className="row pb-4">
            {[...blogs]?.reverse().map((blogData, index) => {
              return <BlogItem key={index} blogData={blogData} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
