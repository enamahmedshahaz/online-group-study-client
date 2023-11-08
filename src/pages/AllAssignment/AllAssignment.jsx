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


        </div>
    );
};

export default AllAssignment;