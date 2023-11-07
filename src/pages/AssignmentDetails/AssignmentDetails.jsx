import { useLoaderData } from "react-router-dom";
import moment from 'moment';


const AssignmentDetails = () => {

    const loadedAssignment = useLoaderData();

    const { _id, title, difficultyLevel, dueDate, thumbnail, marks, description } = loadedAssignment;

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

                    <form  className="w-full px-5">
                    
                    {/* onSubmit={handleSubmitAssignment} */}

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