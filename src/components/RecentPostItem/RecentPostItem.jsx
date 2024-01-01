import { Link } from "react-router-dom";
import s2 from "../../assets/img/s1.jpg";
const RecentPostItem = ({ item }) => {
  return (
    <>
      <div className="d-flex align-items-center p-2 gap-2 mt-3">
        <img
          src={item?.photo ? item.photo : s2}
          alt=""
          className="img-fluid w-25"
        />
        <Link
          to={`/blogs/${item?._id}`}
          className="text-dark text-decoration-none"
        >
          {item?.title}
        </Link>
      </div>
    </>
  );
};

export default RecentPostItem;
