const Student = require('../models/Student');

async function addStudent(req,res) {
    try{
        console.log(req.body,'req.body')
        let student = new Student(req.body);
        await student.save();
        console.log("data saved successfully.....")
        res.end("data added...");
    } catch (err){

    }
}

const getStudent =async function(req,res) {
    try{
       let student = await Student.find({}); //select *from table name 
       console.log(student)
       res.send(student)
    }catch(err){
        console.log(err)
    }
}
module.exports ={ 
    addStudent,
    getStudent
}