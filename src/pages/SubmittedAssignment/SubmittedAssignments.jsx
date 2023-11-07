import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SubmittedAssignmentRow from "./submittedAssignmentRow";

const SubmittedAssignments = () => {

    const { user } = useContext(AuthContext);

    const [submittedAssignments, setSubmittedAssignments] = useState([]);

    const url = `http://localhost:5000/submissions?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setSubmittedAssignments(data))
    }, [url]);

    // const handleDelete = id => {
    //     const proceed = confirm('Are You sure you want to delete');
    //     if (proceed) {
    //         fetch(`http://localhost:5000/bookings/${id}`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 if (data.deletedCount > 0) {
    //                     alert('deleted successful');
    //                     const remaining = bookings.filter(booking => booking._id !== id);
    //                     setBookings(remaining);
    //                 }
    //             })
    //     }
    // }

    const handleGiveMark = (event, id) => {

        event.preventDefault();

        const form = event.target;
        const givenMark = parseInt(form.givenMark.value);
        const feedback = form.feedback.value;

        console.log(givenMark, feedback, id);

        fetch(`http://localhost:5000/submissions/${id}`, {
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
                   // updated.status = 'confirm'
                    const newSubmittedAssignments = [updated, ...remaining];
                    
                    setSubmittedAssignments(newSubmittedAssignments);
                }
            })
    }

    return (
        <div>
            <h2 className="text-5xl">Total submissions: {submittedAssignments.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
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
                            // handleDelete={handleDelete}
                            // handleBookingConfirm={handleBookingConfirm}
                            ></SubmittedAssignmentRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default SubmittedAssignments;