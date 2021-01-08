const apiurl = process.env.REACT_APP_API_URL;

var fetchCourses = function (component) {
  return fetch(`${apiurl}api/apicourses`, {
    credentials: "include",
    mode: "cors",
  }).then((res) => res.json());
};

export default { fetchCourses };
