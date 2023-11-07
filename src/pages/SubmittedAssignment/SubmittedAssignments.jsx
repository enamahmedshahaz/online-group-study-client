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

    // const handleBookingConfirm = id => {
    //     fetch(`http://localhost:5000/bookings/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ status: 'confirm' })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount > 0) {
    //                 // update state
    //                 const remaining = bookings.filter(booking => booking._id !== id);
    //                 const updated = bookings.find(booking => booking._id === id);
    //                 updated.status = 'confirm'
    //                 const newBookings = [updated, ...remaining];
    //                 setBookings(newBookings);
    //             }
    //         })
    // }

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
                            submittedAssignments.map( (submittedAssignment,index) => <SubmittedAssignmentRow
                                key={submittedAssignment._id}
                                submittedAssignment={submittedAssignment}
                                index={index}
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