const {Router} = require("express")
const router = Router();
const schoolCTRL = require("../controller/school.controller");
const markCTRL = require("../controller/mark.controller");

router.get("/", schoolCTRL.getStart);

router.get("/students", schoolCTRL.get);

router.get("/students/:student_id", schoolCTRL.get);

router.post("/students", schoolCTRL.post);

router.put("/students", schoolCTRL.put);

router.delete("/students", schoolCTRL.deleteS);


//////////////////////////////////////////////////////////////////////////////////////

router.get("/marks", markCTRL.avg);

router.get("/marks/:student_id", markCTRL.avg);

router.get("/subject/:student_id", markCTRL.getS)

router.get("/subject", markCTRL.getSAll)

router.get("/teacher/:teacher_id", markCTRL.getT)

router.get("/teacher", markCTRL.getTAll)

module.exports = router;