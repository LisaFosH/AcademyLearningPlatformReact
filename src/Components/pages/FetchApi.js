import React from "react";
import ReactDOM from "react-dom";
import api from "../../api";

class FetchApi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    api.fetchCourses().then((result) => {
      this.setState({ courses: result });
    });

    api.fetchUsername().then((result) => {
      console.log(result);
      this.setState({ username: result.username });
    });
  }

  render() {
    return (
      <div>
        <h2>Course Details..</h2>
        <p>Hello, {this.state.username}!</p>
        <table>
          <thread>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Enrollments</th>
            </tr>
          </thread>
          <tbody>
            {this.state.courses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.title}</td>
                <td>{course.description}</td>
                <td>{course.enrollments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default FetchApi;

const element = <FetchApi></FetchApi>;
ReactDOM.render(element, document.getElementById("root"));
