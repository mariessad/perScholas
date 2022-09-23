const React = require("react");
const DefaultLayout = require("./layouts/default");

class TeacherEdit extends React.Component {
  render() {
    return (
      <DefaultLayout title="Edit Teacher Page">
         <form
          action={`/teachgers/${this.props.teacher._id}?_method=PUT`}
          method="POST"
        >
          Name:{" "}
          <input
            type="text"
            name="name"
            defaultValue={this.props.teacher.name}
          />
          <br />
          GPA:{" "}
          <input type="text" name="education" defaultValue={this.props.teacher.education} />
          <br />
          Is Eligible:
          {this.props.teacher.isEmployed ? (
            <input type="checkbox" name="isEmployed" defaultChecked />
          ) : (
            <input type="checkbox" name="isEmployed" />
          )}
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = TeacherEdit;