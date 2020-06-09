import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extratTitle',
})
export class ExtratTitlePipe implements PipeTransform {
  transform(note: { content: string; title?: string }, limit: any): string {
    limit = parseInt(limit);
    if (note.title) {
      if (note.title.length == 0) {
        return this.getTitleFromString(note.content, limit);
      } else {
        return this.getTitleFromString(note.title, limit);
      }
    } else {
      return this.getTitleFromString(note.content, limit);
    }
  }
  getTitleFromString(str: string, limit: number) {
    if (str.length > limit) {
      return str.slice(0, limit) + '...';
    } else {
      return str;
    }
  }
}
