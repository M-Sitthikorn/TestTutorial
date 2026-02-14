// db.js
const students1 = [
  { id: 1, name: "Sitthikorn" },
  { id: 2, name: "Preenapa" },
  { id: 3, name: "Napapach" },
];

const student2 = [
  { id: 1, name: "Tum" },
  { id: 2, name: "Su" },
  { id: 3, name: "title" },
];

const schools = {
  samchukratana: students1,
  ratchmonkol: student2,
};

// ส่งข้อมูลออกไปเพื่อให้ไฟล์อื่น require เข้าไปใช้ได้
module.exports = {
  students1,
  student2,
  schools,
};
