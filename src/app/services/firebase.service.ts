// firebase.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  collectionName = 'Paciente';

  constructor(
    private firestore: AngularFirestore
  ) { }

  create_paciente(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }

  read_pacientes() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  update_paciente(recordID, record) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  delete_paciente(record_id) {
    this.firestore.doc(this.collectionName + '/' + record_id).delete();
  }
}