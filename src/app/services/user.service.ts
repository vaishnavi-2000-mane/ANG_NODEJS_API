import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import{getFirestore,collection,addDoc} from 'firebase/firestore'

import { app } from '../firebase.config';

  interface user{
    email:string,
    mobile:string,
    password:string
  }


@Injectable({
  providedIn: 'root'
})
export class UserService {

  db= getFirestore(app)

  constructor() { }


async signup(userAdd:user)
{
let docRef = await addDoc(collection(this.db,"user"),userAdd)
     return docRef
}

}
