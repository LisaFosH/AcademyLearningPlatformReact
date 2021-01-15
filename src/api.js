const apiurl = process.env.REACT_APP_API_URL;

// Fetching the courses
var fetchCourses = function (component) {
  var mockCourses = [
    {
      id: 1,
      title: "It works!",
      description: "I hope :D",
      enrollments: null,
      modules: [
        {
          id: 10,
          title: "This is my module",
          pages: [
            {
              id: 1,
              title: "Page 1 on it works",
              learningMaterial: "This is my page on it works!",
            },
            {
              id: 2,
              title: "Page 2",
              learningMaterial: "This is my second page!",
            },
            {
              id: 3,
              title: "Page 3",
              learningMaterial: "This is my third page!",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "This is my course",
      description: "My course is amazing!",
      enrollments: null,
      modules: [
        {
          id: 20,
          title: "This is my amazing module",
          pages: [
            {
              id: 1,
              title: "Page 1",
              learningMaterial: "This is my amazing page!",
            },
            {
              id: 2,
              title: "Page 2",
              learningMaterial: "This is my second page!",
            },
            {
              id: 3,
              title: "Page 3",
              learningMaterial: "This is my third page!",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "All about plants",
      description: "Really, do we have to? Yes!",
      enrollments: null,
      modules: [
        {
          id: 30,
          title: "This is my plant module",
          pages: [
            {
              id: 1,
              title: "Page 1",
              learningMaterial: "This is my plant page!",
            },
            {
              id: 2,
              title: "Page 2",
              learningMaterial: "This is my second page!",
            },
            {
              id: 3,
              title: "Page 3",
              learningMaterial: "This is my third page!",
            },
          ],
        },
      ],
    },
  ];

  // return fetch(`${apiurl}api/apicourses`, {
  //   credentials: "include",
  //   mode: "cors",
  // }).then((res) => res.json());

  return Promise.resolve(mockCourses);
};

// Fetching the username
var fetchUsername = function (component) {
  return fetch(`${apiurl}api/apiAspNetUsers`, {
    credentials: "include",
    mode: "cors",
  }).then((res) => res.json());
};

export default { fetchCourses, fetchUsername };
