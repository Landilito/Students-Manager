import { Component } from '@angular/core';
import { Attendance } from 'src/app/core/models/attendance.model';
import { AttendanceService } from 'src/app/core/services/attendance.service';

@Component({
  selector: 'app-attendance-history',
  templateUrl: './attendance-history.component.html',
  styleUrls: ['./attendance-history.component.scss']
})
export class AttendanceHistoryComponent {

attendanceList!: Attendance[];

  page = 1;
  pageSize = 7;
  _searchTerm = '';



  constructor(private attendanceService: AttendanceService){}

  ngOnInit(): void{
    this.getAttendances();
    // this.buildForm();
    
  }

  getAttendances(){
    this.attendanceService.getAttendance().subscribe(student => {

      this.attendanceList = student.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data
      })
      
    }, err => {
      alert('Error al cargar los estudiantes.');
    })
  }

}
