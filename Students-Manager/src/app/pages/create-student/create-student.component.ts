import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/core/models/student.model';
import { Subject } from 'src/app/core/models/subject.model';
import { StudentsService } from 'src/app/core/services/students.service';
import { SubjectsService } from 'src/app/core/services/subjects.service';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit{

  createStudentForm!: FormGroup;
  subjectList!: Subject[];
  student!: Student;


  constructor(private fb: FormBuilder, private studentService: StudentsService, private subjectService: SubjectsService){}

  ngOnInit(): void{
    this.createStudentForm = this.setUpForm();
    this.getSubjects();
    // this.subjectList = this.getSubjects();
    // this.createStudentForm = new FormGroup({
    //   name: new FormControl(Validators.required),
    //   lastName: new FormControl(Validators.required),
    //   age: new FormControl(Validators.required),
    //   id: new FormControl(Validators.required),
    //   subject1: new FormControl(Validators.required),
    //   subject2: new FormControl(Validators.required),
    //   subject3: new FormControl(Validators.required),
    //   subject4: new FormControl(Validators.required),
    // })
  }

  setUpForm(){
    return this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      subject1: [''],
      subject2: [''],
      subject3: [''],
      subject4: [''],
    })
  }
  
  getSubjects(){
    this.subjectService.getSubject().subscribe(subject => {

      this.subjectList = subject.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data
        
      })
      console.log(this.subjectList)
    }, err => {
      alert('Error al cargar las materias.');
    })
  }

  addStudent(){
    if(this.student.name == '' || this.student.id == ''){
      alert('Asegurate de llenar los campos')
      return;
    }
    this.studentService.addStudent(this.student)
  }

  onSubmit(){
    this.student = this.createStudentForm.value;
    console.log(this.student);
    this.addStudent();
  }

}
