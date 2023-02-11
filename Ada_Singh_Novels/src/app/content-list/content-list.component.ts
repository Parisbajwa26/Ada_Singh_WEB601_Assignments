import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public myFavNovels = [
    {
      id: 0,
      title: "RiverDale",
      description: "A satirical masterpiece that never been out",
      author: "Micol Ostow",
      imgURL: "https://kbimages1-a.akamaihd.net/56ac0278-9017-4c81-88ab-361ec1a1f637/353/569/90/False/get-out-of-town-riverdale-novel-2.jpg",
      rating: 8
    },
   {
      id: 1,
      title: "The Shutter Island",
      description: "A story of a detective and an island of Psychic murders",
      author: "Dennis Lehane",
      imgURL: "https://m.media-amazon.com/images/I/51NXjr6l+GL._SY344_BO1,204,203,200_.jpg",
      rating: 8
    },
   {
      id: 2,
      title: "Guliver's Travel",
      description: "A story of a small village of liliputs, invaded by a gaint human.",
      author: "Jonathan Swift",
      imgURL: "https://th-thumbnailer.cdn-si-edu.com/0mIDEcvRG_zsK-GQ8xczdi6LgDI=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/3d/b9/3db9e3ec-1013-4341-8d8e-cf7c4aca0552/file-20171123-17988-1vwsyta.png",
      rating: 9
    },
    {
      id: 3,
      title: 'Where the Wild Ladies Are',
      description:
        'In Where the Wild Ladies Are, Japanese author Aoko Matsuda guides readers through supernatural events and introduces them to otherworldly characters as if they were completely ordinary.',
      author: 'Aoko Matsuda',
      imgURL:
        'https://api.time.com/wp-content/uploads/2020/11/best-books-2020-Where-the-Wild-Ladies-Are.jpg?w=800&quality=85',
        ratings: 8
    },
    {
      id: 4,
      title: 'A Burning, Megha Majumdar',
      description:
        'After witnessing a terrorist attack, Jivan, a poor Muslim woman living in the slums of Kolkata, makes a comment on Facebook criticizing her government’s response to the tragic event. It’s an action with terrible consequences, as she’s taken into custody and accused of aiding the attackers.',
      imgURL:
        'https://api.time.com/wp-content/uploads/2020/11/best-books-2020-Burning.jpg?w=800&quality=85',
        ratings:10
     
    },
    {
      id: 5,
      title: 'Homeland Elegies, Ayad Akhtar',
      description:
        'Every so often we are gifted a novel that combines deep intelligence, meticulous prose and something profound to say about the state of our world.',
      imgURL:
        'https://d3i5mgdwi2ze58.cloudfront.net/phz3vc780qvnafu8phrzjyptq75a',
        ratings: 9
    },

   
  ];

  showNovalInfo(id: any, title: String) {
    console.log({ id, title });
  }
}