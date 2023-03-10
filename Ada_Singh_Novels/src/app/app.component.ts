import { Component } from '@angular/core';
import { NovelService } from './novel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ada_Singh_Novels';
  contentId: number = 5;
  topContent: any = {};

  defaultnovel: string = "https://images.pexels.com/photos/1005324/literature-book-open-pages-1005324.jpeg?cs=srgb&dl=antique-book-book-bindings-1005324.jpg&fm=jpg";



  constructor(private NovelService: NovelService){}

  logId(){
    console.log(`ID: ${this.topContent.id}`);
    console.log(`Title: ${this.topContent.title}`);


  }

  ngOnInit(){
    this.NovelService.getContentById(this.contentId).subscribe(content => this.topContent = content);
  }

  
  showNovalInfo(id: any, title: String) {
    console.log({ id, title });
  }

  
}
