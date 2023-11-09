import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const navLinks = <>
        <li> <NavLink to="/">Home</NavLink></li>

        <li> <NavLink to="/all-assignments">All Assignment</NavLink></li>


        <li> <NavLink to="/assignment-create">Assignment Create</NavLink></li>

        <li> <NavLink to="/view-submissions">View Submissions</NavLink></li>
        
        {
            !user &&
            <>
                <li> <NavLink to="/login">Login</NavLink> </li>
                <li> <NavLink to="/register">Register</NavLink> </li>
            </>
        }
    </>;

    const handleClickLogout = () => {
        signOutUser()
            .then(() => {
                toast.success(" Sign-out successful");
            })
            .catch(error => {
                toast.error(error);
            });
    }

    return (
        <div className="navbar bg-base-100">

            <Toaster
                position="top-right"
                reverseOrder={false}
            />

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl font-bold text-teal-400">Online Group Study</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

                {!user && <Link to="/login" className="btn">Login</Link>}
                {
                    user &&
                    <>
                        <div className="flex gap-1 justify-center items-center">
                            <div className="avatar m-2">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <div className="md:hidden">
                                <button onClick={handleClickLogout}
                                    className="px-3 py-1 rounded-md text-sm font-medium border focus:outline-none focus:ring transition text-red-600 border-red-600 hover:text-white hover:bg-red-600 active:bg-red-700 focus:ring-red-300" >
                                    Logout
                                </button>
                            </div>

                            <div className="hidden md:flex flex-col items-center">
                                <div>
                                    <p className="font-bold"> Hello, <span className="text-sm font-semibold text-gray-500">{user.displayName}</span> </p>
                                </div>
                                {/* <div>
                                    <p className="text-sm font-semibold text-gray-700">{user.email}</p>
                                </div> */}

                                <div>
                                    <button onClick={handleClickLogout}
                                        className="px-3 py-1 rounded-md text-sm font-medium border focus:outline-none focus:ring transition text-red-600 border-red-600 hover:text-white hover:bg-red-600 active:bg-red-700 focus:ring-red-300" >
                                        Logout
                                    </button>
                                </div>
                            </div>

                        </div>
                    </>
                }

            </div>
        </div>
    );
};

export default Navbar;