import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotesComponent } from './notes/notes.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NoteComponent } from './note/note.component';
import { NoteSnapshotComponent } from './note-snapshot/note-snapshot.component';
import { HttpClientModule } from '@angular/common/http';
import { ExtratTitlePipe } from './extrat-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NotesComponent,
    SpinnerComponent,
    NoteComponent,
    NoteSnapshotComponent,
    ExtratTitlePipe,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
