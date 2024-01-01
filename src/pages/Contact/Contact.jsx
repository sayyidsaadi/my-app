import { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import SingleBanner from "../../components/SingleBanner/SingleBanner";
import { useDispatch, useSelector } from "react-redux";
import { contactUs } from "../../fetures/about/aboutApiSlice";
import { getaboutInfo, setMessageEmpty } from "../../fetures/about/aboutSlice";
import swal from "sweetalert";
import Loader from "../../components/Loader/Loader";

const Contact = () => {
  const dispatch = useDispatch();
  const { message, loading } = useSelector(getaboutInfo);
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    msg: "",
  });

  const handleInput = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Submit Contact
  const handleSubmitContact = (e) => {
    e.preventDefault();
    dispatch(contactUs(input));
  };
  useEffect(() => {
    if (message) {
      swal("Sent!", message, "success");
      dispatch(setMessageEmpty());
      setInput({
        name: "",
        email: "",
        subject: "",
        msg: "",
      });
    }
  }, [message, dispatch]);
  return (
    <>
      <PageTitle title="Surgicare Contact" />
      {/* Banner Part */}
      <div className="container-fluid mt-5 mb-3 px-0  mx-0">
        <SingleBanner
          SingleBannerTitle="Contact Us"
          SingleBannerSubtitile="contact to any query"
        />
      </div>
      <section className="py-5 mb-3" id="surgicareService">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mx-auto">
              <h3 className="text-center text-capitalize">
                Fillup this form for contact us
              </h3>
            </div>
          </div>
          <div className="row pb-4 mt-3">
            <div className="col-lg-6 mx-auto">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmitContact}>
                    <div className="my-2">
                      <label htmlFor="">Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={input.name}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={input.email}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        value={input.subject}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="">Query</label>
                      <textarea
                        name="msg"
                        id=""
                        cols="30"
                        rows="5"
                        className="form-control"
                        value={input.msg}
                        onChange={handleInput}
                      ></textarea>
                    </div>
                    <div className="my-2">
                      <button className="btn btn-danger" type="submit">
                        Send {loading && <Loader />}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
