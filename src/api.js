const apiurl = process.env.REACT_APP_API_URL;

// Fetching the courses
var fetchCourses = function (component) {
  return fetch(`${apiurl}api/apicourses`, {
    credentials: "include",
    mode: "cors",
  }).then((res) => res.json());
};

// Fetching the username
var fetchUsername = function (component) {
  return fetch(`${apiurl}api/apiAspNetUsers`, {
    credentials: "include",
    mode: "cors",
  }).then((res) => res.json());
};

export default { fetchCourses, fetchUsername };
