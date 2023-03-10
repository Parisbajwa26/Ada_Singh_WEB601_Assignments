import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { myFavNovels } from './helper-files/contentDb';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class NovelService {

  constructor(private messageService: MessageService) { }

  getContent(): Observable<Content[]>{
    this.messageService.addMessage("Content array loaded!");
    return of(myFavNovels);
  }

  getContentById(id: number): Observable<any> {
    const content = myFavNovels.find(c => c.id === id);
    this.messageService.addMessage(`Content item at id: ${id}`);
    return of(content);
  }
}