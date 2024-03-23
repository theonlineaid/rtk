import React from "react";
import {
  useDeleteStudentMutation,
  useGetStudentsQuery,
  useLazyGetStudentsQuery,
} from "../../redux/services/student";
import { Link } from "react-router-dom";

type Props = {};

export default function GetStudents({}: Props) {
  const { data: students, error, isError, isLoading } = useGetStudentsQuery();
  const [deleteStudent] = useDeleteStudentMutation();

  // const handleClick = () => {
  //   fetchData();
  // };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Lazy Students List</h2>
      {/* <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? 'Loading ...' : 'Load Students'}
      </button> */}

      {isLoading && <span>Loading ...</span>}
      {isError && (
        <span className="text-red-500 ml-2">Something went wrong</span>
      )}
      {students && (
        <ul className="mt-4">
          {students?.map((student) => (
            <React.Fragment key={student?.id}>
              <li key={student.id} className="mb-2">
                {student.studentName}
              </li>
              <button onClick={() => deleteStudent(student?.id)}>Delete</button>
              <button>
                <Link to={`/edit/${student?.id}`}>Edit</Link>
              </button>
            </React.Fragment>
          ))}
        </ul>
      )}
    </div>
  );
}
