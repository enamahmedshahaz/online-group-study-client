import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";


const AllAssignment = () => {

    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/assignments')
            .then(res => setAssignments(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>

            <div className="py-4 text-center mb-5 ">
                <h2 className="font-medium text-6xl text-gray-600"> <span className="font-bold">All</span> Assignments ({assignments.length})</h2>
            </div>

            <div className="flex gap-3 flex-wrap justify-center items-center">
            {
                assignments.map(assignment => <AssignmentCard
                    key={assignment._id} assignment={assignment}> </AssignmentCard>)
            }
            </div>


        </div>
    );
};

export default AllAssignment;