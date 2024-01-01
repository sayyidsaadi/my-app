import { Link, useLocation } from "react-router-dom";
import { BiSolidPhoneCall } from "react-icons/bi";
import { useSelector } from "react-redux";
import { getHeaderInfo } from "../../fetures/header/headerSlice";

const Header = () => {
  const { headers, logos } = useSelector(getHeaderInfo);
  let location = useLocation();

  // let sliceData = headers?.slice(0, 1);
  let sliceData;
  if (headers && Array.isArray(headers) && headers.length > 0) {
    sliceData = headers[headers.length - 1];
  }

  let sliceLogo;
  if (logos && Array.isArray(logos) && logos.length > 0) {
    sliceLogo = logos[logos.length - 1];
  }

  return (
    <>
      <header className="fixed-top bg-danger">
        <div className="container bg-danger">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <p className="mb-0 pt-2 pb-0 py-md-2 text-light text-capitalize appointment-heading text-center text-lg-start">
                {" "}
                <span className="h6">
                  <BiSolidPhoneCall />
                </span>
                {sliceData?.callInfo}
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <p className="mb-0 py-2 text-light text-capitalize text-lg-end text-center appointment-heading">
                {sliceData?.openInfo}
              </p>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img
                src={sliceLogo?.photo}
                alt=""
                className="img-fluid surgicare-logo"
              />
            </Link>
            <button
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#surgicareNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="navbar-collapse collapse  py-md-2"
              id="surgicareNav"
            >
              <ul className="navbar-nav ms-auto text-center">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={`nav-link text-capitalize ${
                      location.pathname === "/" ? "sadi-nav" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/services"
                    className={`nav-link text-capitalize ${
                      location.pathname === "/services" ? "sadi-nav" : ""
                    }`}
                  >
                    service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/technologies"
                    className={`nav-link text-capitalize ${
                      location.pathname === "/technologies" ? "sadi-nav" : ""
                    }`}
                  >
                    technologies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/blogs"
                    className={`nav-link text-capitalize ${
                      location.pathname === "/blogs" ? "sadi-nav" : ""
                    }`}
                  >
                    Blog
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link
                    to="/contact"
                    className={`nav-link text-capitalize ${
                      location.pathname === "/contact" ? "sadi-nav" : ""
                    }`}
                  >
                    contact
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className="btn btn-danger text-capitalize ms-lg-2 ms-md-0 text-md-center"
                  >
                    get started
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
