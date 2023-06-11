const {pool} = require ("../database");


function getStart(req, res) {
    let book = { error: true, codigo: 200, message: 'Book start' }
    res.send(book)
}

const get = async (req, res) =>{
    try{
        let sql ; 
        if(req.params.student_id == null){
            sql = "SELECT * FROM students"
        }
        else {
            sql = "SELECT * FROM students WHERE student_id=" + req.params.student_id;
        }
        let [result] = await pool.query(sql)
        res.send(result)
    }

    catch(err){
        console.log(err)
    }
}

const post = async (req, res) => {
   try{
    console.log(req.body);
    let sql = "INSERT INTO students (first_name, last_name, group_id, start_date) "+
                "VALUES ('"+ req.body.first_name + "','"+req.body.last_name+"','"+req.body.group_id+"','"+req.body.start_date+"')"

                console.log(sql);
                let [result] = await pool.query(sql);
                console.log(result)

    
    if(result.insertId)
    res.send(String(result.insertId));
    else
    res.send("-1")


   }
   catch(err){
    console.log(err)
   }
}

const put = async  (req, res) =>{
try{
    let sql = "UPDATE students SET first_name = '"+req.body.first_name+"', last_name ='"+req.body.last_name+"', group_id ='"+req.body.group_id+"', start_date ='"+req.body.start_date+"'  WHERE student_id = " + req.body.student_id

    console.log(sql);
    let [result] = await pool.query(sql);
    console.log(result)

    if(sql){
        console.log("The student have been upadted")
        res.send(result)
    }
    else{
        console.log("Student doesnt found")
    }

}
catch(err){
    console.log(err)
}

}



const deleteS= async (req, res)=> {
   
   try{
   
    let sql = "DELETE FROM students WHERE student_id = " + req.body.student_id

    console.log(sql);
    let [result] = await pool.query(sql);
    console.log(result)

    if(sql){
        console.log("The student have been deleted");
        res.send(result)
    }
    else{
        console.log("Student hasnt been deleted")
    }
    }

    catch(err){
        console.log(err)
    }

}

module.exports = {get, getStart, deleteS, put, post}
