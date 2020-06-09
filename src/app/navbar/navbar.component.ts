import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  // styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() showNoteModalEvent = new EventEmitter();
  @Output() signOutUserEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onShowNoteModal($event) {
    $event.preventDefault();
    this.showNoteModalEvent.emit();
  }

  onSignOut() {
    this.signOutUserEvent.emit();
  }
}
