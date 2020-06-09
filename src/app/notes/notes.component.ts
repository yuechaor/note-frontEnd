import { Component, OnInit } from '@angular/core';
import { NotesApiService } from '../services/notes-api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  // styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  isLoading: boolean;
  isListLoading: boolean;
  noNotesFound: boolean;
  alert: any;
  userNotes;
  constructor(private noteApiService: NotesApiService) {}

  ngOnInit(): void {
    this.isListLoading = false;
    this.isLoading = false;
    this.alert = {};
    this.refreshNotes();
  }

  refreshNotes() {
    this.isLoading = true;
    this.userNotes = [];
    this.noteApiService.getNotes().subscribe(
      (res) => {
        if (_.has(res, 'Items')) {
          this.userNotes = _.union(this.userNotes, res.Items);
          console.log(this.userNotes);

          if (this.userNotes.length == 0) {
            this.noNotesFound = true;
          } else {
            this.noNotesFound = false;
          }
        }
      },
      (err) => {
        if (err.error && err.error.message) {
          this.alert = {
            type: 'danger',
            message: err.error.message,
          };
        } else {
          this.alert = {
            type: 'danger',
            message: err.message,
          };
        }
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }
    );
  }
}
