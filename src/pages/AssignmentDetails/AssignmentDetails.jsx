import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Swal from 'sweetalert2';


const AssignmentDetails = () => {

    const loadedAssignment = useLoaderData();
    const { _id, title, difficultyLevel, dueDate, thumbnail, marks, description } = loadedAssignment;
    
    const {user} = useContext(AuthContext);


    const handleSubmitAssignment = (event) =>{
        event.preventDefault();

        const form = event.target;

        const pdfLink = form.pdfLink.value;
        const note = form.note.value;

        const loggedInEmail = user?.email;

        const submission = { assignment_id: _id, pdfLink, note, status: "pending", submitted_by: loggedInEmail}

        console.log('New assignment submission: ', submission);

        axios.post('https://b8a11-online-group-study-server.vercel.app/submissions', submission)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Assignment Submitted successfully!',
                        text: 'Click OK to continue',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                    form.reset();
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className="space-y-5 mt-5 mb-5">
            <div>
                <img className="rounded-lg" src={thumbnail} alt={`img of ${title}`} />
            </div>
            <div className="space-y-3 md:w-1/2">
                <h2 className="text-3xl font-semibold text-amber-600">{title}</h2>

                <p className="text-sm font-normal text-zinc-400">{description}</p>

                <p className="text-rose-600"> <span className="font-bold">Marks:</span> {marks}</p>

                <p className="text-teal-600"> <span className="font-bold">Due Date:</span> {dueDate}</p>

            </div>
            <div>
                <button className="btn btn-primary normal-case" onClick={() => document.getElementById('submission_modal').showModal()}>Take Assignment</button>
            </div>


            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="submission_modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-xl text-center">Assignment Submission Form</h3>
                    <p className="text-sm text-center mb-5">(click ✕  to close)</p>

                    <form onSubmit={handleSubmitAssignment}  className="w-full px-5">
                         
                    <div className="flex flex-col gap-5">

                        {/* Field for assignment PDF link */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">PDF Link</span>
                            </label>
                            <input type="text" name="pdfLink" placeholder="Enter google drive PDF link of your assignment" className="input input-bordered" required />
                        </div>

                       {/* Field for quick note */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Quick Note</span>
                            </label>
                            <textarea name="note" className="textarea textarea-bordered" placeholder="Enter a quick note about your task" required></textarea>
                        </div>

                    </div>

                    <div className="form-control mt-6">
                        <button className="text-white text-base btn btn-primary normal-case">Submit Assignment</button>
                    </div>
                </form>

                </div>
            </dialog>

        </div>
    );
};

export default AssignmentDetails;