export default function getListStudentIds(getListStudents) {
  if (getListStudents instanceof Array) {
    return getListStudents.map((students) => students.id);
  }
  return [];
}
