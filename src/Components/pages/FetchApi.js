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
  }

  render() {
    return (
      <div>
        <h2>Course Details..</h2>
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
            {this.state.courses.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.title}</td>
                <td>{emp.description}</td>
                <td>{emp.enrollments}</td>
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
