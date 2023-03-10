import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { NovelService } from '../novel.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {
  public myFavNovels: Content[] = [];
  public inputValue: String = '';
  public Search: boolean | null = null;
  defaultnovel: string = "https://images.pexels.com/photos/1005324/literature-book-open-pages-1005324.jpeg?cs=srgb&dl=antique-book-book-bindings-1005324.jpg&fm=jpg";

  constructor(private novelService: NovelService) {

  }

  ngOnInit(): void {
    this.novelService.getContent().subscribe(novels => this.myFavNovels = novels);
  }

  SearchbyTitle(){
    this.Search = this.myFavNovels.some(novel => novel.title === this.inputValue);
  }


  

  showNovalInfo(id: any, title: String) {
    console.log({ id, title });
  }
}