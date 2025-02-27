const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
  host: "localhost",
  user: "root",  
  password: "Nithizx024",  
  database: "role_based_dashboard",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.message);
  } else {
    console.log("Connected to MySQL database");
  }
});


app.post("/login", (req, res) => {
  const { email, password } = req.body;
  
  const query = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(query, [email, password], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    
    if (results.length > 0) {
      const user = results[0];
      res.json({ message: "Login successful", role: user.role });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });
});
app.get("/admin", (req, res) => {
  res.send("Welcome, Admin!");
});

app.get("/faculty", (req, res) => {
  res.send("Welcome, Faculty!");
});

app.get("/student", (req, res) => {
  res.send("Welcome, Student!");
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
