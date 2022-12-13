import { Component, OnInit } from '@angular/core';
import { NoteService } from '../Services/note.service';
import { note } from '../models/note';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private services:NoteService){}

  // note : note={};



}
