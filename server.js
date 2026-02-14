const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const students = [
  { id: 1, name: "Sitthikorn" },
  { id: 2, name: "Preenapa" },
  { id: 3, name: "Napapach" },
];

const student2 = [
  { id: 1, name: "Tum" },
  { id: 2, name: "Su" },
  { id: 3, name: "title" },
];

const schools = { samchukratana: students, ratchmonkol: student2 };

app.get("/", function (req, res) {
  res.send(students);
});

app.get("/api/:schools", (req, res) => {
  const schools = req.params.schools.toLowerCase();

  if (schools == "samchukratana") {
    res.send(students);
  } else if (schools == "ratchmonkol") {
    res.send(student2);
  } else {
    res.send("Not found any schools");
  }
});

app.get("/api/students/:id", function (req, res) {
  const id = req.params.id;
  if (id == 1) {
    res.send(students[0]);
  } else if (id == 2) {
    res.send(students[1]);
  } else if (id == 3) {
    res.send(students[2]);
  } else {
    res.send("Error 404 Not found");
  }
});

/*
app.get("/api/students/:id", function (req, res) {
  const id = parseInt(req.params.id); // แปลง string เป็นตัวเลข
  const student = students.find(s => s.id === id); // ค้นหาคนที่มี id ตรงกัน

  if (student) {
    res.send(student);
  } else {
    res.status(404).send("Error 404: Student Not Found");
  }
});
*/


app.get("/api/:school/:id", (req, res) => {
  const id = req.params.id;
  const schoolName = req.params.school.toLowerCase();

  if (!schools[schoolName]) {
    res.send("School Not Found");
  } else if (schools[schoolName][id - 1]) {
    res.send(schools[schoolName][id - 1]);
  } else {
    res.send(`Not Found students for id${id}`);
  }
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
