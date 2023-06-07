import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {
    // https://api.themoviedb.org/3/discover/movie?
    //include_adult=false&
    //include_video=false
    //&language=en-US
    //&page=1
    //&sort_by=popularity.desc
  }

}
