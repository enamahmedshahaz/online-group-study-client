import axios from "axios";
import { useEffect, useState } from "react";

const SubmittedAssignmentRow = ({ submittedAssignment, index }) => {

    const { _id, assignment_id, pdfLink, note, status, submitted_by } = submittedAssignment;

    const [assignmentInfo, setAssignmentInfo] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/assignments/${assignment_id}`)
            .then(res => setAssignmentInfo(res.data))
            .catch(err => console.log(err));

    }, [assignment_id]);


    return (
        <tr>
            {/* <th>
                 <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button> 
            </th> */}

            <td>
                {index + 1}
            </td>

            <td>
                {assignmentInfo?.title}
            </td>

            <td> {assignmentInfo?.marks}</td>

            <td>{submitted_by}</td>

            <td>
                <button className="btn btn-sm btn-primary normal-case" onClick={() => document.getElementById(`submission_modal_${_id}`).showModal()}>Give Mark</button>
            </td>

            <dialog id={"submission_modal_" + _id} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-xl text-center">Assignment Marking Form</h3>
                    <p className="text-sm text-center mb-5">(click ✕  to close)</p>

                    <hr />
                    <div className="space-y-4 py-5">
                        <a href={pdfLink}>Assignment PDF Link: <span className="text-blue-600">{pdfLink}</span> </a>
                        <p >{note}</p>
                    </div>
                    <hr />

                    <form className="w-full px-5">
                        {/* onSubmit={handleGiveMark} */}
                        <div className="flex flex-col gap-5">

                            {/* Field for Give Mark */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Give Mark (Out of {assignmentInfo?.marks}) </span>
                                </label>
                                <input type="text" name="givenMark" placeholder="Enter marks" className="input input-bordered" required />
                            </div>

                            {/* Field for Feedback */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Feedback</span>
                                </label>
                                <textarea name="feedback" className="textarea textarea-bordered" placeholder="Give some feedback" required></textarea>
                            </div>

                        </div>

                        <div className="form-control mt-6">
                            <button className="text-white text-base btn btn-primary normal-case">Confirm Mark</button>
                        </div>
                    </form>

                </div>
            </dialog>


            {/* <th>
                 {
                    status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                } 
                
            </th> */}
        </tr>
    );
};

export default SubmittedAssignmentRow;