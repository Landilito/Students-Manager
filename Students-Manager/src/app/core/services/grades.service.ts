import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Grades } from '../models/grade.model';


@Injectable({
  providedIn: 'root'
})
export class GradesService {

  constructor(private afs: AngularFirestore) { }

  addGrade(grade: Grades){
    grade.id = this.afs.createId();
    return this.afs.collection('/Grades').add(grade);
  }
}
