import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subject } from 'rxjs';
import { StudentResolverService } from './core/services/student-resolver.service';
import { AttendanceHistoryComponent } from './pages/attendance-history/attendance-history.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { CreateStudentComponent } from './pages/create-student/create-student.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditStudentsComponent } from './pages/edit-students/edit-students.component';
import { StudentsGradeComponent } from './pages/students-grade/students-grade.component';

const routes: Routes = [{ path: '', component: DashboardComponent },
///TODO CUANDO SE CORRA ESTA RUTA LLMAR RESOLVER, QUE LLAME AL OBTENER BY ID
                        { path: 'detalle-estudiante', component: EditStudentsComponent, resolve: {student: StudentResolverService}},
                        { path: 'crear-estudiante', component: CreateStudentComponent},
                        { path: 'calificar-estudiante', component: StudentsGradeComponent},
                        { path: 'asistencia-estudiante', component: AttendanceComponent},
                        { path: 'historial-asistencia', component: AttendanceHistoryComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
