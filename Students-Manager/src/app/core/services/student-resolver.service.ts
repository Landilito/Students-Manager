import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { StudentsService } from './students.service';

@Injectable({
  providedIn: 'root'
})
export class StudentResolverService implements Resolve<any>{

  constructor(private studentService: StudentsService, private dc: DashboardComponent) { }


  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<any>{
    console.log('Resolver funcionando', route.params['student']);
    return this.studentService.getSingleStudent(this.dc.student)
  }
}
