import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./publicRoutes/publicRoutes";
import privateRoutes from "./privateRoutes/privateRoutes";

const route = createBrowserRouter([...publicRoutes, ...privateRoutes]);

// Export
export default route;
