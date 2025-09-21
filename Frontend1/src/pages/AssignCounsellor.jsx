import React, { useState, useEffect } from "react";
import { getStudents } from "../services/students";
import { getTeachers } from "../services/teachers";
import { assignTeacher } from "../services/assignments";

function AssignCounsellor() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [teacherId, setTeacherId] = useState("");

  useEffect(() => {
    getStudents().then(setStudents);
    getTeachers().then(setTeachers);
  }, []);

  const handleAssign = async () => {
    await assignTeacher({ student_id: studentId, teacher_id: teacherId, role: "counsellor" });
    alert("Counsellor assigned!");
  };

  return (
    <div>
      <h2>Assign Counsellor</h2>
      <select onChange={(e) => setStudentId(e.target.value)}>
        <option>Select Student</option>
        {students.map((s) => (
          <option key={s.student_id} value={s.student_id}>{s.name}</option>
        ))}
      </select>
      <select onChange={(e) => setTeacherId(e.target.value)}>
        <option>Select Teacher</option>
        {teachers.map((t) => (
          <option key={t.teacher_id} value={t.teacher_id}>{t.name}</option>
        ))}
      </select>
      <button onClick={handleAssign}>Assign Counsellor</button>
    </div>
  );
}

export default AssignCounsellor;
