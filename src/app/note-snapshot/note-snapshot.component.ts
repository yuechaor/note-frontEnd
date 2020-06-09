import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-note-snapshot',
  templateUrl: './note-snapshot.component.html',
  // styleUrls: ['./note-snapshot.component.css'],
})
export class NoteSnapshotComponent implements OnInit {
  @Input() note;
  // isLoading;

  constructor() {}

  ngOnInit(): void {}
}
