import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'

const AssignmentCard = ({ assignment, assignments , setAssignments }) => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const loggedInEmail = user?.email;

    const { _id, email, title, difficultyLevel, dueDate, thumbnail, marks } = assignment;

    const itemCreatorEmail = email;

    const handleView = () => {

        if (loggedInEmail !== itemCreatorEmail) {
            Swal.fire({
                icon: "error",
                title: "Can't update other user's Item",
                text: `Created by user: ${email}`,
            });
        } else {
            navigate(`/assignment-update/${_id}`);
        }
    }

    const handleDelete = (_id) => {
        console.log('Delete ', _id);

        if (loggedInEmail !== itemCreatorEmail) {
            Swal.fire({
                icon: "error",
                title: "Can't delete other user's Item",
                text: `Created by user: ${email}`,
            });
        } else {

            Swal.fire({
                title: 'Are you sure?',
                text: "This Assignment will be deleted!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {

                if (result.isConfirmed) {
                    //---------call delete api-----------//
                    fetch(`http://localhost:5000/assignments/${_id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {

                                const remaining = assignments.filter(assignment => assignment._id !== _id);
                                setAssignments(remaining);

                                Swal.fire(
                                    'Deleted!',
                                    'The assignment is removed.',
                                    'success'
                                );
                            }
                        });
                    //---------end of call delete api-----------//
                }
            })
        }
    }

    return (
        <div className="card w-72 shadow-lg dark:border">
            <figure className="px-10 pt-10">
                <img src={thumbnail} alt={`thumbnail of ${name}`} className="w-auto rounded-lg border border-gray-200" />
            </figure>

            <div className="card-body items-center text-center flex">
                <h2 className="card-title">{title}</h2>
                <p>{marks} Marks </p>
                <p>Level: {difficultyLevel}</p>

                <div className="card-actions">
                    <div className='flex flex-col md:flex-row gap-2 justify-center'>
                        <Link to={`/view-assignment/${_id}`}>
                            <button className="btn btn-primary normal-case">View</button>
                        </Link>
                        <button onClick={handleView} className="btn btn-secondary normal-case">Update</button>
                        <button onClick={() => handleDelete(_id)} className="btn btn-error normal-case">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;

AssignmentCard.propTypes = {
    assignment: PropTypes.object,
    assignments: PropTypes.array,
    setAssignments: PropTypes.func,
    
}