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

        // let squlInsertST = "INSERT INTO subject_teachers (subject_id, group_id, teacher_id)" + " VALUES(3, 7, 4)";

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

        // let sqlAlter = "ALTER TABLE direcciones ADD INDEX (numero)"
        // let [result] = await connection.query(sqlAlter)
        // console.log("Dato insertado");
        // console.log(result)


        // let sqlAlterD = "ALTER TABLE direcciones DROP COLUMN numero"
        // let [result] = await connection.query(sqlAlterD)
        // console.log("Dato insertado");
        // console.log(result)

        // let sqlDelete = "DELETE FROM direcciones";
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

    }
    catch (err) {
        console.log(err)
        await connection.end;
    }
}
main()



