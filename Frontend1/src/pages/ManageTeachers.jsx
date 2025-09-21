import React, { useEffect, useState } from "react";
import { getTeachers, deleteTeacher } from "../services/teachers";

function ManageTeachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    loadTeachers();
  }, []);

  const loadTeachers = async () => {
    try {
      const data = await getTeachers();
      setTeachers(data);
    } catch (err) {
      console.error("Error fetching teachers", err);
    }
  };

  const handleDelete = async (id) => {
    await deleteTeacher(id);
    loadTeachers();
  };

  return (
    <div>
      <h2>Manage Teachers</h2>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((t) => (
            <tr key={t.teacher_id}>
              <td>{t.teacher_id}</td>
              <td>{t.name}</td>
              <td>{t.email}</td>
              <td>
                <button onClick={() => handleDelete(t.teacher_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageTeachers;
