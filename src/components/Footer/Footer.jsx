import logo from "../../assets/img/jjf-surgical-logo.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsYoutube, BsLinkedin } from "react-icons/bs";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { useSelector } from "react-redux";
import { getfooterInfo } from "../../fetures/footer/footerSlice";
import { Link } from "react-router-dom";
const Footer = () => {
  const { footers } = useSelector(getfooterInfo);
  let footerSlice;
  if (footers && Array.isArray(footers) && footers.length > 0) {
    footerSlice = footers[footers.length - 1];
  }
  let currentDate = new Date();
  let getCurrentYear = currentDate.getFullYear();

  return (
    <>
      <footer className="bg-dark py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 text-center mx-auto">
              <img src={logo} alt="" className="img-fluid surgicare-logo" />
              <p className="text-light mt-3">
                হেল্প লাইন {footerSlice?.footerNumber}
              </p>
              <p className="text-light">
                {" "}
                <AiOutlineMail className="me-1" /> {footerSlice?.footerEmail}
              </p>
              <p className="text-light">ঠিকানাঃ {footerSlice?.footerAddress}</p>

              <div className="d-flex gap-3 justify-content-center">
                <Link
                  to={footerSlice?.facebook}
                  target="_blank"
                  className=" text-light h5"
                >
                  <BiLogoFacebookSquare />
                </Link>
                <Link
                  to={footerSlice?.linkedin}
                  target="_blank"
                  className=" text-light "
                >
                  <BsLinkedin />
                </Link>
                <Link to={footerSlice?.youtube} className=" text-light h5">
                  <BsYoutube />
                </Link>
              </div>

              <p className="text-light mt-3" style={{ fontSize: "13px" }}>
                Copyright © 2023 - {getCurrentYear} JJF. All Right Reserved.{" "}
              </p>
              <p className="text-secondary mt-1" style={{ fontSize: "10px" }}>
                Developed by{" "}
                <Link
                  to="https://www.linkedin.com/in/sayyidhammadsaadi/"
                  target="_blank"
                  className="text-secondary"
                >
                  Hammad Sadi
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
