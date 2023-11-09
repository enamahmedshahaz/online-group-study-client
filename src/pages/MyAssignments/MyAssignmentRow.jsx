import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const MyAssignmentRow = ({ mySubmittedAssignment, index }) => {

    const { _id, assignment_id, pdfLink,  status, givenMark, feedback } = mySubmittedAssignment;

    const [assignmentInfo, setAssignmentInfo] = useState([]);

    useEffect(() => {
        axios.get(`https://b8a11-online-group-study-server.vercel.app/assignments/${assignment_id}`)
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
                <td>
                    {assignmentInfo?.marks}
                </td>
                
                <td> <a href={pdfLink} className="text-blue-800 underline">Link</a> </td>
                
                <td>
                    <div className="tooltip" data-tip={`Examiner Feedback: ${feedback}`}>
                        {givenMark}
                    </div>
                </td>
                
                <td className="uppercase font-semibold">
                    {(status === 'pending') ? <span className="text-red-600"> {status} </span> : <span className="text-green-600"> {status} </span>}
                </td>
            </tr>

        </>

    );
};


export default MyAssignmentRow;

MyAssignmentRow.propTypes = {
    mySubmittedAssignment: PropTypes.object,
    index: PropTypes.number,    
}