import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";


const AllAssignment = () => {

    const [assignments, setAssignments] = useState([]);

    const [level, setLevel] = useState("easy");
    
    const handleChangeLevel = (e) => {
        const filterValue = e.target.value;
        console.log(filterValue);
        setLevel(filterValue);
    }

    const [assignmentCount, setAssignmentCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 8;

    const numberOfPages = Math.ceil(assignmentCount / itemsPerPage);

    const pages = [...Array(numberOfPages).keys()];

    //count assignments based on level
    useEffect(() => {
        const url = `http://localhost:5000/assignmentCount?level=${level}`;
        axios
            .get(url)
            .then(res => {
                setAssignmentCount(parseInt(res.data.count));
                setCurrentPage(0);
            })
            .catch(err => console.log(err));
    }, [level]);

    //load assignments based on query params level, currentPage, size 
    useEffect(() => {
        const url = `http://localhost:5000/assignments?level=${level}&page=${currentPage}&size=${itemsPerPage}`;
        console.log(url);
        axios
            .get(url)
            .then(res => setAssignments(res.data))
            .catch(err => console.log(err));
    }, [level, currentPage, itemsPerPage]);



    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div>

            <div className="py-4 text-center mb-5 ">
                <h2 className="font-medium text-6xl text-gray-600">Assignments ({assignmentCount})</h2>

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
                <div className="my-5">

                <button className="btn mr-5" onClick={handlePrevPage}>Prev</button>
                    {
                        //    pages.map(page => <button className={currentPage === page ? 'selected' : undefined} onClick={() => setCurrentPage(page)} key={page}>{page}</button>)
                        pages.map(page => <button className={`mr-5 btn ` + (currentPage === page ? 'bg-red-500' : '')} onClick={() => setCurrentPage(page)} key={page}>{page + 1}</button>)
                    }
                <button className="btn" onClick={handleNextPage}>Next</button>

                </div>
            </div>

        </div>
    );
};

export default AllAssignment;