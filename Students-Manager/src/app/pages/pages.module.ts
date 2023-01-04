import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateStudentComponent } from './create-student/create-student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditStudentsComponent } from './edit-students/edit-students.component';
import { StudentsGradeComponent } from './students-grade/students-grade.component';
import { StudentResolverService } from '../core/services/student-resolver.service';
import { StudentsService } from '../core/services/students.service';
import { SubjectsService } from '../core/services/subjects.service';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceHistoryComponent } from './attendance-history/attendance-history.component';






@NgModule({
  declarations: [
    DashboardComponent,
    CreateStudentComponent,
    EditStudentsComponent,
    StudentsGradeComponent,
    AttendanceComponent,
    AttendanceHistoryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [

    DashboardComponent,
    CreateStudentComponent,
    EditStudentsComponent,
    StudentsGradeComponent  
  ],
  providers: [
    StudentResolverService,
    StudentsService,
    SubjectsService
  ]
})
export class PagesModule { }
