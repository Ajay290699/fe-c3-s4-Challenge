import { Component, Input, OnInit } from '@angular/core';
import { note} from '../models/note';
import { NoteService } from '../Services/note.service';
// import { notes } from '../models/notes';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit{

  // @Input()
  // dashData: note[]=[];

  searchComponent(searchText:string){
    if(searchText == '' || searchText == null){
      this.service.getData().subscribe({
        next:(val:any) => {this.notes = val; console.log(this.notes)},
        error:err => console.log(err)
      })
    }
    else{
      this.service.getData().subscribe({
        next:(val:any) => {
          this.notes = val.filter((abc:any) => abc.title?.includes(searchText)); 
          console.log("data"+ this.notes)},
        error:err => console.log(err)
      })
     
    }
  }

  notes: note[]=[];

  constructor(private service:NoteService){}

  ngOnInit(): void {
    this.service.getData().subscribe({
      next:(val:any) => {this.notes = val; console.log(this.notes)},
      error:err => console.log(err)
    })
  }

  addedNoteComponet(data:any){
    this.notes.push(data)
  }

}