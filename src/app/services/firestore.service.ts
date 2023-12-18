import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  createDoc(){
    this.firestore.collection('users').add({
      
    })
  }

  getCollection(){
    console.log("Leyendo colleccion")
    this.firestore.collection('users').get().subscribe(res => {
    });
  }
}
