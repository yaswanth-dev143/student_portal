const express = require("express");
const router = express.Router();

//employees data
let students = [
  {
    id: "_asadsa",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
  {
    id: "_asadsay",
    Name: "Tanguturi Yaswanth",
    IdNo: "O190999",
    Branch: "CSE",
    Section: "D",
    Gender: "Male",
    PhNo: "9894343443",
  },
];

//creating a unique id
let unId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// GET - Employees
router.get("/students", (request, response) => {
  response.json(students);
  console.log(
    `get request recieved at server.. ${new Date().toLocaleTimeString()}`
  );
});

//POST request - Employees
router.post("/students", (request, response) => {
  let student = {
    id: unId(),
    Name: request.body.Name,
    Branch: request.body.Branch,
    Section: request.body.Section,
    Gender: request.body.Gender,
    Ip_address: request.body.Ip_address,
  };
  students.push(student);
  console.log(
    `Post request recieved at server.. ${new Date().toLocaleTimeString()}`
  );
  response.json({ msg: "post request is success" });
});

//put request - Employees
router.put("/students/:id", (request, response) => {
  let unId = request.params.id;
  let updatestudents = {
    id: unId,
    Name: request.body.Name,
    Branch: request.body.Branch,
    Section: request.body.Section,
    Gender: request.body.Gender,
    Ip_address: request.body.Ip_address,
  };
  let existstudents = students.find((student) => {
    return student.id === unId;
  });
  students.splice(students.indexOf(existstudents), 1, updatestudents);
  console.log(
    `put request recieved at server.. ${new Date().toLocaleTimeString()}`
  );
  response.json({ msg: "put request is success" });
});

//DELETE request - employee
router.delete("/students/:id", (request, response) => {
  let unId = request.params.id;

  students = students.filter((student) => {
    return student.id !== unId;
  });
  console.log(
    `delete request recieved at server.. ${new Date().toLocaleTimeString()}`
  );
  response.json({ msg: "delete request is success" });
});

module.exports = router;
