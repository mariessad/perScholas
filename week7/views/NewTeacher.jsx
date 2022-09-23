// form for users to create new instance of a Student 
const React = require("react");
const DefaultLayout = require("./layouts/default");

class NewTeacher extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New Teacher Page"}>
        <div>
          <form action="/teachers" method="POST">
            Name: <input type="text" name="name" required />
            <br />
            education: <input type="text" name="education" required />
            <br />
            Employed <input type="checkbox" name="isEmployed" />
            <br />
            <input type="submit" name="" value="Create Teacher" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = NewTeacher;