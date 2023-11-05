import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="font-inter">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;