import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

buscar(event:any) {
  console.log(event.detail.value)
  // consumir api de busqueda como se hace en tab1
}

  constructor() {}

}
