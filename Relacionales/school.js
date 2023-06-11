const mysql = require("mysql2/promise");

async function main() {
    try {
        let connection = await mysql.createConnection(
            {
                host: "localhost",
                user: "root",
                password: "password33",
                database: "school"
            });
        console.log("Conexion correcta")


        // let squlInsertT = "INSERT INTO teachers (first_name, last_name)" + " VALUES(\"Juan\", \"Guarnizo\")";





        // let [result] = await connection.query(squlInsertT)
        // console.log("Dato insertado");
        // console.log(result)





        // let squlInsertG = "INSERT INTO grupies (name)" + " VALUES(\"Metaleros\")";





        // let [result] = await connection.query(squlInsertG)
        // console.log("Dato insertado");
        // console.log(result)





        // let squlInsertS = "INSERT INTO subjects (title)" + " VALUES(\"Horchateria\")";





        // let [result] = await connection.query(squlInsertS)
        // console.log("Dato insertado");
        // console.log(result)






        // let squlInsertST = "INSERT INTO subject_teachers (subject_id, group_id, teacher_id)" + " VALUES(5, 6, 3)";





        // let [result] = await connection.query(squlInsertST)
        // console.log("Dato insertado");
        // console.log(result)







        // let squlInsertSTU = "INSERT INTO students (first_name, last_name, group_id)" + " VALUES(\"Cahlitos\", \"Garnachas\", 5)";




        // let [result] = await connection.query(squlInsertSTU)
        // console.log("Dato insertado");
        // console.log(result)





        // let squlInsertMark= "INSERT INTO marks (student_id, subject_id, date, mark)" + " VALUES(2, 5, '2001-12-30', 6)";




        // let [result] = await connection.query(squlInsertMark)
        // console.log("Dato insertado");
        // console.log(result)





        // let sqlAlter = "ALTER TABLE direcciones ADD COLUMN numero INT"




        // let [result] = await connection.query(sqlAlter)
        // console.log("Dato insertado");
        // console.log(result)





        // let sqlAlterD = "ALTER TABLE direcciones DROP COLUMN numero"



        // let [result] = await connection.query(sqlAlterD)
        // console.log("Dato insertado");
        // console.log(result)




        // let sqlDelete = "DROP TABLE direcciones";




        //  let [result] = await connection.query(sqlDelete)
        // console.log("Dato insertado");
        // console.log(result)




        // let sqlUpdate = "UPDATE marks SET mark = 0";




        // let [result] = await connection.query(sqlUpdate)
        // console.log("Dato insertado");
        // console.log(result)





        // let sqlSelect = "SELECT first_name, last_name FROM students"




        // let [result] = await connection.query(sqlSelect)
        // console.log("Dato insertado");
        // console.log(result)





        // let sqlSelectT = "SELECT teacher_id, first_name, last_name FROM teachers"




        // let [result] = await connection.query(sqlSelectT)
        // console.log("Dato insertado");
        // console.log(result)





        // let sqlWhere = "DELETE FROM marks WHERE date < '2013-01-01'"




        // let [result] = await connection.query(sqlWhere)
        // console.log("Dato insertado");
        // console.log(result)






        // let sqlUpadate = "UPDATE marks SET mark = 5 WHERE mark <5 "




        // let [result] = await connection.query(sqlUpadate)
        // console.log("Dato insertado");
        // console.log(result)


        /////////////////////////////////////////////////////////////////////////////////////////////////////////////





        // let sqlAVG = "SELECT AVG (mark) FROM marks WHERE subject_id = 1 "



        // let [result] = await connection.query(sqlAVG)
        // console.log("Dato insertado");
        // console.log(result)






        // let sqlCount = "SELECT COUNT (*) FROM students "



        // let [result] = await connection.query(sqlCount)
        // console.log("Dato insertado");
        // console.log(result)





        // let sqlAll = "SELECT * from grupies"



        // let [result] = await connection.query(sqlAll)
        // console.log("Dato insertado");
        // console.log(result)





        // let sqlDLT = "DELETE FROM marks WHERE mark > 5 AND (date > '2022-01-01' AND date < '2022-12-31') "




        
        // let [result] = await connection.query(sqlDLT)
        // console.log("Dato insertado");
        // console.log(result)



        /////////////////////////// CREAR COLUMNA Y SETEAR LOS DATOS///////////////////////////

        // let sqlAlterST = "ALTER TABLE students ADD COLUMN start_date date";


        // let [result] = await connection.query(sqlAlterST)
        // console.log("Dato insertado");
        // console.log(result)


        // let sqlAlterSTIns = "UPDATE students SET start_date = '2023-08-21' WHERE student_id =10" 

        // let [result] = await connection.query(sqlAlterSTIns)
        // console.log("Dato insertado");
        // console.log(result)

        //////////////////////////////////////////////////////////////////////////////////////////


        // let sqlDatos = "SELECT * FROM students WHERE start_date > '2023-01-01' AND start_date < '2023-12-31'"

        // let [result] = await connection.query(sqlDatos)
        // console.log("Dato insertado");
        // console.log(result)


        // let sqlCountT = "SELECT subject_id , COUNT (*) as total FROM subject_teachers GROUP BY subject_id"                

        // let [result] = await connection.query(sqlCountT)
        // console.log("Dato insertado");
        // console.log(result)


        // let sqlCountST = "SELECT student_id, mark FROM marks WHERE student_id BETWEEN  1 AND 20 OR(mark > 8 AND date > '2022-01-01' AND date < '2022-12-31')"

        // let [result] = await connection.query(sqlCountST)
        // console.log("Dato insertado");
        // console.log(result)


        // let sqlAVG = "SELECT subject_id ,AVG(mark) FROM marks WHERE date BETWEEN '2023-01-01' AND '2023-12-31' GROUP BY subject_id"



        // let [result] = await connection.query(sqlAVG)
        // console.log("Dato insertado");
        // console.log(result)

        

        // let sqlAVG = "SELECT student_id ,AVG(mark) FROM marks WHERE date BETWEEN '2023-01-01' AND '2023-12-31' GROUP BY student_id"



        // let [result] = await connection.query(sqlAVG)
        // console.log("Dato insertado");
        // console.log(result)



        ///////////////////////////////////////////////////////////////////////////////////////////////
        
    //    let sqlJoin= "SELECT first_name , last_name, title FROM students JOIN subjects ON (students.student_id = subjects.subject_id)"
    
    
    
    //    let [result] = await connection.query(sqlJoin)
    //    console.log("Dato insertado");
    //    console.log(result)

            
        
    
    
    
    
    // let sqlJoinT = "SELECT first_name, last_name, title FROM teachers JOIN subjects ON (teachers.teacher_id = subjects.subject_id)"

       
    
    
    // let [result] = await connection.query(sqlJoinT)
    // console.log("Dato insertado");
    // console.log(result)



    // let sqlTodo = 'SELECT teachers.first_name, teachers.last_name, title, student_id, COUNT(student_id) FROM teachers JOIN subject_teachers ON (teachers.teacher_id = subject_teachers.teacher_id) JOIN subjects ON (subjects.subject_id = subject_teachers.subject_id) JOIN grupies ON (grupies.group_id= subject_teachers.group_id) JOIN students ON (students.group_id = grupies.group_id) GROUP BY(student_id)'

    // let [result] = await connection.query(sqlTodo)
    // console.log("Dato insertado");
    // console.log(result)


////////////////////////////////////////////////////////////////////////////////////////////


        // let sqlMuseo = 'SELECT estado_p , piezas.localizacion,  piezas.descripcion, estado.fecha_out, dueño.nombre, dueño.apellido, dueño.email FROM piezas JOIN estado ON (estado.piezas_id = piezas.piezas_id) JOIN dueño ON (dueño.dueño_id = piezas.dueño_id) WHERE estado_p = "prestada"'
        
        
        
        
        // let [result] = await connection.query(sqlMuseo)
        // console.log("Dato insertado");
        // console.log(result)



        // let sqlMuseoASC ="SELECT ubicacion ,COUNT(piezas_id) FROM piezas  GROUP BY (ubicacion) ORDER BY (piezas_id) ASC"

        // let [result] = await connection.query(sqlMuseoASC)
        // console.log("Dato insertado");
        // console.log(result)
    }

    catch (err) {
        console.log(err)
        await connection.end;
    }
}
main()



