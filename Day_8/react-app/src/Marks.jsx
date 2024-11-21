import "./Marks.css"

const Marks = ({name, roll, m1, m2, m3}) => {
  return (
    <div id="res">
      <h1>Student Marksheet</h1>
      <h2>Name: {name}</h2>
      <h2>Roll No: {roll}</h2>
      <h1>Semester wise Marks</h1>
      <h1>Semester 1: {m1}</h1>
      <h1>Semester 1: {m2}</h1>
      <h1>Semester 1: {m3}</h1>
    </div>
  )
}

export default Marks
