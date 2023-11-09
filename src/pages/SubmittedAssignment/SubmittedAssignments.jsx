import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SubmittedAssignmentRow from "./submittedAssignmentRow";

const SubmittedAssignments = () => {

    const { user } = useContext(AuthContext);

    const [submittedAssignments, setSubmittedAssignments] = useState([]);

    const url = `https://b8a11-online-group-study-server.vercel.app/submissions?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setSubmittedAssignments(data))
    }, [url]);

    const handleGiveMark = (event, id) => {

        event.preventDefault();

        const form = event.target;
        const givenMark = parseInt(form.givenMark.value);
        const feedback = form.feedback.value;

       // console.log(givenMark, feedback, id);

        fetch(`https://b8a11-online-group-study-server.vercel.app/submissions/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ givenMark, feedback, status: 'completed' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = submittedAssignments.filter(submittedAssignment => submittedAssignment._id !== id);
                    const updated = submittedAssignments.find(submittedAssignment => submittedAssignment._id === id);
                    updated.status = 'completed'
                    const newSubmittedAssignments = [updated, ...remaining];
                    setSubmittedAssignments(newSubmittedAssignments);
                }
            })
    }

    return (
        <div>
            
            <div className="mb-5 mt-5 text-center ">
                <h2 className="font-medium text-6xl text-gray-600"> Submitted Assignments ({submittedAssignments.length})</h2>
            </div>
            
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* Table header */}
                    <thead>
                        <tr className="text-lg font-bold text-amber-300">
                            <th>
                                No.
                            </th>
                            <th>Assignment Title</th>
                            <th>Assignment Marks</th>
                            <th>Examinee Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            submittedAssignments.map((submittedAssignment, index) => <SubmittedAssignmentRow
                                key={submittedAssignment._id}
                                submittedAssignment={submittedAssignment}
                                index={index}
                                handleGiveMark={handleGiveMark}
                            ></SubmittedAssignmentRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default SubmittedAssignments;