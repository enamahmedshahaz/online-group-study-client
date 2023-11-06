import { useLoaderData } from "react-router-dom";


const AssignmentDetails = () => {

    const loadedAssignment = useLoaderData();

    const { _id, title, difficultyLevel, dueDate, thumbnail, marks, description } = loadedAssignment;

    return (
        <div className="space-y-5 mt-5 mb-5">
            <div className="">
                <img className="text-center" src={thumbnail} alt={`img of ${title}`} />
            </div>
            <div className="space-y-3">
                <h2 className="text-3xl font-semibold">{title} (Marks: {marks})</h2>
                <p className="text-sm font-normal">{description}</p>
                <p>Due Date: {dueDate}</p>
            </div>
            <div>
                <button className="btn btn-primary">Take Assignment</button>
            </div>
        </div>
    );
};

export default AssignmentDetails;