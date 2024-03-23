import React, { useEffect, useState } from "react";
import { Students } from "../../types/student";
import {
  useCreateStudentMutation,
  useGetSingleStudentQuery,
  useUpdateStudentMutation,
} from "../../redux/services/student";
import { useNavigate, useParams } from "react-router-dom";

type Props = {};

export default function CreateStudent({}: Props) {
  const [students, setStudents] = useState<Students>(Object);
  const [editMode, setEditMode] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id }: any | undefined = useParams();

  const [addStudent] = useCreateStudentMutation();
  const { data: singleData } = useGetSingleStudentQuery(id!);
  const [updateStudent] = useUpdateStudentMutation();

  useEffect(() => {
    if (id && singleData) {
      setEditMode(true);
      setStudents({ ...singleData });
    } else {
      setEditMode(false);
    }
  }, [id, singleData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudents({ ...students, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editMode) {
      await updateStudent(students);
    } else {
      await addStudent(students);
    }
    navigate("/");
    setEditMode(false);
  };

  return (
    <div className="p-4">
      {/* <h2 className="text-2xl font-bold mb-4">Add New Student</h2> */}
      <h2>{editMode ? "Update Form" : "Create Form"} </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="studentName"
            className="block text-sm font-medium text-gray-700"
          >
            Student Name
          </label>
          <input
            value={students?.studentName || ""}
            type="text"
            name="studentName"
            onChange={handleChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="studentEmail"
            className="block text-sm font-medium text-gray-700"
          >
            Student Email
          </label>
          <input
            value={students?.studentEmail || ""}
            type="email"
            name="studentEmail"
            onChange={handleChange}
            className="mt-3 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {editMode ? "Update " : "Add "}
        </button>
      </form>
    </div>
  );
}
