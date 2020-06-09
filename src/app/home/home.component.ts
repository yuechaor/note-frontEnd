import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showNoteModal: boolean = false;
  newNote: any;
  constructor() {}

  ngOnInit(): void {
    this.newNote = {};
  }
  onShowNoteModal() {
    this.showNoteModal = true;
    console.log(this.showNoteModal);
  }
  onCloseNoteModal() {
    this.showNoteModal = false;
  }
  onSignOut() {}
}
