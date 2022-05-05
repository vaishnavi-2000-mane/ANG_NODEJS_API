import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import{getFirestore,collection,getDocs,doc} from 'firebase/firestore'
import { app } from '../firebase.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  db = getFirestore(app)

  constructor() { }
  users: {
    username: string,
    role: string
  }[]=[
    {
    username:'vaishu',
    role:'admin'
  },
  {
    username:'vaishnavi',
    role:'user'
  }
]
isLoggedIn= false
loggedIn:{
  username:string,
  role:string
}={
  username:'',
  role:''
}

async login(role:string)
{
// this.isLoggedIn=true
// this.loggedIn=role ==='admin' ? this.users[1] : this.users[0]

    let data: any = ''

    let querySnapshot = await getDocs(collection(this.db,"user"))

   querySnapshot.forEach(doc => {
           console.log("Document :",doc.data());
             data = doc.data()
})
return data
}

logout()
{
  this.isLoggedIn=false
  this.loggedIn= {
    username:'',
    role:''

  }
}
isAuthenticated():boolean{
  return this.isLoggedIn

}
isAdmin()
{
  return this.isLoggedIn && this.loggedIn.role === 'admin'
}
}
