import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private afs: AngularFirestore) { }

  getSubject(){
    return this.afs.collection('/Subjects').snapshotChanges();
  }
}
