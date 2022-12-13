import { Component, Input } from '@angular/core';
import { note } from '../models/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {

  @Input()
  ViewData:note={}


}
