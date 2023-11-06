//import Swal from 'sweetalert2';
import axios from "axios";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'



const AssignmentCreate = () => {

    const [ dueDate, setDueDate] = useState(new Date());
    const {user} = useContext(AuthContext);



    const handleCreateAssignment = event => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const difficultyLevel = form.difficultyLevel.value;
        const thumbnail = form.thumbnail.value;
        const marks = parseInt(form.marks.value);
        const description = form.description.value;

        const email = user.email;

        const newAssignment = { email, title, difficultyLevel, dueDate, thumbnail, marks, description }

        console.log('New assignment: ', newAssignment);

        axios.post('http://localhost:5000/assignments', newAssignment)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Assignment created successfully!',
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
        <div className='mb-24'>
            <div className="py-4 text-center mb-5">
                <h2 className="font-medium text-6xl text-gray-600">Create Assignment</h2>
            </div>

            <div>
                <form onSubmit={handleCreateAssignment} className="w-full px-20">
                    <div className="flex flex-col md:flex-row gap-5">

                        {/* Field for Assignment title*/}

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name="title" placeholder="Enter assignment title" className="input input-bordered" required />
                        </div>

                        {/* Field for Difficulty Level*/}

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Difficulty Level</span>
                            </label>
                            <select
                                className="input input-bordered"
                                name='difficultyLevel'
                                required={true}>
                                <option disabled>Select a level</option>
                                <option value={"easy"}>Easy</option>
                                <option value={"medium"}>Medium</option>
                                <option value={"hard"}>Hard</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5">
                        {/* Field for Due date */}
                        <div className="form-control md:w-1/2">

                            <label className="label">
                                <span className="label-text">Due Date</span>
                            </label>

                            <DatePicker
                                className="input input-bordered w-full"
                                dateFormat="dd-MMM-yyyy"
                                selected={dueDate}
                                onChange={(dateSelected) => setDueDate(dateSelected)}
                            />

                        </div>

                        {/* Field for Marks */}
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Marks</span>
                            </label>
                            <input type="text" name="marks" placeholder="Enter marks for the assignment" className="input input-bordered" required />
                        </div>

                    </div>


                    <div className="flex flex-col md:flex-row gap-5">

                        {/* Field for Description */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Thumbnail</span>
                            </label>
                            <input type="text" name="thumbnail" placeholder="Enter thumbnail url for the assignment" className="input input-bordered" required />
                        </div>

                    </div>

                    <div className="flex flex-col md:flex-row gap-5">

                        {/* Field for Description */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name="description" className="textarea textarea-bordered" placeholder="Enter description of the assignment" required></textarea>
                        </div>

                    </div>

                    <div className="form-control mt-6">
                        <button className="text-white text-xl btn btn-primary normal-case">Create Assignment</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AssignmentCreate;