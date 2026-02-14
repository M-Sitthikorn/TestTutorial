const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Retrieve data from data.js
const db = require("./db");

app.get("/", function (req, res) {
  res.send(db.students1); // เรียกใช้ผ่านตัวแปร db ที่เรา require มา
});

app.get("/api/:schools", (req, res) => {
  const schoolsName = req.params.schools.toLowerCase();
  const data = db.schools[schoolsName]; // // เข้าถึงข้อมูลโรงเรียนจาก dn

  if (data) {
    res.send(data);
  } else {
    res.status(404).send("School Not Found");
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

  if (!db.schools[schoolName]) {
    res.send("School Not Found");
  } else if (db.schools[schoolName][id - 1]) {
    res.send(db.schools[schoolName][id - 1]);
  } else {
    res.send(`Not Found students for id${id}`);
  }
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
