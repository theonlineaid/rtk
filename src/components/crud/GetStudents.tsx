import { useGetStudentsQuery, useLazyGetStudentsQuery } from '../../redux/services/student';

type Props = {};

export default function GetStudents({}: Props) {
  const { data: students, error, isError, isLoading } = useGetStudentsQuery();

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
      {isError && <span className="text-red-500 ml-2">Something went wrong</span>}
      {students && (
        <ul className="mt-4">
          {students?.map((student) => (
            <li key={student.id} className="mb-2">
              {student.studentName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
