import Layouts from "../../components/Layouts/Layouts";
import Blog from "../../pages/Blog/Blog";
import SingleBlog from "../../pages/Blog/SingleBlog/SingleBlog";
import Contact from "../../pages/Contact/Contact";
import HomePage from "../../pages/HomePage/HomePage";
import Services from "../../pages/Services/Services";
import SingleServices from "../../pages/Services/SingleService/SingleService";
import SingleTechnologies from "../../pages/Technologies/SingleTechnologies/SingleTechnologies";
import Technologies from "../../pages/Technologies/Technologies";

const publicRoutes = [
  {
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        element: <SingleServices />,
      },
      {
        path: "/technologies",
        element: <Technologies />,
      },
      {
        path: "/technologies/:id",
        element: <SingleTechnologies />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
];

// Export
export default publicRoutes;
