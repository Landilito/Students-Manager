import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Grades } from 'src/app/core/models/grade.model';
import { Student } from 'src/app/core/models/student.model';
import { GradesService } from 'src/app/core/services/grades.service';
import { StudentsService } from 'src/app/core/services/students.service';

@Component({
  selector: 'app-students-grade',
  templateUrl: './students-grade.component.html',
  styleUrls: ['./students-grade.component.scss']
})
export class StudentsGradeComponent {

  gradeStudentForm!: FormGroup;
  grade!: Grades;
  student!: Student;
  studentsList!: Student[];

  page = 1;
  pageSize = 7;
  _searchTerm = '';


  constructor(private studentService: StudentsService, private fb: FormBuilder){
    
  }

  ngOnInit(): void{
    this.getStudents();
    this.gradeStudentForm = this.setUpForm();
    // this.buildForm();
    
  }

  setUpForm(){
    return this.fb.group({
      grade1: ['', Validators.required],
      grade2: ['', Validators.required],
      grade3: ['', Validators.required],
      grade4: ['', Validators.required],

    })
  }

  getStudents(){
    this.studentService.getStudent().subscribe(student => {

      this.studentsList = student.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data
      })
      
    }, err => {
      alert('Error al cargar los estudiantes.');
    })
  }

  getStudentId(studentId: Student){
    this.studentService.getSingleStudent(studentId);
    const student = this.studentsList.filter(student => student.id === studentId.id);
    this.student = student[0]
    console.log(this.student)
    
  }

  addGradeLiteral(){
  }

  onSubmit(student: Student){
    this.grade = this.gradeStudentForm.value;
    this.studentService.updateStudentGrade(student, this.grade);
    this.gradeStudentForm.reset()
    console.log(this.grade);
  }
}
