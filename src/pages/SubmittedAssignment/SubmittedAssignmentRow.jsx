import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const SubmittedAssignmentRow = ({ submittedAssignment, index, handleGiveMark }) => {

    const { _id, assignment_id, pdfLink, note, submitted_by } = submittedAssignment;

    const [assignmentInfo, setAssignmentInfo] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/assignments/${assignment_id}`)
            .then(res => setAssignmentInfo(res.data))
            .catch(err => console.log(err));

    }, [assignment_id]);

    return (
        <>
            <tr className="text-lg text-gray-600">
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
            </tr>

            <dialog id={"submission_modal_" + _id} className="modal">

                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-xl text-center">Assignment Marking Form</h3>
                    <p className="text-sm text-center mb-5">(click ✕  to close)</p>

                    <hr />
                    <div className="space-y-4 py-5 bg-amber-200 p-5 rounded-lg">
                        <a href={pdfLink}> <span className="font-bold">Assignment PDF Link:</span> <span className="text-blue-600">{pdfLink}</span> </a>
                        <p> <span className="font-bold">Note About Assignment:</span> {note}</p>
                    </div>
                    <hr />

                    <form onSubmit={() => handleGiveMark(event, _id)} className="w-full px-5">

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
                            <button type="submit" className="text-white text-base btn btn-primary normal-case">Confirm Mark</button>
                        </div>
                    </form>
                    
                </div>
            </dialog>

        </>
    );
};

export default SubmittedAssignmentRow;

SubmittedAssignmentRow.propTypes = {
    submittedAssignment: PropTypes.object,
    index: PropTypes.number,
    handleGiveMark:PropTypes.func
}