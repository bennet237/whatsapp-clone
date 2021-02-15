import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  recentUpdates = [
    {
      "picture": "https://avatars0.githubusercontent.com/u/1?v=4",
      "name": "Joel",
      "phone_number": "+237 6 51 83 45 45",
      "time": "Yesterday, 21:10"
    },
    {
      "picture": "https://avatars0.githubusercontent.com/u/2?v=4",
      "name": "Fotie",
      "phone_number": "+237 6 61 83 45 46",
      "time": "Yesterday, 16:57"
    },
    {
      "picture": "https://avatars0.githubusercontent.com/u/3?v=4",
      "name": "Nolocz",
      "phone_number": "+237 6 70 12 82 32",
      "time": "Yesterday, 20:10"
    },
    {
      "picture": "https://avatars0.githubusercontent.com/u/4?v=4",
      "name": "Yarox",
      "phone_number": "+237 6 61 83 45 45",
      "time": "Today, 2:00"
    },
    {
      "picture": "https://avatars0.githubusercontent.com/u/5?v=4",
      "name": "Gao",
      "phone_number": "+237 6 91 83 45 45",
      "time": "Today, 23:00"
    },
    {
      "picture": "https://avatars0.githubusercontent.com/u/6?v=4",
      "name": "Ante",
      "phone_number": "+237 6 62 83 45 45",
      "time": "Today, 14:00"
    }
  ];

  viewedUpdates = [
    {
      "picture": "https://avatars0.githubusercontent.com/u/7?v=4",
      "name": "A.Z. Sam",
      "phone_number": "+237 6 71 83 45 45",
      "time": "Yesterday, 8:00"
    },
    {
      "picture": "https://avatars1.githubusercontent.com/u/17?v=4",
      "name": "Wilkinson",
      "phone_number": "+237 6 51 83 45 89",
      "time": "Yesterday, 13:00"
    },
    {
      "picture": "https://avatars0.githubusercontent.com/u/18?v=4",
      "name": "Bil B.",
      "phone_number": "+237 6 67 56 45 45",
      "time": "Today, 3:00"
    },
    {
      "picture": "https://avatars0.githubusercontent.com/u/19?v=4",
      "name": "Evina",
      "phone_number": "+237 6 64 83 45 36",
      "time": "Today, 00:00"
    }
  ];
}
