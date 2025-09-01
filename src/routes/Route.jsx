import { createBrowserRouter } from "react-router-dom";
import Club from "../components/club/Club.jsx";
import Home from "../components/Home.jsx";

const router = createBrowserRouter([
    {
        element : <Home />,
        path : "/"
    } ,
    {
    element : <Club />,
    path : "/clubs/:name"
}])

export default router ;