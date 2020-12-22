import React from "react";
import ReactDOM from "react-dom";

class FetchApi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    console.log(process.env.NODE_ENV);

    fetch("https://localhost:44379/api/apicourses", {
      credentials: "include",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((result) => {
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
              <tr key={emp.Id}>
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
