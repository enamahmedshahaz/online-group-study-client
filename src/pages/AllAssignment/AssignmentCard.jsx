import { Link } from "react-router-dom";


const AssignmentCard = ({ assignment }) => {

    const { _id, email, title, difficultyLevel, dueDate, thumbnail, marks, description } = assignment;

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
                        <Link to={`/assignment-update/${_id}`}>
                            <button className="btn btn-secondary normal-case">Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;