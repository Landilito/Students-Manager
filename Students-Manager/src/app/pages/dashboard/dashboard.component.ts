import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/core/models/student.model';
import { StudentsService } from 'src/app/core/services/students.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  student!: Student;
  studentsList!: Student[];
  filterArray: Student[] = [];

  page = 1;
  pageSize = 7;
  _searchTerm = '';

  constructor(private studentService: StudentsService, private router: Router){}

  ngOnInit(): void{
    this.getStudents();
  }


  get searchTerm(): string{
    return this._searchTerm;
  }

  set searchTerm(val: string){
    this._searchTerm = val;
    this.filterArray = this.filter(val)
  }

  filter(v: string){
    return this.studentsList.filter(x => x.name.toLowerCase().
        indexOf(v.toLowerCase()) !== -1);
  }

  showStudent(studentId: Student){
    // this.studentService.getSingleStudent(studentId)
    this.router.navigate(['/detalle-estudiante']);
    this.studentService.getSingleStudent(studentId);
    const student = this.studentsList.filter(student => student.id === studentId.id);
    this.student = student[0]
    console.log(this.student)
    
  }

  getStudents(){
    this.studentService.getStudent().subscribe(student => {

      this.studentsList = student.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data
      })
      this.filterArray = this.studentsList;
      console.log(this.filterArray)
    }, err => {
      alert('Error al cargar los estudiantes.');
    })
  }



  deleteStudent(student: Student){
    if(window.confirm('Quieres eliminar a: ' + student.name + '?'))
    this.studentService.deleteStudent(student)
  }

}
