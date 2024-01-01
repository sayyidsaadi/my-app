import { RouterProvider } from "react-router-dom";
import "./App.css";

import route from "./routes/routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllLogo, getAllheaderInfo } from "./fetures/header/headerApiSlice";
import { getAllBanner } from "./fetures/banner/bannnerApiSlice";
import { getAllAbout } from "./fetures/about/aboutApiSlice";
import { getAllService } from "./fetures/service/serviceApiSlice";
import { getAllDoctor } from "./fetures/doctor/doctorApiSlice";
import { getAllBlog } from "./fetures/blog/blogApiSlice";
import { getAllFooter } from "./fetures/footer/footerApiSlice";
import { getAllTechnoloy } from "./fetures/tech/techApiSlice";
import "aos/dist/aos.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllLogo());
    dispatch(getAllheaderInfo());
    dispatch(getAllBanner());
    dispatch(getAllAbout());
    dispatch(getAllService());
    dispatch(getAllDoctor());
    dispatch(getAllBlog());
    dispatch(getAllFooter());
    dispatch(getAllTechnoloy());
  }, [dispatch]);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
