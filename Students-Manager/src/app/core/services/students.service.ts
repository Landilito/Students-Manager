import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Student } from '../models/student.model';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  studentById!: Student

  constructor(private afs: AngularFirestore) { }


  addStudent(student: Student){
    student.id = this.afs.createId();
    return this.afs.collection('/Students').add(student);
  }

  getStudent(){
    return this.afs.collection('/Students').snapshotChanges();
  }

  getSingleStudent(studentId: Student){
    return this.afs.doc('/Students/'+studentId.id).snapshotChanges();
  }

  deleteStudent(student: Student){
    return this.afs.doc('/Students/'+student.id).delete();
  }

  updateStudentGrade(student: Student, data: any){
    return this.afs.doc('/Students/'+student.id).update(data);
    // this.deleteStudent(student),
    // this.addStudent(student);
  }

  updateStudentAttendance(student: Student, data: any){
    return this.afs.doc('/Students/'+student.id).update(data);
    // this.deleteStudent(student),
    // this.addStudent(student);
  }

  updateStudent(student: Student){
    return this.afs.doc('/Students/'+student.id).update(student);
    // this.deleteStudent(student),
    // this.addStudent(student);
  }
}
