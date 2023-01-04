import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Attendance } from '../models/attendance.model';


@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private afs: AngularFirestore) { }

  addAttendance(attendance: Attendance){
    attendance.id = this.afs.createId();
    return this.afs.collection('/Attendance').add(attendance);
  }

  getAttendance(){
    return this.afs.collection('/Attendance').snapshotChanges();
  }
}
