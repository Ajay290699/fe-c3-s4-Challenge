import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchNoteText:string='';

  @Output()
  SearchNote1: EventEmitter<string> = new EventEmitter<string>();

  searchNote(){
    this.SearchNote1.emit(this.searchNoteText);
  }

  clearNotes(){
    this.searchNoteText = ""
    this.SearchNote1.emit(this.searchNoteText)
  }

  ngOnInit(){
  }

}
