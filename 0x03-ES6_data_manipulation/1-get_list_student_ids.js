export default function getListStudentIds(getListStudents) {
    if (getListStudents instanceof Array) {
        getListStudents = getListStudents.map((students) => students.id);
    } else {
        return []
    }

    return getListStudents;
}