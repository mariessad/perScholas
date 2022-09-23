const React = require("react");
const DefaultLayout = require("./layouts/Default");
class TeacherIndex extends React.Component {
  render() {
    const { teachers } = this.props;
    console.log(teachers);
    return (
      <DefaultLayout title={"TeacherDashboard"}>
        <nav>
          <a href={"/teachers/new"}>Add New Teacher</a>
        </nav>
        <ul>
          {teachers.map((teacher, i) => {
            return (
              <li key={i}>
                {/* eachteacher */}
                <a href={`/teachers/${teacher.id}`}> {teacher.name} </a> Education: {teacher.education} <br />
                {teacher.isEmployed
                  ? "Teacher IS currently employed"
                  : "Teacher is NOT currently employed"}
                {/* Student Name is ___ and is/isnt eligible 2 graduate */}
                {/* ===========EDIT */}
                <div>
                  <a href={`teachers/${teacher._id}/edit`}> Edit Teacher</a>
                </div>
                {/* ======Delete */}
                <form
                  action={`/teachers/${teacher._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                </form>
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}
module.exports = TeacherIndex;