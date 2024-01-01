import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "../fetures/header/headerSlice";
import bannerReducer from "../fetures/banner/bannerSlice";
import aboutReducer from "../fetures/about/aboutSlice";
import serviceReducer from "../fetures/service/serviceSlice";
import doctoreReducer from "../fetures/doctor/doctorSlice";
import blogReducer from "../fetures/blog/blogSlice";
import footerReducer from "../fetures/footer/footerSlice";
import technologyReducer from "../fetures/tech/techSlice";
const store = configureStore({
  reducer: {
    header: headerReducer,
    banner: bannerReducer,
    about: aboutReducer,
    service: serviceReducer,
    doctor: doctoreReducer,
    blog: blogReducer,
    footer: footerReducer,
    technology: technologyReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

// Export Store
export default store;
