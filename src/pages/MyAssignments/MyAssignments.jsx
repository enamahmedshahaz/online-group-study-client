import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyAssignmentRow from "./MyAssignmentRow";

const MyAssignments = () => {

    const { user } = useContext(AuthContext);

    const [mySubmittedAssignments, setMySubmittedAssignments] = useState([]);

    const url = `http://localhost:5000/my-submissions?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMySubmittedAssignments(data))
    }, [url]);

    // const handleGiveMark = (event, id) => {

    //     event.preventDefault();

    //     const form = event.target;
    //     const givenMark = parseInt(form.givenMark.value);
    //     const feedback = form.feedback.value;

    //     console.log(givenMark, feedback, id);

    //     fetch(`http://localhost:5000/submissions/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ givenMark, feedback, status: 'completed' })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount > 0) {
    //                 // update state
    //                 const remaining = submittedAssignments.filter(submittedAssignment => submittedAssignment._id !== id);
    //                 const updated = submittedAssignments.find(submittedAssignment => submittedAssignment._id === id);
    //                 updated.status = 'completed'
    //                 const newSubmittedAssignments = [updated, ...remaining];

    //                 setSubmittedAssignments(newSubmittedAssignments);
    //             }
    //         })
    // }

    return (
        <div>

            <div className="mb-5 mt-5 text-center ">
                <h2 className="font-medium text-6xl text-gray-600"> My Assignments ({mySubmittedAssignments.length})</h2>
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
                            <th>PDF Link</th>
                            <th>Obtained Marks</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            mySubmittedAssignments.map((mySubmittedAssignment, index) => <MyAssignmentRow
                                key={mySubmittedAssignment._id}
                                mySubmittedAssignment={mySubmittedAssignment}
                                index={index}
                            ></MyAssignmentRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyAssignments;