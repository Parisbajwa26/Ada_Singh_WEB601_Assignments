import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  myList: ContentList;
  constructor(){

    this.myList = new ContentList();
 

    this.myList.addItem({
      id: 0,
      title: "RiverDale",
      description: "A satirical masterpiece that never been out",
      author: "Micol Ostow",
      imgURL: "https://kbimages1-a.akamaihd.net/56ac0278-9017-4c81-88ab-361ec1a1f637/353/569/90/False/get-out-of-town-riverdale-novel-2.jpg",
      rating: 8
    });
    this.myList.addItem({
      id: 1,
      title: "The Shutter Island",
      description: "A story of a detective and an island of Psychic murders",
      author: "Dennis Lehane",
      imgURL: "https://m.media-amazon.com/images/I/51NXjr6l+GL._SY344_BO1,204,203,200_.jpg",
      rating: 8
    });
    this.myList.addItem({
      id: 2,
      title: "Guliver's Travel",
      description: "A story of a small village of liliputs, invaded by a gaint human.",
      author: "Jonathan Swift",
      imgURL: "https://th-thumbnailer.cdn-si-edu.com/0mIDEcvRG_zsK-GQ8xczdi6LgDI=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/3d/b9/3db9e3ec-1013-4341-8d8e-cf7c4aca0552/file-20171123-17988-1vwsyta.png",
      rating: 9
    });

  

    // myList.items = [];
  }


  ngOnInit(): void {
  }

}