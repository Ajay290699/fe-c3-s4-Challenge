import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient) { }

  getData(){
    let myObservable = this.http.get('http://localhost:3000/notes');
    return myObservable;
  }
  addNote(data : any){
    return this.http.post("http://localhost:3000/notes",data);
  }
}
