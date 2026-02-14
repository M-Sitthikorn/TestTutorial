## การ Commit 
-   `Add`   `Fix`  `Setup`    


## การกำหนด MIDDLEWRAE โดยใช้ Method `use`


```javascript
    app.use( path, ...function(rea, res, next){ })
```
- `app`   คือ express object 
- `use`   คือ Method สำหรับกำหนด Middleware 
- `path`  คือ path ที่มาพร้อมกับ HTTP request 
- `req`   คือ object ซึ่ง เก็บ data ที่มาจาก HTTP Request 
- `res`   คือ object ซึ่งใช้กำหนด HTTP Response ว่าจะแสดงผลลัพธ์บน Browser อย่างไร 
- `next`  เป็นฟังก์ชัน สำหรับติดต่อกับ Middleware ตัวถัดไป (ถ้าไม่มีตัวถัดไปก็ไม่ต้องใข้ next)


### API ROUTES 
`http://localhost:3000/api/ratchmonkol`  samchukratana / ratchmonkol
`http://localhost:3000/api/students/3`  1 2 3