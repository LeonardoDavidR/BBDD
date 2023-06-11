const { pool } = require("../database");


const avg = async (req, res) => {

    try {
        let sql;

     

        if (req.params.student_id == null) {
            sql = "SELECT AVG (mark) FROM marks"
        }
        else {
            sql ="SELECT AVG (mark) FROM marks WHERE student_id=" + req.params.student_id;
        }
        let [result] = await pool.query(sql)
        console.log(result)
        res.send(result)
    }
    catch (err) {
        console.log(err)
    }
}

const getS = async (req, res)=> {
    try {
        let sql = "SELECT title FROM subjects JOIN marks ON (subjects.subject_id = marks.subject_id) WHERE student_id = " +req.params.student_id

      let [result]= await pool.query(sql)
      console.log(result)
      res.send(result)
    }
    catch(err){
        console.log(err)
    }
}


const getSAll = async (req, res)=>{
    try {
        let sql = "Select first_name, last_name , title FROM students JOIN marks ON (students.student_id = marks.student_id) JOIN subjects ON (subjects.subject_id = marks.subject_id)"

        let [result] = await pool.query(sql)
        console.log(result)
        res.send(result)
    }
    catch(err){
        console.log(err)
    }
}

const getT = async (req, res)=>{
    try{
        let sql  = "SELECT title FROM subjects JOIN subject_teachers ON (subjects.subject_id = subject_teachers.subject_id) WHERE teacher_id = " +req.params.teacher_id

        let [result] = await pool.query(sql);
        console.log(result)
        res.send(result)
    }
    catch(err){
        console.log(err)
    }
}


const getTAll = async (req, res)=>{
    try {
        let sql = "SELECT first_name, last_name, title FROM subjects JOIN subject_teachers ON (subjects.subject_id = subject_teachers.subject_id) JOIN teachers ON (teachers.teacher_id = subject_teachers.teacher_id)"

        let [result] = await pool.query(sql);
        console.log(result)
        res.send(result)
    }
    catch(err){
        console.log(err)
    }
}



module.exports = { avg , getS, getSAll, getT, getTAll}