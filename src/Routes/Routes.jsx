import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AssignmentCreate from "../pages/AssignmentCreate/AssignmentCreate";
import AllAssignment from "../pages/AllAssignment/AllAssignment";
import AssignmentUpdate from "../pages/AssignmentUpdate/AssignmentUpdate";
import AssignmentDetails from "../pages/AssignmentDetails/AssignmentDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/assignment-create",
                element: <AssignmentCreate></AssignmentCreate>
            },
            {
                path: "/all-assignments",
                element: <AllAssignment></AllAssignment>,
            },
            {
                path: "/assignment-update/:_id",
                element: <AssignmentUpdate></AssignmentUpdate>,
                loader: ({ params }) => fetch(`http://localhost:5000/assignments/${params._id}`),
            },
            {
                path: "/view-assignment/:_id",
                element: <AssignmentDetails></AssignmentDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/assignments/${params._id}`),
            },

        ]
    },
]);

export default router;