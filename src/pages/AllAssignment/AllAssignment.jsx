import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";


const AllAssignment = () => {

    const [assignments, setAssignments] = useState([]);
    const [level, setLevel] = useState("easy");

    useEffect(() => {
        axios
            .get(`http://localhost:5000/assignments?level=${level}`)
            .then(res => setAssignments(res.data))
            .catch(err => console.log(err));
    }, [level]);


    const handleChangeLevel = (e) => {
        const filterValue = e.target.value;
        console.log(filterValue);
        setLevel(filterValue);
    }

    //----------pagination related code-------/

    const assignmentCount = assignments.length;

    const itemsPerPage = 8;

    //const [itemsPerPage, setItemsPerPage] = useState(10);

    const numberOfPages = Math.ceil(assignmentCount / itemsPerPage);

    const [currentPage, setCurrentPage] = useState(0);

    const pages = [...Array(numberOfPages).keys()];


    //----------END of pagination related code-------/

    return (
        <div>

            <div className="py-4 text-center mb-5 ">
                <h2 className="font-medium text-6xl text-gray-600">Assignments ({assignments.length})</h2>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Filter by </span>
                    </label>

                    <select
                        onChange={handleChangeLevel}
                        name="difficultyLevel"
                        className="input input-bordered"
                        id="">
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>

                </div>

            </div>

            <div className="flex gap-3 flex-wrap justify-center items-center">
                {
                    assignments.map(assignment => <AssignmentCard
                        key={assignment._id}
                        assignment={assignment}
                        assignments={assignments}
                        setAssignments={setAssignments}
                    > </AssignmentCard>)
                }
            </div>

            {/* pagination */}
            <div className="text-center">
                <div className="join my-5 ">


                    {

                        //    pages.map(page => <button className={currentPage === page ? 'selected' : undefined} onClick={() => setCurrentPage(page)} key={page}>{page}</button>)
                        pages.map(page => <button className="join-item btn" onClick={() => setCurrentPage(page)} key={page}>{page}</button>)

                    }

                    <button className="join-item btn">1</button>
                    <button className="join-item btn btn-active">2</button>
                    <button className="join-item btn">3</button>
                    <button className="join-item btn">4</button>
                </div>
            </div>



        </div>
    );
};

export default AllAssignment;