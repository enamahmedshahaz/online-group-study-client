import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {

    const { signInUser, loginWithGoogle } = useContext(AuthContext);

    const location = useLocation();
   // console.log('Location in login: ', location);
    const navigate = useNavigate();

    const handleClickLogin = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signInUser(email, password)
            .then(result => {
                console.log(result.user);

                // clear all input values in the form
                e.target.reset();

                //if comes from a private route navigate to that route, 
                // else navigate to home page after successful login
                navigate(location?.state ? location.state : '/');
                toast.success("Login successful");
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })

    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
                toast.success("Login with Google successful");
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }

    return (
        <div className="hero min-h-screen">
            <Toaster
                position="top-right"
                reverseOrder={false}
            />

            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    {

                        location?.state
                            ? <h1 className="text-3xl text-red-500 font-bold">Please Login first!</h1>
                            : <h1 className="text-3xl font-bold">Login now!</h1>
                    }
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleClickLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-primary" />
                        </div>
                    </form>
                </div>

                <div>
                    <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
                        <FaGoogle></FaGoogle>
                        Google Login
                    </button>
                </div>

                <div>
                    <p>New here? Please <Link className="font-bold text-blue-600" to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;