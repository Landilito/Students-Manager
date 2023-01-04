import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Attendance } from 'src/app/core/models/attendance.model';
import { Student } from 'src/app/core/models/student.model';
import { AttendanceService } from 'src/app/core/services/attendance.service';
import { StudentsService } from 'src/app/core/services/students.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent {

  attendance!: Attendance;

  attendanceForm!: FormGroup;
  student!: Student;
  studentsList!: Student[];

  page = 1;
  pageSize = 7;
  _searchTerm = '';

  constructor(private studentService: StudentsService, private fb: FormBuilder, private attendanceService: AttendanceService){}

  ngOnInit(): void{
    this.getStudents();
    this.attendanceForm = this.setUpForm();
    // this.buildForm();
    
  }

  setUpForm(){
    return this.fb.group({
      attendance: ['', Validators.required],
      date: ['', Validators.required],
      total: ['', Validators.required],
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

  onSubmit(student: Student){
    this.attendance = this.attendanceForm.value;
    this.studentService.updateStudentAttendance(student, this.attendance);
    this.attendanceService.addAttendance(this.attendance)
    this.attendanceForm.reset()
    console.log(this.attendance);
  }

}
