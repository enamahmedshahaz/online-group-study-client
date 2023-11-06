import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'

const AssignmentCard = ({ assignment }) => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const loggedInEmail = user.email;

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

    return (
        <div className="card w-72 shadow-lg dark:border">
            <figure className="px-10 pt-10">
                <img src={thumbnail} alt={`thumbnail of ${name}`} className="w-auto rounded-lg border border-gray-200" />
            </figure>

            <div className="card-body items-center text-center flex">
                <h2 className="card-title">{title}</h2>
                <p>{marks} Marks </p>
                <p>Level {difficultyLevel}</p>

                <div className="card-actions">
                    <div className='flex flex-col md:flex-row gap-2 justify-center'>
                        <Link to={`/view-assignment/${_id}`}>
                            <button className="btn btn-primary normal-case">View</button>
                        </Link>
                        <button onClick={handleView} className="btn btn-secondary normal-case">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;

AssignmentCard.propTypes = {
    assignment: PropTypes.object
}