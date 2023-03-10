import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  newNovel: any = {};
  @Output() onCreation = new EventEmitter<Content>();

  addNovel(){
    this.onCreation.emit(this.newNovel);
    this.newNovel = {};
  }

}
