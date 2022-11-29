import Student from "../models/studentModels.js";

class StudentControllers {
  static getAllStudents = async (req, res) => {
    try {
      let student = await Student.find();
      student = student.map(({ name, age, gender, fees, _id }) => {
        return { name, age, gender, fees: fees.toString(), _id };
      });

      res.status(200).send(student);
    } catch (error) {
      console.log(error);
    }
  };
  static getStudent = async (req, res) => {
    try {
      const student = await Student.findById(req.params.id);
      let { name, age, fees, gender } = student;
      let stu = { name: name, age: age, fees: fees.toString(), gender: gender };
      res.status(200).send(stu);
    } catch (error) {
      console.log(error);
    }
  };

  static createStudent = async (req, res) => {
    try {
      if (req.body.gender === "") {
        req.body.gender = "male";
      }
      // const student = await new Student(req.body).save();
      const student = await Student.create(req.body);
      res.status(201).send(student);
    } catch (error) {
      console.log(error);
    }
  };
  static updateStudent = async (req, res) => {
    try {
      const student = await Student.findByIdAndUpdate(req.params.id, req.body);
      let { name, age, fees, gender } = student;

      let stu = { name: name, age: age, fees: fees.toString(), gender: gender };

      res.status(201).send(stu);
    } catch (error) {
      console.log(error);
    }
  };

  static deleteStudent = async (req, res) => {
    try {
      const student = await Student.findByIdAndDelete(req.params.id);
      res.status(204).send(student);
    } catch (error) {
      console.log(error);
    }
  };
}

export default StudentControllers;
