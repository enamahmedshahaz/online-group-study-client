import { Link } from 'react-router-dom';
import img1 from '../../assets/images/banner/banner1.jpg';
import img2 from '../../assets/images/banner/banner2.jpg';
import img3 from '../../assets/images/banner/banner3.jpg';
import img4 from '../../assets/images/banner/banner4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] mt-5 mb-5">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Discover and Share Assignments</h2>
                        <p>Explore a vast library of assignments created by fellow users. Share your own assignments and collaborate with peers to achieve academic excellence.</p>
                        <div>
                            <Link to="/all-assignments" ><button className="btn btn-primary mr-5">Discover Assignments </button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Effortless Assignment Management</h2>
                        <p>Simplify your academic life with our user-friendly tools. Create, update, and track assignments effortlessly, all in one place</p>
                        <div>
                            <Link to="/all-assignments" ><button className="btn btn-primary mr-5">Discover Assignments </button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Collaborative Learning Made Easy</h2>
                        <p>Experience the power of group study. Take assignments, provide feedback, and learn together in a supportive online environment.</p>
                        <div>
                            <Link to="/all-assignments" ><button className="btn btn-primary mr-5">Discover Assignments </button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Track Progress and Achievements</h2>
                        <p>Stay organized and motivated with our achievement tracking system. Mark submitted assignments, monitor your progress, and reach your educational goals.</p>
                        <div>
                            <Link to="/all-assignments" ><button className="btn btn-primary mr-5">Discover Assignments </button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;