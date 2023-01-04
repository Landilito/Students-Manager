import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/core/models/student.model';
import { StudentsService } from 'src/app/core/services/students.service';

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrls: ['./edit-students.component.scss']
})
export class EditStudentsComponent implements OnInit{

  student!: Student;
  studentsList!: Student[]


  constructor(private studentsService: StudentsService, private actr: ActivatedRoute){
    this.actr.data.pipe(
    )
    }

    ngOnInit(): void {
      // console.log(
      //   'Activated route data in Component:::',
      //   this.ar.data
      // );
      // this.ar.data.subscribe((response: any) => {
      //   console.log('Obteniendo estudiante', response);
      //   this.student = response.products;
      //   console.log('Estudiante obtenido!');
      // });
    }
  }

  

  


